import Link from "next/link";
import { SmartImage } from "@/components/ui/SmartImage";

type Crumb = { name: string; href: string };

/** Interior-page hero: full-bleed image, scrim, title + breadcrumb. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  crumbs = [],
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative flex min-h-[58vh] items-center justify-center overflow-hidden pt-[4.9rem] text-center">
      <SmartImage
        src={image}
        alt={imageAlt}
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 bg-olive/55" aria-hidden="true" />
      <div className="absolute inset-0 img-scrim" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-3xl animate-fade-in px-[var(--gutter)] py-24">
        {eyebrow && <p className="eyebrow text-leaf">{eyebrow}</p>}
        <h1 className="mt-4 font-display text-[2.4rem] font-bold leading-[1.04] tracking-tight text-mist md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="lead mx-auto mt-6 max-w-xl text-mist/85">{subtitle}</p>
        )}
        {crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mt-8 flex items-center justify-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-mist/70"
          >
            {crumbs.map((c, i) => (
              <span key={c.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">·</span>}
                {i < crumbs.length - 1 ? (
                  <Link href={c.href} className="transition-colors hover:text-leaf">
                    {c.name}
                  </Link>
                ) : (
                  <span className="text-mist">{c.name}</span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
