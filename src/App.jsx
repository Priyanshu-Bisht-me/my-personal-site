import { useEffect, useState } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  Brain,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  Trophy,
  UserRound,
  X,
} from "lucide-react";

const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
];

const profileLinks = {
  email: "mailto:priyanshubisht.me@gmail.com",
  github: "https://github.com/Priyanshu-Bisht-me",
  linkedin: "https://linkedin.com/in/priyanshudev01",
  resumeView:
    "https://drive.google.com/file/d/1wxYQR-yugSnXybftbYNK6Zkwpz8Y_gHH/view?usp=sharing",
  resumeDownload:
    "https://drive.google.com/uc?export=download&id=1wxYQR-yugSnXybftbYNK6Zkwpz8Y_gHH",
};

const aboutParagraphs = [
  "Priyanshu Bisht is a Full Stack Developer and BCA student specializing in AI & Data Science at Graphic Era Hill University with a 9.40 GPA.",
  "His work is centered on practical full stack systems with strong backend structure, secure authentication, database workflows, and operational clarity. He builds with React.js, Node.js, Express.js, MongoDB, and MySQL, with particular attention to REST APIs, RBAC, and maintainable service design.",
  "Recent work includes AshaPure, a MERN milk delivery platform designed around subscriptions, vendor management, and structured operational workflows, and TableForge, a spreadsheet-style database management system focused on CRUD efficiency and administrative control.",
  "Alongside project work, he continues to strengthen problem solving through Java-based data structures and algorithms, backed by university coding competition results and selection among the Top 25 finalist teams in the Watch the Code National Hackathon.",
  "His broader interests in chess, finance, and system design reinforce a methodical approach to decision-making, tradeoffs, and implementation quality.",
];

