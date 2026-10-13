import { Chapter } from "@/types/book";
import { VOL1_CHAPTERS } from "./vol1";
import { VOL2_CHAPTERS } from "./vol2";
import { VOL3_CHAPTERS } from "./vol3";
import { VOL4_CHAPTERS } from "./vol4";
import { VOL5_CHAPTERS } from "./vol5";
import { VOL6_CHAPTERS } from "./vol6";
import { VOL7_CHAPTERS } from "./vol7";
import { VOL8_CHAPTERS } from "./vol8";

export const VOLUMES_MAP: Record<number, Chapter[]> = {
  1: VOL1_CHAPTERS,
  2: VOL2_CHAPTERS,
  3: VOL3_CHAPTERS,
  4: VOL4_CHAPTERS,
  5: VOL5_CHAPTERS,
  6: VOL6_CHAPTERS,
  7: VOL7_CHAPTERS,
  8: VOL8_CHAPTERS,
};

export function getVolumeChapters(volumeId: number): Chapter[] {
  return VOLUMES_MAP[volumeId] || VOL1_CHAPTERS;
}

export function getTotalQuestionsCount(): number {
  return Object.values(VOLUMES_MAP).reduce((sum, chapters) => {
    return sum + chapters.reduce((cSum, ch) => cSum + ch.practices.length, 0);
  }, 0);
}
