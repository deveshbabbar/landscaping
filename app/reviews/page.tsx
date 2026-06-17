import type { Metadata } from "next";
import { Star, ExternalLink } from "lucide-react";
import { TESTIMONIALS, RATING, CTA, SITE } from "@/lib/site-data";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";
import { TestimonialCard } from "@/components/TestimonialCard";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Reviews — 5.0★ from DFW Homeowners",
  description:
    "Read what Dallas–Fort Worth homeowners say about Stoneward Outdoor Living. Rated 5.0★ on Houzz and Google across 180+ design-build projects — patios, kitchens, pools, and full backyards.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Reviews | Stoneward Outdoor Living",
    description: "5.0★ from 180+ DFW homeowners on Houzz and Google.",
  },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Kind words"
        title="Loved by DFW homeowners"
        subtitle="A 5.0★ rating from 180+ backyards built. Here is what it is like to work with Stoneward."
        image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2400&q=80"
        imageAlt="Resort-style backyard pool built by Stoneward"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Reviews", href: "/reviews" },
        ]}
      />

      {/* Aggregate */}
      <Section tone="mist" className="py-16 md:py-20">
        <div className="mx-auto flex max-w-xl flex-col items-center rounded-3xl border border-ink/10 bg-white p-10 text-center shadow-soft">
          <p className="font-display text-6xl font-extrabold leading-none text-leaf">
            {RATING.value.toFixed(1)}
          </p>
          <Stars value={RATING.value} size={22} className="mt-3" />
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.1em] text-stone">
            {RATING.count}+ verified reviews · Houzz &amp; Google
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={SITE.social.houzz}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:border-leaf-deep hover:text-leaf-deep"
            >
              Houzz reviews <ExternalLink size={14} />
            </a>
            <a
              href={SITE.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:border-leaf-deep hover:text-leaf-deep"
            >
              Google reviews <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </Section>

      {/* Cards */}
      <Section tone="deep" className="pt-0">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={(i % 3) * 90}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>
        <p className="mt-10 flex items-center justify-center gap-2 text-center text-xs text-stone">
          <Star size={13} className="fill-leaf-hover text-leaf-hover" />
          Sample testimonials shown for this demo — replace with real reviews before launch.
        </p>
      </Section>

      <Section tone="olive" className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-mist md:text-4xl">
            Become our next 5-star backyard.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-mist/75">
            Start with a free on-site estimate. We will show you exactly what your
            space could become.
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
          { name: "Reviews", path: "/reviews" },
        ])}
      />
    </>
  );
}
