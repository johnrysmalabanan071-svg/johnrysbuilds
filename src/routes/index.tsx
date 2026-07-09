import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Figma,
  Layers,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useReveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import heroPortrait from "@/assets/hero-portrait.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

function Portfolio() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

/* ---------------- Navbar ---------------- */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => !!el,
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <button
          onClick={() => handleNav("home")}
          className="flex items-center gap-2 font-display text-2xl tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground text-sm font-sans font-bold">
            A
          </span>
          <span>Mercer.</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => handleNav(n.id)}
              className={`link-underline text-sm font-medium tracking-wide transition-colors ${
                active === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            onClick={() => handleNav("contact")}
            className="btn-press rounded-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
          >
            Let&apos;s talk <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-border"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-background border-b border-border`}
      >
        <nav className="flex flex-col px-6 py-4">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => handleNav(n.id)}
              className={`py-3 text-left text-lg font-display border-b border-border last:border-0 ${
                active === n.id ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {n.label}
            </button>
          ))}
          <Button
            onClick={() => handleNav("contact")}
            className="mt-4 rounded-full bg-primary text-primary-foreground"
          >
            Let&apos;s talk
          </Button>
        </nav>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Ink blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[500px] w-[500px] ink-blob rounded-full" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] ink-blob rounded-full opacity-70" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Available for work — 2026
          </div>

          <h1 className="mt-6 font-display text-[3.25rem] leading-[0.95] tracking-tight sm:text-7xl lg:text-[6.5rem]">
            Alex <em className="italic">Mercer</em>
            <span className="block text-foreground/80">
              designs &amp; builds
            </span>
            <span className="block">bold digital work.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Independent product designer and developer based in Brooklyn. I help
            ambitious teams ship editorial, considered interfaces that feel like
            a magazine spread and behave like software.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-press rounded-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-6"
            >
              View Work <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-press rounded-full border-primary text-foreground hover:bg-primary hover:text-primary-foreground gap-2 px-6"
            >
              Contact Me
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
            <div>
              <div className="font-display text-3xl text-foreground">08+</div>
              <div className="mt-1 uppercase tracking-widest text-xs">Years</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl text-foreground">64</div>
              <div className="mt-1 uppercase tracking-widest text-xs">Projects</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl text-foreground">27</div>
              <div className="mt-1 uppercase tracking-widest text-xs">Clients</div>
            </div>
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-6 rounded-[2rem] bg-primary/95 translate-x-4 translate-y-4" />
          <div className="relative overflow-hidden rounded-[2rem] border border-primary bg-card">
            <img
              src={heroPortrait}
              alt="Portrait of Alex Mercer"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/70 to-transparent p-6">
              <div className="flex items-center justify-between text-primary-foreground">
                <div>
                  <div className="font-display text-2xl">Est. 2018</div>
                  <div className="text-xs uppercase tracking-widest opacity-80">
                    Brooklyn / NYC
                  </div>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-full bg-primary-foreground text-primary animate-floaty">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="mt-16 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <span>Scroll</span>
        <div className="relative h-10 w-[1px] bg-border overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-3 bg-primary animate-scroll-cue" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */

const SERVICES = [
  {
    icon: Layers,
    title: "Product Design",
    desc: "End-to-end product thinking — from research and IA to polished, opinionated interfaces.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Modern React, TypeScript, and design-system engineering that ships and stays fast.",
  },
  {
    icon: Figma,
    title: "Brand & Identity",
    desc: "Editorial visual systems: type, logo, motion and the small details that hold together.",
  },
  {
    icon: Sparkles,
    title: "Creative Direction",
    desc: "A single voice across product, marketing and content — grown-up, confident, unmistakable.",
  },
];

function Services() {
  return (
    <section id="services" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Services"
          title={<>What I do for a living <em className="italic">— and love.</em></>}
          copy="A small, focused set of things I do exceptionally well. Everything else, I have brilliant collaborators for."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="reveal group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7 card-lift"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-mist text-muted-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
              <div className="mt-8 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span>0{i + 1}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Experience ---------------- */

const EXPERIENCE = [
  {
    company: "Northwind Studio",
    role: "Principal Designer",
    date: "2023 — Present",
    desc: "Leading product design for early-stage SaaS clients. Design systems, brand, and shipped interfaces.",
  },
  {
    company: "Field & Forge",
    role: "Senior Product Designer",
    date: "2021 — 2023",
    desc: "Rebuilt the core commerce experience from the ground up, driving a 38% lift in checkout completion.",
  },
  {
    company: "Meridian Labs",
    role: "Product Designer",
    date: "2019 — 2021",
    desc: "Shipped four consumer products across iOS, Android and web. Owned a shared design-language project.",
  },
  {
    company: "Freelance",
    role: "Designer & Developer",
    date: "2018 — 2019",
    desc: "Independent client work for startups, agencies and independent writers. Built the first version of Mercer.",
  },
];

function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-mist/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Experience"
          title={<>A working <em className="italic">history</em>.</>}
          copy="Almost a decade of building product and brand for companies of every shape."
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-primary/20 md:left-1/2" />

          <div className="space-y-12">
            {EXPERIENCE.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={e.company}
                  className={`reveal relative grid md:grid-cols-2 md:gap-16 ${
                    left ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
                >
                  <div
                    className={`pl-12 md:pl-0 ${
                      left ? "md:text-right md:pr-16" : "md:pl-16"
                    }`}
                  >
                    <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      {e.date}
                    </div>
                    <h3 className="mt-2 font-display text-3xl">{e.role}</h3>
                    <div className="mt-1 text-sm font-medium">{e.company}</div>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:inline-block">
                      {e.desc}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 top-2 -translate-x-1/2 md:left-1/2">
                    <div className="grid h-4 w-4 place-items-center rounded-full bg-background ring-4 ring-primary/10">
                      <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */

const PROJECTS = [
  {
    title: "Ledger OS",
    desc: "A finance operating system for solo founders.",
    tags: ["Web", "SaaS"],
    category: "Web",
    img: project1,
  },
  {
    title: "Kite Mobile",
    desc: "A minimal reading app for long-form journalism.",
    tags: ["Mobile", "iOS"],
    category: "Mobile",
    img: project2,
  },
  {
    title: "Berkins Identity",
    desc: "A confident editorial identity system for a boutique studio.",
    tags: ["Brand", "Print"],
    category: "Design",
    img: project3,
  },
  {
    title: "Eatter Commerce",
    desc: "A monochrome commerce experience for a slow-food brand.",
    tags: ["Web", "Commerce"],
    category: "Web",
    img: project4,
  },
  {
    title: "Nightcap App",
    desc: "A gesture-first cocktail companion for phones.",
    tags: ["Mobile"],
    category: "Mobile",
    img: project2,
  },
  {
    title: "Studio Marks",
    desc: "A generative wordmark tool for design studios.",
    tags: ["Design", "Tools"],
    category: "Design",
    img: project3,
  },
];

const FILTERS = ["All", "Web", "Mobile", "Design"] as const;

function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const filtered = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Selected Work"
          title={<>Recent <em className="italic">projects</em>.</>}
          copy="A small, opinionated cross-section of client work and side projects."
        />

        <div className="mt-10 flex flex-wrap items-center gap-6 border-b border-border pb-4">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="btn-press relative pb-2 text-sm font-medium tracking-wide"
            >
              <span
                className={
                  filter === f ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }
              >
                {f}
              </span>
              {filter === f && (
                <span className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-primary" />
              )}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <article
              key={p.title + i}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-primary/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-2 text-sm font-medium text-primary">
                    View Project <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between gap-4 p-5">
                <div className="min-w-0">
                  <h3 className="font-display text-xl truncate">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                </div>
                <div className="shrink-0 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

const TESTIMONIALS = [
  {
    quote:
      "Alex has that rare mix of taste and follow-through. Every artifact he shipped felt three drafts better than the brief.",
    name: "Priya Anand",
    role: "Head of Product, Northwind",
    avatar: avatar1,
  },
  {
    quote:
      "The redesign didn't just look sharper — conversion moved. Best design partner we've hired, full stop.",
    name: "Marcus Klein",
    role: "Founder, Field & Forge",
    avatar: avatar2,
  },
  {
    quote:
      "Editorial, opinionated, and quietly technical. Alex is the person you want owning the surface of your product.",
    name: "Ivy Sørensen",
    role: "Creative Director, Meridian",
    avatar: avatar3,
  },
];

function Testimonials() {
  const [idx, setIdx] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setIdx((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const go = (dir: number) => {
    setIdx((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
    if (timer.current) clearInterval(timer.current);
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-border bg-primary text-primary-foreground py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-primary-foreground/5 blur-3xl" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
            Testimonials
          </div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl">
            Kind words from <em className="italic">good people</em>.
          </h2>
        </div>

        <div className="reveal relative mt-16 min-h-[280px]">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`absolute inset-0 flex flex-col items-center transition-all duration-700 ${
                i === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <Quote className="h-10 w-10 text-primary-foreground/70" />
              <blockquote className="mt-6 max-w-2xl font-display text-2xl leading-snug sm:text-3xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  width={64}
                  height={64}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-primary-foreground/20"
                />
                <div className="text-left">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-sm text-primary-foreground/70">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            className="btn-press grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIdx(i);
                  if (timer.current) clearInterval(timer.current);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-8 bg-primary-foreground" : "w-1.5 bg-primary-foreground/40"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            className="btn-press grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
    toast.success("Message sent — I'll be in touch shortly.");
  };

  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-24">
        <div className="reveal">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Contact</div>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] sm:text-6xl">
            Have a project <em className="italic">in mind?</em>
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
            I take on a small number of engagements each quarter. Tell me a bit
            about what you&apos;re working on and I&apos;ll get back within two business
            days.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href="mailto:hello@mercer.studio"
              className="link-underline inline-flex items-center gap-3 font-display text-2xl"
            >
              hello@mercer.studio
            </a>
            <div className="text-sm text-muted-foreground">Brooklyn, NY — Available remote.</div>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {[
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Mail, href: "mailto:hello@mercer.studio", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="btn-press grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal rounded-3xl border border-border bg-card p-8 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] md:p-10"
        >
          <div className="space-y-6">
            <FieldRow label="Name">
              <Input
                required
                name="name"
                placeholder="Your full name"
                className="h-12 rounded-xl border-border bg-background focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
              />
            </FieldRow>
            <FieldRow label="Email">
              <Input
                required
                type="email"
                name="email"
                placeholder="you@company.com"
                className="h-12 rounded-xl border-border bg-background focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
              />
            </FieldRow>
            <FieldRow label="Message">
              <Textarea
                required
                name="message"
                rows={5}
                placeholder="A few sentences about your project, timeline, and budget."
                className="rounded-xl border-border bg-background focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
              />
            </FieldRow>
          </div>

          <Button
            type="submit"
            disabled={submitting}
            size="lg"
            className="btn-press mt-8 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
          >
            {submitting ? "Sending…" : "Send Message"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
}

function FieldRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="overflow-hidden py-6">
        <div className="flex whitespace-nowrap animate-marquee font-display text-6xl md:text-8xl">
          {Array.from({ length: 2 }).map((_, r) => (
            <div key={r} className="flex shrink-0">
              {["Design", "Develop", "Direct", "Deliver"].map((w, i) => (
                <span key={r + w} className="mx-8 flex items-center gap-8">
                  {w}
                  <span className="inline-block h-3 w-3 rounded-full bg-primary-foreground" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 px-6 py-6 text-sm md:flex-row">
        <div className="text-primary-foreground/70">© 2026 Alex Mercer. All rights reserved.</div>
        <div className="text-primary-foreground/70">Made with intent in Brooklyn.</div>
      </div>
    </footer>
  );
}

/* ---------------- Shared ---------------- */

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
}) {
  return (
    <div className="reveal grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
      <div>
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{eyebrow}</div>
        <h2 className="mt-3 font-display text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>
      <p className="max-w-lg text-muted-foreground leading-relaxed">{copy}</p>
    </div>
  );
}
