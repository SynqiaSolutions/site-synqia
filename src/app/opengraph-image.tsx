import { ImageResponse } from "next/og";
import { createOgImageElement, OG_IMAGE_SIZE } from "@/lib/ogImage";

export const alt = "Synqia — Consultoria Tecnológica em Itumbiara-GO";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    createOgImageElement(
      "Consultoria de TI e software sob medida",
      "Itumbiara-GO e região · Atendimento presencial e remoto"
    ),
    { ...size }
  );
}
