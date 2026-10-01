import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { FadeIn, ContactButton } from "./components";
import { projects, type Project } from "./data/projects";
import assets from "./assets.json";
export function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const right = useTransform(scrollYProgress, [0, 1], [-1000, -300]);
  const left = useTransform(scrollYProgress, [0, 1], [-300, -1000]);
  const reduced = useReducedMotion();
  return (
    <section
      ref={ref}
      className="marquee"
      aria-label="Website inspiration gallery"
    >
      {[assets.slice(1, 12), assets.slice(12, 21)].map((row, i) => (
        <motion.div
          className="marquee-row"
          key={i}
          style={{
            x: reduced ? -500 : i === 0 ? right : left,
            willChange: "transform",
          }}
        >
          {[...row, ...row, ...row].map((src, j) => (
            <img
              src={src}
              key={j}
              alt={
                j < row.length
                  ? `Website design inspiration ${i * 11 + j + 1}`
                  : ""
              }
              loading="lazy"
              width="420"
              height="270"
            />
          ))}
        </motion.div>
      ))}
    </section>
  );
}
const about =
  "I design and develop websites that help businesses make a strong first impression and turn interest into action. From landing pages to complete business websites, I bring together clear design, responsive layouts, and thoughtful development. Let's build a website that works for you!";
function Character({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [0.2, 1],
  );
  const reduced = useReducedMotion();
  return (
    <span className="character">
      <span aria-hidden="true" style={{ visibility: "hidden" }}>
        {char}
      </span>
      <motion.span
        aria-hidden="true"
        style={{ opacity: reduced ? 1 : opacity }}
      >
        {char}
      </motion.span>
    </span>
  );
}
export function AboutSection() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  let index = 0;
  return (
    <section id="about" className="about">
      {assets.slice(22, 26).map((src, i) => (
        <FadeIn
          key={src}
          className={`decoration decoration-${i}`}
          delay={0.1 + i * 0.05}
          x={i < 2 ? -80 : 80}
          y={0}
        >
          <img src={src} alt="" loading="lazy" />
        </FadeIn>
      ))}
      <FadeIn>
        <h2 className="hero-heading">About me</h2>
      </FadeIn>
      <p ref={ref} className="about-copy" aria-label={about}>
        {about.split(" ").map((word, i) => (
          <span className="word" key={i}>
            {(word + " ").split("").map((char) => {
              const n = index++;
              return (
                <Character
                  key={n}
                  char={char}
                  index={n}
                  total={about.length}
                  progress={scrollYProgress}
                />
              );
            })}
          </span>
        ))}
      </p>
      <FadeIn>
        <ContactButton />
      </FadeIn>
    </section>
  );
}
const services = [
  [
    "Website Design",
    "Custom website layouts built around your business, with clear navigation, thoughtful typography, and a consistent experience on every screen.",
  ],
  [
    "Website Development",
    "Responsive websites built with React and TypeScript, turning designs into accessible, reliable experiences that work smoothly across devices.",
  ],
  [
    "Landing Pages",
    "Focused pages for products, services, and campaigns, with clear messaging and calls to action that guide visitors toward the next step.",
  ],
  [
    "Website Redesign",
    "Give an existing website a fresh direction with improved structure, mobile usability, and a design that reflects where your business is today.",
  ],
  [
    "Performance & SEO",
    "Improve loading speed, accessibility, and technical SEO with optimized assets, semantic page structure, and search-friendly metadata.",
  ],
];
export function ServicesSection() {
  return (
    <section id="services" className="services">
      <FadeIn>
        <h2>Services</h2>
      </FadeIn>
      <div className="services-list">
        {services.map(([name, description], i) => (
          <FadeIn key={name} delay={i * 0.1}>
            <article className="service">
              <span className="number">0{i + 1}</span>
              <div>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
function ProjectCard({
  project,
  index,
  progress,
  onOpen,
}: {
  project: Project;
  index: number;
  progress: MotionValue<number>;
  onOpen: () => void;
}) {
  const scale = useTransform(
    progress,
    [index / projects.length, 1],
    [1, 1 - (projects.length - 1 - index) * 0.03],
  );
  const reduced = useReducedMotion();
  return (
    <div className="project-slot">
      <motion.article
        className="project-card"
        style={{
          scale: reduced ? 1 : scale,
          top: `calc(var(--card-top) + ${index * 28}px)`,
        }}
      >
        <header>
          <span className="number">0{index + 1}</span>
          <div className="project-title">
            <span>{project.category}</span>
            <h3>{project.name}</h3>
          </div>
          <button className="live-button" onClick={onOpen}>
            View Project <ArrowUpRight size={18} />
          </button>
        </header>
        <div className="project-images">
          <div>
            {project.images.slice(0, 2).map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${project.name} design detail ${i + 1}`}
                loading="lazy"
              />
            ))}
          </div>
          <img
            src={project.images[2]}
            alt={`${project.name} full visual concept`}
            loading="lazy"
          />
        </div>
      </motion.article>
    </div>
  );
}
export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return (
    <section id="projects" ref={ref} className="projects">
      <FadeIn>
        <h2 className="hero-heading">Projects</h2>
      </FadeIn>
      <div className="project-stack">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
            progress={scrollYProgress}
            onOpen={() => {
              setSelected(index);
              dialog.current?.showModal();
            }}
          />
        ))}
      </div>
      <dialog
        ref={dialog}
        className="project-dialog"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="close-dialog"
          aria-label="Close project"
          onClick={() => dialog.current?.close()}
        >
          <X />
        </button>
        <p>{projects[selected].category} / Selected work</p>
        <h3>{projects[selected].name}</h3>
        <p className="project-summary">{projects[selected].summary}</p>
        <dl className="project-meta">
          <div><dt>Role</dt><dd>{projects[selected].role}</dd></div>
          <div><dt>Stack</dt><dd>{projects[selected].stack}</dd></div>
          <div><dt>Outcome</dt><dd>{projects[selected].result}</dd></div>
        </dl>
        {(projects[selected].liveUrl || projects[selected].sourceUrl) && (
          <div className="project-actions">
            {projects[selected].liveUrl && <a href={projects[selected].liveUrl} target="_blank" rel="noreferrer">Live site <ArrowUpRight size={17}/></a>}
            {projects[selected].sourceUrl && <a href={projects[selected].sourceUrl} target="_blank" rel="noreferrer">View source <ArrowUpRight size={17}/></a>}
          </div>
        )}
        <div className="case-study">
          <div><h4>Problem</h4><p>{projects[selected].caseStudy.problem}</p></div>
          <div><h4>Approach</h4><p>{projects[selected].caseStudy.approach}</p></div>
          <div className="case-study-wide"><h4>Key decisions</h4><ul>{projects[selected].caseStudy.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ul></div>
          <div><h4>Responsive behavior</h4><p>{projects[selected].caseStudy.responsive}</p></div>
          <div><h4>Outcome</h4><p>{projects[selected].caseStudy.outcome}</p></div>
        </div>
        <div>
          {projects[selected].images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${projects[selected].name} view ${i + 1}`}
            />
          ))}
        </div>
      </dialog>
      <div id="contact" className="contact-section">
        <p>Have a website in mind?</p>
        <h2 className="hero-heading">Let's talk.</h2>
        <p>Contact details coming soon.</p>
      </div>
      <footer>
        <span>© {new Date().getFullYear()} Vineet</span>
        <a href="#">Back to top ↑</a>
      </footer>
    </section>
  );
}
