"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ALL_VOLUMES } from "@/data/allBooks";
import { Navbar } from "@/components/Navbar";
import {
  BookOpen,
  Sparkles,
  ArrowRight,
  Award,
  Library,
  ChevronRight,
  Layers,
  GraduationCap,
  Calculator,
  Compass,
  Hash,
  Shapes,
} from "lucide-react";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "全部 8 卷", icon: Layers },
    { key: "algebra", label: "代数板块 (卷1-3)", icon: Calculator },
    { key: "geometry", label: "几何板块 (卷4-5)", icon: Compass },
    { key: "number_theory", label: "初等数论 (卷6)", icon: Hash },
    { key: "combinatorics", label: "组合与综合 (卷7-8)", icon: Shapes },
  ];

  const filteredBooks =
    selectedCategory === "all"
      ? ALL_VOLUMES
      : ALL_VOLUMES.filter((b) => b.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-blue-50/60 via-white to-slate-50 dark:from-slate-900/60 dark:via-slate-950 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-semibold tracking-wide border border-blue-200/60 dark:border-blue-800/60 shadow-xs">
              <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              华东师范大学出版社 · 官方第三版数字化教学平台
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              奥数圣经 <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">“小蓝本”</span> 初中卷全套教学系统
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              中国数学奥林匹克国家队领队、国际金牌教练单墫、葛军、沈文选、柯新立、冯志刚、周建新泰斗阵容执笔。
              全套 8 册、1,280 页经典奥数思维现已全部完成数字化，支持{" "}
              <strong className="text-slate-900 dark:text-white font-medium">LaTeX 矢量公式</strong>、
              <strong className="text-slate-900 dark:text-white font-medium">分步独立解题模式</strong> 与{" "}
              <strong className="text-slate-900 dark:text-white font-medium">原书高清伴读</strong>。
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/volume/1"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40 transition-all hover:-translate-y-0.5"
              >
                <Sparkles className="w-5 h-5 text-blue-200" />
                立即开始学习 (卷1 因式分解)
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#bookshelf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 font-semibold border border-slate-300 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-xs transition-colors"
              >
                <Library className="w-4 h-4 text-slate-500" />
                浏览全套 8 卷书架
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 max-w-2xl mx-auto">
              <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 backdrop-blur-xs">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">8 卷全收录</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">代数·几何·数论·组合</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 backdrop-blur-xs">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">1,280 页</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">原版高清数字化</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 backdrop-blur-xs">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">92 个讲座</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">核心奥数知识专题</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 backdrop-blur-xs">
                <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">100% 对照</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">例习题与原版答案</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars of Olympiad Math */}
      <section className="py-12 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              初中奥数四大经典知识板块
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              由浅入深、环环相扣，构筑坚不可摧的数学拔高逻辑
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/30 dark:bg-blue-950/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <Calculator className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                代数板块 (卷1-3)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                单墫、葛军、李惟峰亲授。包含因式分解变形技巧、一元与多元方程组、判别式与韦达定理、一次与二次函数最值和数形结合。
              </p>
              <div className="flex gap-1.5 pt-1">
                <Link
                  href="/volume/1"
                  className="text-xs font-semibold text-blue-600 hover:underline"
                >
                  卷1
                </Link>
                <span>·</span>
                <Link
                  href="/volume/2"
                  className="text-xs font-semibold text-blue-600 hover:underline"
                >
                  卷2
                </Link>
                <span>·</span>
                <Link
                  href="/volume/3"
                  className="text-xs font-semibold text-blue-600 hover:underline"
                >
                  卷3
                </Link>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-indigo-100 dark:border-indigo-900/40 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                几何板块 (卷4-5)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                沈文选、柯新立编著。覆盖三角形与四边形、面积法、全等相似、四心与欧拉线、四点共圆判定、圆幂定理与托勒密定理。
              </p>
              <div className="flex gap-1.5 pt-1">
                <Link
                  href="/volume/4"
                  className="text-xs font-semibold text-indigo-600 hover:underline"
                >
                  卷4 (242页大部头)
                </Link>
                <span>·</span>
                <Link
                  href="/volume/5"
                  className="text-xs font-semibold text-indigo-600 hover:underline"
                >
                  卷5
                </Link>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 bg-emerald-50/30 dark:bg-emerald-950/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                <Hash className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                初等数论 (卷6)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                国家队领队冯志刚撰写。整除性质、带余除法、算术基本定理、高斯同余算术、费马小定理初阶、不定方程与高斯取整函数。
              </p>
              <div className="flex gap-1.5 pt-1">
                <Link
                  href="/volume/6"
                  className="text-xs font-semibold text-emerald-600 hover:underline"
                >
                  卷6 整除与同余
                </Link>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-amber-100 dark:border-amber-900/40 bg-amber-50/30 dark:bg-amber-950/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-xs">
                <Shapes className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                组合与综合 (卷7-8)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                周建新、冯志刚领衔。枚举计数、容斥原理、抽屉原理、棋盘染色与不变量、博弈对称策略，以及四大篇章集大成解题元策略。
              </p>
              <div className="flex gap-1.5 pt-1">
                <Link
                  href="/volume/7"
                  className="text-xs font-semibold text-amber-600 hover:underline"
                >
                  卷7
                </Link>
                <span>·</span>
                <Link
                  href="/volume/8"
                  className="text-xs font-semibold text-amber-600 hover:underline"
                >
                  卷8 (大收官)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bookshelf Section */}
      <section id="bookshelf" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-1">
              <Library className="w-4 h-4" />
              <span>初中数学竞赛经典文库</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              全套 8 册小蓝本数字化书架
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              全套 8 卷已全部就绪，点击任意分册即可进入沉浸式学习工作台
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-200/60 dark:bg-slate-800 rounded-xl">
            {categories.map((c) => {
              const Icon = c.icon;
              const isSelected = selectedCategory === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setSelectedCategory(c.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => {
            return (
              <div
                key={book.id}
                className="flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-700 transition-all duration-200 group"
              >
                {/* Book Header / Thumbnail */}
                <div className="relative p-6 bg-gradient-to-b from-slate-100/80 to-transparent dark:from-slate-800/40 flex justify-center items-center">
                  <div className="w-36 h-52 rounded-lg overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 bg-white flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-900/80 text-white backdrop-blur-xs">
                      第 {book.id} 卷
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-500 text-white shadow-xs">
                      已上线
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
                      <span>{book.categoryName}</span>
                      <span>•</span>
                      <span>共 {book.totalPages} 页</span>
                      <span>•</span>
                      <span>{book.chapterCount} 个讲座</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
                      著者：{book.author}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {book.description}
                    </p>

                    {/* Highlights tags */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {book.highlights.slice(0, 2).map((h, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-400"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <Link
                      href={`/volume/${book.id}`}
                      className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm shadow-blue-600/30 transition-colors"
                    >
                      进入卷 {book.id} 学习工作台
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-10 bg-white dark:bg-slate-950 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              小蓝本初中奥数教学网
            </span>
            <span>· 华东师范大学出版社《数学奥林匹克小丛书》第三版全套 1~8 册数字化教学项目</span>
          </div>
          <div>适配 Vercel 极速部署 · 全套 8 册 SSG 纯静态生成 · 零服务端冷启动</div>
        </div>
      </footer>
    </div>
  );
}
