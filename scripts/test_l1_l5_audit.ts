import { ALL_VOLUMES } from "../src/data/allBooks";
import { getVolumeChapters } from "../src/data/volumes";
import katex from "katex";
import fs from "fs";
import path from "path";

console.log("================================================================================");
console.log("  [L0-L5] 全站数据 Schema、唯一性、KaTeX 公式与静态资产穷举审计");
console.log("================================================================================");

const ROOT_DIR = path.resolve(__dirname, "..");

let totalChapters = 0;
let totalSubsections = 0;
let totalExamples = 0;
let totalPractices = 0;
let totalFormulas = 0;
let katexPassCount = 0;
let katexFailures: { loc: string; formula: string; err: string }[] = [];

const allIds = new Set<string>();
const duplicateIds: { id: string; loc: string }[] = [];
const missingFields: { loc: string; field: string }[] = [];
const missingAssets: { loc: string; asset: string }[] = [];

// 1. 递归提取与测试 KaTeX 公式
function testLatexInString(text: string, location: string) {
  if (!text) return;

  // 1) 提取 $$...$$ display math
  const displayRegex = /\$\$([\s\S]+?)\$\$/g;
  let match: RegExpExecArray | null;
  while ((match = displayRegex.exec(text)) !== null) {
    const formula = match[1].trim();
    if (!formula) continue;
    totalFormulas++;
    try {
      katex.renderToString(formula, { displayMode: true, throwOnError: true });
      katexPassCount++;
    } catch (e: unknown) {
      const err = e instanceof Error ? e.message : String(e);
      katexFailures.push({ loc: location, formula, err });
    }
  }

  // 移除已经匹配的 $$...$$，避免干扰 inline 正则
  const textWithoutDisplay = text.replace(displayRegex, "");

  // 2) 提取 $...$ inline math
  const inlineRegex = /(?<!\\)\$([^\$\n]+?)(?<!\\)\$/g;
  while ((match = inlineRegex.exec(textWithoutDisplay)) !== null) {
    const formula = match[1].trim();
    if (!formula) continue;
    totalFormulas++;
    try {
      katex.renderToString(formula, { displayMode: false, throwOnError: true });
      katexPassCount++;
    } catch (e: unknown) {
      const err = e instanceof Error ? e.message : String(e);
      katexFailures.push({ loc: location, formula, err });
    }
  }
}

