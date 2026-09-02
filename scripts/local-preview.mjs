import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { Readable } from "node:stream";
import worker from "../dist/server/index.js";

const clientRoot = resolve("dist/client");
const requestedPort = process.argv.indexOf("--port");
const port = requestedPort >= 0 ? Number(process.argv[requestedPort + 1]) : 3002;
const host = "127.0.0.1";

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

async function serveAsset(request) {
  const pathname = decodeURIComponent(new URL(request.url).pathname);
  const target = resolve(clientRoot, `.${pathname}`);
  if (target !== clientRoot && !target.startsWith(`${clientRoot}${sep}`)) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const info = await stat(target);
    if (!info.isFile()) return new Response("Not found", { status: 404 });

    const type = contentTypes[extname(target).toLowerCase()] ?? "application/octet-stream";
    const range = request.headers.get("range");
    if (range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(range);
      if (match) {
        const start = match[1] ? Number(match[1]) : 0;
        const end = match[2] ? Math.min(Number(match[2]), info.size - 1) : info.size - 1;
        const file = await readFile(target);
        const slice = file.subarray(start, end + 1);
        return new Response(slice, {
          status: 206,
          headers: {
            "accept-ranges": "bytes",
            "content-length": String(slice.length),
            "content-range": `bytes ${start}-${end}/${info.size}`,
            "content-type": type,
          },
        });
      }
    }

    return new Response(await readFile(target), {
      headers: {
        "accept-ranges": "bytes",
        "content-length": String(info.size),
        "content-type": type,
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}

const server = createServer(async (incoming, outgoing) => {
  try {
    const headers = new Headers();
    for (const [name, value] of Object.entries(incoming.headers)) {
      if (value !== undefined) headers.set(name, Array.isArray(value) ? value.join(", ") : value);
    }

    const method = incoming.method ?? "GET";
    const request = new Request(`http://${host}:${port}${incoming.url ?? "/"}`, {
      method,
      headers,
      body: method === "GET" || method === "HEAD" ? undefined : Readable.toWeb(incoming),
      duplex: method === "GET" || method === "HEAD" ? undefined : "half",
    });
    const response = await worker.fetch(
      request,
      { ASSETS: { fetch: serveAsset } },
      { waitUntil() {}, passThroughOnException() {} },
    );

    outgoing.statusCode = response.status;
    for (const [name, value] of response.headers) outgoing.setHeader(name, value);
    if (!response.body || method === "HEAD") return outgoing.end();
    Readable.fromWeb(response.body).pipe(outgoing);
  } catch (error) {
    console.error(error);
    outgoing.statusCode = 500;
    outgoing.end("Local preview error");
  }
});

server.listen(port, host, () => {
  console.log(`QMS preview running at http://${host}:${port}`);
});
