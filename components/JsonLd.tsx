/**
 * Serializes one or more JSON-LD objects into a single <script> tag.
 * Server component — no client JS shipped.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      // JSON-LD is static, trusted, build-time content.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
