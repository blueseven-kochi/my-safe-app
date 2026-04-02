import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ChevronLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { announcementCategoryLabel, formatPublishedAt } from "@/lib/announcement-display";
import { getAnnouncementById } from "@/lib/data/announcements";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = getAnnouncementById(id);
  if (!item) return { title: "見つかりません" };
  return { title: item.title, description: item.summary };
}

export default async function NoticeDetailPage({ params }: Props) {
  const { id } = await params;
  const item = getAnnouncementById(id);

  if (!item) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Button variant="ghost" size="sm" className="-ml-2 gap-1 text-muted-foreground" asChild>
        <Link href="/notices">
          <ChevronLeft className="size-4" />
          一覧に戻る
        </Link>
      </Button>

      <article>
        <Card>
          <CardHeader className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={item.category}>{announcementCategoryLabel(item.category)}</Badge>
              <time dateTime={item.publishedAt} className="text-sm text-muted-foreground">
                {formatPublishedAt(item.publishedAt)}
              </time>
            </div>
            <h1 className="text-2xl font-semibold leading-tight tracking-tight">{item.title}</h1>
          </CardHeader>
          <CardContent>
            <div className="max-w-none text-sm leading-relaxed text-foreground whitespace-pre-wrap">
              {item.body}
            </div>
          </CardContent>
        </Card>
      </article>
    </div>
  );
}
