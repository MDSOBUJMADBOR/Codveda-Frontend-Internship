# 🌐 DevPulse — GitHub Developer & Repo Intelligence
### Codveda Technologies Front-End Internship • Level 2 (Intermediate) — Task 2: REST API Integration

**Author:** Md. Sobuj Madbor  
**Domain:** Front-End Development  
**Tech Stack:** Semantic HTML5, CSS3 Glassmorphism, Vanilla JavaScript ES6+ (Async/Await, Fetch API)

---

## 📌 Project Overview
DevPulse is a dynamic, asynchronous REST API web application that integrates GitHub's official REST API v3 to search, inspect, and analyze developer profiles and their public repositories. It implements debounced queries, multiple filtering/sorting matrices, loading skeletons, and graceful error handling.

---

## ✨ Features & Objectives Met

- [x] **Asynchronous REST Integration:** Built with standard `fetch` and `async/await` communicating with:
  - User profile endpoint: `https://api.github.com/users/{username}`
  - User repositories endpoint: `https://api.github.com/users/{username}/repos`
- [x] **Performance Optimization (Debouncing):** 500ms debouncing listener on the search input prevents rate limiting and unnecessary network roundtrips while typing.
- [x] **Dynamic Repository Filtering & Sorting:**
  - Dynamic filter dropdown populated from active repository languages.
  - Multi-criteria sorting: **Most Stars**, **Most Forks**, and **Recently Updated**.
- [x] **Graceful Error Handling:**
  - 404 User Not Found banner.
  - 403 API Rate Limit notification with remaining request tracking (`x-ratelimit-remaining`).
  - Network offline/failure alerts.
- [x] **Shimmering Skeleton Loader:** Beautiful CSS animation placeholders displayed during ongoing network transactions.
- [x] **Developer Quick Presets:** 1-click preset buttons for influential creators (e.g., Linus Torvalds, Dan Abramov, Evan You, Sindre Sorhus).
- [x] **Responsive Dark / Light Themes:** Toggleable UI with persistent `localStorage` preference.

---

## 📂 Project Structure
```text
Task-2-GitHub-API/
├── index.html       # Clean semantic layout & skeleton loader
├── style.css        # Responsive dark/light theme, shimmer effect, glassmorphic cards
├── script.js        # Debounce logic, Fetch API, dynamic filters & DOM rendering
└── README.md        # Documentation & submission details
```

---

## 🖥️ How to Run Locally
1. Open `index.html` in your web browser.
2. Enter any GitHub username or click any of the popular developer tags.
3. Observe the debouncing spinner, skeleton loading state, profile metrics, and filtered repository cards.

