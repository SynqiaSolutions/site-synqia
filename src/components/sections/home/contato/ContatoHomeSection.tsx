"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  Send,
  Loader2,
  MessageCircle,
  Mail,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Instagram,
} from "lucide-react";
import Reveal from "../../shared/Reveal";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/shared/SocialLinks";
import { companyData } from "@/data/companyData";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

const STORAGE_KEY = "synqia_contato_leads";
const HONEYPOT_NAME = "website_url";

interface ContatoForm {
  nome: string;
  empresa: string;
  telefone: string;
  assunto: string;
  mensagem: string;
  [HONEYPOT_NAME]: string;
}

const INITIAL_FORM: ContatoForm = {
  nome: "",
  empresa: "",
  telefone: "",
  assunto: companyData.quoteOptions[0] ?? "",
  mensagem: "",
  [HONEYPOT_NAME]: "",
};

const garantias = [
  "Resposta no mesmo dia útil",
  "Sem compromisso de contratação",
  "Você fala diretamente com o responsável técnico",
];

export default function ContatoHomeSection() {
  const [form, setForm] = useState<ContatoForm>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = buildWhatsAppUrl(
    companyData.whatsapp,
    WHATSAPP_MESSAGES.diagnostico
  );
  const primaryUnit = companyData.units[0];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (form[HONEYPOT_NAME]) return;
    setIsSubmitting(true);

    const message = [
      `Olá! Meu nome é ${form.nome}.`,
      form.empresa ? `Empresa: ${form.empresa}` : "",
      form.telefone ? `Telefone: ${form.telefone}` : "",
      `Assunto: ${form.assunto}`,
      form.mensagem ? `Mensagem: ${form.mensagem}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const entry = {
        ...form,
        [HONEYPOT_NAME]: undefined,
        timestamp: new Date().toISOString(),
      };
      const raw = localStorage.getItem(STORAGE_KEY);
      const list = raw ? (JSON.parse(raw) as unknown[]) : [];
      list.push(entry);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {
      /* storage indisponível */
    }

    window.open(
      buildWhatsAppUrl(companyData.whatsapp, message),
      "_blank",
      "noopener,noreferrer"
    );
    setIsSubmitting(false);
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <section
      id="contato"
      className="relative scroll-mt-24 overflow-hidden py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[400px] w-[700px] max-w-full -translate-x-1/2 rounded-full blur-[120px]"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.10) 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Coluna esquerda */}
          <Reveal className="lg:pt-4">
            <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              Contato
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-foreground md:text-4xl">
              Vamos conversar sobre o seu projeto.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Conte o cenário atual da sua empresa. Sem compromisso, sem
              jargão. Respondemos no mesmo dia útil com uma análise direta do
              que pode ser feito.
            </p>

            <ul className="mt-7 space-y-3">
              {garantias.map((g) => (
                <li
                  key={g}
                  className="flex items-center gap-3 text-sm text-foreground/90"
                >
                  <CheckCircle2
                    className="size-5 shrink-0 text-primary"
                    aria-hidden
                  />
                  {g}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <ChannelRow
                icon={<MessageCircle className="size-4" aria-hidden />}
                label="WhatsApp"
                value={companyData.phone}
                href={whatsappUrl}
                external
              />
              <ChannelRow
                icon={<Instagram className="size-4" aria-hidden />}
                label="Instagram"
                value={companyData.social.instagram.label}
                href={companyData.social.instagram.url}
                external
              />
              <ChannelRow
                icon={<Mail className="size-4" aria-hidden />}
                label="E-mail"
                value={companyData.email}
                href={`mailto:${companyData.email}`}
              />
              {primaryUnit && (
                <ChannelRow
                  icon={<MapPin className="size-4" aria-hidden />}
                  label="Endereço"
                  value={`${primaryUnit.address}, ${primaryUnit.name}`}
                  href={primaryUnit.mapsLinkUrl}
                  external
                />
              )}
            </div>
          </Reveal>

          {/* Formulário */}
          <Reveal delay={0.1}>
            <div className="glass rounded-3xl p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                  <span className="flex size-16 items-center justify-center rounded-full bg-primary/15">
                    <CheckCircle2 className="size-8 text-primary" aria-hidden />
                  </span>
                  <div>
                    <p className="font-heading text-lg font-bold text-foreground">
                      Mensagem enviada!
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Continue a conversa no WhatsApp que acabou de abrir.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Enviar outra mensagem
                    <ExternalLink className="size-3.5" aria-hidden />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative">
                  <div className="sr-only" aria-hidden>
                    <label htmlFor={HONEYPOT_NAME}>Deixe em branco</label>
                    <input
                      id={HONEYPOT_NAME}
                      name={HONEYPOT_NAME}
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form[HONEYPOT_NAME]}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          [HONEYPOT_NAME]: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Field
                      id="home-contato-nome"
                      label="Nome"
                      required
                      autoComplete="name"
                      value={form.nome}
                      onChange={(v) => setForm((f) => ({ ...f, nome: v }))}
                    />
                    <Field
                      id="home-contato-empresa"
                      label="Empresa"
                      autoComplete="organization"
                      value={form.empresa}
                      onChange={(v) => setForm((f) => ({ ...f, empresa: v }))}
                    />
                    <Field
                      id="home-contato-telefone"
                      label="Telefone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={form.telefone}
                      onChange={(v) => setForm((f) => ({ ...f, telefone: v }))}
                    />
                    <div>
                      <label
                        htmlFor="home-contato-assunto"
                        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Assunto *
                      </label>
                      <select
                        id="home-contato-assunto"
                        required
                        value={form.assunto}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, assunto: e.target.value }))
                        }
                        className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                      >
                        {companyData.quoteOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="home-contato-mensagem"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Mensagem (opcional)
                    </label>
                    <textarea
                      id="home-contato-mensagem"
                      rows={4}
                      value={form.mensagem}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, mensagem: e.target.value }))
                      }
                      placeholder="Descreva brevemente o desafio que sua empresa enfrenta."
                      className="w-full resize-none rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Ao enviar, você será redirecionado ao WhatsApp e concorda
                    com a{" "}
                    <Link
                      href="/politica-de-privacidade"
                      className="text-primary hover:underline"
                    >
                      Política de Privacidade
                    </Link>
                    .
                  </p>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="mt-5 h-12 w-full text-[15px]"
                  >
                    {isSubmitting ? (
                      <>
                        Enviando…
                        <Loader2 className="size-4 animate-spin" aria-hidden />
                      </>
                    ) : (
                      <>
                        Enviar mensagem
                        <Send className="size-4" aria-hidden />
                      </>
                    )}
                  </Button>
                </form>
              )}

              <div className="mt-6 border-t border-hairline pt-6 flex flex-col items-center justify-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground text-center">
                  Redes sociais
                </p>
                <SocialLinks />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

interface ChannelRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

function ChannelRow({ icon, label, value, href, external }: ChannelRowProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-3 rounded-xl border border-hairline bg-card/30 p-3.5 transition-colors hover:border-primary/40 hover:bg-card/60"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <span className="block truncate text-sm text-foreground">{value}</span>
      </span>
    </a>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
      >
        {label}
        {required && " *"}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
