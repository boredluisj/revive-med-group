"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Initial Consultation",
    description:
      "Meet with our medical team to discuss your health goals, symptoms, and medical history. We take the time to understand your unique needs.",
  },
  {
    number: 2,
    title: "Comprehensive Labs",
    description:
      "We run a full panel of bloodwork and diagnostic tests to get a clear picture of your hormones, metabolic markers, and overall health.",
  },
  {
    number: 3,
    title: "Custom Treatment Plan",
    description:
      "Based on your results, we create a personalized protocol tailored specifically to your body. No cookie-cutter solutions here.",
  },
  {
    number: 4,
    title: "Ongoing Monitoring",
    description:
      "Regular follow-ups and lab rechecks ensure your treatment stays optimized. We adjust as needed so you keep feeling your best.",
  },
];

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Connector line (desktop only, not on last item) */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-0.5 bg-white/20" />
      )}

      {/* Number circle */}
      <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-primary to-dark-slate text-white text-xl font-bold mb-4 shadow-lg">
        {step.number}
      </div>

      <h3 className="font-heading text-lg font-semibold text-dark-slate mb-2">{step.title}</h3>
      <p className="text-sm text-primary/70 leading-relaxed max-w-xs">{step.description}</p>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section className="py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark-slate mb-3">How It Works</h2>
          <p className="text-primary/70 max-w-2xl mx-auto">
            Getting started is simple. Here is what to expect on your path to feeling your best.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
