import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ShieldCheck, CalendarCheck } from "lucide-react";
import { SITE, CTA } from "@/lib/site-data";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteForm } from "@/components/QuoteForm";
import { MapEmbed } from "@/components/MapEmbed";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Get a Free Estimate — Stoneward Outdoor Living",
  description:
    "Request your free on-site estimate from Stoneward Outdoor Living. Tell us your project type, budget, and timeline and a DFW designer replies within one business day. Click to call or send the form.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Free Estimate | Stoneward Outdoor Living",
    description:
      "Free on-site estimates across DFW — a personal reply within one business day.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free on-site estimate"
        title="Let's plan your backyard"
        subtitle="Tell us about your project — a Stoneward designer replies within one business day to schedule your free on-site visit."
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80"
        imageAlt="Modern infinity-edge pool built by Stoneward"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Free Estimate", href: "/contact" },
        ]}
      />

      <Section tone="mist">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left — details */}
          <Reveal>
            <p className="eyebrow">Talk to a real person</p>
            <div className="hairline my-6" aria-hidden="true" />
            <h2 className="font-display text-[1.8rem] font-bold leading-tight tracking-tight text-ink md:text-[2.4rem]">
              Free, on-site, no obligation
            </h2>

            <div className="mt-7 rounded-2xl border border-ink/10 bg-white p-6 shadow-soft">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-leaf-deep">
                <CalendarCheck size={16} /> Same-week visits
              </p>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                We come out, measure, and listen — then follow up with a 3D plan
                and a fixed price. Most DFW consultations are scheduled within the
                same week.
              </p>
            </div>

            <ul className="mt-7 space-y-4 text-sm">
              <li>
                <a
                  href={CTA.call.href}
                  className="flex items-center gap-3 text-ink transition-colors hover:text-leaf-deep"
                >
                  <Phone size={17} className="text-leaf-deep" />
                  <span className="font-semibold">{SITE.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-ink transition-colors hover:text-leaf-deep"
                >
                  <Mail size={17} className="text-leaf-deep" /> {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-stone">
                <MapPin size={17} className="mt-0.5 shrink-0 text-leaf-deep" />
                <span>
                  {SITE.address.line1}
                  <br />
                  {SITE.address.city}, {SITE.address.region} {SITE.address.postal}
                </span>
              </li>
              <li className="flex items-start gap-3 text-stone">
                <Clock size={17} className="mt-0.5 shrink-0 text-leaf-deep" />
                <span>
                  {SITE.hours.map((h) => (
                    <span key={h.day} className="block">
                      <strong className="text-ink">{h.day}:</strong> {h.time}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3 text-stone">
                <ShieldCheck size={17} className="mt-0.5 shrink-0 text-leaf-deep" />
                <span>{SITE.license}</span>
              </li>
            </ul>

            <div className="mt-7">
              <MapEmbed className="h-[260px]" />
            </div>
          </Reveal>

          {/* Right — quote form */}
          <Reveal delay={120}>
            <div id="estimate" className="scroll-mt-28">
              <QuoteForm />
            </div>
          </Reveal>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Free Estimate", path: "/contact" },
        ])}
      />
    </>
  );
}
