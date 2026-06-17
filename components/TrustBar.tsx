import { ShieldCheck, Hammer, CalendarRange, Star } from "lucide-react";
import { TRUST } from "@/lib/site-data";

const ICONS = [ShieldCheck, Hammer, CalendarRange, Star];

/** Compact trust strip of licensed/insured · projects · years · rating. */
export function TrustBar() {
  return (
    <div className="border-y border-ink/10 bg-white">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-y-6 px-[var(--gutter)] py-7 md:grid-cols-4 md:divide-x md:divide-ink/10">
        {TRUST.map((t, i) => {
          const I = ICONS[i % ICONS.length];
          return (
            <div
              key={t.label}
              className="flex items-center justify-center gap-3 px-4 text-center md:text-left"
            >
              <I size={20} className="shrink-0 text-leaf-deep" />
              <div className="text-left">
                <p className="text-sm font-bold leading-tight text-ink">
                  {t.value}
                </p>
                <p className="text-[0.7rem] uppercase tracking-[0.08em] text-stone">
                  {t.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
