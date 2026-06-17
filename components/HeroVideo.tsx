"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Full-bleed hero background: a poster image paints instantly (and is the
 * fallback for users who prefer reduced motion), with a muted, looping
 * time-lapse video that fades in on top once it can play. The video is
 * decorative (aria-hidden) — all meaning lives in the poster's alt text.
 */
export function HeroVideo({
  src,
  poster,
  posterAlt,
}: {
  src: string;
  poster: string;
  posterAlt: string;
}) {
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Respect users who prefer reduced motion — keep the static poster only.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(!reduce);
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden bg-olive">
      <Image
        src={poster}
        alt={posterAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {enabled && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onCanPlay={() => setReady(true)}
          onPlaying={() => setReady(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
