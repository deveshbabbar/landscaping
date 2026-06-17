import type { Metadata } from "next";
import { PROCESS_INTRO, CTA, SITE, FAQ } from "@/lib/site-data";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { FAQ as FaqAccordion } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Our Process — Consultation, 3D Design, Build, Enjoy",
  description:
    "How Stoneward designs and builds your DFW backyard: a free consultation, a photorealistic 3D design, an in-house build with weekly updates, and aftercare backed by a 2-year workmanship warranty.",
  alternates: { canonical: "/process" },
  openGraph: {
    title: "Our Process | Stoneward Outdoor Living",
    description:
      "Consultation → 3D Design → Build → Enjoy. A calm, clear design-build process with one accountable team.",
  },
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A calm, clear path to your backyard"
        subtitle={PROCESS_INTRO}
        image="https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&w=2400&q=80"
        imageAlt="Modern landscaped backyard at dusk"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Process", href: "/process" },
        ]}
      />

      <Section tone="mist">
        <ProcessTimeline />
      </Section>

      <Section tone="deep">
        <SectionHeading
          align="center"
          eyebrow="Good to know"
          title="Questions homeowners ask us first"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqAccordion items={FAQ} />
        </div>
      </Section>

      <Section tone="olive" className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-mist md:text-4xl">
            Step one is a free conversation.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-mist/75">
            We will come out, measure, and listen — then put a real plan and
            number in front of you. No pressure, no obligation.
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
        data={[
          faqSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Process", path: "/process" },
          ]),
        ]}
      />
    </>
  );
}
