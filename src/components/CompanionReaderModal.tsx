"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, ZoomOut, Download, FileText, ExternalLink } from "lucide-react";

interface CompanionReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  bookPageRange: string;
  pdfPageRange: string;
}

export const CompanionReaderModal: React.FC<CompanionReaderModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  bookPageRange,
  pdfPageRange,
}) => {
  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/50">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                原书高清伴读 · {title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                纸书页码：{bookPageRange} ｜ PDF对应：{pdfPageRange} ｜ 官方第三版扫描
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 dark:hover:text-white dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image viewport */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-100/70 dark:bg-slate-950 flex justify-center items-start">
          <div className="relative max-w-2xl w-full bg-white shadow-xl rounded-lg overflow-hidden border border-slate-200/80 dark:border-slate-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-auto object-contain block select-none"
            />
          </div>
        </div>

        {/* Footer info */}
        <div className="px-5 py-2.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/30 flex items-center justify-between text-xs text-slate-500">
          <span>提示：原书高清版面可用于核对排版、几何线段及题目原文。</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  );
};
