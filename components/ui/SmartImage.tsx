import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * next/image wrapper that fills its (relatively-positioned) parent and adds a
 * subtle slow zoom on hover when `zoom` is set. Always pass meaningful alt text.
 * Swap the Unsplash URLs in site-data.ts for real /public/images/* paths.
 */
export function SmartImage({
  src,
  alt,
  priority = false,
  sizes = "100vw",
  className,
  imgClassName,
  zoom = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  zoom?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-mist-deep", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          "object-cover",
          zoom &&
            "transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
          imgClassName,
        )}
      />
    </div>
  );
}
