/**
 * Constrói a mensagem padrão do WhatsApp com UTM da página atual (quando disponível).
 * UTM é incluído para rastreio de origem do lead.
 */
export function buildWhatsAppMessage(
  baseMessage: string,
  utmQueryString?: string | null
): string {
  if (!utmQueryString || !utmQueryString.trim()) return baseMessage;
  const params = new URLSearchParams(utmQueryString.trim());
  const utmSource = params.get("utm_source");
  const utmMedium = params.get("utm_medium");
  const utmCampaign = params.get("utm_campaign");
  if (!utmSource && !utmMedium && !utmCampaign) return baseMessage;
  const parts = [baseMessage];
  const utmParts: string[] = [];
  if (utmSource) utmParts.push(`utm_source=${utmSource}`);
  if (utmMedium) utmParts.push(`utm_medium=${utmMedium}`);
  if (utmCampaign) utmParts.push(`utm_campaign=${utmCampaign}`);
  if (utmParts.length) parts.push(`(${utmParts.join(" | ")})`);
  return parts.join("\n");
}

export function buildWhatsAppUrl(number: string, text?: string): string {
  const digits = number.replace(/\D/g, "") || "0";
  const base = `https://wa.me/${digits}`;
  if (text?.trim()) {
    return `${base}?text=${encodeURIComponent(text.trim())}`;
  }
  return base;
}

/**
 * Mensagens pré-preenchidas padronizadas (§17.2 do guia).
 * Mantidas aqui para reaproveitamento consistente entre sections.
 */
export const WHATSAPP_MESSAGES = {
  default:
    "Olá! Tenho interesse em conhecer as soluções de consultoria e tecnologia da Synqia em Itumbiara.",
  navbar:
    "Olá! Vim pelo site da Synqia e gostaria de solicitar um diagnóstico.",
  diagnostico:
    "Olá! Gostaria de solicitar um diagnóstico gratuito da operação tecnológica da minha empresa.",
  consultoria:
    "Olá! Tenho interesse na Consultoria Tecnológica da Synqia para minha empresa em Itumbiara.",
  desenvolvimento:
    "Olá! Tenho um problema que precisa de solução digital. Gostaria de conversar sobre desenvolvimento sob medida.",
  automacao:
    "Olá! Tenho interesse em automação de processos para minha empresa. Gostaria de conversar.",
  integracao:
    "Olá! Preciso integrar sistemas na minha empresa. Gostaria de entender como a Synqia pode ajudar.",
  contato:
    "Olá! Vim pela página de contato do site da Synqia e gostaria de conversar.",
} as const;
