import { companyData } from "@/data/companyData";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;

export const DEFAULT_OG_SUBTITLE =
  "Consultoria de TI e desenvolvimento de software em Itumbiara-GO";

export function createOgImageElement(
  title: string,
  subtitle: string = DEFAULT_OG_SUBTITLE
) {
  const titleFontSize = title.length > 70 ? 40 : title.length > 45 ? 48 : 58;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background:
          "linear-gradient(90deg, #0A0F1E 0%, #1C2D5E 62%, #00E5C0 100%)",
        padding: "56px",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 24,
          letterSpacing: 3,
          textTransform: "uppercase",
          opacity: 0.9,
        }}
      >
        {companyData.companyName}
      </div>
      <div
        style={{
          fontSize: titleFontSize,
          lineHeight: 1.08,
          fontWeight: 800,
          maxWidth: "90%",
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: 22, opacity: 0.9, maxWidth: "85%" }}>
        {subtitle}
      </div>
    </div>
  );
}
