import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/services",
    "/portfolio",
    "/process",
    "/service-areas",
    "/financing",
    "/reviews",
    "/about",
    "/contact",
  ];
  // Build-time constant; bump when content changes.
  const lastModified = new Date("2026-06-17");

  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified,
    changeFrequency: route === "/portfolio" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/contact" ? 0.9 : 0.8,
  }));
}
