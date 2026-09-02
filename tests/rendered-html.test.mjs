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
  assert.match(html, /Turn clicks into customers\./);
  assert.match(html, /id="services"/);
  assert.match(html, /id="approach"/);
  assert.match(html, /id="contact"/);
  assert.match(html, /hero-marketing-process\.mp4/);
  assert.match(html, /hero-marketing-process-poster\.jpg/);
  assert.match(html, /Digital Marketing/);
  assert.match(html, /Social Media Marketing/);
  assert.match(html, /Search Engine Optimization/);
  assert.match(html, /Paid Media Advertising/);
  assert.doesNotMatch(html, /Pause background video|motion-control/);
  assert.match(html, /type="application\/ld\+json"/);
  assert.doesNotMatch(html, /hero-growth\.mp4|hero-poster\.webp/);
});

test("keeps the production assets and responsive design in place", async () => {
  const [page, hero, layout, css, videoInfo, posterInfo, socialInfo] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/sections/hero/HeroSection.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    stat(new URL("../public/hero-marketing-process.mp4", import.meta.url)),
    stat(new URL("../public/hero-marketing-process-poster.jpg", import.meta.url)),
    stat(new URL("../public/og.png", import.meta.url)),
  ]);

  await access(new URL("../public/favicon.png", import.meta.url));
  await access(new URL("../public/fonts/nunito-sans-latin.woff2", import.meta.url));
  await access(new URL("../public/fonts/poppins-regular.woff2", import.meta.url));
  assert.ok(videoInfo.size > 5_000_000 && videoInfo.size < 15_000_000);
  assert.ok(posterInfo.size > 20_000);
  assert.ok(socialInfo.size > 100_000);

  assert.match(hero, /prefers-reduced-motion: reduce/);
  assert.match(page, /ProfessionalService/);
  assert.match(layout, /Quality Marketing Solutions \| Digital Growth Agency/);
  assert.match(layout, /\/og\.png/);
  assert.match(css, /--canvas:\s*#f4faf6/);
  assert.match(css, /--ink:\s*#062d21/);
  assert.match(css, /--olive:\s*#baf05a/);
  assert.match(css, /font-family:\s*"Nunito Sans"/);
  assert.match(css, /font-family:\s*"Poppins"/);
  assert.match(css, /\.site-shell\s*\{[^}]*width:\s*100%/s);
  assert.match(css, /\.intro-panel\s*\{[^}]*background:\s*var\(--paper\)/s);
  assert.match(css, /@media \(max-width: 720px\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
});
