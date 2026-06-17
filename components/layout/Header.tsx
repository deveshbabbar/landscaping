"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE, CTA } from "@/lib/site-data";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The homepage has a full-bleed hero, so the header starts transparent there.
  const overHero = pathname === "/";
  const solid = scrolled || open || !overHero;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid ? "bg-mist/95 shadow-soft backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.9rem] max-w-content items-center justify-between px-[var(--gutter)]">
        <Link href="/" aria-label={`${SITE.studioName} — home`}>
          <Logo tone={solid ? "dark" : "light"} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
          {NAV.filter((i) => i.href !== "/contact").map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "link-underline whitespace-nowrap text-[0.78rem] font-semibold uppercase tracking-[0.1em] transition-colors",
                  solid ? "text-ink-soft" : "text-mist/90",
                  active && (solid ? "text-leaf-deep" : "text-mist"),
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CTA.call.href}
            className={cn(
              "hidden items-center gap-2 rounded-full px-4 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.1em] transition-colors sm:inline-flex",
              solid
                ? "text-ink hover:text-leaf-deep"
                : "text-mist hover:text-leaf",
            )}
          >
            <Phone size={15} />
            <span className="hidden lg:inline">{SITE.phoneDisplay}</span>
          </a>
          <Button
            href={CTA.estimate.href}
            variant="accent"
            className="hidden sm:inline-flex"
          >
            Free Estimate
          </Button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={cn(
              "grid h-11 w-11 place-items-center rounded-full transition-colors xl:hidden",
              solid ? "text-ink hover:bg-ink/5" : "text-mist hover:bg-mist/10",
            )}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-ink/10 bg-mist transition-[max-height] duration-500 ease-in-out xl:hidden",
          open ? "max-h-[92vh]" : "max-h-0",
        )}
      >
        <nav className="flex flex-col px-[var(--gutter)] py-5" aria-label="Mobile">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "border-b border-ink/5 py-3 font-display text-lg font-semibold text-ink",
                  active && "text-leaf-deep",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mt-6 flex flex-col gap-3">
            <Button href={CTA.estimate.href} variant="accent" size="lg">
              {CTA.estimate.label}
            </Button>
            <Button href={CTA.call.href} variant="outline" size="lg">
              Call {SITE.phoneDisplay}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