const education = [
  {
    institution: "Graphic Era Hill University",
    program: "Bachelor of Computer Applications (AI & Data Science)",
    duration: "2024 - 2027",
    result: "GPA: 9.40",
  },
  {
    institution: "Jaycees Public School",
    program: "Intermediate (Senior Secondary)",
    duration: "2022 - 2024",
    result: "Score: 86%",
  },
];

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    accent: "from-sky-500/14 via-cyan-500/10 to-transparent",
    description: "Core languages used for product development, problem solving, and implementation work.",
    items: [
      { label: "Java", meta: "Advanced" },
      { label: "JavaScript", meta: "Advanced" },
      { label: "Python", meta: "Intermediate" },
      { label: "C", meta: "Intermediate" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Sparkles,
    accent: "from-indigo-500/14 via-sky-500/10 to-transparent",
    description: "Building responsive interfaces with clean component structure and strong visual clarity.",
    items: [
      { label: "React.js" },
      { label: "HTML5" },
      { label: "CSS3" },
      { label: "Responsive UI Design" },
    ],
  },
  {
    title: "Backend Development",
    icon: ShieldCheck,
    accent: "from-teal-500/14 via-emerald-500/10 to-transparent",
    description: "Focused on secure APIs, role-aware systems, and backend architecture that scales cleanly.",
    items: [
      { label: "Node.js" },
      { label: "Express.js" },
      { label: "REST APIs" },
      { label: "JWT Authentication" },
      { label: "Role-Based Access Control", meta: "RBAC" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    accent: "from-orange-400/14 via-amber-400/10 to-transparent",
    description: "Structured database work centered on consistency, record management, and workflow support.",
    items: [{ label: "MongoDB" }, { label: "MySQL" }],
  },
  {
    title: "Developer Tools",
    icon: BriefcaseBusiness,
    accent: "from-slate-400/16 via-slate-300/10 to-transparent",
    description: "Version control and collaboration tools used throughout development and iteration.",
    items: [{ label: "Git" }, { label: "GitHub" }],
  },
  {
    title: "Core Concepts",
    icon: Brain,
    accent: "from-sky-500/14 via-indigo-500/10 to-transparent",
    description: "Concepts that shape how problems are broken down, modeled, and implemented.",
    items: [
      { label: "Data Structures & Algorithms" },
      { label: "OOPs" },
      { label: "API Integration" },
      { label: "Problem Solving" },
      { label: "Database Design" },
      { label: "Authentication Systems" },
    ],
  },
];

const projects = [
  {
    title: "AshaPure",
    subtitle: "Smart Milk Delivery Platform",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication"],
    description:
      "A MERN-based smart milk delivery platform designed to streamline subscription management, order tracking, and vendor operations through an efficient and scalable workflow system.",
    highlights: [
      "Designed for 700+ users and 50+ vendors",
      "Implemented JWT-based authentication",
      "Built role-based access control (RBAC)",
      "Automated subscription and order workflows",
      "Responsive modern user interface",
      "Backend-focused scalable architecture",
    ],
    github: "https://github.com/Priyanshu-Bisht-me/ashapur_customer",
    preview: "ashapure",
  },
  {
    title: "TableForge",
    subtitle: "Database Management Dashboard",
    stack: ["Python", "Streamlit", "MySQL"],
    description:
      "A spreadsheet-style database management platform built for efficient CRUD operations, structured data handling, and administrative workflow optimization.",
    highlights: [
      "Managed 1000+ database records",
      "Implemented CRUD operations",
      "Built spreadsheet-like admin dashboard",
      "Added integrity constraints for consistency",
      "Reduced manual data entry errors",
      "Improved administrative efficiency",
    ],
    github: "https://github.com/Priyanshu-Bisht-me/table_forge",
    preview: "tableforge",
  },
];

const achievements = [
  {
    label: "Hackathon",
    title: "Watch the Code",
    description:
      "Selected among Top 25 finalist teams at Tech Geeks, GEHU Haldwani.",
    points: [
      "Built a database management platform under competitive time constraints",
      "Showcased practical backend and workflow-oriented problem solving",
    ],
  },
  {
    label: "Competitive Coding",
    title: "Monthly Coding Series",
    description:
      "Secured 1st and 3rd positions in university-level DSA competitions.",
    points: [
      "Strong Java-based problem solving and algorithm practice",
      "Consistent performance across timed coding environments",
    ],
  },
  {
    label: "Certification",
    title: "Data Structures & Algorithms",
    description:
      "Covered recursion, trees, complexity analysis, and Java-based DSA implementation.",
    points: [
      "Strengthened structured reasoning across algorithmic problems",
      "Built a stronger foundation for backend logic and system thinking",
    ],
  },
];

const interests = [
  {
    title: "Competitive Chess",
    description:
      "Sharpens pattern recognition, positional thinking, and decision-making under pressure.",
    tags: ["Strategy", "Calculation", "Discipline"],
  },
  {
    title: "Finance & Market Analysis",
    description:
      "Builds comfort with numbers, constraints, budgeting, and long-term decision quality.",
    tags: ["Budgeting", "Analysis", "Planning"],
  },
  {
    title: "API Architecture",
    description:
      "Interest in how services communicate cleanly, securely, and predictably across real workflows.",
    tags: ["Contracts", "Auth", "Workflows"],
  },
];

const heroCards = [
  {
    title: "Backend Systems",
    body: "REST APIs, authentication, RBAC, and service logic built around structured workflows.",
  },
  {
    title: "Database Workflows",
    body: "Operationally useful products shaped by consistency, admin efficiency, and data structure.",
  },
  {
    title: "Product Engineering",
    body: "Responsive interfaces paired with backend architecture that supports real usage and scale.",
  },
];

const fadeUp = (reducedMotion, delay = 0, distance = 20) => ({
  hidden: { opacity: 0, y: reducedMotion ? 0 : distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reducedMotion ? 0 : 0.58,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

const fadeIn = (reducedMotion, delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: reducedMotion ? 0 : 0.48,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: "-18% 0px -45% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-ink)] antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10rem] top-[-10rem] h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute right-[-8rem] top-24 h-96 w-96 rounded-full bg-teal-200/28 blur-3xl" />
          <div className="absolute bottom-[-8rem] left-[45%] h-80 w-80 rounded-full bg-orange-200/24 blur-3xl" />
        </div>

        <header className="sticky top-0 z-50 border-b border-white/60 bg-[color:rgba(247,247,243,0.78)] backdrop-blur-xl">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
            <a href="#home" className="flex items-center gap-3 font-semibold tracking-tight text-slate-900">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
                PB
              </span>
              <span className="hidden text-sm text-slate-600 sm:block">Priyanshu Bisht</span>
            </a>

            <div className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/90 p-1.5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] md:flex">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                    activeSection === item.id
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-[0_10px_40px_rgba(15,23,42,0.06)] md:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </nav>

          {menuOpen ? (
            <div className="border-t border-slate-200/80 bg-white/95 px-5 py-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:hidden">
              <div className="mx-auto flex max-w-6xl flex-col gap-2">
                {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      activeSection === item.id
                        ? "bg-slate-900 text-white"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </header>

        <main>
          <section id="home" className="section-shell scroll-mt-28 pt-16 sm:pt-20">
            <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
              <div className="max-w-3xl">
                <m.h1
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp(reducedMotion, 0.04)}
                  className="max-w-3xl text-4xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl"
                >
                  Priyanshu Bisht
                </m.h1>

                <m.p
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp(reducedMotion, 0.1)}
                  className="mt-4 text-lg font-semibold text-slate-700 sm:text-[1.65rem]"
                >
                  Full Stack Developer
                </m.p>

                <m.p
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp(reducedMotion, 0.16)}
                  className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-[1.07rem]"
                >
                  Priyanshu builds practical full stack applications with a strong
                  focus on backend systems, authentication, database workflows, and
                  scalable architecture.
                </m.p>

                <m.p
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp(reducedMotion, 0.22)}
                  className="mt-4 max-w-3xl text-base leading-8 text-slate-600"
                >
                  He works across React.js, Node.js, Express.js, MongoDB, and
                  MySQL, with particular strength in REST APIs, RBAC, structured
                  service design, and responsive frontend systems.
                </m.p>

                <m.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp(reducedMotion, 0.3)}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  <PrimaryButton href="#projects">
                    View Projects
                    <ArrowRight size={16} />
                  </PrimaryButton>
                  <SecondaryButton href={profileLinks.resumeDownload} external>
                    Download Resume
                    <Download size={16} />
                  </SecondaryButton>
                  <IconButton href={profileLinks.github} label="GitHub">
                    <Github size={17} />
                  </IconButton>
                  <IconButton href={profileLinks.linkedin} label="LinkedIn">
                    <Linkedin size={17} />
                  </IconButton>
                </m.div>

                <m.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp(reducedMotion, 0.36)}
                  className="mt-10 grid gap-4 sm:grid-cols-3"
                >
                  {[
                    { value: "9.40", label: "Current GPA" },
                    { value: "MERN", label: "Primary stack" },
                    { value: "Backend", label: "Engineering focus" },
                  ].map((item) => (
                    <div
                        key={item.label}
                      className="rounded-[1.7rem] border border-white/80 bg-white/88 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
                    >
                      <p className="text-3xl font-bold tracking-tight text-slate-950">{item.value}</p>
                      <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                    </div>
                  ))}
                </m.div>
              </div>

              <m.div
                initial="hidden"
                animate="visible"
                variants={fadeIn(reducedMotion, 0.18)}
                className="relative mx-auto w-full max-w-xl"
              >
                <div className="absolute inset-0 rounded-[2.1rem] bg-gradient-to-br from-sky-300/24 via-transparent to-orange-200/28 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2.2rem] border border-white/75 bg-white/80 p-5 shadow-[0_28px_90px_rgba(15,23,42,0.08)] backdrop-blur sm:p-6">
                  <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-r from-sky-100 via-white to-orange-50" />
                  <div className="relative rounded-[1.8rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.32em] text-sky-200/90">
                          Developer Focus
                        </p>
                        <h2 className="mt-3 max-w-xs text-2xl font-semibold tracking-tight leading-tight">
                          Full Stack Developer
                        </h2>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-slate-200">
                        MERN Stack
                      </div>
                    </div>

                    <div className="mt-7 grid gap-3.5">
                      {heroCards.map((card, index) => (
                        <m.div
                          key={card.title}
                          initial="hidden"
                          animate="visible"
                          variants={fadeUp(reducedMotion, 0.26 + index * 0.06, 14)}
                          whileHover={reducedMotion ? undefined : { x: 4 }}
                          transition={{ duration: 0.25 }}
                          className="rounded-[1.45rem] border border-white/8 bg-white/6 p-4 sm:p-5"
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-300" />
                            <div>
                              <p className="text-sm font-semibold text-white">{card.title}</p>
                              <p className="mt-1 max-w-sm text-sm leading-6 text-slate-300">{card.body}</p>
                            </div>
                          </div>
                        </m.div>
                      ))}
                    </div>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[1.4rem] border border-white/8 bg-white/6 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Current priorities</p>
                        <p className="mt-3 text-sm leading-6 text-slate-300">
                          System design thinking, production-quality MERN builds, and stronger backend depth.
                        </p>
                      </div>
                      <div className="rounded-[1.4rem] border border-white/8 bg-white/6 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Strengths</p>
                        <p className="mt-3 text-sm leading-6 text-slate-300">
                          Structured workflows, measurable project impact, and thoughtful UI decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </m.div>
            </div>
          </section>

          <Section
            id="about"
            title="About"
            description="Backend-focused full stack development with practical product thinking."
            reducedMotion={reducedMotion}
          >
            <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <RevealCard reducedMotion={reducedMotion}>
                <div className="content-card h-full">
                  <div className="space-y-5 text-base leading-8 text-slate-600">
                    {aboutParagraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </RevealCard>

              <div className="grid auto-rows-fr gap-4">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Backend Systems",
                    body: "Authentication, REST APIs, RBAC, and scalable workflow design across real product scenarios.",
                  },
                  {
                    icon: Database,
                    title: "Operational Thinking",
                    body: "Preference for database-driven products that improve processes, consistency, and administration.",
                  },
                  {
                    icon: Trophy,
                    title: "Competitive Edge",
                    body: "University coding placements and hackathon recognition backed by Java and DSA practice.",
                  },
                  {
                    icon: Brain,
                    title: "Analytical Style",
                    body: "Chess, finance, and strategic thinking shape a structured approach to debugging and decisions.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <RevealCard key={item.title} reducedMotion={reducedMotion} delay={index * 0.05}>
                      <div className="h-full rounded-[1.75rem] border border-slate-200/80 bg-white/92 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.08)]">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                          <Icon size={18} />
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
                      </div>
                    </RevealCard>
                  );
                })}
              </div>
            </div>
          </Section>

          <Section
            id="education"
            title="Education"
            description="Academic background in AI, data science, and software development."
            reducedMotion={reducedMotion}
            tinted
          >
            <div className="grid gap-5 lg:grid-cols-2">
              {education.map((item, index) => (
                <RevealCard key={item.institution} reducedMotion={reducedMotion} delay={index * 0.06}>
                  <article className="relative h-full overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-[0_20px_55px_rgba(15,23,42,0.05)]">
                    <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-sky-500 via-teal-500 to-orange-400" />
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                        <BookOpenCheck size={18} />
                      </div>
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                        {item.duration}
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
                      {item.institution}
                    </h3>
                    <p className="mt-3 text-base leading-8 text-slate-600">{item.program}</p>
                    <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
                      {item.result}
                    </p>
                  </article>
                </RevealCard>
              ))}
            </div>
          </Section>

          <Section
            id="skills"
            title="Skills"
            description="Technologies and engineering strengths used across full stack development."
            reducedMotion={reducedMotion}
          >
            <div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <RevealCard key={group.title} reducedMotion={reducedMotion} delay={index * 0.05}>
                    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-slate-200/80 bg-white/94 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                      <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-r ${group.accent}`} />
                      <div className="relative flex h-full flex-col">
                        <div className="border-b border-slate-200/80 px-6 pb-5 pt-6">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 bg-white text-slate-800 shadow-sm">
                            <Icon size={19} />
                          </div>
                          <h3 className="mt-5 text-lg font-semibold text-slate-950">{group.title}</h3>
                          <p className="mt-2 max-w-[32ch] text-sm leading-7 text-slate-600">{group.description}</p>
                        </div>
                        <div className="grid gap-2.5 px-6 py-5">
                          {group.items.map((item) => (
                            <div
                              key={`${group.title}-${item.label}`}
                              className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50/90 px-4 py-3 text-sm font-medium text-slate-700 transition duration-300 group-hover:border-slate-300 group-hover:bg-white"
                            >
                              <span>{item.label}</span>
                              {item.meta ? (
                                <span className="shrink-0 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                                  {item.meta}
                                </span>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  </RevealCard>
                );
              })}
            </div>
          </Section>

          <Section
            id="projects"
            title="Projects"
            description="Selected product and backend work built around real workflows."
            reducedMotion={reducedMotion}
            tinted
          >
            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project, index) => (
                <RevealCard key={project.title} reducedMotion={reducedMotion} delay={index * 0.08}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.1)]">
                    <div className="border-b border-slate-200 bg-[linear-gradient(180deg,rgba(248,250,252,0.96),rgba(255,255,255,0.96))] p-4 sm:p-5">
                      <ProjectPreview project={project.preview} reducedMotion={reducedMotion} />
                    </div>

                    <div className="flex h-full flex-col p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium text-sky-700">{project.title}</p>
                          <h3 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
                            {project.subtitle}
                          </h3>
                        </div>
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                          Featured Project
                        </span>
                      </div>

                      <p className="mt-4 text-base leading-8 text-slate-600">{project.description}</p>

                      <div className="mt-5 flex flex-wrap gap-2.5">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 grid gap-3">
                        {project.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-700"
                          >
                            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-500" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6">
                        <SecondaryButton href={project.github} external>
                          GitHub Repository
                          <Github size={16} />
                        </SecondaryButton>
                      </div>
                    </div>
                  </article>
                </RevealCard>
              ))}
            </div>
          </Section>

          <Section
            id="achievements"
            title="Achievements"
            description="Competitive coding results and technical milestones."
            reducedMotion={reducedMotion}
          >
            <div className="grid gap-5 lg:grid-cols-3">
              {achievements.map((achievement, index) => (
                <RevealCard key={achievement.title} reducedMotion={reducedMotion} delay={index * 0.05}>
                  <article className="relative h-full overflow-hidden rounded-[1.95rem] border border-slate-200/80 bg-white/96 p-6 shadow-[0_20px_55px_rgba(15,23,42,0.05)]">
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-sky-100 via-white to-orange-50" />
                    <div className="relative">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                          <Award size={18} />
                        </div>
                        <span className="rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                          {achievement.label}
                        </span>
                      </div>

                      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
                        {achievement.title}
                      </h3>
                      <p className="mt-3 text-base leading-8 text-slate-600">
                        {achievement.description}
                      </p>

                      <div className="mt-5 grid gap-3">
                        {achievement.points.map((point) => (
                          <div
                            key={point}
                            className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm leading-7 text-slate-700"
                          >
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </RevealCard>
              ))}
            </div>
          </Section>

          <Section
            id="interests"
            title="Interests"
            description="Interests that support structured thinking and technical decision-making."
            reducedMotion={reducedMotion}
            tinted
          >
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <RevealCard reducedMotion={reducedMotion}>
                <div className="content-card h-full">
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                    How these interests influence the way I build
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    Priyanshu&apos;s interests are closely tied to how he works:
                    structured thinking, calm decision-making, and attention to
                    long-term tradeoffs rather than short-term fixes.
                  </p>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    Chess strengthens pattern recognition and strategic planning.
                    Finance and market analysis reinforce discipline around
                    constraints, risk, and prioritization. Together, they support
                    a more deliberate approach to backend design and product
                    decisions.
                  </p>
                </div>
              </RevealCard>

              <div className="grid gap-3 sm:grid-cols-2">
                {interests.map((interest, index) => (
                  <RevealCard key={interest.title} reducedMotion={reducedMotion} delay={index * 0.03}>
                    <div className="rounded-[1.55rem] border border-slate-200/80 bg-white/92 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(15,23,42,0.07)]">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{interest.title}</p>
                          <p className="mt-2 text-sm leading-7 text-slate-600">
                            {interest.description}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {interest.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </RevealCard>
                ))}
              </div>
            </div>
          </Section>

          <Section
            id="contact"
            title="Contact"
            description="Open to internships and full stack engineering opportunities."
            reducedMotion={reducedMotion}
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
              <RevealCard reducedMotion={reducedMotion}>
                <div className="content-card h-full">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                      <MapPin size={15} />
                      Rudrapur, Uttarakhand, India
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                      <UserRound size={15} />
                      Full Stack Developer &amp; MERN Engineer
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                    Let&apos;s connect around product engineering, backend systems, and practical web applications.
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
                    I&apos;m especially interested in internships and collaborations
                    where architecture, backend reliability, and clean product
                    execution all matter.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <PrimaryButton href={profileLinks.email}>
                      Email Me
                      <Mail size={16} />
                    </PrimaryButton>
                    <SecondaryButton href={profileLinks.resumeView} external>
                      View Resume
                      <ArrowRight size={16} />
                    </SecondaryButton>
                  </div>
                </div>
              </RevealCard>

              <div className="grid gap-4">
                <RevealCard reducedMotion={reducedMotion} delay={0.04}>
                  <LinkCard
                    icon={Mail}
                    label="Email"
                    value="priyanshubisht.me@gmail.com"
                    href={profileLinks.email}
                  />
                </RevealCard>
                <RevealCard reducedMotion={reducedMotion} delay={0.08}>
                  <LinkCard
                    icon={Github}
                    label="GitHub"
                    value="github.com/Priyanshu-Bisht-me"
                    href={profileLinks.github}
                  />
                </RevealCard>
                <RevealCard reducedMotion={reducedMotion} delay={0.12}>
                  <LinkCard
                    icon={Linkedin}
                    label="LinkedIn"
                    value="linkedin.com/in/priyanshudev01"
                    href={profileLinks.linkedin}
                  />
                </RevealCard>
                <RevealCard reducedMotion={reducedMotion} delay={0.16}>
                  <LinkCard
                    icon={Download}
                    label="Resume"
                    value="Open or download via Google Drive"
                    href={profileLinks.resumeView}
                  />
                </RevealCard>
              </div>
            </div>
          </Section>
        </main>

        <footer className="border-t border-slate-200/80 bg-white/70">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <p>© 2026 Priyanshu Bisht. Built with React, Tailwind CSS, and Framer Motion.</p>
            <p>Focused on clean architecture, smooth UX, and practical product work.</p>
          </div>
        </footer>
      </div>
    </LazyMotion>
  );
}

function Section({ id, title, description, children, reducedMotion, tinted = false }) {
  return (
    <section id={id} className={`section-shell scroll-mt-28 ${tinted ? "section-tint" : ""}`}>
      <RevealCard reducedMotion={reducedMotion}>
        <div className="section-heading">
          <h2 className="text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
            {description}
          </p>
        </div>
      </RevealCard>
      {children}
    </section>
  );
}

function RevealCard({ children, reducedMotion, delay = 0 }) {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={fadeUp(reducedMotion, delay)}
    >
      {children}
    </m.div>
  );
}

function PrimaryButton({ href, children, external = false }) {
  const isExternal = external || href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children, external = false }) {
  const isExternal = external || href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
    >
      {children}
    </a>
  );
}

function IconButton({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
    >
      {children}
    </a>
  );
}

function LinkCard({ icon: Icon, label, value, href }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="rounded-[1.75rem] border border-slate-200/80 bg-white/92 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.08)]"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
          <Icon size={18} />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
        </div>
      </div>
    </a>
  );
}

function ProjectPreview({ project, reducedMotion }) {
  if (project === "ashapure") {
    return (
      <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
        <div className="border-b border-slate-200 bg-slate-950 px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
            </div>
            <span className="rounded-full bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              Subscription Platform
            </span>
          </div>
        </div>

        <div className="grid gap-4 bg-[linear-gradient(180deg,#0f172a_0%,#162033_100%)] p-5 text-white md:grid-cols-[0.7fr_1.3fr]">
          <div className="rounded-[1.25rem] border border-white/8 bg-white/6 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Operations</p>
            <div className="mt-4 grid gap-3">
              {[
                { label: "Users", value: "700+" },
                { label: "Vendors", value: "50+" },
                { label: "Auth", value: "JWT" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/8 bg-black/15 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                  <p className="mt-1 text-lg font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.25rem] border border-white/8 bg-white/6 p-4">
            <div className="flex flex-wrap items-center gap-2">
              {["Orders", "Subscriptions", "RBAC", "Vendors"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs text-slate-200">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-4 rounded-[1.2rem] bg-[linear-gradient(135deg,#e0f2fe_0%,#f8fafc_45%,#fff7ed_100%)] p-4 text-slate-900">
              <p className="text-sm font-semibold">Automated delivery workflow</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {["User signup", "Plan selection", "Vendor assignment"].map((item, index) => (
                  <m.div
                    key={item}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={fadeUp(reducedMotion, index * 0.04, 10)}
                    className="rounded-xl bg-white/85 px-3 py-3 text-sm font-medium shadow-sm"
                  >
                    {item}
                  </m.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
      <div className="border-b border-slate-200 bg-[linear-gradient(180deg,#eef2ff_0%,#f8fafc_100%)] px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="h-4 w-24 rounded-full bg-slate-900" />
          <div className="flex gap-2">
            <span className="h-4 w-10 rounded-full bg-sky-500/80" />
            <span className="h-4 w-10 rounded-full bg-slate-200" />
          </div>
        </div>
      </div>

      <div className="grid gap-4 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-5 md:grid-cols-[0.58fr_1.42fr]">
        <div className="grid gap-3">
          <div className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4">
            <div className="h-5 w-28 rounded-full bg-[linear-gradient(90deg,#60a5fa,#f59e0b)]" />
            <div className="mt-4 space-y-2">
              <div className="h-3 w-16 rounded-full bg-slate-200" />
              <div className="h-3 w-12 rounded-full bg-slate-200" />
              <div className="h-10 rounded-2xl border border-slate-200 bg-white" />
            </div>
          </div>
          <div className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4">
            <div className="h-4 w-24 rounded-full bg-slate-300" />
            <div className="mt-3 h-12 rounded-2xl border border-slate-200 bg-white" />
          </div>
        </div>

        <div className="rounded-[1.2rem] border border-slate-200 bg-white p-4">
          <div className="h-5 w-36 rounded-full bg-slate-900" />
          <div className="mt-4 rounded-[1rem] border border-slate-200 bg-slate-50 p-3">
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 16 }).map((_, index) => (
                <m.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeUp(reducedMotion, index * 0.015, 8)}
                  className={`h-8 rounded-lg ${
                    index < 4
                      ? "bg-sky-100"
                      : index % 5 === 0
                        ? "bg-amber-50"
                        : "bg-white border border-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="h-3 w-16 rounded-full bg-slate-300" />
            <div className="h-4 w-24 rounded-full bg-slate-900" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
