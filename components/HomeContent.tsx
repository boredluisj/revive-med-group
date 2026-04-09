"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import HeroParallax from "@/components/HeroParallax";
import StatsCounter from "@/components/StatsCounter";
import ServiceCard from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";
import HowItWorks from "@/components/HowItWorks";
import Accordion from "@/components/Accordion";
import { services } from "@/lib/services";

/* ── Fade-in wrapper ─────────────────────────────────────── */
function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ── FAQ data ────────────────────────────────────────────── */
const faqItems = [
  {
    question: "Is hormone therapy safe?",
    answer:
      "Hormone therapy is safe when prescribed and monitored by a qualified medical provider. We use bioidentical hormones and evidence-based protocols, and we run regular lab work to track your levels throughout treatment. Every patient receives an individualized plan designed around their specific health profile and risk factors.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Most patients notice improvements in energy and mood within the first two to four weeks. Body composition changes, increased libido, and strength gains typically become more apparent between six and twelve weeks. Full optimization can take three to six months depending on the treatment and your body's response.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We are a cash-pay clinic, which allows us to spend more time with each patient and offer treatments that insurance companies often do not cover. We can provide superbills and documentation for you to submit to your insurance company for potential reimbursement. Our team is happy to help you navigate that process.",
  },
  {
    question: "Can I do telehealth?",
    answer:
      "Yes. We offer telehealth consultations for established patients and for certain initial evaluations. This is especially convenient for follow-up visits, lab reviews, and treatment adjustments. Some services, like IV therapy and injections, do require an in-person visit at one of our clinic locations.",
  },
  {
    question: "What's included in the initial consultation?",
    answer:
      "Your initial consultation includes a comprehensive review of your symptoms and health history, a physical evaluation, and a full panel of lab work. We take the time to understand your goals and explain your options. Based on your results, we build a personalized treatment plan tailored to your body.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "While individual results vary and we cannot guarantee specific outcomes, we stand behind our protocols and the quality of care we provide. If you are not seeing the progress we expected, we will reassess your labs and adjust your treatment plan at no extra consultation cost. Your success is our priority.",
  },
];

/* ── Stats data ──────────────────────────────────────────── */
const statsData = [
  { number: 500, suffix: "+", label: "Patients Treated" },
  { number: 15, suffix: "+", label: "Years Clinical Experience" },
  { number: 4, suffix: "", label: "Clinic Locations" },
  { number: 10, suffix: "+", label: "Services Offered" },
];

/* ── Testimonials data ───────────────────────────────────── */
const testimonials = [
  {
    author: "Eduardo Andres",
    quote:
      "Hands-down, one of the best experiences I have ever had with any kind of doctor. Chad genuinely listens, explains everything clearly, and makes you feel like a priority from the moment you walk in.",
    rating: 5,
  },
  {
    author: "Josh Brown",
    quote:
      "Best weight loss and hormone clinic at the beach! The staff is incredibly knowledgeable and the results speak for themselves. I feel like a completely different person after just a few months.",
    rating: 5,
  },
  {
    author: "Nikki Lowery",
    quote:
      "If you haven't been to Revive Medical, then you are missing out. The whole team goes above and beyond to make sure you get the care and attention you deserve. Life-changing experience.",
    rating: 5,
  },
];

/* ── Credentials data ────────────────────────────────────── */
const credentials = [
  {
    icon: "🎓",
    label: "DMSc Degree",
    description:
      "Doctor of Medical Science, the highest clinical doctorate for physician assistants.",
  },
  {
    icon: "🏅",
    label: "AABRM + ABRM Certifications",
    description:
      "Board-certified in regenerative and anti-aging medicine through two leading organizations.",
  },
  {
    icon: "🩺",
    label: "PA-C License",
    description:
      "Nationally certified Physician Assistant with full prescriptive authority.",
  },
  {
    icon: "🎖️",
    label: "Military Service",
    description:
      "Proudly served in the U.S. military, bringing discipline and dedication to patient care.",
  },
];

/* ── Symptoms data ───────────────────────────────────────── */
const symptoms = [
  "Constant fatigue no matter how much you sleep",
  "Sexual dysfunction or low libido",
  "Unexplained weight gain that won't budge",
  "Brain fog and difficulty concentrating",
  "Loss of muscle mass and strength",
  "Mood swings, irritability, or anxiety",
];

