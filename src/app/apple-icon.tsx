import { ImageResponse } from "next/og";
import { companyData } from "@/data/companyData";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A0F1E 0%, #1C2D5E 100%)",
          color: "#00E5C0",
          fontSize: 72,
          fontWeight: 800,
          fontFamily: "sans-serif",
          letterSpacing: 4,
        }}
      >
        {companyData.companyName.charAt(0).toUpperCase()}
      </div>
    ),
    { ...size }
  );
}
