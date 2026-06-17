import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";
import type { Service } from "@/lib/site-data";

/** Compact service card with image, price chip, tagline, and a quote link. */
export function ServiceCard({ s }: { s: Service }) {
  return (
    <Link
      href={`/services#${s.key}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
    >
      <div className="relative">
        <SmartImage
          src={s.image}
          alt={s.imageAlt}
          zoom
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="aspect-[4/3] w-full"
        />
        <span className="absolute left-4 top-4 rounded-full bg-leaf px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-olive">
          {s.priceFrom}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold leading-tight text-ink">
          {s.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-stone">{s.tagline}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-leaf-deep">
          Request a quote
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