/* ── Page Content ────────────────────────────────────────── */
export default function HomeContent() {
  return (
    <>
      {/* 1. Hero */}
      <HeroParallax />

      {/* 2. Trust & Credentials */}
      <section className="bg-background py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark-slate mb-3">
              Why Choose Chad Watts?
            </h2>
            <p className="text-primary/70 max-w-2xl mx-auto">
              Credentials and experience that set Revive Medical Group apart.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((cred, i) => (
              <FadeIn key={cred.label} delay={i * 0.1} className="text-center">
                <div className="text-4xl mb-3">{cred.icon}</div>
                <h3 className="font-heading text-lg font-semibold text-dark-slate mb-1">
                  {cred.label}
                </h3>
                <p className="text-sm text-primary/70 leading-relaxed">
                  {cred.description}
                </p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="text-center mt-10">
            <p className="text-sm text-primary/60 max-w-xl mx-auto">
              Chad combines advanced education, military-grade discipline, and a
              genuine passion for helping patients reclaim their health.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. Problem Recognition */}
      <section className="relative bg-dark-slate py-14 md:py-24 noise-overlay">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-3">
              Are You Experiencing...
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {symptoms.map((symptom, i) => (
              <FadeIn key={i} delay={i * 0.08} className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-white/90">{symptom}</span>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5} className="text-center mt-12">
            <p className="text-xl font-heading font-semibold text-secondary mb-6">
              You&apos;re Not Alone. Let&apos;s Fix This.
            </p>
            <a
              href="https://www.revivemedgroup.com/appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-dark-slate bg-secondary rounded-full hover:opacity-90 transition-opacity shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              Book a Free Consultation
            </a>
          </FadeIn>
        </div>
      </section>

      {/* 4. Services Grid */}
      <section className="bg-light-warm py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark-slate mb-3">
              Our Services
            </h2>
            <p className="text-primary/70 max-w-2xl mx-auto">
              Comprehensive treatments tailored to your body, your goals, and
              your life.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 0.05}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  slug={service.slug}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Stats Counter */}
      <section className="bg-primary py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-3">
              Revive by the Numbers
            </h2>
          </FadeIn>

          <div className="[&_p]:text-white">
            <StatsCounter stats={statsData} />
          </div>
        </div>
      </section>

      {/* 6. About Chad Snapshot */}
      <section className="bg-background py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <FadeIn className="w-full md:w-[45%] flex-shrink-0">
              <div className="relative aspect-[5/7] rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto md:mx-0">
                <Image
                  src="/images/chad-headshot.jpg"
                  alt="Chad Watts, DMSc, PA-C, founder of Revive Medical Group"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.15} className="flex-1 text-center md:text-left">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark-slate mb-4">
                Meet Chad Watts, DMSc, PA-C
              </h2>
              <p className="text-primary/80 leading-relaxed mb-4">
                Chad Watts is a Doctor of Medical Science and board-certified
                Physician Assistant with over 15 years of clinical experience.
                Before entering medicine, Chad served in the U.S. military,
                where he developed the discipline, work ethic, and commitment to
                service that define his approach to patient care today.
              </p>
              <p className="text-primary/80 leading-relaxed mb-4">
                His philosophy is simple: listen first, test thoroughly, and
                treat the root cause. Chad does not push products or rush
                through appointments. He takes the time to understand what each
                patient is going through and builds a plan around their unique
                biology and goals. His focus is on regenerative medicine, hormone
                optimization, and helping patients feel like themselves again.
              </p>
              <p className="text-primary/80 leading-relaxed mb-6">
                Whether you are dealing with fatigue, weight gain, hormonal
                changes, or just not feeling your best, Chad and the Revive team
                are here to help you take back control.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-linear-to-r from-primary to-dark-slate rounded-full hover:opacity-90 transition-opacity shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Full Bio &amp; Story
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="bg-light-warm py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark-slate mb-3">
              What Our Patients Say
            </h2>
            {/* Google Reviews badge */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-primary/70 font-medium text-sm">
                4.9 out of 5 based on 75 Google Reviews
              </span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={t.author} delay={i * 0.1}>
                <Testimonial
                  quote={t.quote}
                  author={t.author}
                  rating={t.rating}
                />
              </FadeIn>
            ))}
          </div>

          {/* Additional review quote */}
          <FadeIn delay={0.3} className="mt-8">
            <div className="bg-white rounded-xl p-6 max-w-2xl mx-auto border-l-4 border-primary shadow-sm">
              <p className="text-primary/80 italic leading-relaxed">
                &quot;Very friendly staff, very knowledgeable. They will tell you everything up front and work up a best plan going forward.&quot;
              </p>
              <p className="text-sm font-semibold text-dark-slate mt-3">Trey Duncanson</p>
              <div className="flex items-center gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. How It Works */}
      <div className="relative bg-dark-slate noise-overlay [&_h2]:text-white [&_h3]:text-white [&_p]:text-white/70">
        <div className="relative z-10">
          <HowItWorks />
        </div>
      </div>

      {/* 9. FAQ */}
      <section className="bg-background py-14 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark-slate mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-primary/70 max-w-2xl mx-auto">
              Common questions from patients exploring hormone therapy and
              regenerative medicine.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Accordion items={faqItems} />
          </FadeIn>
        </div>
      </section>

      {/* 10. CTA Band */}
      <section className="bg-linear-to-r from-primary to-dark-slate py-14 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-3">
              Ready to Revive Your Health?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Take the first step toward feeling like yourself again. Schedule
              your consultation today and discover what personalized care can do.
            </p>
            <a
              href="https://www.revivemedgroup.com/appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 text-base font-medium text-dark-slate bg-secondary rounded-full hover:opacity-90 transition-opacity shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              Book Now
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
