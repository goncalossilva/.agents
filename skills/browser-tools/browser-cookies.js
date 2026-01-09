#!/usr/bin/env node

import puppeteer from "puppeteer-core";

const args = process.argv.slice(2);
const format = args.includes("--format=netscape") ? "netscape" : "human";

const b = await Promise.race([
  puppeteer.connect({
    browserURL: "http://localhost:9222",
    defaultViewport: null,
  }),
  new Promise((_, reject) => {
    setTimeout(() => reject(new Error("timeout")), 5000).unref();
  }),
]).catch((e) => {
  console.error("✗ Could not connect to browser:", e.message);
  console.error("  Run: browser-start.js");
  process.exit(1);
});

const p = (await b.pages()).at(-1);

if (!p) {
  console.error("✗ No active tab found");
  process.exit(1);
}

const cookies = await p.cookies();

if (format === "netscape") {
  for (const cookie of cookies) {
    const includeSubdomains = cookie.domain.startsWith(".") ? "TRUE" : "FALSE";
    const secure = cookie.secure ? "TRUE" : "FALSE";
    const expiry = cookie.expires ? Math.floor(cookie.expires) : "0";
    console.log(`${cookie.domain}\t${includeSubdomains}\t${cookie.path}\t${secure}\t${expiry}\t${cookie.name}\t${cookie.value}`);
  }
} else {
  for (const cookie of cookies) {
    console.log(`${cookie.name}: ${cookie.value}`);
    console.log(`  domain: ${cookie.domain}`);
    console.log(`  path: ${cookie.path}`);
    console.log(`  httpOnly: ${cookie.httpOnly}`);
    console.log(`  secure: ${cookie.secure}`);
    console.log("");
  }
}

await b.disconnect();
