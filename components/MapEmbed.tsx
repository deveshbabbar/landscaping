import { SITE } from "@/lib/site-data";

/**
 * Keyless Google Maps embed (q=&output=embed). Swap SITE.mapEmbed for a
 * Maps Embed API URL with your real address/place id before going live.
 */
export function MapEmbed({ className }: { className?: string }) {
  return (
    <div
      className={
        "overflow-hidden rounded-2xl border border-ink/10 bg-mist-deep " +
        (className ?? "")
      }
    >
      <iframe
        src={SITE.mapEmbed}
        title={`Map of ${SITE.studioName} service area — ${SITE.market}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[320px] w-full"
      />
    </div>
  );
}
