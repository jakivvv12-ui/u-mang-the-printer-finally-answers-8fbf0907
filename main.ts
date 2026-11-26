import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const line =
  "You ignore me for weeks, then demand 40 pages in a panic and call me broken when I ask for paper — I'm a printer, not your emergency plan.";
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
