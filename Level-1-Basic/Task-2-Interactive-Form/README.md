# 🔐 Interactive Form with Real-Time Validation
### Codveda Technologies Front-End Internship • Level 1 (Basic) — Task 2: Interactive Form

**Author:** Md. Sobuj Madbor  
**Domain:** Front-End Development  
**Tech Stack:** Semantic HTML5, CSS3 Glassmorphism, Vanilla JavaScript ES6+

---

## 📌 Project Overview
An interactive registration form featuring real-time input validation, responsive micro-animations, dynamic password strength estimation, focus/blur visual cues, and accessible modal confirmation upon valid submission.

---

## ✨ Features & Objectives Met

- [x] **Field Validations:**
  - **Full Name:** Minimum 3 characters, alphabetic strings and spaces only.
  - **Email:** Standard RFC 5322 regex validation with domain verification.
  - **Phone Number:** International and standard formats (10 to 14 digits).
  - **Password:** Minimum 8 characters, requiring combinations of lower/uppercase letters, digits, and special characters.
  - **Confirm Password:** Real-time character-by-character synchronization check.
  - **Terms Checkbox:** Interactive required agreement validation.
- [x] **Real-Time Dynamic Errors:** Error messages appear instantly without page reload or form flicker.
- [x] **Focus & Blur UX Micro-Interactions:** Inputs feature active glowing rings on focus and instant inline feedback icons on blur.
- [x] **4-Tier Password Strength Meter:** Visual colored bar (Weak / Fair / Good / Strong) calculating entropy across length and character types.
- [x] **Show / Hide Password:** Accessible eye-toggle button allowing users to peek at obscured text.
- [x] **Success Confirmation Modal:** Displays a summary card of validated entries upon successful form submission.
- [x] **Reset Capability:** Resets all input states, strength meters, and validation borders cleanly.

---

## 📂 Project Structure
```text
Task-2-Interactive-Form/
├── index.html       # Accessible HTML5 form structure
├── style.css        # Glassmorphic layout, glowing focus rings, animations
├── script.js        # Real-time regex validators, strength meter, modal logic
└── README.md        # Documentation & submission details
```

---

## 🖥️ How to Test
1. Open `index.html` in any web browser.
2. Type in each field to observe live validation states, checkmarks, and error banners.
3. Test edge cases: enter short passwords, mismatched confirmation passwords, or invalid email strings.
4. Fill all fields correctly and hit **Create Account** to trigger the confirmation modal.

