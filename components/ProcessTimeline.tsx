import { Check } from "lucide-react";
import { PROCESS } from "@/lib/site-data";
import { Reveal } from "@/components/ui/Reveal";

/** Numbered four-step process timeline with a connecting rail. */
export function ProcessTimeline() {
  return (
    <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {PROCESS.map((step, i) => (
        <Reveal as="li" key={step.step} delay={i * 90} className="relative">
          <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-7 shadow-soft">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-leaf font-display text-lg font-extrabold text-olive">
                {step.step}
              </span>
              <h3 className="font-display text-xl font-bold text-ink">
                {step.title}
              </h3>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-stone">{step.body}</p>
            <ul className="mt-5 space-y-2.5 border-t border-ink/10 pt-5">
              {step.detail.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm text-ink">
                  <Check size={15} className="mt-0.5 shrink-0 text-leaf-deep" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
