import type { Metadata } from "next";
import Link from "next/link";

import { Bell } from "lucide-react";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "お知らせ | Announcements",
    template: "%s | お知らせ",
  },
  description: "お知らせ一覧・詳細（モックデータ版）",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen">
        <header className="border-b bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60">
          <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
            <Link href="/notices" className="flex items-center gap-2 font-semibold text-foreground">
              <Bell className="size-5" aria-hidden />
              お知らせ
            </Link>
            <nav className="text-sm text-muted-foreground">
              <Link href="/notices" className="hover:text-foreground">
                一覧
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">{children}</main>
      </body>
    </html>
  );
}
