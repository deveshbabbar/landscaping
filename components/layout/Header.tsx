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
      <div className="mx-auto flex h-[4.9rem] max-w-[1480px] items-center justify-between gap-5 px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label={`${SITE.studioName} — home`}
          className="shrink-0"
        >
          <Logo tone={solid ? "dark" : "light"} />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-x-4 xl:flex 2xl:gap-x-6"
          aria-label="Primary"
        >
          {NAV.filter((i) => i.href !== "/contact" && i.href !== "/").map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "link-underline whitespace-nowrap text-[0.76rem] font-semibold uppercase tracking-[0.07em] transition-colors",
                  solid ? "text-ink-soft" : "text-mist/90",
                  active && (solid ? "text-leaf-deep" : "text-mist"),
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <span
            className={cn(
              "hidden h-5 w-px xl:block",
              solid ? "bg-ink/15" : "bg-mist/25",
            )}
            aria-hidden="true"
          />
          <a
            href={CTA.call.href}
            className={cn(
              "hidden items-center gap-2 rounded-full px-3 py-2.5 text-[0.77rem] font-semibold uppercase tracking-[0.06em] transition-colors sm:inline-flex",
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
            className="hidden px-6 sm:inline-flex"
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
