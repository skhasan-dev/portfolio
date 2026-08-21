// ============================================================
//  DATA.JS — Your portfolio content
//  This is the ONLY file you need to edit day-to-day.
//  Save → refresh browser. Everything auto-renders.
//
//  RULE: any field marked `"" hides ...` or `null hides ...` is
//  optional — leave it empty to hide that piece of UI cleanly.
//  Nothing renders as broken/empty when a field is missing.
// ============================================================

const PORTFOLIO_DATA = {

  // ── PERSONAL INFO ─────────────────────────────────────────
  personal: {
    name:      "Hasan Shaikh",       // used in hero letters, doc title, footer, nav monogram fallback
    initials:  "HS",                 // nav monogram
    role:      "Flutter Developer",  // hero role line
    location:  "Mumbai, India",

    eyebrowYear: "",  // hero eyebrow text

    // Small handwritten sticky-note tag under the hero name. "" hides it entirely.
    // NOTE: reflects real availability — update whenever this changes.
    pinNote: "open to freelance Flutter work →",

    // 3-line hero intro. Migrated/condensed from the old About paragraphs.
    lead: "Flutter developer building real-time booking platforms, AI-powered discovery apps, and privacy-first tools that run entirely on-device.",

    email:     "skhasan2829@gmail.com",
    linkedin:  "https://linkedin.com/in/mohammad-hasan-shaikh",
    github:    "https://github.com/skhasan-dev",
    twitter:   "",   // "" hides the Twitter/X icon (nav has none; contact social row hides it)
    resumePDF: "assets/Mohamad-Hasan-Shaikh.pdf",  // "" hides the résumé nav icon + résumé strip in Experience
  },

  // ── NAV LINKS ──────────────────────────────────────────────
  // Center nav zone. Edit label/href here — never in index.html.
  navLinks: [
    { label: "About",      href: "#about" },
    { label: "Stack",      href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects",   href: "#projects" },
  ],

  // ── SECTION COPY ───────────────────────────────────────────
  // Eyebrow / title / sub-caption for every section below the hero.
  // "sub" may be left "" to hide the sub-caption line.
  sections: {
    about: {
      eyebrow: "02 · About",
      title:   "The work so far, reduced to numbers.",
      sub:     "The rest is in the work below.",
    },
    skills: {
      eyebrow: "03 · Stack",
      title:   "Open the drawer.",
      sub:     "Four categories, tap one to open it.",
    },
    projects: {
      eyebrow: "04 · Work",
      title:   "7 projects, briefly.",
      sub:     "Apps I've designed, built, and shipped — solo and at work. Drag or scroll sideways to explore.",
    },
    experience: {
      eyebrow: "05 · Experience",
      title:   "Career timeline",
      sub:     "The résumé version, for the people who need to scan it fast.",
    },
    testimonials: {
      eyebrow: "06 · Feedback",
      title:   "What people say.",
      sub:     "",
    },
    contact: {
      eyebrow: "07 · Contact",
      title:   "Let's build something worth shipping.",
      sub:     "Open to freelance Flutter work and full-time opportunities. Usually reply within a day.",
    },
  },

  // ── ABOUT — 6 number-driven fact cards (no prose, by design) ──
  //  FIELDS: number (big display value), highlight (the one bolded
  //  red word in the label), rest (remaining label text).
  //  Order = display order = "pg. 01" through "pg. 06".
  about: [
    { number: "1.5+",   highlight: "Years",       rest: "shipping Flutter apps" },
    { number: "7",      highlight: "Apps",        rest: "published on the Play Store" },
    { number: "4",      highlight: "On-device",   rest: "apps — zero cloud, zero uploads" },
    { number: "87.17%", highlight: "Distinction", rest: "in Computer Engineering" },
    { number: "3",      highlight: "Roles",       rest: "held across two companies" },
    { number: "19",     highlight: "Years old",   rest: "when the distinction landed" },
  ],

  // ── SKILLS — tabbed categories ─────────────────────────────
  //  FIELDS: tab (button label), folderTag (small caption inside
  //  the open panel), tools (array of pill labels).
  skills: [
    {
      tab: "Core",
      folderTag: "folder 01 — core languages",
      tools: ["Flutter", "Dart"],
    },
    {
      tab: "State & Data",
      folderTag: "folder 02 — state & local data",
      tools: ["Provider", "GetX", "SQLite", "MongoDB"],
    },
    {
      tab: "Backend",
      folderTag: "folder 03 — backend & apis",
      tools: ["Node.js", "Firebase", "REST APIs", "WebSockets"],
    },
    {
      tab: "Tooling",
      folderTag: "folder 04 — tooling",
      tools: ["Git", "Postman"],
    },
  ],

  // ── PROJECT FILTERS — drives the filter row ────────────────
  //  `id` must match a project's `category` field. "all" is implicit.
  projectFilters: [
    { id: "ai",      label: "AI & Backend" },
    { id: "media",   label: "Media" },
    { id: "utility", label: "Utilities" },
  ],

  // ── PROJECTS ──────────────────────────────────────────────
  //
  //  FIELDS:
  //  name         — App name
  //  category     — Must match a projectFilters id above
  //  tag          — Short handwritten tag on the card (e.g. "AI chatbot")
  //  techBadge    — { text: 2-letter monogram, logo: path to real logo }
  //                 logo "" falls back to the text monogram
  //  description  — 1–2 sentences
  //  stack        — Array of tech label strings
  //  result       — Headline metric shown as a hover "stamp". "" hides it.
  //                 RECOMMENDED for stronger credibility — none of these
  //                 have one yet; add a real number (installs, rating,
  //                 users) as soon as you have one worth showing.
  //  githubUrl    — "" hides the GitHub pill.
  //                 RECOMMENDED — none of these repos are public yet;
  //                 making even one public strengthens the section.
  //  primaryLink  — { label, url } — the main CTA pill. null hides it.
  //
  projects: [
    {
      name:        "Synzy",
      category:    "ai",
      tag:         "AI + college discovery",
      techBadge:   { text: "SY", logo: "" },
      description: "A full-stack school & college discovery app with AI-based recommendations — students search, apply, and track institutions based on their preferences. Node.js backend on a VPS, Firebase for auth and real-time data.",
      stack:       ["Flutter", "Dart", "Node.js", "Firebase", "AI Recommendations"],
      result:      "",
      githubUrl:   "",
      primaryLink: { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.TalentConnectExample.tc_sa" },
    },
    {
      name:        "Hex Chatbot",
      category:    "ai",
      tag:         "AI chatbot",
      techBadge:   { text: "HX", logo: "" },
      description: "A GPT-4o Mini powered chatbot with 50 free daily requests and prompts tuned for crisp responses. GetX state management and Firebase handle sessions and auth.",
      stack:       ["Flutter", "GetX", "OpenAI API", "Firebase"],
      result:      "",
      githubUrl:   "",
      primaryLink: { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.HSN.hex_chatbot" },
    },
    {
      name:        "HasicX",
      category:    "media",
      tag:         "music player",
      techBadge:   { text: "HC", logo: "" },
      description: "A feature-rich local music player with playlists, looping, and favourites. Background playback with notification controls, everything persisted locally with SQLite.",
      stack:       ["Flutter", "GetX", "SQLite", "Background Audio"],
      result:      "",
      githubUrl:   "",
      primaryLink: { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.HSN.hasicx" },
    },
    {
      name:        "Shrinkify",
      category:    "utility",
      tag:         "on-device tool",
      techBadge:   { text: "SK", logo: "" },
      description: "A fully local image compression utility with zero server dependency — batch compression with customizable quality, no uploads, no privacy concerns.",
      stack:       ["Flutter", "Dart", "Provider", "On-device"],
      result:      "",
      githubUrl:   "",
      primaryLink: { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.hasneticlabs.shrinkify" },
    },
    {
      name:        "QuroScanner",
      category:    "utility",
      tag:         "QR scanner",
      techBadge:   { text: "QS", logo: "" },
      description: "A clean, fast QR code scanner and generator built for everyday use — lightning-quick scanning with a user-friendly interface.",
      stack:       ["Flutter", "Dart", "Provider", "On-device"],
      result:      "",
      githubUrl:   "",
      primaryLink: { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.HSN.QuroScanner" },
    },
    {
      name:        "HasneX",
      category:    "media",
      tag:         "video player",
      techBadge:   { text: "HN", logo: "" },
      description: "A privacy-focused local video player designed to give complete control over the viewing experience — smooth, offline, and entirely on-device.",
      stack:       ["Flutter", "Dart", "Provider", "On-device"],
      result:      "",
      githubUrl:   "",
      primaryLink: { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.hasneticlabs.hasnex" },
    },
    {
      name:        "Drop!t",
      category:    "utility",
      tag:         "save anything",
      techBadge:   { text: "DT", logo: "" },
      description: "An instant space to save anything in seconds — links, notes, text and images stored safely on-device. No cloud, no accounts, no waiting.",
      stack:       ["Flutter", "Dart", "Provider", "On-device"],
      result:      "",
      githubUrl:   "",
      primaryLink: { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.hasneticlabs.drop_it" },
    },

    // ── ADD NEW PROJECT ─────────────────────────────────────
    // {
    //   name:        "My New App",
    //   category:    "utility",              // must match a projectFilters id
    //   tag:         "one-line tag",
    //   techBadge:   { text: "MN", logo: "" },
    //   description: "What it does and why it matters.",
    //   stack:       ["Flutter", "Firebase"],
    //   result:      "",                     // e.g. "4.8★ · 10k+"
    //   githubUrl:   "",
    //   primaryLink: { label: "Play Store", url: "" },
    // },
  ],

  // ── EXPERIENCE — unified work + education timeline ─────────
  //
  //  FIELDS:
  //  type     — "work" or "education" (kept for future use; the
  //             timeline row itself renders identically for both)
  //  period   — Date range string
  //  role     — Job title or degree name
  //  org      — Company or institution name
  //  location — Shown as the small pill on the row. "" hides it.
  //  points   — Bullet detail. KEPT in the data for future use
  //             (e.g. résumé generation) but NOT rendered in the
  //             new timeline row — that format only has room for
  //             period/role/org/location.
  //
  //  Newest first. The timeline shows the first 3 and reveals the
  //  rest in chunks of 3 — this is index-based and length-agnostic,
  //  so adding a 6th or 10th entry needs no code changes.
  //
  experience: [
    {
      type:     "work",
      period:   "Aug 2025 – Present",
      role:     "Flutter Developer",
      org:      "Wybrid",
      location: "Mumbai, India",
      points: [
        "Developing and maintaining the Wybrid real estate digitalization platform — renting office spaces, meeting rooms, and pantry facilities.",
        "Architecting Flutter apps with Provider state management for scalable, maintainable codebases.",
        "Implementing real-time features using WebSockets for live availability and booking updates.",
        "Collaborating in agile sprints and contributing to product roadmap decisions.",
      ],
    },
    {
      type:     "work",
      period:   "Apr 2025 – Jul 2025",
      role:     "Flutter Developer Intern",
      org:      "Wybrid",
      location: "Mumbai, India",
      points: [
        "Contributed to core Flutter development of the Wybrid platform from day one.",
        "Worked with Provider state management and REST API integrations.",
        "Strong performance led to a full-time offer within 4 months.",
      ],
    },
    {
      type:     "work",
      period:   "Jan 2025 – Apr 2025",
      role:     "Flutter Developer Intern",
      org:      "Talent Connect: Campus to Cubicle",
      location: "Mumbai, India",
      points: [
        "Built Synzy — a full-fledged school & college discovery app, end-to-end from backend to mobile.",
        "Implemented AI-based college recommendation system tailored to student preferences.",
        "Built and deployed a Node.js backend on Hostinger VPS with Firebase for data services.",
      ],
    },
    {
      type:     "education",
      period:   "2022 – 2025",
      role:     "Diploma in Computer Engineering",
      org:      "Government Polytechnic, Mumbai",
      location: "87.17% · Distinction",
      points: [],
    },
    {
      type:     "education",
      period:   "2021 – 2022",
      role:     "SSC",
      org:      "Sacred Heart Boys High School",
      location: "83.40%",
      points: [],
    },

    // ── ADD NEW ENTRY ────────────────────────────────────────
    // {
    //   type:     "work",
    //   period:   "Month Year – Month Year",
    //   role:     "Your Role Title",
    //   org:      "Company Name",
    //   location: "City, Country",
    //   points: ["What you built or shipped."],
    // },
  ],

  // ── TESTIMONIALS ───────────────────────────────────────────
  //  PLACEHOLDER CONTENT — replace with real quotes before launch.
  //  Leave this array empty ( testimonials: [] ) to hide the whole
  //  section cleanly — it renders nothing when there's nothing here.
  testimonials: [
    {
      quote:   "Hasan picked up the Wybrid codebase fast and shipped the real-time booking flow ahead of schedule — clean architecture, no hand-holding needed.",
      name:    "Engineering Lead",
      context: "Wybrid — PLACEHOLDER, replace with a real quote",
    },
    {
      quote:   "Built Synzy end-to-end — backend, AI recommendations, mobile app — in a few months as an intern. Rare initiative for that stage.",
      name:    "Founder",
      context: "Talent Connect: Campus to Cubicle — PLACEHOLDER, replace with a real quote",
    },
    {
      quote:   "QuroScanner is the fastest, cleanest QR scanner I've used — does exactly what it says with none of the clutter.",
      name:    "Play Store review",
      context: "QuroScanner user — PLACEHOLDER, replace with a real quote",
    },
  ],

};
