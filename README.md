# 🌟 Codveda Technologies — Front-End Development Internship Portfolio
### Official Internship Submission Repository

[![Internship](https://img.shields.io/badge/Codveda-Internship%202026-6366f1?style=for-the-badge&logo=code)](https://codveda.com/)
[![Track](https://img.shields.io/badge/Domain-Front--End%20Development-06b6d4?style=for-the-badge)](https://codveda.com/)
[![Status](https://img.shields.io/badge/Status-Completed%20(6%2F6%20Tasks)-10b981?style=for-the-badge)](https://codveda.com/)
[![Author](https://img.shields.io/badge/Author-Md.%20Sobuj%20Madbor-f59e0b?style=for-the-badge)](https://linkedin.com)

---

## 👤 Intern Information
- **Name:** Md. Sobuj Madbor
- **Role:** Front End Development Intern
- **Company:** Codveda Technologies
- **Duration:** 22/10/2026 – 22/11/2026
- **Task Submission Form:** [Submit Here](https://forms.gle/Khvs4xArYJtL5pbw7)

---

## 📁 Repository Structure & Completed Tasks

According to Codveda's internship guidelines, **two tasks per level** have been selected, architected, and fully implemented using industry-standard best practices:

```text
Codveda-Internship/
│
├── Level-1-Basic/
│   ├── Task-1-Landing-Page/       # Modern SaaS Landing Page (Semantic HTML5, CSS Grid/Flexbox, JS)
│   └── Task-2-Interactive-Form/   # Real-Time Regex Validation & Password Strength Meter
│
├── Level-2-Intermediate/
│   ├── Task-1-React-SPA/          # Multi-Page React 18 SPA (React Router v6 & Context API)
│   └── Task-2-GitHub-API/         # GitHub REST API Explorer with 500ms Debounced Search
│
├── Level-3-Advanced/
│   ├── Task-2-Performance/        # Google Lighthouse 99 Optimization & Service Worker
│   └── Task-3-Animations/         # GSAP 3 ScrollTrigger, 3D Tilt Cards & Magnetic Physics
│
└── README.md                      # Master Project Documentation & Submission Guide
```

---

## 🚀 Detailed Task Breakdown

### 🔹 Level 1: Core Fundamentals (Basic)

#### [Task 1: NovaFlow — Responsive SaaS Landing Page](./Level-1-Basic/Task-1-Landing-Page/)
* **Tech Stack:** Semantic HTML5, CSS3 Custom Properties (Flexbox/Grid), Vanilla JS
* **Highlights:**
  * Strict semantic architecture (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`) for accessibility & SEO.
  * Mobile-first responsive layouts across mobile, tablet, and desktop viewports.
  * Instant Dark / Light theme toggle with `localStorage` persistence.
  * Smooth scrolling, collapsible FAQ accordion, billing toggle, and `IntersectionObserver` animated metrics.

#### [Task 2: Codveda ID — Interactive Real-Time Form](./Level-1-Basic/Task-2-Interactive-Form/)
* **Tech Stack:** HTML5, CSS3 Glassmorphism, Vanilla JS ES6+
* **Highlights:**
  * Real-time regex validation across Name, RFC-5322 Email, International Phone, and Password.
  * 4-tier visual password strength meter calculating character entropy.
  * Focus & blur UX micro-interactions with glowing rings and shake feedback.
  * Dynamic error banners without page reload, show/hide password toggle, and animated modal confirmation summary.

---

### 🔹 Level 2: Intermediate Front-End Development

#### [Task 1: NovaSphere — Enterprise Single Page Application (SPA)](./Level-2-Intermediate/Task-1-React-SPA/)
* **Tech Stack:** React 18, React Router DOM v6, React Context API, Vite, Lucide Icons
* **Highlights:**
  * Fast client-side routing across **Home**, **About**, **Services**, and **Contact** with zero page flicker.
  * Global state management via React Context synchronizing theme preferences and client inquiries across routes.
  * Reactive navigation badge updating live when new contact forms are submitted.
  * Production-ready Vite build compiled and minified for instant Vercel or Netlify deployment.

#### [Task 2: DevPulse — GitHub REST API Explorer](./Level-2-Intermediate/Task-2-GitHub-API/)
* **Tech Stack:** Native Fetch API (`async/await`), HTML5, CSS3 Shimmer Animation, ES6+
* **Highlights:**
  * Asynchronous REST integration with official GitHub API v3.
  * **500ms debounced search** prevents excessive network requests and API rate limit exhaustion.
  * Dynamic repository filtering by primary programming language and multi-criteria sorting (Stars, Forks, Recently Updated).
  * Shimmering skeleton loader during network latency and graceful 404 / 403 error alerts.

---

### 🔹 Level 3: Advanced Engineering & Optimization

#### [Task 2: OptiCore — Performance Optimization & Core Web Vitals](./Level-3-Advanced/Task-2-Performance/)
* **Tech Stack:** Google Lighthouse, Service Worker Caching, Critical Path Inlining, WebP Pipeline
* **Highlights:**
  * Elevated Lighthouse Performance score from **54 &rarr; 99/100**.
  * First Contentful Paint (FCP) cut by **75%** (2.4s &rarr; 0.6s) and LCP cut by **73%** (4.1s &rarr; 1.1s).
  * Cumulative Layout Shift (CLS) eliminated (0.28 &rarr; 0.001).
  * Deployed Service Worker (`sw.js`) with **Cache-First** strategy and Stale-While-Revalidate pattern.
  * Includes official engineering audit report: [AUDIT_REPORT.md](./Level-3-Advanced/Task-2-Performance/AUDIT_REPORT.md).

#### [Task 3: NovaPulse — Advanced GSAP 3 Animations Engine](./Level-3-Advanced/Task-3-Animations/)
* **Tech Stack:** GSAP 3, ScrollTrigger, CSS 3D Transforms, Vanilla JS
* **Highlights:**
  * Complex timeline sequence (`gsap.timeline()`) coordinating hero intros with spring physics easing (`power4.out`, `elastic.out`).
  * ScrollTrigger progress bar pinned to the viewport and staggered reveal triggers on scroll.
  * Interactive 3D perspective tilt cards with localized specular glare reflection.
  * Magnetic physics attraction on interactive buttons and lerped custom cursor follower.
  * Full accessibility compliance honoring `prefers-reduced-motion`.

---

## 🛠️ Global Tech Stack Overview

| Category | Technologies |
| :--- | :--- |
| **Languages** | HTML5, CSS3, JavaScript (ES6+), JSX |
| **Frameworks & Libraries** | React 18, React Router v6, GSAP 3, ScrollTrigger, Lucide React |
| **Tooling & Build** | Vite 6, Node.js, npm, Chrome DevTools, Google Lighthouse |
| **Architecture Patterns** | Component-Driven, Client-Side Routing, Context API, Service Workers, PWA |
| **Deployment Platforms** | GitHub Pages, Vercel, Netlify |

---

## 📹 LinkedIn Video Demonstration & Sharing Guide

When posting your project completion video on LinkedIn, follow this template:

### Ready-to-Use LinkedIn Post Template:
```text
🎉 Thrilled to share that I have completed all 6 Front-End Development tasks for my internship at Codveda Technologies!

During this intensive program, I built and optimized production-grade projects spanning:
Level 1 (Basic):
• Modern Responsive SaaS Landing Page (Semantic HTML5, CSS Grid/Flexbox)
• Interactive Form with Real-Time Regex Validation & Password Strength Meter

Level 2 (Intermediate):
• Multi-Page React 18 SPA with React Router v6 & Context API State Management
• GitHub REST API Explorer with 500ms Debounced Search & Repository Filtering

Level 3 (Advanced):
• Web Performance Optimization achieving a 99/100 Google Lighthouse Score & Service Worker Caching
• Advanced GSAP 3 ScrollTrigger Animations with 3D Tilt Cards & Magnetic Physics

Huge thanks to @Codveda Technologies for this incredible opportunity to demonstrate industry-standard front-end engineering.

🔗 GitHub Repository: [Insert Your GitHub Repo URL]
🌐 Live Preview: [Insert Your Deployed Link]

#Codveda #CodvedaTech #CodvedaInternship #CodvedaJourney #CodvedaExperience #FutureWithCodveda #CodvedaAchievements #CodvedaProjects #FrontEndDevelopment #ReactJS #WebDevelopment #JavaScript #GSAP
```

---

## 📄 License
This project is part of the **Codveda Technologies Internship Program** and is maintained by **Md. Sobuj Madbor**. Open-source under the MIT License.

