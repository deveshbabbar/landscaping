"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Send, CheckCircle2 } from "lucide-react";
import {
  SITE,
  PROJECT_TYPES,
  BUDGET_RANGES,
  TIMELINES,
} from "@/lib/site-data";
import { cn } from "@/lib/cn";

/**
 * Three-step "Get a Free Estimate" quote form. Qualifies leads by project type,
 * budget, and timeline before capturing contact details, then POSTs all fields
 * to SITE.formEndpoint (Formspree id or serverless handler). No data is stored
 * locally — swap the endpoint for your own before going live.
 */
const field =
  "w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-stone/60 focus:border-leaf-deep";
const label =
  "mb-1.5 block text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-stone";

function ChipGroup({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const selected = value === o;
        return (
          <label key={o} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={o}
              checked={selected}
              onChange={() => onChange(o)}
              className="peer sr-only"
            />
            <span
              className={cn(
                "inline-block rounded-full border px-4 py-2 text-sm transition-colors",
                selected
                  ? "border-leaf-deep bg-leaf-deep text-white"
                  : "border-ink/20 text-ink hover:border-leaf-deep",
              )}
            >
              {o}
            </span>
          </label>
        );
      })}
    </div>
  );
}

const STEPS = ["Project", "Details", "Contact"];

export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [budget, setBudget] = useState(BUDGET_RANGES[1]);
  const [timeline, setTimeline] = useState(TIMELINES[0]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-leaf-deep/30 bg-white p-10 text-center shadow-soft">
        <CheckCircle2 className="text-leaf-deep" size={40} />
        <h3 className="mt-5 font-display text-2xl font-bold text-ink">
          Thanks — your estimate request is in.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone">
          A Stoneward designer will reach out within one business day to schedule
          your free on-site visit. For anything urgent, call {SITE.phoneDisplay}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-white p-6 shadow-soft md:p-8"
    >
      <input type="hidden" name="_subject" value="New estimate request — stonewardoutdoor.com" />
      <input type="hidden" name="projectType" value={projectType} />
      <input type="hidden" name="budget" value={budget} />
      <input type="hidden" name="timeline" value={timeline} />

      <div className="mb-7 flex items-center gap-2">
        {STEPS.map((s, i) => (
          <div key={s} className="flex flex-1 items-center gap-2">
            <span
              className={cn(
                "grid h-7 w-7 shrink-0 place-items-center rounded-full text-[0.72rem] font-bold transition-colors",
                i <= step ? "bg-leaf text-olive" : "bg-mist-deep text-stone",
              )}
            >
              {i + 1}
            </span>
            <span
              className={cn(
                "text-[0.68rem] font-semibold uppercase tracking-[0.08em]",
                i <= step ? "text-ink" : "text-stone",
              )}
            >
              {s}
            </span>
            {i < STEPS.length - 1 && (
              <span className="ml-1 h-px flex-1 bg-ink/10" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      <div className={cn(step === 0 ? "block" : "hidden")}>
        <div className="space-y-6">
          <div>
            <span className={label}>What are you planning?</span>
            <ChipGroup name="pt" options={PROJECT_TYPES} value={projectType} onChange={setProjectType} />
          </div>
          <div>
            <span className={label}>Budget range</span>
            <ChipGroup name="bg" options={BUDGET_RANGES} value={budget} onChange={setBudget} />
          </div>
          <div>
            <span className={label}>Ideal timeline</span>
            <ChipGroup name="tl" options={TIMELINES} value={timeline} onChange={setTimeline} />
          </div>
        </div>
      </div>

      <div className={cn(step === 1 ? "block" : "hidden")}>
        <div className="grid gap-5">
          <div>
            <label className={label} htmlFor="qf-address">Property address</label>
            <input id="qf-address" name="address" className={field} placeholder="Street, city, ZIP" />
          </div>
          <div>
            <label className={label} htmlFor="qf-details">Tell us about the project</label>
            <textarea
              id="qf-details"
              name="details"
              rows={5}
              className={cn(field, "resize-y")}
              placeholder="Lot size, what you have now, what you are dreaming of, must-haves…"
            />
          </div>
        </div>
      </div>

      <div className={cn(step === 2 ? "block" : "hidden")}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={label} htmlFor="qf-name">Your name</label>
            <input id="qf-name" name="name" required={step === 2} className={field} placeholder="First & last name" />
          </div>
          <div>
            <label className={label} htmlFor="qf-email">Email</label>
            <input id="qf-email" name="email" type="email" required={step === 2} className={field} placeholder="you@email.com" />
          </div>
          <div>
            <label className={label} htmlFor="qf-phone">Phone</label>
            <input id="qf-phone" name="phone" type="tel" required={step === 2} className={field} placeholder={SITE.phoneDisplay} />
          </div>
          <p className="sm:col-span-2 rounded-lg bg-mist-deep px-4 py-3 text-xs leading-relaxed text-stone">
            Requesting: <strong className="text-ink">{projectType}</strong> · {budget} · {timeline}
          </p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:border-ink"
          >
            <ArrowLeft size={15} /> Back
          </button>
        ) : (
          <span />
        )}

        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            className="inline-flex items-center gap-2 rounded-full bg-leaf px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-olive shadow-leaf transition-colors hover:bg-leaf-hover"
          >
            Next <ArrowRight size={15} />
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 rounded-full bg-leaf px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-olive shadow-leaf transition-colors hover:bg-leaf-hover disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Get My Free Estimate"}
            <Send size={15} />
          </button>
        )}
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-700">
          Something went wrong. Please call {SITE.phoneDisplay} or email{" "}
          <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      )}

      <p className="mt-5 text-xs leading-relaxed text-stone/70">
        Demo form — connect a Formspree id or serverless endpoint in{" "}
        <code>lib/site-data.ts</code> before going live. No obligation; we never share your info.
      </p>
    </form>
  );
}
