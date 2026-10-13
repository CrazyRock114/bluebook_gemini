import { ALL_VOLUMES } from "../src/data/allBooks";
import { getVolumeChapters } from "../src/data/volumes";

console.log("=== Auditing all 88 Chapters Page Ranges ===");
let totalChecked = 0;
let invalidRanges = 0;

for (const vol of ALL_VOLUMES) {
  const chapters = getVolumeChapters(vol.id);
  for (const ch of chapters) {
    totalChecked++;
    const range = ch.pdfPageRange;
    const match = range.match(/P?(\d+)\s*[-~到至]\s*P?(\d+)/i);
    if (!match) {
      console.warn(`[Invalid Range Format] Vol ${vol.id} Ch ${ch.number}: "${range}"`);
      invalidRanges++;
    } else {
      const start = parseInt(match[1], 10);
      const end = parseInt(match[2], 10);
      if (start > end) {
        console.error(`[Inverted Range] Vol ${vol.id} Ch ${ch.number}: start(${start}) > end(${end}) in "${range}"`);
        invalidRanges++;
      }
      if (end > vol.totalPages) {
        console.error(`[Out of Bounds Range] Vol ${vol.id} Ch ${ch.number}: end(${end}) > totalPages(${vol.totalPages}) in "${range}"`);
        invalidRanges++;
      }
    }
  }
}

console.log(`Total checked chapters: ${totalChecked}`);
console.log(`Invalid or out-of-bounds page ranges: ${invalidRanges}`);

if (invalidRanges > 0) {
  process.exitCode = 1;
}
