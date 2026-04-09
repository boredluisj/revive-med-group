"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { EASE, staggerContainer, staggerItem } from "@/lib/animations";

interface Stat {
  number: number;
  suffix?: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
}

function CountUp({ target, suffix = "", inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(target);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startValue = Math.round(target * 0.8);
    setCount(startValue);

    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(startValue + eased * (target - startValue)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-2 lg:grid-cols-4 gap-8"
      variants={prefersReducedMotion ? undefined : staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center opacity-100"
          variants={prefersReducedMotion ? undefined : staggerItem}
        >
          <p className="text-5xl font-heading font-bold text-dark-slate mb-2">
            <CountUp target={stat.number} suffix={stat.suffix || ""} inView={isInView} />
          </p>
          <p className="text-base text-primary/70">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
