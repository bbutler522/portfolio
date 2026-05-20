import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { getPostBySlug, getPostSlugs } from "@/lib/content";
import { Prose } from "@/components/Prose";
import { markdownToHtml } from "@/lib/markdown";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function WritingPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const html = await markdownToHtml(post.content);
  const date = format(new Date(post.publishedAt), "MMMM yyyy");

  return (
    <article>
      <header className="shell border-b border-line-soft pb-10 pt-14 md:pt-16">
        <nav className="mb-6 text-sm text-ink-mute">
          <Link href="/writing" className="hover:text-ink">
            ← Writing
          </Link>
        </nav>
        <h1 className="display max-w-3xl text-4xl text-ink md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-3 text-ink-mute">
          {date}
          {post.readingTime && ` · ${post.readingTime}`}
          {post.status === "draft" && " · Draft"}
        </p>
      </header>

      <div className="shell max-w-[var(--content)] py-12 pb-20">
        <Prose html={html} />
        <p className="mt-12 text-sm text-ink-mute">
          <Link href="/writing" className="text-accent hover:underline">
            ← All posts
          </Link>
        </p>
      </div>
    </article>
  );
}
