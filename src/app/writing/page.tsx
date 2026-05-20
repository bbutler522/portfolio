import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { getAllPosts } from "@/lib/content";
import { writingEnabled } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays and notes on software, growth engineering, and building things.",
};

export default async function WritingPage() {
  if (!writingEnabled) notFound();

  const posts = await getAllPosts();

  return (
    <>
      <section className="shell border-b border-line-soft pb-10 pt-14 md:pt-16">
        <p className="eyebrow mb-2">Writing</p>
        <h1 className="display text-4xl text-ink md:text-5xl">
          Notes from the build
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Posts on engineering, growth surfaces, and the occasional detour.
          Infrequent but I try to make them worth your time.
        </p>
      </section>

      <section className="shell py-14 pb-20">
        <ul className="divide-y divide-line-soft">
          {posts.map((post) => (
            <li key={post.slug} className="py-6 first:pt-0">
              <Link
                href={`/writing/${post.slug}`}
                className="group flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
              >
                <span className="text-lg font-medium text-ink transition group-hover:text-accent">
                  {post.title}
                </span>
                <span className="text-sm text-ink-mute">
                  {format(new Date(post.publishedAt), "MMM yyyy")}
                  {post.readingTime && ` · ${post.readingTime}`}
                  {post.status === "draft" && " · Coming soon"}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-sm text-ink-mute">
          Want these in your inbox?{" "}
          <Link href="/contact" className="text-accent hover:underline">
            Drop me a line
          </Link>{" "}
          and I&apos;ll add you to the (very) occasional mailing list.
        </p>
      </section>
    </>
  );
}
