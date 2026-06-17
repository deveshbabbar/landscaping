import { Phone } from "lucide-react";
import { HERO, CTA, SITE } from "@/lib/site-data";
import { Button } from "@/components/ui/Button";
import { SmartImage } from "@/components/ui/SmartImage";

/** Full-bleed hero with a slow ken-burns drift and legibility scrim. */
export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <SmartImage
        src={HERO.image}
        alt={HERO.imageAlt}
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full"
        imgClassName="animate-ken-burns"
      />
      <div className="absolute inset-0 img-scrim" aria-hidden="true" />
      <div className="absolute inset-0 bg-olive/20" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-content flex-col items-start justify-end px-[var(--gutter)] pb-32 pt-32 md:justify-center md:pb-28">
        <div className="max-w-3xl animate-fade-in">
          <p className="eyebrow text-leaf">{HERO.eyebrow}</p>
          <h1 className="display mt-5 text-mist">{HERO.title}</h1>
          <p className="lead mt-6 max-w-xl text-mist/85">{HERO.subtitle}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={CTA.estimate.href} variant="accent" size="lg">
              {CTA.estimate.label}
            </Button>
            <Button href={CTA.call.href} variant="outline-light" size="lg">
              <Phone size={16} /> {SITE.phoneDisplay}
            </Button>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-mist/70 md:flex"
        aria-hidden="true"
      >
        <span className="text-[0.6rem] font-semibold uppercase tracking-luxe">Scroll</span>
        <span className="h-12 w-px bg-mist/40" />
      </div>
    </section>
  );
}
