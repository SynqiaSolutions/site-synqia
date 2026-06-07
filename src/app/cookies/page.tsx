import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/shared/LegalLayout";
import { companyData } from "@/data/companyData";
import AlterarPreferenciasButton from "@/app/cookies/AlterarPreferenciasButton";

const title = `Cookies — Entenda o uso de cookies | ${companyData.companyName}`;
const description =
  "Informações sobre o uso de cookies neste site, em conformidade com a LGPD. Cookies essenciais e opcionais, como alterar preferências.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cookies" },
  openGraph: { title, description, url: "/cookies" },
  twitter: { card: "summary", title, description },
};

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Uso de cookies"
      intro="Esta página explica o que são cookies, como os utilizamos e como você pode gerenciar suas preferências, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018)."
      current={{ label: "Cookies", href: "/cookies" }}
    >
      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-2 font-heading text-base font-semibold text-foreground">
            O que são cookies?
          </h2>
          <p>
            Cookies são pequenos arquivos de texto armazenados no seu dispositivo
            quando você visita um site. Eles permitem que o site lembre de
            preferências, melhore a navegação e, quando você autorizar, auxiliem
            em análises de uso.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-heading text-base font-semibold text-foreground">
            Cookies essenciais
          </h2>
          <p>
            São necessários para o funcionamento básico do site (por exemplo,
            lembrar sua escolha de cookies, segurança e carregamento correto das
            páginas). Não exigem consentimento prévio por serem estritamente
            necessários ao serviço.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-heading text-base font-semibold text-foreground">
            Cookies opcionais
          </h2>
          <p>
            Podem ser usados para melhorar sua experiência (preferências de
            interface), análises de uso do site ou outras finalidades informadas
            no banner. Só são utilizados com seu consentimento prévio, em
            conformidade com o Art. 8º da LGPD.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-heading text-base font-semibold text-foreground">
            Cookies de terceiros
          </h2>
          <p className="mb-3">
            Quando você aceita cookies opcionais, o site pode carregar
            ferramentas de terceiros que utilizam seus próprios cookies. Eles
            estão documentados abaixo e só são ativados com seu consentimento:
          </p>
          <ul className="space-y-2">
            {[
              ["Google Analytics", "análise de acesso e uso do site (métricas de página, origem, dispositivo)."],
              ["Google Tag Manager", "gerenciamento de tags e scripts (quando utilizado)."],
              ["Meta Pixel (Facebook)", "remarketing e medição de conversões em anúncios."],
            ].map(([nome, desc]) => (
              <li
                key={nome}
                className="flex gap-3 rounded-xl border border-hairline bg-card/30 p-3.5"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-foreground">{nome}</strong> — {desc}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            Você pode revogar o consentimento a qualquer momento alterando suas
            preferências (botão abaixo) ou bloqueando cookies no seu navegador.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-heading text-base font-semibold text-foreground">
            Base legal e seus direitos
          </h2>
          <p>
            O tratamento de dados por meio de cookies está alinhado à LGPD:
            consentimento para cookies opcionais, necessidade para os essenciais.
            Você pode a qualquer momento alterar suas preferências, revogar o
            consentimento ou solicitar informações sobre os dados tratados
            entrando em contato pelo e-mail:{" "}
            <a
              href={`mailto:${companyData.email}`}
              className="text-primary hover:underline"
            >
              {companyData.email}
            </a>
            .
          </p>
        </section>

        <section className="rounded-2xl border border-hairline bg-card/30 p-6">
          <h2 className="mb-2 font-heading text-base font-semibold text-foreground">
            Como alterar suas preferências
          </h2>
          <p className="mb-4">
            Ao clicar no botão abaixo, você será redirecionado à página inicial e
            o banner de cookies será exibido novamente para que você possa
            escolher entre aceitar apenas os essenciais ou todos.
          </p>
          <AlterarPreferenciasButton />
        </section>

        <p className="text-xs text-muted-foreground">
          Para mais informações sobre o tratamento de dados pessoais, consulte
          nossa{" "}
          <Link href="/politica-de-privacidade" className="text-primary hover:underline">
            Política de Privacidade
          </Link>{" "}
          e{" "}
          <Link href="/termos-de-uso" className="text-primary hover:underline">
            Termos de Uso
          </Link>
          .
        </p>
      </div>
    </LegalLayout>
  );
}
