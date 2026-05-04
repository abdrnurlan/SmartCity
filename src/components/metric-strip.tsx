import type { Metric } from "@/lib/site-content";

type MetricStripProps = {
  items: Metric[];
};

export function MetricStrip({ items }: MetricStripProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-[1.3rem] border border-line/70 bg-white/80 px-5 py-4"
        >
          <p className="text-lg font-semibold tracking-tight text-foreground">
            {item.value}
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}