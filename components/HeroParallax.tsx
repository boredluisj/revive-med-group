"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroParallax() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [visibleWords, setVisibleWords] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const headline = "Experience the Revive Difference";
  const words = headline.split(" ");

  // Word stagger animation on mount
  useEffect(() => {
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

    // Start after a small initial delay
    const timeout = setTimeout(() => {
      frame = requestAnimationFrame(reveal);
    }, 300);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [words.length]);

  // Check desktop on mount
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  // Parallax scroll effect (desktop only)
  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  // Map scroll 0-400 to opacity 1-0 and background transition
  const parallaxProgress = Math.min(scrollY / 400, 1);
  const photoOpacity = 1 - parallaxProgress;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg,
          rgba(89, 99, 126, ${0.08 - parallaxProgress * 0.08}) 0%,
          rgba(235, 229, 213, ${0.05 + parallaxProgress * 0.05}) 50%,
          rgba(255, 251, 240, ${0.9 + parallaxProgress * 0.1}) 100%)`,
      }}
    >
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Chad's headshot */}
          <div
            className="w-full md:w-[40%] flex-shrink-0"
            style={{ opacity: isDesktop ? photoOpacity : 1 }}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/chad-headshot.jpg"
                alt="Chad Watts, DMSc, PA-C, founder of Revive Medical Group"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-slate mb-6 leading-tight">
              {words.map((word, i) => (
                <span
                  key={i}
                  className="inline-block mr-[0.3em] transition-all duration-500"
                  style={{
                    opacity: i < visibleWords ? 1 : 0,
                    transform: i < visibleWords ? "translateY(0)" : "translateY(12px)",
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p className="text-lg sm:text-xl text-primary/80 mb-8 max-w-lg leading-relaxed">
              Personalized Hormone &amp; Regenerative Medicine for Your Best Self
            </p>

            <a
              href="https://www.revivemedgroup.com/appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-linear-to-r from-primary to-dark-slate rounded-full hover:opacity-90 transition-opacity shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
