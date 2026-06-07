"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { blogPosts, getBlogCategories } from "@/data/blogPostsData";
import { cn } from "@/lib/utils";

export default function BlogListSection() {
  const categories = ["Todos", ...getBlogCategories()];
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section className="relative border-t border-hairline pb-20 pt-8 md:pb-28 md:pt-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border border-hairline bg-card/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, index) => (
            <Reveal key={post.slug} delay={(index % 3) * 0.08}>
              <article className="group h-full overflow-hidden rounded-2xl border border-hairline bg-card/40 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
                  <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-card/80 via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="mb-3 inline-block w-fit rounded-md bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {post.category}
                    </span>
                    <h3 className="font-heading text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-hairline pt-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="size-3.5" aria-hidden />
                          {new Date(post.publishedAt).toLocaleDateString("pt-BR")}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="size-3.5" aria-hidden />
                          {post.readingTime} min
                        </span>
                      </span>
                      <ArrowUpRight
                        className="size-4 text-primary opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden
                      />
                    </div>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
