import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogListSection from "@/components/sections/blog/BlogListSection";
import { buildMetadataTemplate } from "@/lib/seo";

export const metadata: Metadata = buildMetadataTemplate({
  path: "/blog",
  title: "Blog Synqia | Tecnologia e TI para empresas em Itumbiara-GO",
  description:
    "Artigos sobre Tecnologia, Consultoria, Suporte Empresarial, Desenvolvimento de Sistemas e Presença Digital para empresas.",
  keywords: [
    "blog tecnologia itumbiara",
    "consultoria ti artigos",
    "tecnologia empresas goiás",
    "sistemas sob medida",
    "Synqia blog",
  ],
});

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <header className="mx-auto max-w-[1200px] px-6 pb-2 pt-32 text-center md:pt-36">
          <h1 className="font-heading text-3xl font-bold tracking-[-0.02em] text-foreground md:text-4xl">
            Blog Synqia
          </h1>
          <p className="mx-auto mt-4 max-w-[640px] text-base leading-relaxed text-muted-foreground md:text-lg">
            Artigos sobre tecnologia, consultoria, suporte empresarial, desenvolvimento de software,
            infraestrutura e transformação digital para empresas.
          </p>
        </header>
        <BlogListSection />
      </main>
      <Footer />
    </>
  );
}
