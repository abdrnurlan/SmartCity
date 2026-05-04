import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Almaty 2050",
  description:
    "A bright editorial-style concept site exploring how Almaty could evolve into a cleaner, smarter city by 2050.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(255,247,232,0.95),transparent_38%),radial-gradient(circle_at_top_right,rgba(235,205,159,0.18),transparent_24%)]" />
          <SiteHeader />
          <main className="relative flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
