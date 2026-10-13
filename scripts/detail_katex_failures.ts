import { ALL_VOLUMES } from "../src/data/allBooks";
import { getVolumeChapters } from "../src/data/volumes";
import katex from "katex";

for (const vol of ALL_VOLUMES) {
  const chapters = getVolumeChapters(vol.id);
  for (const ch of chapters) {
    const check = (str: string, loc: string) => {
      if (!str) return;
      const re = /(?<!\\)\$([^\$\n]+?)(?<!\\)\$/g;
      let m;
      while ((m = re.exec(str)) !== null) {
        try {
          katex.renderToString(m[1].trim(), { throwOnError: true });
        } catch(e: any) {
          console.log(`[Vol ${vol.id} Ch ${ch.number}] ${loc}:`);
          console.log(`  Raw formula: "${m[1].trim()}"`);
          console.log(`  Error: ${e.message}`);
        }
      }
    };
    check(ch.introduction, 'intro');
    check(ch.teacherTips, 'tips');
    for (const kf of ch.keyFormulas || []) {
      try { katex.renderToString(kf.formula, { throwOnError: true }); } catch (e: any) {
        console.log(`[Vol ${vol.id} Ch ${ch.number}] keyFormula: "${kf.formula}": ${e.message}`);
      }
    }
    for (const sub of ch.subsections || []) {
      check(sub.content, 'sub');
      for (const ex of sub.examples || []) {
        check(ex.stem, 'ex.stem'); check(ex.analysis, 'ex.analysis'); check(ex.solution, 'ex.solution'); check(ex.notes || '', 'ex.notes');
      }
    }
    for (const pr of ch.practices || []) {
      check(pr.stem, 'pr.stem'); check(pr.answer, 'pr.answer'); check(pr.analysis, 'pr.analysis'); check(pr.hint || '', 'pr.hint');
    }
  }
}
