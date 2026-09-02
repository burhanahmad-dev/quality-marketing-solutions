import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the QMS marketing website", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Quality Marketing Solutions/i);
  assert.match(html, /Digital marketing/);
  assert.match(html, /built to perform\./);
  assert.match(html, /id="services"/);
  assert.match(html, /id="approach"/);
  assert.match(html, /id="contact"/);
  assert.match(html, /marketing-insights\.mp4/);
  assert.match(html, /marketing-insights-poster\.webp/);
  assert.match(html, /type="application\/ld\+json"/);
  assert.doesNotMatch(html, /hero-growth\.mp4|hero-poster\.webp/);
});

test("keeps the production assets and responsive design in place", async () => {
  const [page, layout, css, videoInfo, posterInfo, socialInfo] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    stat(new URL("../public/marketing-insights.mp4", import.meta.url)),
    stat(new URL("../public/marketing-insights-poster.webp", import.meta.url)),
    stat(new URL("../public/og.png", import.meta.url)),
  ]);

  await access(new URL("../public/favicon.png", import.meta.url));
  assert.ok(videoInfo.size > 500_000 && videoInfo.size < 2_000_000);
  assert.ok(posterInfo.size > 20_000);
  assert.ok(socialInfo.size > 100_000);

  assert.match(page, /prefers-reduced-motion: reduce/);
  assert.match(page, /aria-label=\{motionPaused/);
  assert.match(page, /ProfessionalService/);
  assert.match(layout, /Quality Marketing Solutions \| Digital Growth Agency/);
  assert.match(layout, /\/og\.png/);
  assert.match(css, /--canvas:\s*#e8e4dc/);
  assert.match(css, /--olive:\s*#c7d092/);
  assert.match(css, /@media \(max-width: 720px\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
});
