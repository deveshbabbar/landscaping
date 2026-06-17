import type { Metadata } from "next";
import { ShieldCheck, Check } from "lucide-react";
import { ABOUT, STATS, CTA, SITE } from "@/lib/site-data";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SmartImage } from "@/components/ui/SmartImage";
import { StatStrip } from "@/components/StatStrip";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About — DFW's In-House Outdoor Living Design-Build Firm",
  description:
    "Stoneward Outdoor Living is a Dallas–Fort Worth design-build firm: one in-house team that designs, builds, and warranties your backyard. 15 years, 500+ backyards, licensed & insured.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Stoneward Outdoor Living",
    description:
      "One accountable team that designs, builds, and stands behind your DFW backyard.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="One team. One backyard. No runaround."
        subtitle={ABOUT.lead}
        image={ABOUT.image}
        imageAlt={ABOUT.imageAlt}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      <Section tone="mist">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SmartImage
              src={ABOUT.image}
              alt={ABOUT.imageAlt}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="aspect-[4/5] w-full rounded-2xl shadow-soft-lg"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Since 2011</p>
            <div className="hairline my-6" aria-hidden="true" />
            <h2 className="font-display text-[2rem] font-bold leading-tight tracking-tight text-ink md:text-[2.7rem]">
              Built by people who answer the phone.
            </h2>
            {ABOUT.story.map((p) => (
              <p key={p} className="mt-5 max-w-prose text-base leading-relaxed text-stone md:text-lg">
                {p}
              </p>
            ))}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {ABOUT.badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-3.5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-ink"
                >
                  <ShieldCheck size={14} className="text-leaf-deep" /> {b}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section tone="deep">
        <SectionHeading
          align="center"
          eyebrow="What we stand for"
          title="The way we work, on every project"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {ABOUT.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-7 shadow-soft">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-leaf/15 text-leaf-deep">
                  <Check size={20} strokeWidth={2.5} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section tone="white" className="py-16 md:py-20">
        <Reveal>
          <StatStrip />
        </Reveal>
      </Section>

      <Section tone="olive" className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-mist md:text-4xl">
            Let us build yours next.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-mist/75">
            Fifteen years, 500+ backyards, and one accountable team ready to design
            and build yours.
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
          { name: "About", path: "/about" },
        ])}
      />
    </>
  );
}
