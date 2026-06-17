import type { Metadata } from "next";
import { Check, Wallet } from "lucide-react";
import { FINANCING, CTA, SITE } from "@/lib/site-data";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Financing — Build Your Backyard Now, Pay Over Time",
  description:
    "Flexible home-improvement financing for Stoneward outdoor-living projects across DFW. Check your rate with no impact to your credit score, with fixed monthly payments and fast decisions.",
  alternates: { canonical: "/financing" },
  openGraph: {
    title: "Financing | Stoneward Outdoor Living",
    description:
      "Build the whole backyard now and pay over time — fixed monthly payments, fast approvals, no prepayment penalties.",
  },
};

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Financing available"
        title="Build now, pay over time"
        subtitle="A backyard you will use every day should not wait on a lump sum. Flexible financing makes the whole project doable now."
        image="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=2400&q=80"
        imageAlt="Finished backyard with pool and outdoor kitchen"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Financing", href: "/financing" },
        ]}
      />

      <Section tone="mist">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Financing that fits an outdoor-living project"
              intro={FINANCING.intro}
            />
            <p className="mt-6 text-base leading-relaxed text-stone">
              {FINANCING.partner}
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {FINANCING.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-ink">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-leaf text-olive">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={SITE.financingApply} external variant="accent" size="lg">
                {FINANCING.applyLabel}
              </Button>
              <Button href={CTA.estimate.href} variant="outline" size="lg">
                {CTA.estimate.label}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-ink/10 bg-white p-7 shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-leaf/15 text-leaf-deep">
                <Wallet size={22} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">
                Ways to pay
              </h3>
              <ul className="mt-5 divide-y divide-ink/10">
                {FINANCING.plans.map((plan) => (
                  <li key={plan.name} className="py-4">
                    <p className="font-display text-base font-bold text-ink">
                      {plan.name}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-stone">
                      {plan.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <p className="mt-12 rounded-xl border border-ink/10 bg-mist-deep px-5 py-4 text-xs leading-relaxed text-stone">
          {FINANCING.disclaimer}
        </p>
      </Section>

      <Section tone="olive" className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-mist md:text-4xl">
            Get a number, then a plan to pay for it.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-mist/75">
            Start with a free estimate and a fixed price — then we will help you
            line up financing that fits.
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
          { name: "Financing", path: "/financing" },
        ])}
      />
    </>
  );
}
