import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Workflow,
  Handshake,
  Gauge,
  Bot,
  Zap,
  Network,
  Sparkles,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  GraduationCap,
  Award,
  Rocket,
  Layers,
  ShieldCheck,
  Cpu,
} from "lucide-react";

import { useReveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import profileImg from "@/assets/profile.png.asset.json";
import aiAppointment from "@/assets/ai-appointment-setter.jpeg.asset.json";
import aiJobScraper from "@/assets/ai-job-scraper.png.asset.json";
import fbAgent from "@/assets/fb-page-ai-agent.png.asset.json";
import autoGmail from "@/assets/auto-sort-gmail.jpg.asset.json";
import xeroAsana from "@/assets/xero-asana.jpg.asset.json";
import leadMagnet from "@/assets/lead-magnet.jpg.asset.json";
import asanaCrm from "@/assets/asana-crm.png.asset.json";
import leadEnrichment from "@/assets/lead-enrichment.png.asset.json";
import smartLeadScoring from "@/assets/smart-lead-scoring.png.asset.json";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "results", label: "Results" },
  { id: "contact", label: "Contact" },
];

function Portfolio() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <StatsRow />
        <Services />
        <Experience />
        <Projects />
        <Results />
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
            J
          </span>
          <span>Clanor.</span>
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
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-60" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-[500px] w-[500px] ink-blob rounded-full" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] ink-blob rounded-full opacity-70" />


      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Available for work — 2026
          </div>

          <h1 className="mt-6 font-display text-[3.25rem] leading-[0.95] tracking-tight sm:text-7xl lg:text-[6rem]">
            John Rys <em className="italic">M. Clanor</em>
          </h1>
          <p className="mt-4 font-display text-2xl leading-snug text-foreground/80 sm:text-3xl">
            AI Automation Specialist <span className="text-muted-foreground">—</span> Turning Manual
            Work into <em className="italic">Automated Systems</em>.
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I help businesses eliminate repetitive manual work through AI-powered
            automation — from voice agents and CRM workflows to lead scoring systems.
            Background in IT and process optimization, now building production-style
            automations with n8n, Make.com, Zapier, and OpenAI/Claude APIs.
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
              <div className="font-display text-3xl text-foreground">9+</div>
              <div className="mt-1 uppercase tracking-widest text-xs">Automations</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl text-foreground">5</div>
              <div className="mt-1 uppercase tracking-widest text-xs">Certifications</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl text-foreground">24/7</div>
              <div className="mt-1 uppercase tracking-widest text-xs">Coverage Built</div>
            </div>
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-8 rounded-[2rem] bg-white/5 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card glow-ring">
            <img
              src={profileImg.url}
              alt="Portrait of John Rys M. Clanor"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/60 to-transparent p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-2xl">Est. 2024</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Lipa City, PH
                  </div>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground animate-floaty">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
          {/* Floating stat badge overlapping photo */}
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-card p-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] animate-floaty">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Rocket className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-xl leading-none">9+</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                  Automation Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-16 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <span>Scroll</span>
        <div className="relative h-10 w-[1px] bg-border overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-3 bg-primary animate-scroll-cue" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats Row ---------------- */

const STATS = [
  { icon: Workflow, num: "9+", label: "Automations Built" },
  { icon: Layers, num: "3+", label: "Platforms Mastered" },
  { icon: ShieldCheck, num: "5+", label: "Certifications" },
  { icon: Cpu, num: "100%", label: "Self-Driven Projects" },
];

