<div align="center">

# 🌟 Codveda Technologies — Front-End Development Internship
### 🚀 Production Portfolio Deliverables & Comprehensive Task Showcase

[![Internship](https://img.shields.io/badge/Codveda-Internship%202026-6366f1?style=for-the-badge&logo=codewars&logoColor=white)](https://codveda.com/)
[![Track](https://img.shields.io/badge/Domain-Front--End%20Development-06b6d4?style=for-the-badge&logo=visualstudiocode&logoColor=white)](https://codveda.com/)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Netlify%20Production-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://codveda-internship-sobuj.netlify.app)
[![Status](https://img.shields.io/badge/Status-Completed%20(6%2F6%20Tasks)-10b981?style=for-the-badge&logo=checkmarx&logoColor=white)](https://codveda.com/)
[![Author](https://img.shields.io/badge/Author-Md.%20Sobuj%20Madbor-f59e0b?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MDSOBUJMADBOR)

<p align="center">
  <strong>An end-to-end engineered front-end suite featuring semantic HTML5/CSS3 architecture, React 18 SPAs, asynchronous REST APIs, Google Lighthouse 99 optimization, and GSAP 3 kinetic animations.</strong>
</p>

[🌐 View Live Showcase Hub](https://codveda-internship-sobuj.netlify.app) &bull; [📂 GitHub Repository](https://github.com/MDSOBUJMADBOR/Codveda-Frontend-Internship) &bull; [📝 Submission Form](https://forms.gle/Khvs4xArYJtL5pbw7) &bull; [🎬 Video Script](./DEMO_SCRIPT.md)

---

</div>

## 📌 Executive Summary

This repository contains the complete internship deliverables for **Codveda Technologies** (Duration: **October 22, 2026 – November 22, 2026**). In accordance with Codveda's internship curriculum requirements, **two advanced tasks per level** (6 total projects) have been meticulously developed, tested, optimized, and deployed to production.

```
Codveda-Internship/
│
├── Level-1-Basic/
│   ├── Task-1-Landing-Page/       # NovaFlow: Semantic SaaS Landing Page (Dark/Light Mode)
│   └── Task-2-Interactive-Form/   # Codveda ID: Real-Time Regex Validation & Password Entropy
│
├── Level-2-Intermediate/
│   ├── Task-1-React-SPA/          # NovaSphere: React 18 Multi-Page SPA (Router v6 + Context)
│   └── Task-2-GitHub-API/         # DevPulse: GitHub REST API v3 Explorer (500ms Debounce)
│
├── Level-3-Advanced/
│   ├── Task-2-Performance/        # OptiCore: Lighthouse 99 Performance Suite & Service Worker
│   └── Task-3-Animations/         # NovaPulse: GSAP 3 ScrollTrigger & 3D Perspective Tilt Cards
│
├── index.html                     # Central Production Showcase Portal
├── DEMO_SCRIPT.md                 # LinkedIn Video Demonstration Script (English & Bengali)
└── README.md                      # Master Portfolio Documentation
```

---

## 🎯 Projects Overview & Live Links

| Level | Task Name | Description & Tech Stack | Live Demo | Source Code |
| :--- | :--- | :--- | :---: | :---: |
| **Level 1** | **Task 1: NovaFlow** | SaaS product landing page with semantic HTML5, CSS Grid/Flexbox, dark/light theme switcher, animated metrics, and mobile drawer. | [🚀 Launch Demo](https://codveda-internship-sobuj.netlify.app/Level-1-Basic/Task-1-Landing-Page/) | [📂 Code](./Level-1-Basic/Task-1-Landing-Page/) |
| **Level 1** | **Task 2: Codveda ID** | Registration form with real-time regex input verification, 4-tier visual password strength bar, focus/blur glowing cues, and modal summary. | [🚀 Launch Demo](https://codveda-internship-sobuj.netlify.app/Level-1-Basic/Task-2-Interactive-Form/) | [📂 Code](./Level-1-Basic/Task-2-Interactive-Form/) |
| **Level 2** | **Task 1: NovaSphere** | Enterprise multi-route SPA built with React 18, React Router v6, and centralized Context API for global cross-route state persistence. | [🚀 Launch Demo](https://codveda-internship-sobuj.netlify.app/Level-2-Intermediate/Task-1-React-SPA/live-demo/) | [📂 Code](./Level-2-Intermediate/Task-1-React-SPA/) |
| **Level 2** | **Task 2: DevPulse** | Asynchronous GitHub REST API v3 explorer featuring 500ms debouncing, dynamic language filtering, multi-sort options, and skeleton loaders. | [🚀 Launch Demo](https://codveda-internship-sobuj.netlify.app/Level-2-Intermediate/Task-2-GitHub-API/) | [📂 Code](./Level-2-Intermediate/Task-2-GitHub-API/) |
| **Level 3** | **Task 2: OptiCore** | Web performance suite achieving **99/100 Lighthouse score** via render-blocking elimination, WebP conversion, and Cache-First Service Worker. | [🚀 Launch Demo](https://codveda-internship-sobuj.netlify.app/Level-3-Advanced/Task-2-Performance/) | [📂 Code](./Level-3-Advanced/Task-2-Performance/) |
| **Level 3** | **Task 3: NovaPulse** | Kinetic animation engine built with GSAP 3 and ScrollTrigger. 60 FPS timelines, scroll-pinned progress bar, and 3D perspective tilt cards. | [🚀 Launch Demo](https://codveda-internship-sobuj.netlify.app/Level-3-Advanced/Task-3-Animations/) | [📂 Code](./Level-3-Advanced/Task-3-Animations/) |

---

## 🔬 Level 1: Core Fundamentals (Basic)

### 🔹 [Task 1: NovaFlow — Responsive SaaS Landing Page](./Level-1-Basic/Task-1-Landing-Page/)
* **Objective:** Build a responsive landing page using semantic HTML5, CSS custom properties, and vanilla JavaScript.
* **Architecture Highlights:**
  * **Semantic Markup:** Formatted with `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>` for maximum accessibility and SEO visibility.
  * **Theme Engine:** Instant Dark / Light mode switching using CSS Custom Properties (`--bg-primary`, `--text-primary`) with `localStorage` memory.
  * **Dynamic Interactivity:** Animated number counter using `IntersectionObserver`, annual/monthly billing discount toggle, and collapsible FAQ accordions.
  * **Mobile-First Responsiveness:** Fluid grid columns adapting smoothly across Mobile (< 640px), Tablet (640px–991px), and Desktop (992px+).

### 🔹 [Task 2: Codveda ID — Interactive Form Validation](./Level-1-Basic/Task-2-Interactive-Form/)
* **Objective:** Build an interactive form that validates user input in real time with dynamic error handling.
* **Architecture Highlights:**
  * **Input Validation:** Real-time checking for Full Name (min 3 chars), RFC-5322 Email format, and international telephone numbers.
  * **4-Tier Password Entropy Bar:** Real-time visual feedback (Weak, Fair, Good, Strong) based on length, uppercase/lowercase, numbers, and special characters.
  * **Focus/Blur Micro-Interactions:** Custom `.focused` and `.error` visual states with subtle shake animations on invalid inputs.
  * **Confirmation Modal:** Displays an encrypted summary card of all validated inputs upon successful submission without page reload.

---

## ⚛️ Level 2: Intermediate Front-End Development

### 🔹 [Task 1: NovaSphere — React 18 Single Page Application](./Level-2-Intermediate/Task-1-React-SPA/)
* **Objective:** Create a multi-page SPA with client-side routing and centralized state management.
* **Architecture Highlights:**
  * **Client-Side Routing:** Built using `react-router-dom` v6 across **Home (`/`)**, **About (`/about`)**, **Services (`/services`)**, and **Contact (`/contact`)** routes with zero page flickering.
  * **Centralized State Management:** Implements React Context API (`AppContext.jsx`) managing theme toggling and a global inquiries list. Submitting a contact inquiry immediately increments the active badge counter across all routes.
  * **Modular Architecture:** Reusable functional components, hooks (`useState`, `useEffect`, `useContext`), and Lucide icons.
  * **Production Optimized:** Bundled with Vite 6 into minified, tree-shaken static assets.

### 🔹 [Task 2: DevPulse — GitHub REST API Explorer](./Level-2-Intermediate/Task-2-GitHub-API/)
* **Objective:** Integrate a public REST API to fetch and render dynamic content with search and filtering.
* **Architecture Highlights:**
  * **Asynchronous Integration:** Uses native `fetch` and `async/await` communicating directly with GitHub REST API v3.
  * **500ms Debouncing:** Prevents API rate-limit exhaustion and eliminates redundant network round-trips while typing.
  * **Dynamic Filtering & Sorting:** Dynamically extracts all repo languages into an interactive filter dropdown and sorts by **Most Stars**, **Most Forks**, and **Recently Updated**.
  * **Graceful Degradation:** Features a shimmering skeleton loader during network delays and friendly banners for 404 (User Not Found) and 403 (Rate Limit Reached).

---

## ⚡ Level 3: Advanced Optimization & Motion

### 🔹 [Task 2: OptiCore — Web Performance Optimization](./Level-3-Advanced/Task-2-Performance/)
* **Objective:** Optimize an existing application to eliminate bottlenecks, minimize load time, and achieve top Lighthouse scores.
* **Engineering Report & Metrics:** [Read the full AUDIT_REPORT.md](./Level-3-Advanced/Task-2-Performance/AUDIT_REPORT.md)

| Core Web Vitals Metric | Before Optimization | After Optimization | Delta |
| :--- | :---: | :---: | :---: |
| **Google Lighthouse Score** | **54 / 100** 🔴 | **99 / 100** 🟢 | **+45 pts (+83%)** |
| **First Contentful Paint (FCP)** | 2.4 s | **0.6 s** | **-75% Faster** |
| **Largest Contentful Paint (LCP)** | 4.1 s | **1.1 s** | **-73% Faster** |
| **Total Blocking Time (TBT)** | 380 ms | **12 ms** | **-96% Reduced** |
| **Cumulative Layout Shift (CLS)** | 0.280 | **0.001** | **Eliminated Reflows** |
| **Total Asset Payload** | 3.2 MB | **420 KB** | **-86% Bandwidth Saved** |

* **Techniques Applied:**
  * **Critical Path CSS:** Inlined critical above-the-fold CSS; non-critical styles deferred using `<link rel="preload" as="style">`.
  * **Service Worker Caching:** Deployed `sw.js` with **Cache-First** strategy for static dependencies and Stale-While-Revalidate background caching.
  * **Next-Gen Images:** Lossy WebP encoding with explicit dimensions to completely eradicate layout shifts (CLS: 0.001).

### 🔹 [Task 3: NovaPulse — Advanced GSAP 3 Animations Engine](./Level-3-Advanced/Task-3-Animations/)
* **Objective:** Create advanced physics-based motion with GSAP or Framer Motion.
* **Architecture Highlights:**
  * **Choreographed Timelines (`gsap.timeline()`):** Staggered hero sequence orchestrating taglines, headers, and actions with spring physics easing (`power4.out`, `elastic.out`).
  * **ScrollTrigger Pinning & Scrubbing:** Real-time top progress bar tracking scroll progress plus viewport triggers revealing timeline cards on scroll.
  * **3D Perspective Tilt Cards:** Mouse position tracking calculates dynamic 3D card tilt accompanied by localized specular glare reflections.
  * **Magnetic Cursor Follower:** Lerped custom cursor dot and spring attraction on interactive buttons.
  * **Accessibility Compliant:** Fully respects `@media (prefers-reduced-motion: reduce)` with an interactive accessibility toggle button.

---

## 🛠️ Complete Technology Stack

```
Frontend Architecture
├── Languages: HTML5, CSS3, JavaScript (ES6+), JSX
├── Frameworks & Libraries: React 18, React Router v6, GSAP 3, ScrollTrigger, Lucide React
├── Build Tools & Bundler: Vite 6, Node.js v24, npm
├── Performance & Auditing: Google Lighthouse, Chrome DevTools, Performance API, Service Workers
└── Cloud Deployment: Netlify Production CDN, GitHub Pages
```

---

## 💻 Running the Projects Locally

1. **Clone this repository:**
   ```bash
   git clone https://github.com/MDSOBUJMADBOR/Codveda-Frontend-Internship.git
   cd Codveda-Frontend-Internship
   ```

2. **Run Static Projects (Level 1, Level 2 Task 2, Level 3):**
   * Open `index.html` directly in your browser, or serve with VS Code **Live Server** / `npx serve .`

3. **Run React SPA (Level 2 Task 1):**
   ```bash
   cd Level-2-Intermediate/Task-1-React-SPA
   npm install
   npm run dev
   ```
   * Open `http://localhost:3000` to view the local React SPA.

---

## 📹 LinkedIn Video Demonstration & Caption

A complete, bilingual video presentation script is available in **[DEMO_SCRIPT.md](./DEMO_SCRIPT.md)**.

### Ready-to-Copy LinkedIn Post:
```text
🎉 Thrilled to announce the successful completion of my Front-End Development Internship at @Codveda Technologies!

Over the past month, I engineered 6 production-grade web applications spanning core fundamentals, component-driven SPAs, REST APIs, web performance engineering, and kinetic motion:

Level 1 (Basic Domain):
• NovaFlow: Responsive SaaS product landing page (Semantic HTML5, CSS Grid/Flexbox, Dark/Light Mode)
• Codveda ID: Interactive form validation with real-time regex & 4-tier password entropy calculator

Level 2 (Intermediate Domain):
• NovaSphere: Enterprise React 18 Single Page Application (React Router v6 + React Context API)
• DevPulse: GitHub REST API v3 Explorer with 500ms debounced live search & repository filters

Level 3 (Advanced Domain):
• OptiCore: Web Performance Optimization achieving a 99/100 Google Lighthouse Score, WebP image pipelines, and Cache-First Service Worker
• NovaPulse: Advanced kinetic animation engine built with GSAP 3, ScrollTrigger, and 3D perspective tilt cards

🌐 Live Interactive Showcase: https://codveda-internship-sobuj.netlify.app
🔗 GitHub Repository: https://github.com/MDSOBUJMADBOR/Codveda-Frontend-Internship

Sincere gratitude to the entire team at @Codveda Technologies for providing this hands-on learning opportunity and platform to build production-grade web applications.

#Codveda #CodvedaTech #CodvedaInternship #CodvedaJourney #CodvedaExperience #FutureWithCodveda #CodvedaAchievements #CodvedaProjects #FrontEndDevelopment #ReactJS #WebDevelopment #JavaScript #GSAP #WebPerformance #OpenSource
```

---

## 📄 License & Attribution

* **Author:** Md. Sobuj Madbor
* **Email:** [sobujmadbor660@gmail.com](mailto:sobujmadbor660@gmail.com)
* **Organization:** [Codveda Technologies](https://codveda.com/)
* **Submission Portal:** [Codveda Google Form](https://forms.gle/Khvs4xArYJtL5pbw7)
* **License:** Open source under the [MIT License](LICENSE).
