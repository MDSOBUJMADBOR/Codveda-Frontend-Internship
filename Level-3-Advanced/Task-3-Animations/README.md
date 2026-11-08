# ✨ NovaPulse — Advanced GSAP 3 Animations Engine
### Codveda Technologies Front-End Internship • Level 3 (Advanced) — Task 3: Advanced Animations

**Author:** Md. Sobuj Madbor  
**Domain:** Front-End Development  
**Tech Stack:** GreenSock Animation Platform (GSAP 3), ScrollTrigger, CSS 3D Transforms, Vanilla JavaScript

---

## 📌 Project Overview
NovaPulse is an interactive front-end motion showcase built with GSAP 3 and ScrollTrigger. It illustrates hardware-accelerated 60 FPS transitions, complex timeline choreography, magnetic physics-based button pulling, dynamic 3D perspective tilt with specular lighting glare, and strict accessibility compliance with `prefers-reduced-motion`.

---

## ✨ Features & Objectives Met

- [x] **GSAP Timelines & Staggering (`gsap.timeline()`):** Coordinated cinematic hero sequence orchestrating taglines, headers, and actions with spring easing curves (`power4.out`, `elastic.out`).
- [x] **ScrollTrigger Pinning & Progress:** Real-time top progress bar tracking vertical scrolling plus viewport triggers revealing timeline cards on scroll.
- [x] **Interactive 3D Perspective Tilt Cards:** Real-time mouse coordinate calculations creating fluid 3D card tilt accompanied by localized specular glare reflections.
- [x] **Custom Magnetic Cursor Follower:** Smooth lerped outer ring follower and tactile spring attraction on interactive buttons.
- [x] **Performance & Accessibility Optimization:**
  - 60 FPS GPU-accelerated transforms (`translate3d`, `transformPerspective`).
  - Native `@media (prefers-reduced-motion: reduce)` support and an interactive reduced-motion toggle to ensure vestibular accessibility standards.

---

## 📂 Project Structure
```text
Task-3-Animations/
├── index.html       # Geometric 3D stage & timeline markup
├── style.css        # CSS 3D perspective, custom cursor & glassmorphic cards
├── script.js        # GSAP timelines, ScrollTrigger, magnetic physics & tilt calculations
└── README.md        # Documentation & submission details
```

---

## 🖥️ How to Run Locally
1. Open `index.html` in your browser.
2. Move your cursor around the cards to experience 3D perspective tilt and magnetic button attraction.
3. Scroll down to view the ScrollTrigger progress bar and staggered timeline reveals.
4. Click **Replay Intro** or test the **Simulate Reduced Motion** toggle.

