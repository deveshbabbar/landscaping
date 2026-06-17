import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, ShieldCheck } from "lucide-react";
import { NAV, SITE, CTA, CLOSING } from "@/lib/site-data";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";

/** Inline Houzz glyph (lucide ships none). */
function HouzzIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2 5 5.8v12.4L12 22V12l7 4V8.2L12 4.4z" />
    </svg>
  );
}

export function Footer() {
  const year = 2026; // demo build year — wire to a build-time constant if needed.

  return (
    <footer className="bg-olive text-mist/75">
      {/* CTA band */}
      <div className="border-b border-mist/10">
        <div className="mx-auto flex max-w-content flex-col items-start gap-7 px-[var(--gutter)] py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow text-leaf">{CLOSING.eyebrow}</p>
            <h2 className="mt-3 max-w-xl font-display text-2xl font-bold text-mist md:text-[2rem]">
              {CLOSING.title}
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={CTA.estimate.href} variant="accent" size="lg">
              {CTA.estimate.label}
            </Button>
            <Button href={CTA.call.href} variant="outline-light" size="lg">
              {SITE.phoneDisplay}
            </Button>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="mx-auto grid max-w-content gap-12 px-[var(--gutter)] py-16 md:grid-cols-[1.5fr_1fr_1.2fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist/65">
            {SITE.tagline} Award-winning outdoor-living design-build serving{" "}
            {SITE.market}.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-mist/20 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-leaf">
            <ShieldCheck size={14} /> {SITE.license}
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: SITE.social.houzz, label: "Houzz", icon: <HouzzIcon size={17} /> },
              { href: SITE.social.instagram, label: "Instagram", icon: <Instagram size={17} /> },
              { href: SITE.social.facebook, label: "Facebook", icon: <Facebook size={17} /> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-mist/20 text-mist/80 transition-colors hover:border-leaf hover:text-leaf"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-[0.62rem] font-semibold uppercase tracking-luxe text-mist">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-mist/65 transition-colors hover:text-leaf"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-[0.62rem] font-semibold uppercase tracking-luxe text-mist">
            Get in touch
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={CTA.call.href}
                className="flex items-center gap-3 text-mist/65 transition-colors hover:text-leaf"
              >
                <Phone size={16} className="text-leaf" /> {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-mist/65 transition-colors hover:text-leaf"
              >
                <Mail size={16} className="text-leaf" /> {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-mist/65">
              <MapPin size={16} className="mt-0.5 shrink-0 text-leaf" />
              <span>
                {SITE.address.line1}
                <br />
                {SITE.address.city}, {SITE.address.region} {SITE.address.postal}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal / fine print */}
      <div className="border-t border-mist/10">
        <div className="mx-auto flex max-w-content flex-col gap-3 px-[var(--gutter)] py-7 text-xs text-mist/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <p>Demo site — sample content & imagery. {SITE.builtBy}</p>
        </div>
      </div>
    </footer>
  );
}
