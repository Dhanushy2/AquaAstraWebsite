import type { Viewport } from "next";
import { getContent } from "@/lib/content-i18n";
import { rootMetadata } from "@/lib/metadata";
import "../globals.css";

export const metadata = rootMetadata("en");

export const viewport: Viewport = {
  themeColor: "#00695C",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-teal-ink focus:shadow-lg"
        >
          {getContent("en").ui.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
