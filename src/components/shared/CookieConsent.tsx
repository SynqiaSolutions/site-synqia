"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  getStoredConsent,
  COOKIE_CONSENT_STORAGE_KEY,
  COOKIE_CONSENT_UPDATED_EVENT,
  type CookieConsentState,
} from "@/lib/cookieConsent";

function setStoredConsent(essential: boolean, optional: boolean): void {
  try {
    localStorage.setItem(
      COOKIE_CONSENT_STORAGE_KEY,
      JSON.stringify({
        essential,
        optional,
        timestamp: Date.now(),
      } satisfies CookieConsentState)
    );
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_UPDATED_EVENT));
  } catch {
    // ignore
  }
}

function shouldShowBanner(): boolean {
  const consent = getStoredConsent();
  if (consent) return false;
  if (typeof window === "undefined") return true;
  const params = new URLSearchParams(window.location.search);
  if (params.get("cookies") === "preferencias") return true;
  return true;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(shouldShowBanner());
    }, 100);
  }, []);

  const acceptEssentialOnly = () => {
    setStoredConsent(true, false);
    setVisible(false);
  };

  const acceptAll = () => {
    setStoredConsent(true, true);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Preferências de cookies"
      aria-live="polite"
      className="animate-in fade-in slide-in-from-bottom-3 fixed bottom-6 left-4 z-100 w-[calc(100vw-2rem)] max-w-sm duration-500 sm:bottom-8 sm:left-6 md:left-8"
    >
      <div className="rounded-2xl border border-border/60 bg-background/75 p-3.5 shadow-lg ring-1 ring-border/40 backdrop-blur-xl sm:p-4">
        <p className="font-body text-xs leading-relaxed text-muted-foreground sm:text-sm">
          Usamos cookies essenciais e, com sua autorização, para melhorar sua
          experiência.{" "}
          <Link
            href="/cookies"
            className="text-foreground/80 underline decoration-border/80 underline-offset-2 transition-colors hover:text-primary hover:decoration-primary"
          >
            Saiba mais
          </Link>
        </p>
        <div className="mt-3 flex items-center justify-end gap-1.5">
          <Button
            type="button"
            variant="ghost"
            size="xs"
            className="text-muted-foreground hover:text-foreground"
            onClick={acceptEssentialOnly}
          >
            Apenas essenciais
          </Button>
          <Button type="button" size="sm" onClick={acceptAll}>
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  );
}
