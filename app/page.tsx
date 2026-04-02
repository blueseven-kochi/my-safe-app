import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        ローカルのモックデータで動作するお知らせの土台です。一覧と詳細から開始できます。
      </p>
      <Button asChild>
        <Link href="/notices">お知らせ一覧へ</Link>
      </Button>
    </div>
  );
}
