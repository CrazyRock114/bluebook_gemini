import { ALL_VOLUMES } from "../src/data/allBooks";
import { getVolumeChapters } from "../src/data/volumes";
import katex from "katex";
import fs from "fs";

const failures: any[] = [];

for (const vol of ALL_VOLUMES) {
  const chapters = getVolumeChapters(vol.id);
  for (const ch of chapters) {
    const check = (str: string, field: string) => {
      if (!str) return;
      const re = /(?<!\\)\$([^\$\n]+?)(?<!\\)\$/g;
      let m;
      while ((m = re.exec(str)) !== null) {
        const raw = m[1].trim();
        try {
          katex.renderToString(raw, { throwOnError: true });
        } catch (e: any) {
          failures.push({
            volumeId: vol.id,
            chapterNumber: ch.number,
            chapterTitle: ch.title,
            field,
            formula: raw,
            error: e.message
          });
        }
      }
    };

    check(ch.introduction, "introduction");
    check(ch.teacherTips, "teacherTips");
    for (const kf of ch.keyFormulas || []) {
      try {
        katex.renderToString(kf.formula, { throwOnError: true });
      } catch (e: any) {
        failures.push({
          volumeId: vol.id,
          chapterNumber: ch.number,
          chapterTitle: ch.title,
          field: `keyFormula(${kf.name})`,
          formula: kf.formula,
          error: e.message
        });
      }
    }
    for (const sub of ch.subsections || []) {
      check(sub.content, `sub[${sub.number}].content`);
      for (const ex of sub.examples || []) {
        check(ex.stem, `ex[${ex.index}].stem`);
        check(ex.analysis, `ex[${ex.index}].analysis`);
        check(ex.solution, `ex[${ex.index}].solution`);
        if (ex.notes) check(ex.notes, `ex[${ex.index}].notes`);
      }
    }
    for (const pr of ch.practices || []) {
      check(pr.stem, `pr[${pr.index}].stem`);
      check(pr.answer, `pr[${pr.index}].answer`);
      check(pr.analysis, `pr[${pr.index}].analysis`);
      if (pr.hint) check(pr.hint, `pr[${pr.index}].hint`);
    }
  }
}

fs.writeFileSync("scripts/katex_errors.json", JSON.stringify(failures, null, 2));
console.log(`Successfully dumped ${failures.length} KaTeX errors to scripts/katex_errors.json`);
