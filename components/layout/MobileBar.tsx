import { Phone, CalendarCheck } from "lucide-react";
import { SITE, CTA } from "@/lib/site-data";

/**
 * Fixed conversion bar on small screens: Call · Get a Free Estimate.
 * Hidden on lg+ where the header CTA carries the action.
 */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink/10 bg-mist/95 backdrop-blur-md lg:hidden">
      <a
        href={CTA.call.href}
        className="flex items-center justify-center gap-2 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-ink/5"
      >
        <Phone size={17} className="text-leaf-deep" />
        Call
      </a>
      <a
        href={CTA.estimate.href}
        className="flex items-center justify-center gap-2 bg-leaf py-4 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-olive transition-colors hover:bg-leaf-hover"
      >
        <CalendarCheck size={17} />
        Free Estimate
      </a>
    </div>
  );
}
