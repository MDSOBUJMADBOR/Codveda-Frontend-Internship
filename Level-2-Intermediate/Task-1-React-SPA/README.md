# ⚛️ NovaSphere — React Single Page Application (SPA)
### Codveda Technologies Front-End Internship • Level 2 (Intermediate) — Task 1: Single Page Application

**Author:** Md. Sobuj Madbor  
**Domain:** Front-End Development  
**Tech Stack:** React 18, React Router DOM v6, React Context API, Vite, Lucide Icons

---

## 📌 Project Overview
NovaSphere is a modern enterprise Single Page Application (SPA) featuring seamless client-side navigation without full page reloads, cross-route state management via React Context, dynamic theme switching, and modular component architecture.

---

## ✨ Features & Objectives Met

- [x] **Client-Side Routing (React Router v6):** Instant transitions between **Home (`/`)**, **About (`/about`)**, **Services (`/services`)**, and **Contact (`/contact`)** routes with fallback wildcard redirection.
- [x] **Global State Management (React Context):**
  - Theme State (Dark / Light mode synchronized with `localStorage`).
  - Global inquiries list: Submitting an inquiry on `/contact` increments the active badge count in the navigation bar across all routes.
- [x] **Interactive Components & Filters:**
  - Services filtering by category (Engineering, Infrastructure, Security, Design).
  - Dynamic responsive mobile drawer with hamburger toggle.
- [x] **Production Build Ready:** Compiled via Vite 6 into minified, gzip-optimized production bundles ready for immediate deployment on Netlify or Vercel.

---

## 📂 Project Structure
```text
Task-1-React-SPA/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky navbar with reactive badge & theme toggle
│   │   └── Footer.jsx         # Enterprise responsive footer
│   ├── context/
│   │   └── AppContext.jsx     # Centralized theme & inquiries context
│   ├── pages/
│   │   ├── Home.jsx           # Landing overview & state monitor
│   │   ├── About.jsx          # Mission, values & author credentials
│   │   ├── Services.jsx       # Interactive filtered solution grid
│   │   └── Contact.jsx        # Live form updating cross-page context
│   ├── App.jsx                # Router declaration & provider wrapper
│   ├── index.css              # Design tokens & typography
│   └── main.jsx               # Entrypoint mounting to DOM
├── index.html                 # HTML shell
├── package.json               # Dependencies & scripts
└── vite.config.js             # Vite configuration
```

---

## 🖥️ How to Run Locally
1. Navigate to the project directory:
   ```bash
   cd Level-2-Intermediate/Task-1-React-SPA
   ```
2. Start the local Vite development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.
4. To build for production deployment:
   ```bash
   npm run build
   ```

