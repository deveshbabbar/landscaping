import { Stars } from "@/components/ui/Stars";
import type { Testimonial } from "@/lib/site-data";
import { cn } from "@/lib/cn";

/** Testimonial card — stars, quote, attribution. tone flips for dark fields. */
export function TestimonialCard({
  t,
  tone = "dark",
}: {
  t: Testimonial;
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-2xl border p-7 md:p-8",
        light
          ? "border-mist/15 bg-olive-soft"
          : "border-ink/10 bg-white shadow-soft",
      )}
    >
      <Stars value={t.rating} size={15} tone={tone} />
      <blockquote
        className={cn(
          "mt-5 font-display text-lg font-medium leading-relaxed",
          light ? "text-mist" : "text-ink",
        )}
      >
        “{t.quote}”
      </blockquote>
      <figcaption
        className={cn(
          "mt-auto border-t pt-5",
          light ? "border-mist/15" : "border-ink/10",
        )}
      >
        <p className={cn("font-display text-base font-bold", light ? "text-mist" : "text-ink")}>
          {t.author}
        </p>
        <p
          className={cn(
            "mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.1em]",
            light ? "text-leaf" : "text-leaf-deep",
          )}
        >
          {t.context}
        </p>
      </figcaption>
    </figure>
  );
}
