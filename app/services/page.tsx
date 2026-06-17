import type { Metadata } from "next";
import { Check } from "lucide-react";
import { SERVICES, CTA, SITE } from "@/lib/site-data";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SmartImage } from "@/components/ui/SmartImage";
import { FinancingBand } from "@/components/FinancingBand";
import { JsonLd } from "@/components/JsonLd";
import { servicesSchema, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Outdoor Living Services — Patios, Kitchens, Pools & More",
  description:
    "Stoneward's design-build services across DFW: landscape design, paver patios & hardscaping, outdoor kitchens, custom pools & spas, pergolas, landscape lighting, and irrigation & turf. Typical project ranges included.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Stoneward Outdoor Living",
    description:
      "Seven in-house outdoor-living services across Dallas–Fort Worth — from patios and pools to lighting and turf.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we build"
        title="Outdoor living, built in-house"
        subtitle="Seven services, one accountable team. Combine them into a complete backyard or start with the one that matters most."
        image={SERVICES[3].image}
        imageAlt={SERVICES[3].imageAlt}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />

      <Section tone="mist" className="py-16 md:py-20">
        <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-stone md:text-lg">
          Every Stoneward project starts with a free on-site estimate and a
          photorealistic 3D plan. Typical ranges are shown to help you budget —
          your proposal gives an exact, fixed price.
        </p>
      </Section>

      {SERVICES.map((s, i) => {
        const reversed = i % 2 === 1;
        return (
          <section
            key={s.key}
            id={s.key}
            className={`scroll-mt-24 py-16 md:py-20 ${i % 2 === 1 ? "bg-mist-deep" : "bg-mist"}`}
          >
            <div className="mx-auto grid max-w-content items-center gap-10 px-[var(--gutter)] lg:grid-cols-2 lg:gap-16">
              <Reveal className={reversed ? "lg:order-2" : ""}>
                <div className="group overflow-hidden rounded-2xl shadow-soft">
                  <SmartImage
                    src={s.image}
                    alt={s.imageAlt}
                    zoom
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="aspect-[4/3] w-full"
                  />
                </div>
              </Reveal>
              <Reveal delay={100} className={reversed ? "lg:order-1" : ""}>
                <span className="inline-block rounded-full bg-leaf px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-olive">
                  {s.priceFrom}
                </span>
                <h2 className="mt-4 font-display text-[1.9rem] font-bold leading-tight tracking-tight text-ink md:text-[2.3rem]">
                  {s.name}
                </h2>
                <p className="mt-2 font-display text-base font-semibold text-leaf-deep">
                  {s.tagline}
                </p>
                <p className="mt-4 text-base leading-relaxed text-stone">
                  {s.blurb}
                </p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {s.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5 text-sm text-ink">
                      <Check size={15} className="mt-0.5 shrink-0 text-leaf-deep" />
                      {inc}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 rounded-lg border border-ink/10 bg-white px-4 py-3 text-xs leading-relaxed text-stone">
                  <span className="font-semibold uppercase tracking-[0.08em] text-ink">
                    Materials:
                  </span>{" "}
                  {s.materials}
                </p>
                <Button href={CTA.estimate.href} variant="accent" className="mt-6">
                  Request a Quote
                </Button>
              </Reveal>
            </div>
          </section>
        );
      })}

      <Section tone="olive">
        <FinancingBand />
      </Section>

      <JsonLd
        data={[
          ...servicesSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
    </>
  );
}
