import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("PWA manifest describes an installable offline app", async () => {
  const manifest = JSON.parse(await readFile(new URL("../public/manifest.webmanifest", import.meta.url), "utf8"));
  assert.equal(manifest.start_url, "/");
  assert.equal(manifest.scope, "/");
  assert.equal(manifest.display, "standalone");
  assert.deepEqual(manifest.icons.map(({ sizes }) => sizes), ["any"]);
});

test("service worker caches only the app shell and static assets", async () => {
  const worker = await readFile(new URL("../public/sw.js", import.meta.url), "utf8");
  assert.match(worker, /primarycare-record-check-v0\.2\.0/);
  assert.match(worker, /request\.mode === "navigate"/);
  assert.match(worker, /html\.matchAll/);
  assert.match(worker, /url\.pathname\.startsWith\("\/api\/"\)/);
  assert.match(worker, /\["style", "script", "image", "font"\]/);
  assert.doesNotMatch(worker, /localStorage|indexedDB/);
});
