import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/data/blogPostsData";

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article className="relative isolate overflow-hidden pb-24 pt-32 md:pt-36">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="bg-grid mask-radial-fade absolute inset-x-0 top-0 h-[360px] opacity-40" />
      </div>

      <div className="mx-auto max-w-[760px] px-6">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Voltar ao blog
        </Link>

        <span className="mb-4 inline-block rounded-md bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
          {post.category}
        </span>

        <h1 className="font-heading text-3xl font-bold leading-tight tracking-[-0.02em] text-foreground md:text-[42px]">
          {post.title}
        </h1>

        <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="size-4" aria-hidden />
            {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-4" aria-hidden />
            {post.readingTime} min de leitura
          </span>
        </div>

        <div className="relative mb-10 mt-8 aspect-16/10 overflow-hidden rounded-2xl border border-hairline">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="760px"
            className="object-cover"
            priority
          />
        </div>

        <div
          className="[&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-[-0.01em] [&_h2]:text-foreground [&_p]:mb-4 [&_p]:text-[17px] [&_p]:leading-[1.75] [&_p]:text-muted-foreground [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:text-muted-foreground [&_li]:mb-2 [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4"
          dangerouslySetInnerHTML={{ __html: post.content.trim() }}
        />

        <div className="glass mt-14 flex flex-col items-start gap-4 rounded-2xl p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-heading text-lg font-bold text-foreground">
              Precisa de ajuda com tecnologia?
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Solicite um diagnóstico sem compromisso com a Synqia.
            </p>
          </div>
          <Button
            size="lg"
            className="group h-11 shrink-0 px-5"
            render={<Link href="/#contato" />}
          >
            Solicitar diagnóstico
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Button>
        </div>
      </div>
    </article>
  );
}
