import { ALL_VOLUMES } from "../src/data/allBooks";
import { getVolumeChapters } from "../src/data/volumes";
import katex from "katex";
import fs from "fs";
import path from "path";

export interface KatexFailureRecord {
  volumeId: number;
  chapterNumber: number;
  chapterTitle: string;
  field: string;
  formula: string;
  error: string;
}

const failures: KatexFailureRecord[] = [];

for (const vol of ALL_VOLUMES) {
  const chapters = getVolumeChapters(vol.id);
  for (const ch of chapters) {
    const check = (str: string, field: string) => {
      if (!str) return;

      // 1) display math $$...$$ (may span multiple lines)
      const displayRe = /\$\$([\s\S]+?)\$\$/g;
      let dm: RegExpExecArray | null;
      while ((dm = displayRe.exec(str)) !== null) {
        const raw = dm[1].trim();
        if (!raw) continue;
        try {
          katex.renderToString(raw, { throwOnError: true, displayMode: true });
        } catch (e: unknown) {
          const errMsg = e instanceof Error ? e.message : String(e);
          failures.push({
            volumeId: vol.id,
            chapterNumber: ch.number,
            chapterTitle: ch.title,
            field,
            formula: raw,
            error: errMsg,
          });
        }
      }

      // Strip display blocks to prevent inline regex boundary collisions
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
          failures.push({
            volumeId: vol.id,
            chapterNumber: ch.number,
            chapterTitle: ch.title,
            field,
            formula: raw,
            error: errMsg,
          });
        }
      }
    };

    check(ch.introduction, "introduction");
    check(ch.teacherTips, "teacherTips");
    for (const kf of ch.keyFormulas || []) {
      try {
        katex.renderToString(kf.formula, { throwOnError: true, displayMode: true });
      } catch (e: unknown) {
        const errMsg = e instanceof Error ? e.message : String(e);
        failures.push({
          volumeId: vol.id,
          chapterNumber: ch.number,
          chapterTitle: ch.title,
          field: `keyFormula(${kf.name})`,
          formula: kf.formula,
          error: errMsg,
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

const outputPath = path.resolve(__dirname, "katex_errors.json");
try {
  fs.writeFileSync(outputPath, JSON.stringify(failures, null, 2), "utf-8");
  console.log(`Successfully dumped ${failures.length} KaTeX errors to ${outputPath}`);
} catch (e: unknown) {
  const errMsg = e instanceof Error ? e.message : String(e);
  console.error(`Failed to write KaTeX errors file to ${outputPath}: ${errMsg}`);
}
