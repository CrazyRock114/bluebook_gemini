"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  FileText,
  Lightbulb,
  Maximize2,
  Minimize2,
} from "lucide-react";

interface CompanionReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  bookPageRange: string;
  pdfPageRange: string;
  volumeId?: number;
}

// 8 册每卷总页数与书末答案起始页元数据
const VOLUME_PAGES_META: Record<
  number,
  { totalPages: number; answerStart: number; name: string }
> = {
  1: { totalPages: 134, answerStart: 101, name: "卷1 因式分解技巧" },
  2: { totalPages: 181, answerStart: 147, name: "卷2 方程与方程组" },
  3: { totalPages: 133, answerStart: 105, name: "卷3 一次函数与二次函数" },
  4: { totalPages: 242, answerStart: 196, name: "卷4 三角形与四边形" },
  5: { totalPages: 150, answerStart: 109, name: "卷5 圆" },
  6: { totalPages: 131, answerStart: 99, name: "卷6 整除、同余与不定方程" },
  7: { totalPages: 106, answerStart: 84, name: "卷7 组合趣题" },
  8: { totalPages: 203, answerStart: 149, name: "卷8 初中竞赛解题方法与策略" },
};

export const CompanionReaderModal: React.FC<CompanionReaderModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  bookPageRange,
  pdfPageRange,
  volumeId = 1,
}) => {
  const meta = useMemo(() => {
    return VOLUME_PAGES_META[volumeId] || { totalPages: 134, answerStart: 101, name: `卷${volumeId}` };
  }, [volumeId]);

  // 解析当前章节的起始页与结束页
  const { chapterStartPage, chapterEndPage } = useMemo(() => {
    const match = pdfPageRange.match(/P?(\d+)\s*[-~到至]\s*P?(\d+)/i);
    if (match) {
      return {
        chapterStartPage: parseInt(match[1], 10),
        chapterEndPage: parseInt(match[2], 10),
      };
    }
    const single = pdfPageRange.match(/P?(\d+)/i);
    const p = single ? parseInt(single[1], 10) : 1;
    return { chapterStartPage: p, chapterEndPage: p };
  }, [pdfPageRange]);

  const [currentPage, setCurrentPage] = useState<number>(chapterStartPage);
  const [zoom, setZoom] = useState<number>(100);
  const [inputPage, setInputPage] = useState<string>(String(chapterStartPage));
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [imgLoadError, setImgLoadError] = useState<boolean>(false);

  // 当打开弹窗或章节切换时，重置当前页为本讲起始页
  useEffect(() => {
    if (isOpen) {
      setCurrentPage(chapterStartPage);
      setInputPage(String(chapterStartPage));
      setZoom(100);
      setImgLoadError(false);
    }
  }, [isOpen, chapterStartPage]);

  // 同步页码输入框
  useEffect(() => {
    setInputPage(String(currentPage));
    setImgLoadError(false);
  }, [currentPage]);

  // 快捷键支持
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      // 隔离输入框：当焦点在 input 元素内时，不拦截方向键
      if ((e.target as HTMLElement)?.tagName === "INPUT") return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        setCurrentPage((prev) => Math.max(1, prev - 1));
      } else if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        setCurrentPage((prev) => Math.min(meta.totalPages, prev + 1));
      } else if (e.key === "+" || e.key === "=") {
        setZoom((z) => Math.min(200, z + 20));
      } else if (e.key === "-") {
        setZoom((z) => Math.max(60, z - 20));
      } else if (e.key === "0") {
        setZoom(100);
      }
    },
    [isOpen, meta.totalPages, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  // 计算当前图片 URL
  const activeImageSrc = imgLoadError
    ? imageSrc
    : `/book_samples/v${volumeId}/pages/p_${currentPage}.webp`;

  const isCurrentInChapter =
    currentPage >= chapterStartPage && currentPage <= chapterEndPage;
  const isCurrentInAnswer = currentPage >= meta.answerStart;

  const handleJumpToInput = (e: React.FormEvent) => {
    e.preventDefault();
    const target = parseInt(inputPage, 10);
    if (!isNaN(target) && target >= 1 && target <= meta.totalPages) {
      setCurrentPage(target);
    } else {
      setInputPage(String(currentPage));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`relative flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-200 ${
          isFullscreen
            ? "w-[99vw] h-[98vh] max-w-none"
            : "w-full max-w-5xl h-[92vh]"
        }`}
      >
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/70">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  {meta.name}
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                  {title}
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                原书纸本：{bookPageRange} ｜ 本讲PDF：{pdfPageRange} ｜ 书末答案：P{meta.answerStart}-P{meta.totalPages}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? "退出全屏" : "全屏查看"}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 dark:hover:text-white dark:hover:bg-slate-800 transition-colors"
            >
              {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </button>
            <button
              onClick={onClose}
              title="关闭 (Esc)"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 dark:hover:text-white dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Toolbar: Navigation & Quick Jump */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-2.5 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-xs">
          {/* Quick jump pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setCurrentPage(chapterStartPage)}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border font-medium transition-colors ${
                currentPage === chapterStartPage
                  ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                  : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              本讲起始 P{chapterStartPage}
            </button>
            {chapterEndPage > chapterStartPage && (
              <button
                onClick={() => setCurrentPage(chapterEndPage)}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border font-medium transition-colors ${
                  currentPage === chapterEndPage
                    ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                    : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                本讲习题 P{chapterEndPage}
              </button>
            )}
            <button
              onClick={() => setCurrentPage(meta.answerStart)}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border font-medium transition-colors ${
                currentPage >= meta.answerStart
                  ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                  : "bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800"
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              书末答案 P{meta.answerStart}
            </button>
            {isCurrentInChapter && (
              <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[11px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-medium">
                当前在本讲学习范围内
              </span>
            )}
            {isCurrentInAnswer && (
              <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[11px] bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-medium">
                当前在书末参考解答区
              </span>
            )}
          </div>

          {/* Page controls & zoom */}
          <div className="flex items-center gap-2">
            {/* Prev / Next buttons */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage <= 1}
                title="上一页 (←)"
                className="p-1 rounded-md text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <form onSubmit={handleJumpToInput} className="flex items-center px-1.5 gap-1">
                <input
                  type="text"
                  value={inputPage}
                  onChange={(e) => setInputPage(e.target.value)}
                  className="w-10 text-center font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded py-0.5 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <span className="text-slate-400 dark:text-slate-500 font-medium select-none">
                  / {meta.totalPages}
                </span>
              </form>

              <button
                onClick={() => setCurrentPage((p) => Math.min(meta.totalPages, p + 1))}
                disabled={currentPage >= meta.totalPages}
                title="下一页 (→)"
                className="p-1 rounded-md text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setZoom((z) => Math.max(60, z - 20))}
                title="缩小 (-)"
                className="p-1 rounded text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 transition-colors"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setZoom(100)}
                title="重置缩放 (0)"
                className="px-1.5 py-0.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              >
                {zoom}%
              </button>
              <button
                onClick={() => setZoom((z) => Math.min(200, z + 20))}
                title="放大 (+)"
                className="p-1 rounded text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 transition-colors"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Image viewport */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-100/80 dark:bg-slate-950 flex justify-center items-start">
          <div
            style={{ width: `${zoom}%`, maxWidth: zoom <= 100 ? "46rem" : "none" }}
            className="relative bg-white shadow-2xl rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-150"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeImageSrc}
              alt={`${title} - 第${currentPage}页`}
              onError={() => {
                if (!imgLoadError) setImgLoadError(true);
              }}
              className="w-full h-auto object-contain block select-none pointer-events-none"
            />
          </div>
        </div>

        {/* Footer info & keyboard hint */}
        <div className="px-5 py-2 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/40 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span>
              快捷键：<kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-800 rounded font-mono text-[10px]">←</kbd> 上一页 / <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-800 rounded font-mono text-[10px]">→</kbd> 下一页 / <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-800 rounded font-mono text-[10px]">Esc</kbd> 退出
            </span>
            <span className="hidden md:inline-block text-slate-400">
              · 1,280页全书高清原稿已切片入库
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
              className="px-2.5 py-1 rounded bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors disabled:opacity-40"
            >
              上一页
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(meta.totalPages, p + 1))}
              disabled={currentPage >= meta.totalPages}
              className="px-2.5 py-1 rounded bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors disabled:opacity-40"
            >
              下一页
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              完成伴读
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
