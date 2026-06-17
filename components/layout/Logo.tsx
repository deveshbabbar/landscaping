import { cn } from "@/lib/cn";

/** Stoneward leaf mark — a simple, crisp botanical glyph. */
export function LeafMark({
  size = 30,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M27 5C16 5 7 11 7 21c0 2.2.5 4.2 1.4 6C13 19 19 14.5 25 12c-6 3.8-10.5 9.4-13.2 16.4l3 .9C17 23 21 17.6 27 14.2 27.6 11 28 8 27 5Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Full wordmark used in the header and footer. */
export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LeafMark
        size={28}
        className={tone === "light" ? "text-leaf" : "text-leaf-deep"}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.2rem] font-extrabold tracking-tight md:text-[1.3rem]",
            tone === "light" ? "text-mist" : "text-ink",
          )}
        >
          Stoneward
        </span>
        <span
          className={cn(
            "mt-1 text-[0.5rem] font-semibold uppercase tracking-luxe",
            tone === "light" ? "text-mist/70" : "text-stone",
          )}
        >
          Outdoor Living
        </span>
      </span>
    </span>
  );
}
