import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  SERVICES,
  WHY,
  WHY_INTRO,
  BEFORE_AFTER,
  TESTIMONIALS,
  RATING,
  PROJECT_STRIP,
  CTA,
  CLOSING,
  SITE,
} from "@/lib/site-data";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { StatStrip } from "@/components/StatStrip";
import { TestimonialCard } from "@/components/TestimonialCard";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { FinancingBand } from "@/components/FinancingBand";
import { MapEmbed } from "@/components/MapEmbed";
import { Icon } from "@/components/Icon";
import { Stars } from "@/components/ui/Stars";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* Positioning intro */}
      <Section tone="mist">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Design-build, all under one roof</p>
            <div className="hairline my-6" aria-hidden="true" />
            <h2 className="font-display text-[2.1rem] font-bold leading-[1.06] tracking-tight text-ink md:text-[3rem]">
              One team designs it, builds it, and stands behind it.
            </h2>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-stone md:text-lg">
              {SITE.positioning}
            </p>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-stone md:text-lg">
              From the first 3D rendering to the final plant and light, Stoneward
              keeps your whole backyard with one accountable crew — so it comes
              out right, on time, and built to last in the North Texas climate.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={CTA.estimate.href} variant="accent" size="lg">
                {CTA.estimate.label}
              </Button>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 self-center text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:text-leaf-deep"
              >
                Meet Stoneward <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SmartImage
              src={BEFORE_AFTER[0].after}
              alt="Finished Stoneward backyard with pool, outdoor kitchen, and dining area"
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="aspect-[4/5] w-full rounded-2xl shadow-soft-lg"
            />
          </Reveal>
        </div>
      </Section>

      {/* Services */}
      <Section tone="deep">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we build"
            title="Everything your backyard needs"
            intro="Seven in-house services that combine into one seamless outdoor living space — or stand alone, beautifully."
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:text-leaf-deep"
          >
            All services <ArrowRight size={15} />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.key} delay={(i % 4) * 80}>
              <ServiceCard s={s} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Featured before/after */}
      <Section tone="mist">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Before & after"
              title="See the transformation"
              intro="Drag the slider to reveal what a Stoneward design-build does to a tired backyard. Real projects, real change."
            />
            <ul className="mt-7 space-y-3 text-sm text-stone">
              <li>· One coordinated plan — no mismatched add-ons</li>
              <li>· Built on engineered bases that stay flat for decades</li>
              <li>· Finished with planting and lighting, not just hardscape</li>
            </ul>
            <Button href={CTA.portfolio.href} variant="outline" size="lg" className="mt-8">
              {CTA.portfolio.label}
            </Button>
          </Reveal>
          <Reveal delay={120}>
            <BeforeAfter item={BEFORE_AFTER[0]} />
            <p className="mt-3 text-center text-xs text-stone/70">
              Sample before &amp; after — replace with your real project photos.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Why Stoneward */}
      <Section tone="olive">
        <SectionHeading
          align="center"
          tone="light"
          eyebrow="Why Stoneward"
          title="A backyard is a big project. Trust it to one team."
          intro={WHY_INTRO}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-mist/12 bg-olive-soft p-7">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-leaf/15 text-leaf">
                  <Icon name={w.icon} size={22} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-mist">
                  {w.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist/70">
                  {w.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process teaser */}
      <Section tone="mist">
        <SectionHeading
          align="center"
          eyebrow="How it works"
          title="From handshake to first cookout in four steps"
          intro="Consultation, 3D design, build, enjoy — a calm, clear process with one point of contact the whole way."
        />
        <div className="mt-14">
          <ProcessTimeline />
        </div>
        <div className="mt-12 text-center">
          <Button href={CTA.process.href} variant="dark" size="lg">
            See our full process
          </Button>
        </div>
      </Section>

      {/* Project strip */}
      <section className="bg-olive py-20 md:py-24">
        <div className="mx-auto max-w-content px-[var(--gutter)]">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <SectionHeading
              tone="light"
              eyebrow="Recent work"
              title="Backyards we've built across DFW"
            />
            <Link
              href={PROJECT_STRIP.href}
              className="inline-flex items-center gap-2 text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-leaf transition-colors hover:text-mist"
            >
              View the portfolio <ArrowRight size={15} />
            </Link>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-1.5 sm:grid-cols-4 lg:grid-cols-8">
          {PROJECT_STRIP.images.map((im, i) => (
            <Link
              key={`${im.src}-${i}`}
              href={PROJECT_STRIP.href}
              className="group relative block aspect-square overflow-hidden"
              aria-label="View the Stoneward portfolio"
            >
              <SmartImage
                src={im.src}
                alt={im.alt}
                zoom
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
                className="h-full w-full"
              />
              <span
                className="absolute inset-0 bg-olive/0 transition-colors duration-300 group-hover:bg-olive/25"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <Section tone="white" className="py-16 md:py-20">
        <Reveal>
          <StatStrip />
        </Reveal>
      </Section>

      {/* Reviews */}
      <Section tone="deep">
        <div className="flex flex-col items-center text-center">
          <Stars value={RATING.value} size={20} />
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.1em] text-stone">
            {RATING.value.toFixed(1)}★ from {RATING.count}+ DFW homeowners · Houzz &amp; Google
          </p>
        </div>
        <SectionHeading
          align="center"
          className="mt-8"
          eyebrow="Kind words"
          title="Homeowners who trusted us with their backyard"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <Reveal key={t.author} delay={i * 90}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/reviews"
            className="link-underline text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink"
          >
            Read all reviews
          </Link>
        </div>
      </Section>

      {/* Service area + financing */}
      <Section tone="mist">
        <div className="grid items-stretch gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Where we work"
              title="Proudly building across the DFW suburbs"
              intro="Based in Plano and serving Frisco, Southlake, McKinney, Allen, Prosper, and the surrounding North Dallas communities."
            />
            <div className="mt-7">
              <MapEmbed className="h-[300px]" />
            </div>
            <Button href="/service-areas" variant="outline" className="mt-7">
              See all service areas
            </Button>
          </Reveal>
          <Reveal delay={120} className="flex">
            <FinancingBand />
          </Reveal>
        </div>
      </Section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden">
        <SmartImage
          src={CLOSING.image}
          alt={CLOSING.imageAlt}
          sizes="100vw"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-olive/70" aria-hidden="true" />
        <div className="relative mx-auto max-w-content px-[var(--gutter)] py-28 text-center md:py-36">
          <Reveal>
            <p className="eyebrow text-leaf">{CLOSING.eyebrow}</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-[2.2rem] font-bold leading-[1.08] tracking-tight text-mist md:text-5xl">
              {CLOSING.title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mist/85 md:text-lg">
              {CLOSING.body}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href={CTA.estimate.href} variant="accent" size="lg">
                {CTA.estimate.label}
              </Button>
              <Button href={CTA.call.href} variant="outline-light" size="lg">
                {SITE.phoneDisplay}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
