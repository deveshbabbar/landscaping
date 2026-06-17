"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { Faq } from "@/lib/site-data";
import { cn } from "@/lib/cn";

/** Accessible accordion. One panel open at a time; keyboard + SR friendly. */
export function FAQ({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display text-base font-bold text-ink md:text-lg">
                  {item.q}
                </span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-leaf-deep/40 text-leaf-deep">
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
            </h3>
            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl text-sm leading-relaxed text-stone md:text-base">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
