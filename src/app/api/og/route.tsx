import { ImageResponse } from "next/og";
import { companyData } from "@/data/companyData";
import { createOgImageElement, DEFAULT_OG_SUBTITLE, OG_IMAGE_SIZE } from "@/lib/ogImage";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") || companyData.companyName).slice(
    0,
    110
  );

  return new ImageResponse(
    createOgImageElement(title, DEFAULT_OG_SUBTITLE),
    { ...OG_IMAGE_SIZE }
  );
}
