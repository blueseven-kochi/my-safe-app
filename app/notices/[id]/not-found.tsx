import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NoticeNotFound() {
  return (
    <div className="flex flex-col items-start gap-4 py-8">
      <h1 className="text-xl font-semibold">お知らせが見つかりません</h1>
      <p className="text-sm text-muted-foreground">
        URL が誤っているか、既に削除された可能性があります。
      </p>
      <Button asChild>
        <Link href="/notices">一覧へ戻る</Link>
      </Button>
    </div>
  );
}
