import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Leaf-green star rating row with an accessible label. `value` 1–5; `size` px.
 * `tone="light"` brightens the fill for use on the dark olive field.
 */
export function Stars({
  value = 5,
  size = 16,
  tone = "dark",
  className,
}: {
  value?: number;
  size?: number;
  tone?: "dark" | "light";
  className?: string;
}) {
  const fill = tone === "light" ? "fill-leaf text-leaf" : "fill-leaf-hover text-leaf-hover";
  const empty = tone === "light" ? "text-mist/30" : "text-stone/30";
  return (
    <div
      className={cn("inline-flex items-center gap-1", className)}
      role="img"
      aria-label={`${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          strokeWidth={1.25}
          className={cn(i < Math.round(value) ? fill : cn("fill-transparent", empty))}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