// 2. 遍历 ALL_VOLUMES
for (const vol of ALL_VOLUMES) {
  const vLoc = `Volume ${vol.id}`;
  // 检查封面
  const coverPath = path.join(ROOT_DIR, "public", vol.coverImage.replace(/^\//, ""));
  if (!fs.existsSync(coverPath)) {
    console.error(`[L5 资产缺失] 封面不存在: ${vol.coverImage}`);
    missingAssets.push({ loc: vLoc, asset: vol.coverImage });
  }

  const chapters = getVolumeChapters(vol.id);
  if (chapters.length !== vol.chapterCount) {
    console.warn(`[L1 章节数脱节] ${vLoc}: allBooks.chapterCount=${vol.chapterCount} vs 实际导出的 chapters.length=${chapters.length}`);
  }

  for (const ch of chapters) {
    totalChapters++;
    const chLoc = `${vLoc} -> Ch${ch.number} (${ch.title})`;

    // ID 唯一性
    const fullChId = `v${vol.id}_${ch.id}`;
    if (allIds.has(fullChId)) {
      duplicateIds.push({ id: fullChId, loc: chLoc });
    }
    allIds.add(fullChId);

    // 必填字段
    if (!ch.title) missingFields.push({ loc: chLoc, field: "title" });
    if (!ch.introduction) missingFields.push({ loc: chLoc, field: "introduction" });
    if (!ch.teacherTips) missingFields.push({ loc: chLoc, field: "teacherTips" });
    if (!ch.bookPageRange) missingFields.push({ loc: chLoc, field: "bookPageRange" });
    if (!ch.pdfPageRange) missingFields.push({ loc: chLoc, field: "pdfPageRange" });
    if (!ch.companionImage) missingFields.push({ loc: chLoc, field: "companionImage" });
    else {
      const compPath = path.join(ROOT_DIR, "public", ch.companionImage.replace(/^\//, ""));
      if (!fs.existsSync(compPath)) {
        console.error(`[L5 资产缺失] 伴读切图不存在: ${ch.companionImage} (${chLoc})`);
        missingAssets.push({ loc: chLoc, asset: ch.companionImage });
      }
    }

    // 公式审计
    testLatexInString(ch.introduction, `${chLoc} -> introduction`);
    testLatexInString(ch.teacherTips, `${chLoc} -> teacherTips`);

    for (const kf of ch.keyFormulas || []) {
      totalFormulas++;
      try {
        katex.renderToString(kf.formula, { displayMode: true, throwOnError: true });
        katexPassCount++;
      } catch (e: unknown) {
        const err = e instanceof Error ? e.message : String(e);
        katexFailures.push({ loc: `${chLoc} -> keyFormula(${kf.name})`, formula: kf.formula, err });
      }
    }

    // 小节与例题
    for (const sub of ch.subsections || []) {
      totalSubsections++;
      const subLoc = `${chLoc} -> Sub${sub.number} (${sub.title})`;
      testLatexInString(sub.content, `${subLoc} -> content`);

      for (const ex of sub.examples || []) {
        totalExamples++;
        const exLoc = `${subLoc} -> Example[${ex.index}] (${ex.title})`;
        if (allIds.has(ex.id)) duplicateIds.push({ id: ex.id, loc: exLoc });
        allIds.add(ex.id);

        testLatexInString(ex.stem, `${exLoc} -> stem`);
        testLatexInString(ex.analysis, `${exLoc} -> analysis`);
        testLatexInString(ex.solution, `${exLoc} -> solution`);
        if (ex.notes) testLatexInString(ex.notes, `${exLoc} -> notes`);
      }
    }

    // 练习题
    for (const pr of ch.practices || []) {
      totalPractices++;
      const prLoc = `${chLoc} -> Practice[${pr.index}] (${pr.id})`;
      if (allIds.has(pr.id)) duplicateIds.push({ id: pr.id, loc: prLoc });
      allIds.add(pr.id);

      testLatexInString(pr.stem, `${prLoc} -> stem`);
      testLatexInString(pr.answer, `${prLoc} -> answer`);
      testLatexInString(pr.analysis, `${prLoc} -> analysis`);
      if (pr.hint) testLatexInString(pr.hint, `${prLoc} -> hint`);
    }
  }
}

console.log("\n--- [L1 结构层与 Schema 审计结果] ---");
console.log(`总章节数: ${totalChapters}`);
console.log(`总小节数: ${totalSubsections}`);
console.log(`总例题数: ${totalExamples}`);
console.log(`总练习题数: ${totalPractices}`);
console.log(`全站注册独立 ID 总数: ${allIds.size}`);
console.log(`重复 ID 数: ${duplicateIds.length}`);
if (duplicateIds.length > 0) {
  console.log("重复 ID 清单:", duplicateIds);
}
console.log(`必填字段缺失数: ${missingFields.length}`);
if (missingFields.length > 0) {
  console.log("缺失字段清单:", missingFields);
}
console.log(`静态资产缺失数: ${missingAssets.length}`);
if (missingAssets.length > 0) {
  console.log("缺失资产清单:", missingAssets);
}

console.log("\n--- [L3 领域数学 KaTeX 语法穷举验证] ---");
console.log(`全站扫描数学公式总数: ${totalFormulas}`);
const katexRate = totalFormulas > 0 ? ((katexPassCount / totalFormulas) * 100).toFixed(2) : "0.00";
console.log(`KaTeX 成功渲染公式数: ${katexPassCount} (${katexRate}%)`);
console.log(`KaTeX 语法错误公式数: ${katexFailures.length}`);

if (katexFailures.length > 0) {
  console.log("\n⚠️ 捕获的 KaTeX 渲染语法缺陷清单 (Top 10):");
  katexFailures.slice(0, 10).forEach((f, i) => {
    console.log(`[${i + 1}] 位置: ${f.loc}`);
    console.log(`    公式: ${f.formula}`);
    console.log(`    错误: ${f.err}`);
  });
}

if (duplicateIds.length > 0 || missingFields.length > 0 || missingAssets.length > 0 || katexFailures.length > 0) {
  process.exitCode = 1;
}
