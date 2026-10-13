import { ALL_VOLUMES } from "../src/data/allBooks";
import { getVolumeChapters } from "../src/data/volumes";
import katex from "katex";

for (const vol of ALL_VOLUMES) {
  const chapters = getVolumeChapters(vol.id);
  for (const ch of chapters) {
    const check = (str: string, loc: string) => {
      if (!str) return;

      // 1) display math $$...$$
      const displayRe = /\$\$([\s\S]+?)\$\$/g;
      let dm: RegExpExecArray | null;
      while ((dm = displayRe.exec(str)) !== null) {
        const raw = dm[1].trim();
        if (!raw) continue;
        try {
          katex.renderToString(raw, { throwOnError: true, displayMode: true });
        } catch (e: unknown) {
          const errMsg = e instanceof Error ? e.message : String(e);
          console.log(`[Vol ${vol.id} Ch ${ch.number}] $$ ${loc}:`);
          console.log(`  Raw formula: "${raw}"`);
          console.log(`  Error: ${errMsg}`);
        }
      }

      const strWithoutDisplay = str.replace(displayRe, "");

      // 2) inline math $...$
      const re = /(?<!\\)\$([^\$\n]+?)(?<!\\)\$/g;
      let m: RegExpExecArray | null;
      while ((m = re.exec(strWithoutDisplay)) !== null) {
        const raw = m[1].trim();
        if (!raw) continue;
        try {
          katex.renderToString(raw, { throwOnError: true, displayMode: false });
        } catch (e: unknown) {
          const errMsg = e instanceof Error ? e.message : String(e);
          console.log(`[Vol ${vol.id} Ch ${ch.number}] $ ${loc}:`);
          console.log(`  Raw formula: "${raw}"`);
          console.log(`  Error: ${errMsg}`);
        }
      }
    };

    check(ch.introduction, "intro");
    check(ch.teacherTips, "tips");
    for (const kf of ch.keyFormulas || []) {
      try {
        katex.renderToString(kf.formula, { throwOnError: true, displayMode: true });
      } catch (e: unknown) {
        const errMsg = e instanceof Error ? e.message : String(e);
        console.log(`[Vol ${vol.id} Ch ${ch.number}] keyFormula "${kf.name}": "${kf.formula}": ${errMsg}`);
      }
    }
    for (const sub of ch.subsections || []) {
      check(sub.content, "sub");
      for (const ex of sub.examples || []) {
        check(ex.stem, "ex.stem");
        check(ex.analysis, "ex.analysis");
        check(ex.solution, "ex.solution");
        if (ex.notes) check(ex.notes, "ex.notes");
      }
    }
    for (const pr of ch.practices || []) {
      check(pr.stem, "pr.stem");
      check(pr.answer, "pr.answer");
      check(pr.analysis, "pr.analysis");
      if (pr.hint) check(pr.hint, "pr.hint");
    }
  }
}
