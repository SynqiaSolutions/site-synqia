import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogPostContent from "@/components/sections/blog/BlogPostContent";
import JsonLdArticle from "@/components/seo/JsonLdArticle";
import {
  getAllBlogSlugs,
  getBlogPostBySlug,
} from "@/data/blogPostsData";
import { buildMetadataTemplate } from "@/lib/seo";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Artigo não encontrado" };
  }

  return buildMetadataTemplate({
    path: `/blog/${post.slug}`,
    title: `${post.title} | Blog Synqia`,
    description: post.excerpt,
    keywords: [
      post.category.toLowerCase(),
      "blog synqia",
      "ti itumbiara",
      "consultoria ti",
      "itumbiara go",
    ],
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLdArticle post={post} />
      <Navbar />
      <main>
        <BlogPostContent post={post} />
      </main>
      <Footer />
    </>
  );
}