function StatsRow() {
  return (
    <section className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ icon: Icon, num, label }, i) => (
            <div
              key={label}
              className="reveal group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 card-lift"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-3xl leading-none">{num}</div>
                <div className="mt-1.5 text-xs uppercase tracking-widest text-muted-foreground">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */


const SERVICES = [
  {
    icon: Workflow,
    title: "Workflow & AI Automation",
    desc: "Designing and building end-to-end automated workflows using n8n, Make.com, and Zapier — connecting your tools, eliminating manual tasks, and integrating AI agents into your daily operations.",
  },
  {
    icon: Handshake,
    title: "CRM & Marketing Automation",
    desc: "Setting up and optimizing GoHighLevel and CRM-based systems — automated lead nurture sequences, follow-ups, and pipeline management that move prospects from first contact to close.",
  },
  {
    icon: Gauge,
    title: "Business Process Optimization",
    desc: "Auditing repetitive, time-draining tasks in your business and redesigning them into automated systems — freeing up hours per week so you and your team can focus on high-value work.",
  },
  {
    icon: Bot,
    title: "AI Agents & Chatbots",
    desc: "Building conversational AI agents — voice and chat — with memory and document-grounded responses for automated customer support, lead qualification, and appointment scheduling.",
  },
  {
    icon: Zap,
    title: "Lead Response & Conversion Systems",
    desc: "Solving slow speed-to-lead and inconsistent follow-up by building automated systems that respond, qualify, and route prospects instantly — so fewer leads go cold and more convert.",
  },
  {
    icon: Network,
    title: "API Integration",
    desc: "Connecting platforms and apps via REST APIs and webhooks (OpenAI, Claude, Google APIs, and more) to build custom, reliable data flows between the tools you already use.",
  },
];

function Services() {
  return (
    <section id="services" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Services"
          title={<>What I build <em className="italic">— and automate.</em></>}
          copy="A focused set of automation services designed to remove manual work from your business and put AI to work in your daily operations."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="reveal group relative flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-7 card-lift"
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
    company: "Integreon Managed Solutions, Makati City, Philippines",
    role: "Senior Graphics Design Specialist",
    date: "Feb 2026 — July 2026",
    bullets: [
      "Promoted to oversee project estimation, accurately assessing time and resource requirements to ensure efficient client delivery.",
      "Partnered directly with clients to clarify requirements upfront, minimizing revisions and delays.",
      "Delivered detailed briefings to the production team, improving workflow efficiency and reducing rework.",
    ],
  },
  {
    company: "Integreon Managed Solutions, Makati City, Philippines",
    role: "Graphics Design Specialist",
    date: "May 2025 — Feb 2026",
    bullets: [
      "Designed and formatted corporate presentations and business documents in compliance with strict brand guidelines.",
      "Transformed complex information into clear, professional, visually engaging slides and reports for internal and client use.",
      "Collaborated with stakeholders to deliver polished design solutions that strengthened brand representation.",
    ],
  },
  {
    company: "The Camel.Co, Lipa City, Philippines",
    role: "Solution Analyst",
    date: "Oct 2024 — April 2025",
    bullets: [
      "Delivered expert web support, troubleshooting and resolving customer website issues with high first-contact resolution rates.",
      "Diagnosed and resolved technical problems, ensuring smooth website functionality and positive customer experiences.",
      "Partnered with internal teams to identify root causes of recurring issues and implement long-term fixes.",
    ],
  },
];

const CERTIFICATIONS = [
  "AI Foundations — OpenAI Academy (2026)",
  "Applied AI Foundations — OpenAI Academy (2026)",
  "AI Fluency: Framework & Foundations — Anthropic (2026)",
  "Essentials: Your First Workflows — n8n Academy (2026)",
  "Agents and Workflows — n8n Academy (2026)",
];

function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-mist/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Experience"
          title={<>A working <em className="italic">history</em>.</>}
          copy="From IT and web support to design and now automation — a track record built on process, clarity, and delivery."
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-primary/20 md:left-1/2" />

          <div className="space-y-12">
            {EXPERIENCE.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={e.role + i}
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
                    <h3 className="mt-2 font-display text-2xl sm:text-3xl">{e.role}</h3>
                    <div className="mt-1 text-sm font-medium">{e.company}</div>
                    <ul
                      className={`mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground ${
                        left ? "md:ml-auto" : ""
                      } max-w-md`}
                    >
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-primary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

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

        {/* Education */}
        <div className="reveal mt-20 rounded-2xl border border-border bg-card p-8">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Education
              </div>
              <h3 className="mt-2 font-display text-2xl">
                Bachelor of Science in Information Technology
              </h3>
              <div className="mt-1 text-sm text-muted-foreground">
                Batangas State University, Batangas City, Philippines · Graduated Aug 2024
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="reveal mt-8">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <Award className="h-4 w-4" /> Certifications
          </div>
          <div className="flex flex-wrap gap-2">
            {CERTIFICATIONS.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */

const PROJECTS = [
  {
    title: "AI Appointment Setter",
    desc: "A 24/7 voice AI agent handling the complete appointment lifecycle — availability checks, booking, updates, cancellations, and call-summary logging across 5 connected sub-workflows. Integrated with Google Calendar and Airtable for zero manual data entry, eliminating double-booking and transcription errors.",
    tags: ["n8n", "Vapi", "Google Calendar", "Airtable", "Webhooks"],
    category: "AI Agents",
    img: aiAppointment.url,
    featured: true,
  },
  {
    title: "AI Job Scraper & Resume Optimizer",
    desc: "A Slack-triggered workflow that scrapes job listings and uses an AI agent to tailor a resume for each posting, delivering results via Slack and Gmail. Cut per-application prep time from 15–30 minutes to near-automatic.",
    tags: ["n8n", "AI Agent", "Slack", "Gmail"],
    category: "Workflow Automation",
    img: aiJobScraper.url,
  },
  {
    title: "FB Page AI Agent",
    desc: "A webhook-driven Facebook Page chatbot with conversational memory and document-grounded responses powered by Gemini, enabling automated, context-aware customer replies around the clock.",
    tags: ["n8n", "Gemini", "Webhooks", "Chatbot"],
    category: "AI Agents",
    img: fbAgent.url,
  },
  {
    title: "Auto-Sort Gmail Attachments",
    desc: "An AI-powered workflow that analyzes email attachments, generates descriptive filenames, and automatically files them to Google Drive with a full audit log — removing manual sorting entirely.",
    tags: ["Make.com", "AI", "Google Drive", "Gmail"],
    category: "Workflow Automation",
    img: autoGmail.url,
  },
  {
    title: "Xero-to-Asana Transaction Export",
    desc: "Automated pulling of Xero transaction data into Google Sheets and Asana, replacing manual CSV exports and saving an estimated 10–20 minutes per task cycle.",
    tags: ["Make.com", "Xero", "Google Sheets", "Asana"],
    category: "Business Process",
    img: xeroAsana.url,
  },
  {
    title: "Lead Magnet Qualifier",
    desc: "AI-scored lead routing from Google Forms to Gmail/Slack for high-priority leads, with automatic logging of lower-priority leads so nothing falls through the cracks.",
    tags: ["Make.com", "AI Scoring", "Google Forms", "Slack"],
    category: "Lead Generation",
    img: leadMagnet.url,
  },
  {
    title: "Asana CRM Lead Engagement Workflow",
    desc: "A 5-stage, AI-personalized lead nurture sequence — new, no response, quoted, approved, closed — built entirely on Asana status triggers to automate follow-up at every stage.",
    tags: ["Zapier", "Asana", "AI Personalization"],
    category: "CRM Automation",
    img: asanaCrm.url,
  },
  {
    title: "Automated Lead Enrichment",
    desc: "Apollo-based lead enrichment and priority triaging that cut speed-to-lead from hours to near-instant, ensuring high-value leads get immediate attention.",
    tags: ["Zapier", "Apollo", "Lead Scoring"],
    category: "Lead Generation",
    img: leadEnrichment.url,
  },
  {
    title: "Smart Lead Scoring & Distribution",
    desc: "Automated form data cleaning, lead scoring, and inquiry-based routing to improve response time and maintain data consistency across the pipeline.",
    tags: ["Zapier", "Lead Scoring", "Automation"],
    category: "Lead Generation",
    img: smartLeadScoring.url,
  },
];

const FILTERS = [
  "All",
  "AI Agents",
  "Workflow Automation",
  "CRM Automation",
  "Lead Generation",
  "Business Process",
] as const;

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
          title={<>Automation <em className="italic">projects</em>.</>}
          copy="A cross-section of production-style automations spanning AI agents, CRM workflows, lead systems, and business process automation."
        />

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-border pb-4">
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
              key={p.title}
              className={`reveal group relative overflow-hidden rounded-2xl border bg-card ${
                p.featured
                  ? "border-primary ring-2 ring-primary/20 sm:col-span-2 lg:col-span-2"
                  : "border-border"
              }`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {p.featured && (
                <span className="absolute left-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
                  Featured
                </span>
              )}
              <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                />
                <div className="pointer-events-none absolute inset-0 bg-primary/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-2 text-sm font-medium text-primary">
                    View Project <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 p-5">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {p.category}
                  </div>
                  <h3 className="mt-1 font-display text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
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

/* ---------------- Results & Impact ---------------- */

const RESULTS = [
  {
    icon: Workflow,
    stat: "15–30 min → Near-Automatic",
    desc: "Automated a Slack-triggered job application workflow, cutting resume prep time per application.",
  },
  {
    icon: Handshake,
    stat: "5-Stage Nurture, Zero Manual Follow-Up",
    desc: "Built an AI-personalized lead nurture sequence on Asana, moving prospects from first contact to close automatically.",
  },
  {
    icon: Gauge,
    stat: "10–20 min Saved Per Task Cycle",
    desc: "Automated Xero-to-Asana transaction exports, eliminating manual CSV work.",
  },
  {
    icon: Bot,
    stat: "24/7 Coverage, Zero Missed Calls",
    desc: "Deployed a voice AI appointment setter handling booking, rescheduling, and cancellations round the clock.",
  },
  {
    icon: Zap,
    stat: "Hours → Near-Instant",
    desc: "Implemented AI-based lead enrichment and scoring to cut speed-to-lead dramatically.",
  },
  {
    icon: Network,
    stat: "Zero Manual Data Entry",
    desc: "Connected Calendar, Airtable, and webhook workflows to auto-log records in real time.",
  },
];

function Results() {
  return (
    <section
      id="results"
      className="relative overflow-hidden border-t border-border bg-primary text-primary-foreground py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-primary-foreground/5 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
            Results & Impact
          </div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl">
            Real outcomes from <em className="italic">real automations</em>.
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-primary-foreground/70">
            Measurable time savings, faster response, and workflows that run themselves — pulled
            from live projects.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RESULTS.map(({ icon: Icon, stat, desc }, i) => (
            <div
              key={stat}
              className="reveal group relative flex h-full flex-col rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.04] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-foreground/50 hover:bg-primary-foreground/[0.08]"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-foreground/10 text-primary-foreground transition-colors duration-300 group-hover:bg-primary-foreground group-hover:text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-6 font-display text-2xl leading-tight sm:text-[1.75rem]">
                {stat}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{desc}</p>
            </div>
          ))}
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
    toast.success("Thanks for reaching out! I'll get back to you within 24-48 hours.");
  };

  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-24">
        <div className="reveal">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Contact</div>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] sm:text-6xl">
            Let&apos;s Automate <em className="italic">Something</em>.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
            Have a repetitive process draining your time, or an idea for an AI agent? I&apos;d
            love to hear about it.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href="mailto:johnrysclanor22@gmail.com"
              className="flex items-center gap-3 text-sm text-foreground"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-border">
                <Mail className="h-4 w-4" />
              </span>
              <span className="link-underline">johnrysclanor22@gmail.com</span>
            </a>
            <a
              href="tel:+639565365348"
              className="flex items-center gap-3 text-sm text-foreground"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-border">
                <Phone className="h-4 w-4" />
              </span>
              <span className="link-underline">+63 956 536 5348</span>
            </a>
            <a
              href="https://linkedin.com/in/john-rys-clanor"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-foreground"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-border">
                <Linkedin className="h-4 w-4" />
              </span>
              <span className="link-underline">linkedin.com/in/john-rys-clanor</span>
            </a>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-border">
                <MapPin className="h-4 w-4" />
              </span>
              <span>Lipa City, Batangas, Philippines</span>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {[
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/john-rys-clanor",
                label: "LinkedIn",
              },
              { icon: Mail, href: "mailto:johnrysclanor22@gmail.com", label: "Email" },
              { icon: Phone, href: "tel:+639565365348", label: "Phone" },
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
            <FieldRow label="Your Name">
              <Input
                required
                name="name"
                placeholder="John Doe"
                className="h-12 rounded-xl border-border bg-background focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
              />
            </FieldRow>
            <FieldRow label="Your Email">
              <Input
                required
                type="email"
                name="email"
                placeholder="you@company.com"
                className="h-12 rounded-xl border-border bg-background focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
              />
            </FieldRow>
            <FieldRow label="Tell me about your project or process">
              <Textarea
                required
                name="message"
                rows={5}
                placeholder="What repetitive task or workflow would you like to automate?"
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
              {["Automate", "Integrate", "Optimize", "Deliver"].map((w) => (
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
        <div className="text-primary-foreground/70">
          © 2026 John Rys M. Clanor. All rights reserved.
        </div>
        <div className="text-primary-foreground/70">Built in Lipa City, Philippines.</div>
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
