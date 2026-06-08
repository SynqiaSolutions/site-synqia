export const CONTATO_WHATSAPP_SESSION_KEY = "synqia_contato_whatsapp_message";

export function storeContatoWhatsAppMessage(message: string): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(CONTATO_WHATSAPP_SESSION_KEY, message);
  } catch {
    /* storage indisponível */
  }
}

export function getContatoWhatsAppMessage(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return sessionStorage.getItem(CONTATO_WHATSAPP_SESSION_KEY);
  } catch {
    return null;
  }
}

export function clearContatoWhatsAppMessage(): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(CONTATO_WHATSAPP_SESSION_KEY);
  } catch {
    /* storage indisponível */
  }
}
