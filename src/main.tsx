import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { useReducedMotion } from "framer-motion";

import "./style.css";
import { FadeIn, ContactButton } from "./components";
import {
  MarqueeSection,
  AboutSection,
  ServicesSection,
  ProjectsSection,
} from "./sections";
function Magnet({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0, active: false });
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced || matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      const x = e.clientX - r.left - r.width / 2,
        y = e.clientY - r.top - r.height / 2;
      const active =
        Math.abs(x) < r.width / 2 + 150 && Math.abs(y) < r.height / 2 + 150;
      setPos({ x: active ? x / 3 : 0, y: active ? y / 3 : 0, active });
    };
    const reset = () => setPos({ x: 0, y: 0, active: false });
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", reset);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", reset);
    };
  }, [reduced]);
  return (
    <div ref={ref}>
      <div
        style={{
          transform: `translate3d(${pos.x}px,${pos.y}px,0)`,
          transition: pos.active
            ? "transform .3s ease-out"
            : "transform .6s ease-in-out",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
function HeroSection() {
  return (
    <section className="hero">
      <FadeIn y={-20}>
        <nav aria-label="Main navigation">
          {[
            ["About", "about"],
            ["Services", "services"],
            ["Projects", "projects"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </FadeIn>
      <FadeIn delay={0.15} y={40} className="heading-wrap">
        <h1 className="hero-heading">Hi, i'm Vineet</h1>
      </FadeIn>
      <div className="portrait">
        <FadeIn delay={0.6}>
          <Magnet>
            <img
              src="/vineet-avatar-cartoon.png"
              alt="Vineet, website designer and developer"
              fetchPriority="high"
            />
          </Magnet>
        </FadeIn>
      </div>
      <div className="hero-bottom">
        <FadeIn delay={0.35}>
          <p>
            a web designer & developer building fast, memorable websites that
            turn visitors into customers
          </p>
        </FadeIn>
        <FadeIn delay={0.5}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
function App() {
  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
