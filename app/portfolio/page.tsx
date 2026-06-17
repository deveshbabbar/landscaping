import type { Metadata } from "next";
import { BEFORE_AFTER, PORTFOLIO, CTA, SITE } from "@/lib/site-data";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { BeforeAfter } from "@/components/BeforeAfter";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Project Gallery — DFW Backyards, Patios, Pools & Kitchens",
  description:
    "Browse Stoneward's portfolio of design-build projects across Dallas–Fort Worth: full backyards, paver patios, outdoor kitchens, and custom pools, with before & after transformations.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | Stoneward Outdoor Living",
    description:
      "Full backyards, patios, outdoor kitchens, and custom pools across DFW — with before & after sliders.",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Backyards built to live in"
        subtitle="A look at recent Stoneward design-build projects across the DFW suburbs. Filter by project type, then drag the before & after sliders below."
        image={PORTFOLIO[0].projects[0].src}
        imageAlt={PORTFOLIO[0].projects[0].alt}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Portfolio", href: "/portfolio" },
        ]}
      />

      <Section tone="mist">
        <PortfolioGallery />
      </Section>

      <Section tone="deep">
        <SectionHeading
          align="center"
          eyebrow="Before & after"
          title="The Stoneward difference, slider by slider"
          intro="Drag each handle to reveal the transformation. Sample pairs shown for this demo — swap in your real jobsite photos."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {BEFORE_AFTER.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 100}>
              <BeforeAfter item={item} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="olive" className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-mist md:text-4xl">
            Picture your backyard here.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-mist/75">
            Tell us what you have and what you want. We will follow up with a 3D
            plan and a fixed price — free, with no obligation.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href={CTA.estimate.href} variant="accent" size="lg">
              {CTA.estimate.label}
            </Button>
            <Button href={CTA.call.href} variant="outline-light" size="lg">
              {SITE.phoneDisplay}
            </Button>
          </div>
        </Reveal>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ])}
      />
    </>
  );
}
