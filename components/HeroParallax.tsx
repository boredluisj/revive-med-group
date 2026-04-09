"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroParallax() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const fallbackRef = useRef<HTMLDivElement>(null);

  const [visibleWords, setVisibleWords] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const headline = "Experience the Revive Difference";
  const words = headline.split(" ");

  // Word stagger animation on mount
  useEffect(() => {
    setIsMounted(true);
    let frame: number;
    let current = 0;

    const reveal = () => {
      current++;
      setVisibleWords(current);
      if (current < words.length) {
        frame = requestAnimationFrame(() => {
          setTimeout(() => {
            frame = requestAnimationFrame(reveal);
          }, 180);
        });
      }
    };

    const timeout = setTimeout(() => {
      frame = requestAnimationFrame(reveal);
    }, 300);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [words.length]);

  // GSAP ScrollTrigger for smooth video scrubbing
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Mobile: autoplay loop instead of scroll-scrub
      video.autoplay = true;
      video.loop = true;
      video.play().catch(() => {});
      return;
    }

    video.pause();

    const onReady = () => {
      // Fade out fallback image as video takes over
      if (fallbackRef.current) {
        gsap.to(fallbackRef.current, {
          opacity: 0,
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "30% top",
            scrub: true,
          },
        });
      }

      // Smooth video scrub with 0.5s easing lag
      gsap.to(video, {
        currentTime: video.duration,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });
    };

    if (video.readyState >= 1) {
      onReady();
    } else {
      video.addEventListener("loadedmetadata", onReady);
    }

    return () => {
      video.removeEventListener("loadedmetadata", onReady);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-[180vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Scroll-scrub video background */}
        <video
          ref={videoRef}
          src="/images/hero/hero-scroll.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
          role="presentation"
        />

        {/* Static hero image fallback (loads instantly while video buffers) */}
        <div ref={fallbackRef} className="absolute inset-0" style={{ opacity: 0.7 }}>
          <Image
            src="/images/hero/hero-bg.png"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center h-full">
          <div className="max-w-2xl">
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white mb-6 leading-[1.1] drop-shadow-lg">
              {words.map((word, i) => (
                <span
                  key={i}
                  className="inline-block mr-[0.3em] transition-all duration-500"
                  style={{
                    opacity: isMounted && i < visibleWords ? 1 : 0,
                    transform:
                      isMounted && i < visibleWords
                        ? "translateY(0)"
                        : "translateY(12px)",
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-lg leading-relaxed drop-shadow">
              Personalized Hormone &amp; Regenerative Medicine for Your Best Self
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
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
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                843-299-9000
              </a>
            </div>

            {/* Google Reviews mini badge */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white/80 text-sm font-medium">
                4.9/5 from 75 Google Reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
