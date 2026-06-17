"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import type { BeforeAfter as BeforeAfterType } from "@/lib/site-data";

/**
 * Accessible before/after image slider. Drag the handle (pointer or keyboard
 * via the range input) to wipe between the "before" and "after" frames.
 * Honors reduced-motion implicitly (no animation; position is user-driven).
 */
export function BeforeAfter({ item }: { item: BeforeAfterType }) {
  const [pos, setPos] = useState(50);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <figure>
      <div
        ref={frameRef}
        className="group relative aspect-[3/2] w-full select-none overflow-hidden rounded-2xl border border-ink/10 bg-mist-deep"
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerLeave={() => (dragging.current = false)}
      >
        {/* AFTER (base layer) */}
        <Image
          src={item.after}
          alt={item.afterAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-leaf px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-olive">
          After
        </span>

        {/* BEFORE (clipped overlay) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={item.before}
            alt={item.beforeAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
          <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-olive/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-mist">
            Before
          </span>
        </div>

        {/* Handle */}
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-soft"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-olive shadow-soft-lg">
            <MoveHorizontal size={18} />
          </span>
        </div>

        {/* Accessible range input */}
        <label className="sr-only" htmlFor={`ba-${item.title}`}>
          Reveal before and after for {item.title}
        </label>
        <input
          id={`ba-${item.title}`}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-x-0 bottom-0 z-20 h-11 w-full cursor-ew-resize opacity-0"
          aria-label={`Before and after slider for ${item.title}`}
        />
      </div>
      <figcaption className="mt-4 flex items-center justify-between">
        <span className="font-display text-base font-bold text-ink">
          {item.title}
        </span>
        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-stone">
          {item.location}
        </span>
      </figcaption>
    </figure>
  );
}
