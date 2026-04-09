"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

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
      // Smooth ease-out cubic
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
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setHasMounted(true);
      });
    });
  }, []);

  const visible = hasMounted && inView;

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: hasMounted
              ? `opacity 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) ${index * 0.1}s, transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) ${index * 0.1}s`
              : "none",
          }}
        >
          <p className="text-5xl font-heading font-bold text-dark-slate mb-2">
            <CountUp target={stat.number} suffix={stat.suffix || ""} inView={visible} />
          </p>
          <p className="text-base text-primary/70">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
