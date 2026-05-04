import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/60 bg-[#f2e8d9]/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-muted sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="font-semibold text-foreground">Almaty 2050</p>
          <p className="mt-1 max-w-xl leading-7">
            A concept website about a cleaner, smarter, and more livable future for the city.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 font-semibold text-accent-strong">
          <Link href="/media">Media</Link>
          <Link href="/sources-prompts">Sources and Prompts</Link>
        </div>
      </div>
    </footer>
  );
}