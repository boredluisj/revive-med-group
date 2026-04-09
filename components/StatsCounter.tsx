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
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

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
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <p className="text-5xl font-heading font-bold text-dark-slate mb-2">
            <CountUp target={stat.number} suffix={stat.suffix || ""} inView={inView} />
          </p>
          <p className="text-base text-primary/70">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
