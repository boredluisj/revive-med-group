interface TestimonialProps {
  quote: string;
  author: string;
  rating: number;
}

export default function Testimonial({ quote, author, rating }: TestimonialProps) {
  return (
    <article className="border-l-4 border-primary bg-white rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
      {/* Stars */}
      <div className="flex gap-0.5 mb-3" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-amber-400" : "text-gray-200"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <blockquote className="italic text-primary/80 leading-relaxed mb-4">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <p className="font-semibold text-dark-slate text-sm">{author}</p>
    </article>
  );
}
