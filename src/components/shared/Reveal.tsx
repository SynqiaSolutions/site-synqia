"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  /** Atraso da animação em segundos (para cascatas). */
  delay?: number;
  /** Deslocamento vertical inicial em px. */
  y?: number;
}

/**
 * Revelação discreta ao entrar na viewport (uma única vez).
 * Respeita prefers-reduced-motion — sem movimento para quem desativa animações.
 *
 * Fallback Android: se o IntersectionObserver não disparar em 1.4 s
 * (ex.: JS lento, Chrome Android antigo), força opacity: 1 via `animate`.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
  ...props
}: RevealProps) {
  const reduce = useReducedMotion();
  const [safeVisible, setSafeVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setSafeVisible(true), 1400);
    return () => clearTimeout(id);
  }, []);

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      animate={safeVisible ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
