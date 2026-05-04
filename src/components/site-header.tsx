import Link from "next/link";
import { navItems } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Link href="/" className="flex items-end gap-3">
          <span className="display-title text-4xl leading-none text-foreground">
            Almaty
          </span>
          <span className="pb-1 text-sm font-semibold uppercase tracking-[0.32em] text-accent-strong">
            2050
          </span>
        </Link>

        <nav className="flex flex-wrap gap-2 text-sm font-semibold text-muted">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-transparent px-4 py-2 transition-colors duration-200 hover:border-line hover:bg-white/70 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}