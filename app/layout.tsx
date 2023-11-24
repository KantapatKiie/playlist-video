import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music Playlist",
  description: "Listen to music..",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
