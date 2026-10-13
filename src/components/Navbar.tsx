"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ALL_VOLUMES } from "@/data/allBooks";
import { BookOpen, Sparkles, BookCheck, Menu, X, ChevronDown, Layers } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [volumesDropdownOpen, setVolumesDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                小蓝本
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">
                初中卷·第三版
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">数学奥林匹克小丛书教学站</p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link
            href="/"
            className="px-3 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            全套书架
          </Link>

          {/* Volumes Dropdown */}
          <div className="relative">
            <button
              onClick={() => setVolumesDropdownOpen(!volumesDropdownOpen)}
              onMouseEnter={() => setVolumesDropdownOpen(true)}
              className="px-3 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors flex items-center gap-1"
            >
              <Layers className="w-4 h-4 text-blue-500" />
              <span>全套8卷直达</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {volumesDropdownOpen && (
              <div
                onMouseLeave={() => setVolumesDropdownOpen(false)}
                className="absolute left-0 mt-1 w-64 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-2 z-50 animate-in fade-in duration-150"
              >
                <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
                  选择分册研读
                </div>
                {ALL_VOLUMES.map((vol) => (
                  <Link
                    key={vol.id}
                    href={`/volume/${vol.id}`}
                    onClick={() => setVolumesDropdownOpen(false)}
                    className="flex items-center justify-between px-3 py-2 text-xs hover:bg-blue-50 dark:hover:bg-blue-950/60 hover:text-blue-600 transition-colors"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="w-4 h-4 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold flex items-center justify-center text-slate-500">
                        {vol.id}
                      </span>
                      <span className="truncate font-medium">{vol.title}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 flex-shrink-0">
                      {vol.author}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <span className="text-slate-300 dark:text-slate-700 px-1">|</span>
          <div className="flex items-center gap-2 text-xs text-slate-400 px-2">
            <span>单墫 · 葛军 · 沈文选 · 柯新立 · 冯志刚 · 周建新</span>
          </div>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/volume/1"
            className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-600/30 transition-all hover:shadow-md"
          >
            <BookCheck className="w-4 h-4" />
            开始学习 (卷1)
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-2 pb-4 space-y-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
          >
            全套书架 (1-8卷总览)
          </Link>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <div className="text-xs font-bold text-slate-400 px-3 py-1">全套 8 卷直达</div>
            <div className="grid grid-cols-2 gap-1 mt-1">
              {ALL_VOLUMES.map((v) => (
                <Link
                  key={v.id}
                  href={`/volume/${v.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5"
                >
                  <span className="w-4 h-4 rounded bg-blue-100 dark:bg-blue-900/60 text-[10px] font-bold flex items-center justify-center text-blue-700 dark:text-blue-300">
                    {v.id}
                  </span>
                  <span className="truncate">{v.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
