import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Revive Medical Group`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: `https://revivemedgroup.com${post.featuredImage}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: "Doctor of Medical Science, PA-C",
    },
    publisher: {
      "@type": "Organization",
      name: "Revive Medical Group",
      url: "https://revivemedgroup.com",
    },
    description: post.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://revivemedgroup.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Image */}
      <section className="relative h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark-slate/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-3 text-sm text-white/70">
              <span>{post.author}</span>
              <span aria-hidden="true">|</span>
              <time dateTime={post.date}>{post.date}</time>
              <span aria-hidden="true">|</span>
              <span>{post.readTime} read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-dark-slate prose-p:text-primary/80 prose-p:leading-relaxed prose-a:text-primary prose-a:underline hover:prose-a:text-dark-slate prose-strong:text-dark-slate prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-14 md:py-24 bg-light-warm">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-warm-border p-8">
            <h2 className="font-heading text-xl font-semibold text-dark-slate mb-3">
              About the Author
            </h2>
            <h3 className="font-semibold text-dark-slate mb-2">Chad Watts, DMSc, PA-C</h3>
            <p className="text-primary/70 leading-relaxed text-sm">
              Chad Watts is the founder and lead provider at Revive Medical Group in North Myrtle Beach, SC. With a
              Doctor of Medical Science degree and board certification as a Physician Assistant, Chad specializes in
              hormone therapy, regenerative medicine, and medical weight loss. His patient-first approach focuses on
              identifying root causes and creating personalized treatment protocols that deliver measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-14 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-dark-slate mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="rounded-xl border border-warm-border bg-white overflow-hidden group hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={related.featuredImage}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-base font-semibold text-dark-slate group-hover:text-primary transition-colors leading-snug">
                      {related.title}
                    </h3>
                    <p className="text-xs text-primary/50 mt-2">{related.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-14 md:py-24 bg-dark-slate text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="max-w-2xl mx-auto text-white/70 mb-8 leading-relaxed">
            Schedule a consultation with Chad Watts to discuss your symptoms, get lab work done, and build a treatment
            plan tailored to your needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-dark-slate bg-white rounded-full hover:bg-white/90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark-slate"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
