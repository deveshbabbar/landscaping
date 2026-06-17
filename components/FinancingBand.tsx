import { Wallet, Check } from "lucide-react";
import { FINANCING, CTA, SITE } from "@/lib/site-data";
import { Button } from "@/components/ui/Button";

/** Financing call-out band — reduces sticker shock near big CTAs. */
export function FinancingBand() {
  return (
    <div className="overflow-hidden rounded-3xl bg-olive p-8 text-mist md:p-12">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow text-leaf">Financing available</p>
          <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-mist md:text-[2.2rem]">
            Build the whole backyard now. Pay over time.
          </h3>
          <p className="mt-4 max-w-xl text-mist/75">{FINANCING.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={SITE.financingApply} external variant="accent" size="lg">
              {FINANCING.applyLabel}
            </Button>
            <Button href={CTA.financing.href} variant="outline-light" size="lg">
              How financing works
            </Button>
          </div>
        </div>
        <ul className="grid gap-3 rounded-2xl border border-mist/15 bg-olive-soft p-6">
          {FINANCING.points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm text-mist/85">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-leaf text-olive">
                <Check size={13} strokeWidth={3} />
              </span>
              {p}
            </li>
          ))}
          <li className="mt-1 flex items-center gap-2 border-t border-mist/15 pt-4 text-[0.7rem] uppercase tracking-[0.1em] text-leaf">
            <Wallet size={14} /> Approved homeowners, fixed monthly payments
          </li>
        </ul>
      </div>
    </div>
  );
}
