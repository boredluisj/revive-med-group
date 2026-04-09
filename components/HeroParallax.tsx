"use client";

import Image from "next/image";

const HEADLINE = "Experience the Revive Difference";
const WORDS = HEADLINE.split(" ");
const EASE = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";

export default function HeroParallax() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen overflow-hidden">
      {/* Background */}
      <Image
        src="/images/hero/hero-bg.png"
        alt="Warm inviting medical clinic reception area with cream walls and soft natural lighting"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Overlay — CSS fadeIn, no JS */}
      <div
        className="absolute inset-0 bg-linear-to-r from-black/55 via-black/35 to-transparent"
        style={{ animation: `heroFadeIn 1.0s ease-out 0s both` }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-24 flex items-center min-h-[90vh] md:min-h-screen">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 w-full">

          {/* Chad headshot — desktop only */}
          <div
            className="hidden md:block w-full md:w-[40%] flex-shrink-0"
            style={{ animation: `heroFadeUp 0.75s ${EASE} 0.1s both` }}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto">
              <Image
                src="/images/client/revive/chad-headshot.jpg"
                alt="Chad Watts, DMSc, PA-C, founder of Revive Medical Group"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 text-center md:text-left">

            {/* Word-by-word H1 */}
            <h1
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
              aria-label={HEADLINE}
            >
              {WORDS.map((word, i) => (
                <span
                  key={i}
                  className="inline-block mr-[0.25em]"
                  style={{
                    animation: `heroWordIn 0.65s ${EASE} ${0.15 + i * 0.09}s both`,
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg sm:text-xl text-white/90 mb-8 max-w-lg leading-relaxed drop-shadow"
              style={{ animation: `heroFadeUp 0.75s ${EASE} 0.65s both` }}
            >
              Personalized Hormone &amp; Regenerative Medicine for Your Best Self
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-center gap-4"
              style={{ animation: `heroFadeUp 0.75s ${EASE} 0.8s both` }}
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-linear-to-r from-primary to-dark-slate rounded-full hover:opacity-90 transition-opacity shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Book a Free Consultation
              </a>
              <a
                href="tel:843-299-9000"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-base font-medium"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                843-299-9000
              </a>
            </div>

            {/* Google Reviews badge */}
            <div
              className="mt-8 flex items-center gap-3 justify-center md:justify-start"
              style={{ animation: `heroFadeUp 0.75s ${EASE} 0.95s both` }}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white/80 text-sm font-medium">4.9/5 from 75 Google Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
