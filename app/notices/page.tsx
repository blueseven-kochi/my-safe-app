import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Megaphone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { announcementCategoryLabel, formatPublishedAt } from "@/lib/announcement-display";
import { getAnnouncementsSorted } from "@/lib/data/announcements";

export const metadata: Metadata = {
  title: "一覧",
};

export default function NoticesListPage() {
  const items = getAnnouncementsSorted();

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
            <Megaphone className="size-5 text-muted-foreground" aria-hidden />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">お知らせ一覧</h1>
            <p className="text-sm text-muted-foreground">
              全 {items.length} 件 · データはローカルのモックです
            </p>
          </div>
        </div>
      </div>

      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/notices/${item.id}`} className="block group">
              <Card className="transition-colors hover:bg-accent/30">
                <CardHeader className="pb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant={item.category}>{announcementCategoryLabel(item.category)}</Badge>
                    <time dateTime={item.publishedAt} className="text-xs text-muted-foreground">
                      {formatPublishedAt(item.publishedAt)}
                    </time>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary">{item.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{item.summary}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    詳細を見る
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
