import { cn } from "@/lib/cn";

type Tone = "mist" | "deep" | "olive" | "white";

const tones: Record<Tone, string> = {
  mist: "bg-mist text-ink",
  deep: "bg-mist-deep text-ink",
  olive: "bg-olive text-mist",
  white: "bg-white text-ink",
};

/**
 * Vertical-rhythm section wrapper with a centered max-width container.
 * Pass `full` to opt out of the inner container (for full-bleed content).
 */
export function Section({
  children,
  tone = "mist",
  className,
  containerClassName,
  full = false,
  id,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  full?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28", tones[tone], className)}>
      {full ? (
        children
      ) : (
        <div
          className={cn(
            "mx-auto w-full max-w-content px-[var(--gutter)]",
            containerClassName,
          )}
        >
          {children}
        </div>
      )}
    </section>
  );
}
