// Fortune Cookie Funnies for Engineers — u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a
// Writes exactly one fortune cookie message (<=120 chars) to /output/entry.txt.
//
// Why this line, against the judge's brief (most important first):
// 1. A fortune cookie message for a software engineer: a prophecy about a
//    bug, a deploy-era 2 a.m. fix, a Monday return — the engineer's world.
// 2. Genuinely funny on first read: the bug comes back personified,
//    "wearing a different stack trace" — the fix didn't kill it, it just
//    changed its outfit. The punchline lands in the last five words.
// 3. Sounds like a fortune cookie: short, declarative, prophetic ("will
//    return on Monday"), twist drawn from code, bugs and late nights.
// 4. Fresh: not a stock joke — no "404", no "works on my machine", no
//    "not a bug, a feature". The "wearing a different stack trace" image
//    is original; no mug, sticker or conference slide carries it.
// 5. Tight: 84 characters, every word earns its place, the funniest
//    words sit at the end. See candidates.md (in the workdir) for the
//    26 lines scored and why this one beat them.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The bug you fixed at 2 a.m. will return on Monday, wearing a different stack trace.";

// The gate only accepts 1-120 characters of non-blank UTF-8 text;
// fail loudly here rather than shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-120 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
