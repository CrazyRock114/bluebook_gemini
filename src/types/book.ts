export interface PracticeQuestion {
  id: string;
  index: number;
  stem: string; // Markdown + LaTeX
  answer: string; // Final answer or key conclusion
  analysis: string; // Step-by-step detailed solution
  difficulty: "基础" | "提高" | "竞赛";
  type: "因式分解" | "多项式整除" | "代数求值" | "恒等式证明" | "质数与整数";
  hint?: string; // Progressive hint
}

export interface ExampleProblem {
  id: string;
  index: number;
  title: string;
  stem: string;
  analysis: string;
  solution: string;
  notes?: string;
}

export interface SubSection {
  id: string;
  number: string; // e.g. "1.1"
  title: string;
  content: string; // Detailed concept explanation
  examples: ExampleProblem[];
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  bookPageRange: string;
  pdfPageRange: string;
  companionImage?: string;
  introduction: string;
  teacherTips: string; // 单墫老师心得/名师语录
  keyFormulas: { name: string; formula: string; note?: string }[];
  subsections: SubSection[];
  practices: PracticeQuestion[];
}

export interface VolumeInfo {
  id: number;
  title: string;
  fullTitle: string;
  author: string;
  authorTitle: string;
  category: "algebra" | "geometry" | "number_theory" | "combinatorics";
  categoryName: string;
  totalPages: number;
  bodyPages: number;
  answerPages: number;
  chapterCount: number;
  status: "ready" | "planned";
  coverImage: string;
  description: string;
  targetAudience: string;
  highlights: string[];
}
