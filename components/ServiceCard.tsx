import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  icon?: React.ReactNode;
  ctaText?: string;
}

export default function ServiceCard({ title, description, image, slug, icon, ctaText }: ServiceCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        {icon && <div className="mb-3 text-primary">{icon}</div>}
        <h3 className="font-heading text-xl font-semibold text-dark-slate mb-2">{title}</h3>
        <p className="text-sm text-primary/70 leading-relaxed line-clamp-3 mb-4">{description}</p>
        <Link
          href={`/services/${slug}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-dark-slate transition-colors group/link focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
        >
          {ctaText || `Explore ${title}`}
          <svg
            className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
