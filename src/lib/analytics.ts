/**
 * Eventos de analytics (GA4 / GTM). Só disparam quando gtag/dataLayer estão disponíveis
 * após consentimento de cookies opcionais.
 */

type EventParams = Record<string, string | number | boolean>;

function pushToDataLayer(eventName: string, params?: EventParams): void {
  if (typeof window === "undefined") return;
  const dataLayer = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
  if (!dataLayer) return;
  dataLayer.push({ event: eventName, ...params });
}

export function trackEvent(eventName: string, params?: EventParams): void {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (gtag) gtag("event", eventName, params);
  pushToDataLayer(eventName, params);
}

export function trackPageView(path: string): void {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!gaId || typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (gtag) {
    gtag("config", gaId, { page_path: path });
  }
  pushToDataLayer("page_view", { page_path: path });
}

export function trackWhatsAppClick(location: string): void {
  trackEvent("whatsapp_click", { link_location: location });
}

export function trackLeadFormSubmit(): void {
  trackEvent("generate_lead", { form_name: "contato_home" });
}
