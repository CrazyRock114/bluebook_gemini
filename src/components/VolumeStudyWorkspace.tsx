"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ALL_VOLUMES } from "@/data/allBooks";
import { getVolumeChapters } from "@/data/volumes";
import { MathRenderer } from "@/components/MathRenderer";
import { CompanionReaderModal } from "@/components/CompanionReaderModal";
import { Navbar } from "@/components/Navbar";
import {
  BookOpen,
  ChevronRight,
  Sparkles,
  FileText,
  Lightbulb,
  CheckCircle,
  Check,
  Eye,
  EyeOff,
  Menu,
  X,
  GraduationCap,
  ArrowLeft,
  ArrowRight,
  Layers,
  ChevronDown,
} from "lucide-react";

interface VolumeStudyWorkspaceProps {
  volumeId: number;
}

export const VolumeStudyWorkspace: React.FC<VolumeStudyWorkspaceProps> = ({ volumeId }) => {
  const router = useRouter();
  const bookInfo = ALL_VOLUMES.find((b) => b.id === volumeId) || ALL_VOLUMES[0];
  const chapters = getVolumeChapters(volumeId);

  const [activeChapterId, setActiveChapterId] = useState<string>(
    chapters[0]?.id || "ch1"
  );
  const [activeTab, setActiveTab] = useState<"theory" | "practice" | "cheatsheet">("theory");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [companionModalOpen, setCompanionModalOpen] = useState(false);

  // States for interactive exercises
  const [expandedSolutions, setExpandedSolutions] = useState<Record<string, boolean>>({});
  const [completedQuestions, setCompletedQuestions] = useState<Record<string, boolean>>({});

  // Reset active chapter when volume changes
  useEffect(() => {
    if (chapters.length > 0) {
      setActiveChapterId(chapters[0].id);
    }
  }, [volumeId]);

  // Active chapter object
  const currentChapter =
    chapters.find((c) => c.id === activeChapterId) || chapters[0] || ({} as any);

  // Load completed questions from localStorage
  const storageKey = `bluebook_completed_v${volumeId}`;
  useEffect(() => {
    try {
      const saved =
        localStorage.getItem(storageKey) ||
        localStorage.getItem(`v${volumeId}_completed_questions`);
      if (saved) {
        setCompletedQuestions(JSON.parse(saved));
      } else {
        setCompletedQuestions({});
      }
    } catch (e) {
      // ignore
    }
  }, [volumeId, storageKey]);

  const toggleSolution = (qId: string) => {
    setExpandedSolutions((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const toggleComplete = (qId: string) => {
    setCompletedQuestions((prev) => {
      const next = { ...prev, [qId]: !prev[qId] };
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch (e) {
        // ignore
      }
      return next;
    });
  };

  // Switch to next or previous chapter
  const currentIndex = chapters.findIndex((c) => c.id === currentChapter?.id);
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  // Calculate completion percentage
  const allPracticeIds = chapters.flatMap((c) => c.practices?.map((p) => p.id) || []);
  const completedCount = Object.values(completedQuestions).filter(Boolean).length;
  const progressPercent = Math.round(
    (completedCount / Math.max(allPracticeIds.length, 1)) * 100
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />

      {/* Main Container */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto px-2 sm:px-4 lg:px-6 py-4 sm:py-6 gap-6 relative">
        {/* Mobile Sidebar Backdrop */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-slate-950/60 z-30 lg:hidden backdrop-blur-xs"
          />
        )}

        {/* Left Sidebar: Chapter Knowledge Tree */}
        <aside
          className={`fixed lg:sticky top-20 left-0 z-30 lg:z-10 w-72 h-[calc(100vh-6rem)] flex-shrink-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden flex flex-col transition-transform duration-300 lg:translate-x-0 ${
            sidebarOpen ? "translate-x-2" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          {/* Sidebar Header & Volume Selector */}
          <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                  {bookInfo.id}
                </div>
                <div>
                  <h2 className="font-bold text-sm text-slate-900 dark:text-white truncate max-w-[150px]">
                    {bookInfo.title}
                  </h2>
                  <p className="text-[11px] text-slate-500">{bookInfo.author} 编著</p>
                </div>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Volume Switcher dropdown */}
            <div className="relative">
              <select
                value={volumeId}
                onChange={(e) => router.push(`/volume/${e.target.value}`)}
                className="w-full text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                {ALL_VOLUMES.map((b) => (
                  <option key={b.id} value={b.id}>
                    卷{b.id}：{b.title} ({b.author})
                  </option>
                ))}
              </select>
            </div>

            {/* Progress indicator */}
            <div className="mt-3 pt-3 border-t border-slate-200/60 dark:border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span>刷题通关进度</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {completedCount} / {allPracticeIds.length} ({progressPercent}%)
                </span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Chapters List */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {chapters.map((ch) => {
              const isActive = ch.id === currentChapter?.id;
              const chDone =
                ch.practices &&
                ch.practices.length > 0 &&
                ch.practices.every((p) => completedQuestions[p.id]);

              return (
                <button
                  key={ch.id}
                  onClick={() => {
                    setActiveChapterId(ch.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between group ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm shadow-blue-600/30 font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span
                      className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] flex-shrink-0 ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-slate-200"
                      }`}
                    >
                      {ch.number}
                    </span>
                    <span className="truncate">{ch.title}</span>
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {chDone && (
                      <CheckCircle
                        className={`w-3.5 h-3.5 ${
                          isActive ? "text-emerald-300" : "text-emerald-500"
                        }`}
                      />
                    )}
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "text-slate-400 dark:text-slate-500"
                      }`}
                    >
                      {ch.practices?.length || 0}题
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="flex-1 min-w-0 flex flex-col space-y-6">
          {/* Chapter Top Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-medium"
                  >
                    <Menu className="w-3.5 h-3.5" /> 目录
                  </button>
                  <span>
                    第 {bookInfo.id} 卷 · 专题第 {currentChapter?.number} 讲
                  </span>
                  <span>•</span>
                  <span>原书页码：{currentChapter?.bookPageRange}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {currentChapter?.number}. {currentChapter?.title}
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  {currentChapter?.subtitle}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2 flex-shrink-0">
                {currentChapter?.companionImage && (
                  <button
                    onClick={() => setCompanionModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors shadow-xs"
                  >
                    <FileText className="w-4 h-4 text-blue-500" />
                    原书高清伴读
                  </button>
                )}
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 overflow-x-auto">
              <button
                onClick={() => setActiveTab("theory")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === "theory"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                讲义精读与经典例题
              </button>

              <button
                onClick={() => setActiveTab("practice")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === "practice"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                课后习题闯关 ({currentChapter?.practices?.length || 0}题)
              </button>

              <button
                onClick={() => setActiveTab("cheatsheet")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === "cheatsheet"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <Lightbulb className="w-4 h-4" />
                核心公式与要诀
              </button>
            </div>
          </div>

          {/* TAB 1: Theory & Lecture */}
          {activeTab === "theory" && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Introduction Box */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                  本讲导学与知识引入
                </h3>
                <MathRenderer
                  content={currentChapter?.introduction || ""}
                  className="text-slate-700 dark:text-slate-300 text-sm"
                />

                {/* Teacher Tips Callout */}
                {currentChapter?.teacherTips && (
                  <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-300">
                      <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      名师（{bookInfo.author}）解题点拨与心得：
                    </div>
                    <MathRenderer
                      content={currentChapter.teacherTips}
                      className="text-xs text-amber-900/90 dark:text-amber-200/90 leading-relaxed"
                    />
                  </div>
                )}
              </div>

              {/* Subsections & Examples */}
              {currentChapter?.subsections?.map((sub: any) => (
                <div
                  key={sub.id}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5"
                >
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {sub.number} {sub.title}
                    </h3>
                  </div>

                  <MathRenderer
                    content={sub.content}
                    className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                  />

                  {/* Examples */}
                  <div className="space-y-4 pt-2">
                    <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      【经典例题剖析】
                    </h4>
                    {sub.examples?.map((ex: any) => (
                      <div
                        key={ex.id}
                        className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/50 p-5 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                            例 {ex.index} · {ex.title}
                          </span>
                        </div>

                        {/* Stem */}
                        <div className="font-medium text-slate-900 dark:text-white text-sm">
                          <MathRenderer content={ex.stem} />
                        </div>

                        {/* Analysis */}
                        <div className="p-3 rounded-lg bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-xs text-slate-600 dark:text-slate-300">
                          <span className="font-semibold text-blue-700 dark:text-blue-300">
                            【思路分析】
                          </span>{" "}
                          <MathRenderer content={ex.analysis} />
                        </div>

                        {/* Solution */}
                        <div className="pt-2 text-sm text-slate-800 dark:text-slate-200 space-y-1">
                          <div className="font-semibold text-xs text-slate-500">【解题步骤】</div>
                          <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                            <MathRenderer content={ex.solution} />
                          </div>
                        </div>

                        {/* Notes */}
                        {ex.notes && (
                          <div className="text-xs text-slate-500 italic flex items-center gap-1.5 pt-1">
                            <Lightbulb className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                            <span>{ex.notes}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: Practices & Exercises */}
          {activeTab === "practice" && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 flex items-center justify-between text-xs text-blue-900 dark:text-blue-200">
                <div>
                  <strong>课后习题实战模式：</strong> 建议先拿出草稿纸独立推导，思考完成后再点击“查看答案与步骤”核验。
                </div>
              </div>

              {!currentChapter?.practices || currentChapter.practices.length === 0 ? (
                <div className="p-12 text-center text-slate-400 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                  本讲暂无独立习题，请继续学习下一讲。
                </div>
              ) : (
                currentChapter.practices.map((practice: any) => {
                  const isDone = !!completedQuestions[practice.id];
                  const isOpen = !!expandedSolutions[practice.id];

                  return (
                    <div
                      key={practice.id}
                      className={`p-5 rounded-2xl bg-white dark:bg-slate-900 border transition-all ${
                        isDone
                          ? "border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/10"
                          : "border-slate-200 dark:border-slate-800 shadow-xs"
                      }`}
                    >
                      {/* Question Header */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                              practice.index % 2 === 1
                                ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                                : "border border-slate-400 text-slate-700 dark:text-slate-200"
                            }`}
                          >
                            {practice.index}
                          </span>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                            {practice.type}
                          </span>
                          <span
                            className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                              practice.difficulty === "基础"
                                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300"
                                : practice.difficulty === "提高"
                                ? "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300"
                                : "bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300"
                            }`}
                          >
                            {practice.difficulty}
                          </span>
                        </div>

                        {/* Completion Toggle */}
                        <button
                          onClick={() => toggleComplete(practice.id)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                            isDone
                              ? "bg-emerald-500 text-white shadow-xs"
                              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                          {isDone ? "已攻克" : "标记为已完成"}
                        </button>
                      </div>

                      {/* Question Stem */}
                      <div className="text-sm sm:text-base font-medium text-slate-900 dark:text-white leading-relaxed my-2">
                        <MathRenderer content={practice.stem} />
                      </div>

                      {/* Solution Trigger */}
                      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <button
                          onClick={() => toggleSolution(practice.id)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
                        >
                          {isOpen ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          {isOpen ? "收起答案与解析" : "查看参考答案及详细推演"}
                        </button>
                        <span className="text-[11px] text-slate-400">
                          对应纸书末尾《习题解答与提示》
                        </span>
                      </div>

                      {/* Solution Drawer */}
                      {isOpen && (
                        <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-3 animate-in fade-in duration-150">
                          <div>
                            <span className="text-xs font-bold text-slate-500">【最终答案】</span>
                            <div className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-300">
                              <MathRenderer content={practice.answer} />
                            </div>
                          </div>

                          <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800">
                            <span className="text-xs font-bold text-slate-500">
                              【名师详细推导演练】
                            </span>
                            <div className="mt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                              <MathRenderer content={practice.analysis} />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* TAB 3: Formula Cheatsheet */}
          {activeTab === "cheatsheet" && (
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 animate-in fade-in duration-150">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  本讲核心公式与变形法则速查卡
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  牢记经典奥数定理模型，提升解题直觉：
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentChapter?.keyFormulas?.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/40 dark:bg-blue-950/20 space-y-2"
                  >
                    <div className="text-xs font-bold text-blue-700 dark:text-blue-300">
                      {item.name}
                    </div>
                    <div className="text-sm font-mono text-slate-900 dark:text-white py-1">
                      <MathRenderer content={item.formula} block />
                    </div>
                    {item.note && (
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        注：{item.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Pagination */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800">
            {prevChapter ? (
              <button
                onClick={() => {
                  setActiveChapterId(prevChapter.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                上一讲：{prevChapter.number}. {prevChapter.title}
              </button>
            ) : (
              <div />
            )}

            {nextChapter && (
              <button
                onClick={() => {
                  setActiveChapterId(nextChapter.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 shadow-sm shadow-blue-600/30 transition-colors"
              >
                下一讲：{nextChapter.number}. {nextChapter.title}
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </main>
      </div>

      {/* Companion Reader Modal */}
      {currentChapter?.companionImage && (
        <CompanionReaderModal
          isOpen={companionModalOpen}
          onClose={() => setCompanionModalOpen(false)}
          imageSrc={currentChapter.companionImage}
          title={`${currentChapter.number}. ${currentChapter.title}`}
          bookPageRange={currentChapter.bookPageRange}
          pdfPageRange={currentChapter.pdfPageRange}
          volumeId={volumeId}
        />
      )}
    </div>
  );
};
