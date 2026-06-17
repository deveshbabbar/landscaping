"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { PORTFOLIO } from "@/lib/site-data";
import type { Project } from "@/lib/site-data";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/cn";

const ratio: Record<Project["shape"], string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[3/2]",
  square: "aspect-square",
};

/** Tabbed, filterable project gallery. Honors a #category deep link. */
export function PortfolioGallery() {
  const [active, setActive] = useState<string>("all");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (PORTFOLIO.some((c) => c.key === hash)) setActive(hash);
  }, []);

  const tabs = [
    { key: "all", label: "All Projects" },
    ...PORTFOLIO.map((c) => ({ key: c.key, label: c.label })),
  ];

  const categories =
    active === "all" ? PORTFOLIO : PORTFOLIO.filter((c) => c.key === active);

  const items = categories.flatMap((c) =>
    c.projects.map((p) => ({ ...p, category: c.label })),
  );

  const blurb =
    active === "all"
      ? "A cross-section of recent Stoneward design-build projects across DFW."
      : PORTFOLIO.find((c) => c.key === active)?.blurb;

  return (
    <div>
      <div
        className="flex flex-wrap items-center justify-center gap-3"
        role="tablist"
        aria-label="Project categories"
      >
        {tabs.map((t) => {
          const selected = active === t.key;
          return (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => {
                setActive(t.key);
                if (typeof history !== "undefined") {
                  history.replaceState(
                    null,
                    "",
                    t.key === "all" ? " " : `#${t.key}`,
                  );
                }
              }}
              className={cn(
                "rounded-full border px-5 py-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.1em] transition-colors",
                selected
                  ? "border-olive bg-olive text-mist"
                  : "border-ink/20 text-stone hover:border-olive hover:text-ink",
              )}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {blurb && (
        <p className="lead mx-auto mt-7 max-w-2xl text-center">{blurb}</p>
      )}

      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((p, i) => (
          <figure
            key={`${p.src}-${i}`}
            className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-ink/10"
          >
            <div className="relative">
              <SmartImage
                src={p.src}
                alt={p.alt}
                zoom
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={cn("w-full", ratio[p.shape])}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-olive/80 via-olive/0 to-olive/0 opacity-90"
                aria-hidden="true"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-leaf">
                  {p.category}
                </p>
                <p className="mt-1 font-display text-lg font-bold text-mist">
                  {p.title}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-[0.72rem] text-mist/80">
                  <MapPin size={12} /> {p.location}
                </p>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
