import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "小蓝本初中奥数教学网 · 数学奥林匹克小丛书（第三版）",
  description: "华东师范大学出版社《数学奥林匹克小丛书》初中卷1-8册数字化教学平台。单墫、葛军、沈文选、柯新立、冯志刚、周建新领衔编写，覆盖全套88大讲座知识体系，提供精读讲义、LaTeX公式渲染、母题精讲与交互式习题闯关。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
