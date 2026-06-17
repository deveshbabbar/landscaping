import { cn } from "@/lib/cn";

/**
 * Section heading: eyebrow kicker, short leaf rule, display title, and an
 * optional intro paragraph. `align` controls centering; `tone` flips colors
 * for use on the dark olive field.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow mb-5", tone === "light" && "text-leaf")}>
          {eyebrow}
        </p>
      )}
      <div
        className={cn("hairline mb-6", centered && "mx-auto")}
        aria-hidden="true"
      />
      <h2
        className={cn(
          "font-display font-bold leading-[1.04] tracking-tight text-[2rem] md:text-[2.9rem]",
          tone === "light" ? "text-mist" : "text-ink",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("lead mt-6", tone === "light" && "text-mist/75")}>
          {intro}
        </p>
      )}
    </div>
  );
}
