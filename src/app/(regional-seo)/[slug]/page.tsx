import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SeoLocalPageContent from "@/components/pages/SeoLocalPageContent";
import {
  getSeoLocalPageBySlug,
  seoLocalPages,
} from "@/data/seoLocalData";
import { buildMetadataTemplate } from "@/lib/seo";

interface RegionalSeoPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return seoLocalPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: RegionalSeoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoLocalPageBySlug(slug);
  if (!page) return { title: "Página não encontrada" };

  return buildMetadataTemplate({
    path: page.path,
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
  });
}

export default async function RegionalSeoPage({ params }: RegionalSeoPageProps) {
  const { slug } = await params;
  const page = getSeoLocalPageBySlug(slug);
  if (!page) notFound();

  return (
    <>
      <Navbar />
      <main>
        <SeoLocalPageContent page={page} />
      </main>
      <Footer />
    </>
  );
}
