"use client";

import { useEffect, useRef, useState } from "react";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useScrollAnimation(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      queueMicrotask(() => setIsVisible(true));
      return;
    }

    const element = ref.current;
    if (!element) return;

    // Fallback Android: se o IO não disparar em 1.6 s, força visibilidade.
    // Evita cards travados em opacity: 0 em Chrome Android com JS lento.
    const safetyTimer = setTimeout(() => setIsVisible(true), 1600);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(safetyTimer);
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => {
      clearTimeout(safetyTimer);
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
}

export function useCountUp(target: number, duration = 1500, isVisible = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return count;
}
