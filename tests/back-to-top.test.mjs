import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("mobile back-to-top control is scroll-aware and accessible", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(page, /window\.scrollY > 480/);
  assert.match(page, /aria-label="返回页面顶部"/);
  assert.match(page, /topRef\.current\?\.focus\(\{ preventScroll: true \}\)/);
  assert.match(page, /prefers-reduced-motion: reduce/);
  assert.match(css, /\.backToTop:focus-visible/);
});
