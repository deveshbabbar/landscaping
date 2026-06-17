"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import type { BeforeAfter as BeforeAfterType } from "@/lib/site-data";

/**
 * Accessible before/after image slider. Drag the handle (pointer or keyboard
 * via the range input) to wipe between the "before" and "after" frames.
 *
 * The images are made non-draggable and pointer-transparent so the browser's
 * native image-drag never hijacks the cursor — all pointer input is handled by
 * the frame, which captures the pointer for smooth dragging anywhere on it.
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

  const beforeLabel = item.beforeLabel ?? "Before";
  const afterLabel = item.afterLabel ?? "After";
  const inputId = `ba-${item.title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <figure>
      <div
        ref={frameRef}
        className="group relative aspect-[7/4] w-full touch-none select-none overflow-hidden rounded-2xl border border-ink/10 bg-mist-deep"
        style={{ cursor: "ew-resize" }}
        onDragStart={(e) => e.preventDefault()}
        onPointerDown={(e) => {
          e.preventDefault();
          dragging.current = true;
          frameRef.current?.setPointerCapture(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (dragging.current) setFromClientX(e.clientX);
        }}
        onPointerUp={(e) => {
          dragging.current = false;
          frameRef.current?.releasePointerCapture(e.pointerId);
        }}
        onPointerCancel={() => (dragging.current = false)}
      >
        {/* AFTER (base layer) */}
        <Image
          src={item.after}
          alt={item.afterAlt}
          fill
          draggable={false}
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="pointer-events-none select-none object-cover"
        />
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-leaf px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-olive">
          {afterLabel}
        </span>

        {/* BEFORE (clipped overlay) */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={item.before}
            alt={item.beforeAlt}
            fill
            draggable={false}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="pointer-events-none select-none object-cover"
          />
          <span className="absolute left-4 top-4 rounded-full bg-olive/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-mist">
            {beforeLabel}
          </span>
        </div>

        {/* Handle */}
        <div
          className="pointer-events-none absolute inset-y-0 z-10 -ml-px w-0.5 bg-white shadow-soft"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-olive shadow-soft-lg ring-1 ring-ink/10 transition-transform duration-200 group-hover:scale-105">
            <MoveHorizontal size={18} />
          </span>
        </div>

        {/* Accessible keyboard control (Tab to focus, arrow keys to wipe) */}
        <label className="sr-only" htmlFor={inputId}>
          Reveal before and after for {item.title}
        </label>
        <input
          id={inputId}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute bottom-3 left-1/2 z-20 h-8 w-[60%] -translate-x-1/2 cursor-ew-resize opacity-0 focus-visible:opacity-100"
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
