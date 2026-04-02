export type AnnouncementCategory = "maintenance" | "release" | "general";

export type Announcement = {
  id: string;
  title: string;
  summary: string;
  body: string;
  publishedAt: string;
  category: AnnouncementCategory;
};

export const announcements: Announcement[] = [
  {
    id: "notice-2026-001",
    title: "メンテナンスのお知らせ（4月5日）",
    summary: "システムメンテナンスに伴う一時的なサービス停止についてご案内します。",
    body: `2026年4月5日（土）2:00〜6:00の間、サーバー移行のためサービスを一時停止いたします。

停止時間中はお知らせの閲覧を含め、すべての機能がご利用いただけません。作業完了後、改めてお知らせいたします。

ご不便をおかけしますが、ご理解とご協力のほどよろしくお願いいたします。`,
    publishedAt: "2026-04-01T09:00:00.000Z",
    category: "maintenance",
  },
  {
    id: "notice-2026-002",
    title: "通知一覧・詳細表示をリリースしました",
    summary: "お知らせの一覧と詳細ページを公開しました。今後も機能を拡張していきます。",
    body: `このたび、お知らせの一覧ページと詳細ページの土台を公開しました。

現在はローカルのモックデータで表示しています。今後、管理画面やデータベース連携など、段階的に機能を追加する予定です。

ご意見・ご要望があればお気軽にお問い合わせください。`,
    publishedAt: "2026-04-02T10:30:00.000Z",
    category: "release",
  },
  {
    id: "notice-2026-003",
    title: "ゴールデンウィーク中のサポート対応について",
    summary: "休業期間中の問い合わせ対応スケジュールをお知らせします。",
    body: `2026年4月29日（水）〜5月5日（火）の間は、サポート窓口を縮小運用いたします。

緊急の障害報告は専用フォームより24時間受け付けておりますが、平日営業時間外は返信が遅れる場合があります。

通常対応は5月6日（水）より再開いたします。`,
    publishedAt: "2026-04-02T14:00:00.000Z",
    category: "general",
  },
];

export function getAnnouncementById(id: string): Announcement | undefined {
  return announcements.find((a) => a.id === id);
}

export function getAnnouncementsSorted(): Announcement[] {
  return [...announcements].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
