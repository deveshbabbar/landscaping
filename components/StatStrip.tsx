import { STATS } from "@/lib/site-data";

/** Row of headline numbers, leaf-green accent on the value. */
export function StatStrip({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
      {STATS.map((s) => (
        <div key={s.label} className="text-center">
          <p className="font-display text-[2.4rem] font-extrabold leading-none text-leaf md:text-5xl">
            {s.value}
          </p>
          <p
            className={
              "mx-auto mt-3 max-w-[16ch] text-[0.72rem] font-semibold uppercase tracking-[0.1em] " +
              (tone === "light" ? "text-mist/70" : "text-stone")
            }
          >
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
