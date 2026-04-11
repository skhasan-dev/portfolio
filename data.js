// ============================================================
//  DATA.JS — Your portfolio content
//  This is the ONLY file you need to edit day-to-day.
//  Add projects, experience, or update personal info here.
//  Save → refresh browser. Everything auto-renders.
// ============================================================

const PORTFOLIO_DATA = {

  // ── PERSONAL INFO ─────────────────────────────────────────
  personal: {
    name:      "Mohamad Hasan Shaikh",
    initials:  "HS",
    role:      "Flutter Developer",
    location:  "Mumbai, India",
    tagline:   "I build performant, pixel-perfect Flutter apps — from real estate platforms to AI-powered discovery tools.",
    stack:     "Flutter · Dart · Provider · REST APIs · Firebase · Node.js",
    email:     "skhasan2829@gmail.com",
    phone:     "+91 8291789902",
    linkedin:  "https://linkedin.com/in/mohammad-hasan-shaikh",
    github:    "https://github.com/skhasan-dev",          // e.g. "https://github.com/yourusername"
    twitter:   "",          // e.g. "https://twitter.com/yourusername"
    photo:     "assets/hasan.jpeg",          // e.g. "assets/photo.jpg"
    resumePDF: "assets/Mohamad-Hasan-Shaikh.pdf",          // e.g. "assets/resume.pdf"
  },

  // ── ABOUT ─────────────────────────────────────────────────
  about: {
    // You can use <strong> tags inside paragraphs
    paragraphs: [
      "I'm a <strong>Flutter Developer based in Mumbai</strong>, currently building the Wybrid real estate platform full-time — a product that lets businesses book office spaces and meeting rooms in real-time.",
      "I've been writing Flutter code professionally since early 2025, shipping everything from AI-powered college discovery apps to music players with background playback. I care deeply about <strong>clean architecture, smooth UX, and code that scales</strong>.",
      "At 19, I hold a Diploma in Computer Engineering with distinction from Government Polytechnic, Mumbai — and I've been building full-stack apps since before I graduated.",
    ],
    techStack: [
      "Flutter", "Dart", "Provider", "GetX",
      "REST APIs", "WebSockets", "Firebase",
      "Node.js", "SQLite", "MongoDB", "Git", "Postman",
    ],
  },

  // ── PROJECTS ──────────────────────────────────────────────
  //
  //  FIELDS:
  //  name         — App name
  //  tagline      — One-line subtitle (shown in teal below name)
  //  description  — 2–3 sentences of detail
  //  stack        — Array of tech label strings
  //  accent       — Card color: "teal" | "lime" | "purple" | "coral" | "blue" | "amber"
  //                 (add new accents in theme.js → accents)
  //  image        — Path to promo screenshot. Leave "" to show placeholder.
  //  logo         — Path to app icon/logo. Leave "" to show emoji fallback.
  //  emoji        — Fallback icon when no logo is set
  //  playStoreUrl — Set "" to hide the badge
  //  githubUrl    — Set "" to hide the button
  //  demoUrl      — Set "" to hide the button

  projects: [
    {
      name:         "Synzy",
      tagline:      "College Discovery Platform",
      description:  "A full-stack school & college discovery app with AI-based recommendations. Students can search, apply, and track institutions based on their preferences. Node.js backend on Hostinger VPS, Firebase for auth and real-time data.",
      stack:        ["Flutter", "Dart", "Node.js", "Firebase", "AI Recommendations"],
      accent:       "teal",
      image:        "assets/synzy/promo.png",
      logo:         "",        // e.g. "assets/synzy-logo.png"
      emoji:        "🎓",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.TalentConnectExample.tc_sa",
      githubUrl:    "",
      demoUrl:      "",
    },
    {
      name:         "Hex Chatbot",
      tagline:      "AI-Powered Chat App",
      description:  "A GPT-4o Mini powered chatbot with 50 free daily requests and optimized prompts for crisp responses. GetX state management and Firebase backend handle user sessions and auth seamlessly.",
      stack:        ["Flutter", "GetX", "OpenAI API", "Firebase"],
      accent:       "purple",
      image:        "assets/hex/promo.png",
      logo:         "",
      emoji:        "🤖",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.HSN.hex_chatbot",
      githubUrl:    "",
      demoUrl:      "",
    },
    {
      name:         "HasicX",
      tagline:      "Music Player App",
      description:  "A feature-rich local music player with playlist creation, looping, and favourites. Background playback with notification controls makes it a proper daily driver, all persisted locally with SQLite.",
      stack:        ["Flutter", "GetX", "SQLite", "Background Audio"],
      accent:       "lime",
      image:        "assets/hasicx/promo.png",
      logo:         "",
      emoji:        "🎵",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.HSN.hasicx",
      githubUrl:    "",
      demoUrl:      "",
    },
    {
      name:         "Shrinkify",
      tagline:      "Image Compressor",
      description:  "A fully local image compression utility with zero server dependency. Supports batch compression with customizable quality settings — no uploads, no privacy concerns, all on-device.",
      stack:        ["Flutter", "Dart", "Provider", "On-device"],
      accent:       "coral",
      image:        "assets/shrinkify/promo.png",
      logo:         "",
      emoji:        "🗜️",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.hasneticlabs.shrinkify",
      indusUrl: "https://www.indusappstore.com/apps/productivity/shrinkify/com.hasneticlabs.shrinkify",
      githubUrl:    "",
      demoUrl:      "",
    },
    {
      name:         "QuroScanner",
      tagline:      "Scan & Generate QR Codes",
      description:  "QuroScanner is a powerful QR code scanner with a clean and user-friendly interface. With lightning-fast scanning and generation capabilities, QuroScanner is the perfect tool for all your QR code needs.",
      stack:        ["Flutter", "Dart", "Provider", "On-device"],
      accent:       "coral",
      image:        "assets/quroscanner/promo.png",
      logo:         "",
      emoji:        "🗜️",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.HSN.QuroScanner",
      indusUrl: "https://www.indusappstore.com/apps/productivity/quroscanner/com.HSN.QuroScanner",
      githubUrl:    "",
      demoUrl:      "",
    },
    {
      name:         "HasneX",
      tagline:      "Video Player App",
      description:  "HasneX is a powerful and privacy-focused local video player designed to give you complete control over your viewing experience — beautifully, smoothly, and entirely offline.",
      stack:        ["Flutter", "Dart", "Provider", "On-device"],
      accent:       "coral",
      image:        "assets/hasnex/promo.png",
      logo:         "",
      emoji:        "🗜️",
      playStoreUrl: "", //https://play.google.com/store/apps/details?id=com.hasneticlabs.hasnex
      indusUrl: "",
      githubUrl:    "",
      demoUrl:      "",
    },
    {
      name:         "Drop!t",
      tagline:      "Share to Save",
      description:  "Meet Drop!t — your instant space to save anything in seconds.\nLinks, notes, text & images… just drop them in and they’re stored safely on your device. No cloud, no accounts, no waiting. Everything stays local, fast, and fully in your control.",
      stack:        ["Flutter", "Dart", "Provider", "On-device"],
      accent:       "coral",
      image:        "assets/dropit/promo.png",
      logo:         "",
      emoji:        "🗜️",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.hasneticlabs.drop_it",
      indusUrl: "",
      githubUrl:    "",
      demoUrl:      "",
    },

    // ── ADD NEW PROJECT ─────────────────────────────────────
    // {
    //   name:         "My New App",
    //   tagline:      "One-line description",
    //   description:  "2–3 sentences about what it does and why it matters.",
    //   stack:        ["Flutter", "Firebase"],
    //   accent:       "blue",
    //   image:        "",
    //   logo:         "",
    //   emoji:        "🚀",
    //   playStoreUrl: "",
    //   githubUrl:    "",
    //   demoUrl:      "",
    // },
  ],

  // ── EXPERIENCE ────────────────────────────────────────────
  //
  //  FIELDS:
  //  type     — "work" or "education" (affects dot color on timeline)
  //  period   — Date range string
  //  role     — Job title or degree name
  //  company  — Company or institution name
  //  badge    — Optional pill label (e.g. "FULL-TIME", "87% · DISTINCTION"). Set "" to hide.
  //  points   — Array of bullet strings. Use [] for education entries without bullets.
  //
  //  HOW TO ADD AN ENTRY:
  //  Copy the template block at the bottom, fill in fields, add a comma.
  //  Entries render top-to-bottom in the order they appear here.
  //
  experience: [
    {
      type:    "work",
      period:  "Aug 2025 – Present",
      role:    "Flutter Developer",
      company: "Wybrid",
      badge:   "FULL-TIME",
      points: [
        "Developing and maintaining the Wybrid real estate digitalization platform — renting office spaces, meeting rooms, and pantry facilities.",
        "Architecting Flutter apps with Provider state management for scalable, maintainable codebases.",
        "Implementing real-time features using WebSockets for live availability and booking updates.",
        "Collaborating in agile sprints and contributing to product roadmap decisions.",
      ],
    },
    {
      type:    "work",
      period:  "Apr 2025 – Jul 2025",
      role:    "Flutter Developer Intern",
      company: "Wybrid",
      badge:   "",
      points: [
        "Contributed to core Flutter development of the Wybrid platform from day one.",
        "Worked with Provider state management and REST API integrations.",
        "Strong performance led to a full-time offer within 4 months.",
      ],
    },
    {
      type:    "work",
      period:  "Jan 2025 – Apr 2025",
      role:    "Flutter Developer Intern",
      company: "Talent Connect: Campus to Cubicle",
      badge:   "",
      points: [
        "Built Synzy — a full-fledged school & college discovery app, end-to-end from backend to mobile.",
        "Implemented AI-based college recommendation system tailored to student preferences.",
        "Built and deployed a Node.js backend on Hostinger VPS with Firebase for data services.",
      ],
    },
    {
      type:    "education",
      period:  "2022 – 2025",
      role:    "Diploma in Computer Engineering",
      company: "Government Polytechnic, Mumbai",
      badge:   "87.17% · DISTINCTION",
      points:  [],
    },
    {
      type:    "education",
      period:  "2021 – 2022",
      role:    "SSC",
      company: "Sacred Heart Boys High School",
      badge:   "83.40%",
      points:  [],
    },

    // ── ADD NEW EXPERIENCE ──────────────────────────────────
    // {
    //   type:    "work",
    //   period:  "Month Year – Month Year",
    //   role:    "Your Role Title",
    //   company: "Company Name",
    //   badge:   "FULL-TIME",
    //   points: [
    //     "What you built or shipped.",
    //     "Impact or technology used.",
    //   ],
    // },
  ],

};
