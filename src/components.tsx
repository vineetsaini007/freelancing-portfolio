import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
export function FadeIn({
  children,
  delay = 0,
  y = 30,
  x = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{
        opacity: reduced ? 1 : 0,
        x: reduced ? 0 : x,
        y: reduced ? 0 : y,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
export function ContactButton() {
  return (
    <a className="contact-button" href="#contact">
      Contact Me
    </a>
  );
}
