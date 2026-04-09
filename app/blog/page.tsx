import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Health Insights | Revive Medical Group",
  description:
    "Read health insights and updates from Chad Watts, DMSc, PA-C on hormone therapy, TRT, semaglutide weight loss, BHRT, and regenerative medicine.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-slate text-white py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Health Insights and Updates from Chad Watts
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed">
            Evidence-based articles on hormone therapy, weight loss, regenerative medicine, and how to take control of
            your health.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-warm-border bg-white overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-primary/50 mb-3">
                    <time dateTime={post.date}>{post.date}</time>
                    <span aria-hidden="true">|</span>
                    <span>{post.readTime} read</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="font-heading text-lg font-semibold text-dark-slate mb-2 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-primary/70 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary/50">{post.author}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-medium text-primary hover:text-dark-slate transition-colors inline-flex items-center gap-1"
                    >
                      Read More
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 md:py-24 bg-light-warm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark-slate mb-4">
            Have a Health Question?
          </h2>
          <p className="max-w-2xl mx-auto text-primary/70 mb-8 leading-relaxed">
            If something you read here resonated with your experience, book a consultation. Chad will review your
            symptoms, run the right labs, and give you a clear path forward.
          </p>
          <a
            href="https://www.revivemedgroup.com/appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-linear-to-r from-primary to-dark-slate rounded-full hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
