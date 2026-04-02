import type { AnnouncementCategory } from "@/lib/data/announcements";

const categoryLabels: Record<AnnouncementCategory, string> = {
  maintenance: "メンテナンス",
  release: "リリース",
  general: "一般",
};

export function announcementCategoryLabel(category: AnnouncementCategory): string {
  return categoryLabels[category];
}

export function formatPublishedAt(iso: string): string {
  return new Intl.DateTimeFormat("ja-JP", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(iso));
}
