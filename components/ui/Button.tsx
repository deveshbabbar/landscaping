import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant =
  | "accent"
  | "dark"
  | "outline"
  | "outline-light"
  | "soft"
  | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans text-[0.82rem] font-semibold uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // Leaf-green — the primary conversion CTA. Dark ink text passes AA on leaf.
  accent: "bg-leaf text-olive hover:bg-leaf-hover hover:text-olive shadow-leaf",
  // Olive-charcoal — secondary solid action on light backgrounds
  dark: "bg-olive text-mist hover:bg-olive-deep shadow-soft",
  // Outline on light backgrounds
  outline:
    "border border-olive/25 text-ink hover:border-olive hover:bg-olive hover:text-mist",
  // Outline on dark / over-image backgrounds
  "outline-light":
    "border border-mist/50 text-mist hover:bg-mist hover:text-ink",
  // Solid light — for use on dark fields / over imagery
  soft: "bg-mist text-ink hover:bg-white shadow-soft",
  // Minimal text button
  ghost: "text-ink hover:text-leaf-deep",
};

const sizes: Record<Size, string> = {
  md: "px-7 py-3",
  lg: "px-9 py-4 text-[0.85rem]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type AsLink = CommonProps & {
  href: string;
  external?: boolean;
};

/**
 * Renders an <a> via next/link. external=true opens in a new tab.
 * For mailto:/tel:/http(s) links it renders a plain <a>.
 */
export function Button({
  href,
  external,
  variant = "accent",
  size = "md",
  className,
  children,
}: AsLink) {
  const cls = cn(base, variants[variant], sizes[size], className);
  const isHardLink =
    external ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http");

  if (isHardLink) {
    return (
      <a
        href={href}
        className={cls}
        {...(external || href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
