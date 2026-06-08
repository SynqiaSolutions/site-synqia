"use client";

import { trackWhatsAppClick } from "@/lib/analytics";

type WhatsAppLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  trackLocation: string;
};

export default function WhatsAppLink({
  trackLocation,
  onClick,
  ...props
}: WhatsAppLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackWhatsAppClick(trackLocation);
        onClick?.(e);
      }}
    />
  );
}
