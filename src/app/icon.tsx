import { ImageResponse } from "next/og";
import { companyData } from "@/data/companyData";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0F1E",
          color: "#00E5C0",
          fontSize: 20,
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        {companyData.companyName.charAt(0).toUpperCase()}
      </div>
    ),
    { ...size }
  );
}
