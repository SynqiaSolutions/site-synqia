import type { BlogPost } from "@/data/blogPostsData";
import { companyData } from "@/data/companyData";
import { toAbsoluteUrl } from "@/lib/seo";

interface JsonLdArticleProps {
  post: BlogPost;
}

export default function JsonLdArticle({ post }: JsonLdArticleProps) {
  const url = toAbsoluteUrl(`/blog/${post.slug}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage.startsWith("/")
      ? toAbsoluteUrl(post.coverImage)
      : post.coverImage,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Leomir Dias",
    },
    publisher: {
      "@type": "Organization",
      name: companyData.companyName,
      logo: {
        "@type": "ImageObject",
        url: toAbsoluteUrl("/enterprise-logo-blue.png"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: "pt-BR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
