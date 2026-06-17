import {
  PencilRuler,
  ShieldCheck,
  CalendarCheck,
  Wallet,
  type LucideIcon,
} from "lucide-react";

/** Maps the icon-name strings stored in site-data.ts to lucide components. */
const MAP: Record<string, LucideIcon> = {
  PencilRuler,
  ShieldCheck,
  CalendarCheck,
  Wallet,
};

export function Icon({
  name,
  size = 22,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Cmp = MAP[name] ?? ShieldCheck;
  return <Cmp size={size} className={className} aria-hidden="true" />;
}
