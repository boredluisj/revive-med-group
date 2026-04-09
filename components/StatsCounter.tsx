"use client";

import { useRef, useEffect, useState } from "react";

interface Stat {
  number: number;
  suffix?: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
}

const EASE = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";

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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf: number;
    let observer: IntersectionObserver;
    raf = requestAnimationFrame(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    });
    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center"
          style={
            visible
              ? { animation: `fadeUp 0.65s ${EASE} ${index * 0.12}s both` }
              : { opacity: 0 }
          }
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
