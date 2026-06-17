import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { SERVICE_AREAS, SERVICE_AREAS_NOTE, CTA, SITE } from "@/lib/site-data";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MapEmbed } from "@/components/MapEmbed";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Service Areas — Landscaping & Outdoor Living Across DFW",
  description:
    "Stoneward Outdoor Living serves Plano, Frisco, Southlake, McKinney, Allen, Prosper, and the greater North Dallas suburbs with design-build patios, kitchens, pools, and landscaping.",
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: "Service Areas | Stoneward Outdoor Living",
    description:
      "Design-build outdoor living across Plano, Frisco, Southlake, McKinney, Allen, Prosper and the DFW suburbs.",
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Where we work"
        title="Building backyards across DFW"
        subtitle="Based in Plano and proudly serving the North Dallas suburbs — with the same in-house team, quality, and warranty on every project."
        image="https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=2400&q=80"
        imageAlt="Suburban Dallas–Fort Worth neighborhood with landscaped homes"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
        ]}
      />

      <Section tone="mist">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Cities we serve"
              title="Your suburb, our specialty"
              intro="We know the soils, HOAs, permitting, and the way North Texas backyards actually get used. Here is where you will find Stoneward crews."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {SERVICE_AREAS.map((a) => (
                <li
                  key={a.city}
                  className="flex items-start gap-3 rounded-xl border border-ink/10 bg-white p-4 shadow-soft"
                >
                  <MapPin size={18} className="mt-0.5 shrink-0 text-leaf-deep" />
                  <span>
                    <span className="block font-display text-base font-bold text-ink">
                      {a.city}, TX
                    </span>
                    <span className="mt-0.5 block text-sm text-stone">
                      {a.blurb}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-stone">
              {SERVICE_AREAS_NOTE}
            </p>
            <Button href={CTA.estimate.href} variant="accent" size="lg" className="mt-7">
              {CTA.estimate.label}
            </Button>
          </Reveal>
          <Reveal delay={120}>
            <MapEmbed className="h-full min-h-[420px]" />
          </Reveal>
        </div>
      </Section>

      <Section tone="olive" className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-mist md:text-4xl">
            Not sure if you are in our area?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-mist/75">
            If you are anywhere in the North Dallas metro, just ask — chances are
            we have built a backyard near you.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href={CTA.call.href} variant="accent" size="lg">
              Call {SITE.phoneDisplay}
            </Button>
            <Button href={CTA.estimate.href} variant="outline-light" size="lg">
              {CTA.estimate.label}
            </Button>
          </div>
        </Reveal>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
        ])}
      />
    </>
  );
}
