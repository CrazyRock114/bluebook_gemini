import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_VOLUMES } from "@/data/allBooks";
import { VolumeStudyWorkspace } from "@/components/VolumeStudyWorkspace";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return [1, 2, 3, 4, 5, 6, 7, 8].map((id) => ({
    id: String(id),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const numId = parseInt(id, 10);
  const book = ALL_VOLUMES.find((b) => b.id === numId);

  if (!book) {
    return {
      title: "分卷未找到 · 小蓝本初中奥数教学网",
    };
  }

  return {
    title: `第${book.id}卷《${book.title}》(${book.author}著) · 小蓝本奥数教学网`,
    description: `《数学奥林匹克小丛书·初中卷${book.id}：${book.title}》官方数字化精读工作台。包含${book.chapterCount}大核心专题、详细讲义、公式定理、例题解析与交互式习题闯关。`,
  };
}

export default async function VolumePage({ params }: PageProps) {
  const { id } = await params;
  const numId = parseInt(id, 10);

  if (isNaN(numId) || numId < 1 || numId > 8) {
    notFound();
  }

  return <VolumeStudyWorkspace volumeId={numId} />;
}
