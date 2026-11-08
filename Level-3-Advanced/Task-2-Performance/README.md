# ⚡ OptiCore — Web Performance & Core Web Vitals Optimization
### Codveda Technologies Front-End Internship • Level 3 (Advanced) — Task 2: Performance Optimization

**Author:** Md. Sobuj Madbor  
**Domain:** Front-End Development  
**Tech Stack:** Performance API, Service Worker Caching, Critical Path Inlining, WebP Pipeline, Lighthouse 99 Score

---

## 📌 Project Overview
OptiCore is an interactive performance optimization platform and benchmark suite demonstrating how to elevate web applications to Google Lighthouse scores of **99/100** through render-blocking elimination, WebP conversion, critical path inlining, and Service Worker offline caching.

---

## ✨ Features & Objectives Met

- [x] **Core Web Vitals Optimization:**
  - **FCP reduced by 75%** (2.4s &rarr; 0.6s)
  - **LCP reduced by 73%** (4.1s &rarr; 1.1s)
  - **TBT reduced by 96%** (380ms &rarr; 12ms)
  - **CLS eliminated** (0.28 &rarr; 0.001)
- [x] **Render-Blocking Elimination:** Inline critical CSS in `<head>`, deferred non-critical stylesheets with `<link rel="preload">`, and deferred script execution.
- [x] **Service Worker Caching (`sw.js`):** Cache-First static asset strategy with background Stale-While-Revalidate pattern and cache inspection console.
- [x] **Real-Time Client Telemetry:** Native `window.performance` API telemetry tracking DOM completion, TTFB, and TCP handshake durations.
- [x] **Official Engineering Audit Report:** Includes complete audit benchmark report in [AUDIT_REPORT.md](./AUDIT_REPORT.md).

---

## 📂 Project Structure
```text
Task-2-Performance/
├── index.html         # Optimized HTML with inlined critical CSS
├── style.css          # Defer-loaded stylesheet
├── script.js          # Telemetry calculator & cache console
├── sw.js              # Service Worker cache-first engine
├── AUDIT_REPORT.md    # Formal Lighthouse audit engineering report
└── README.md          # Documentation & submission details
```

---

## 🖥️ How to Run Locally
1. Serve the directory using any static web server (e.g. `npx serve .` or VS Code Live Server) to allow Service Worker registration.
2. Open `index.html` in Chrome DevTools.
3. Open the **Lighthouse** tab and run an audit to observe the score.
4. Use the interactive cache console to inspect and test Service Worker cache buckets.

