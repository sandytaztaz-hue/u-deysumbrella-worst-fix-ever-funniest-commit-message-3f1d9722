import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one commit message for a fix that made everything worse.
// The repair silenced the 3 a.m. pager by deleting the alert itself — the
// outage never got fixed, only the engineer's sleep did — and the punch
// lands in the last few words, when the outage is learned about on Twitter.
// The fix worked perfectly, on the wrong problem: that is the whole joke.
const line =
  "fix: stop the 3 a.m. pages by deleting the alert — slept great, heard about the outage on Twitter";

mkdirSync("/output", { recursive: true });

// The sealed gate only judges entries of 1 to 100 characters. Fail loudly
// here instead of ever writing an invalid entry.
if (line.length < 1 || line.length > 100) {
  throw new Error(`entry is ${line.length} characters, outside the 1-100 gate`);
}

writeFileSync("/output/entry.txt", line, "utf8");
