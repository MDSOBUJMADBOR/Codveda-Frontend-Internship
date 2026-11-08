/**
 * NovaFlow Landing Page — JavaScript Logic
 * Author: Md. Sobuj Madbor
 * Codveda Front-End Development Internship — Level 1 Task 1
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNavigation();
  initFaqAccordion();
  initPricingToggle();
  initMetricsCounter();
  initNewsletterFeedback();
});

/* --------------------------------------------------
   1. Dark / Light Theme Toggle (with LocalStorage)
   -------------------------------------------------- */
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  // Retrieve saved theme or check system preference
  const savedTheme = localStorage.getItem('novaflow-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', currentTheme);

  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('novaflow-theme', nextTheme);
  });
}

/* --------------------------------------------------
   2. Mobile Hamburger Navigation
   -------------------------------------------------- */
function initMobileNavigation() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!hamburgerBtn || !navMenu) return;

  function toggleMenu() {
    const isOpen = hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('mobile-active');
    hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  function closeMenu() {
    hamburgerBtn.classList.remove('active');
    navMenu.classList.remove('mobile-active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }

  hamburgerBtn.addEventListener('click', toggleMenu);

  // Close when clicking nav link
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target) && navMenu.classList.contains('mobile-active')) {
      closeMenu();
    }
  });
}

/* --------------------------------------------------
   3. FAQ Accordion Interaction
   -------------------------------------------------- */
function initFaqAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parentItem = header.parentElement;
      const content = header.nextElementSibling;
      const isOpen = header.getAttribute('aria-expanded') === 'true';

      // Close all other accordions for clean single-view
      accordionHeaders.forEach(otherHeader => {
        if (otherHeader !== header) {
          otherHeader.setAttribute('aria-expanded', 'false');
          otherHeader.parentElement.classList.remove('active');
          otherHeader.nextElementSibling.style.maxHeight = null;
        }
      });

      // Toggle current accordion
      if (isOpen) {
        header.setAttribute('aria-expanded', 'false');
        parentItem.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        header.setAttribute('aria-expanded', 'true');
        parentItem.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

/* --------------------------------------------------
   4. Monthly / Annual Pricing Toggle
   -------------------------------------------------- */
function initPricingToggle() {
  const billingToggle = document.getElementById('billingToggle');
  const monthlyLabel = document.getElementById('monthlyLabel');
  const annualLabel = document.getElementById('annualLabel');
  const priceValues = document.querySelectorAll('.price-val');

  if (!billingToggle) return;

  billingToggle.addEventListener('click', () => {
    const isYearly = billingToggle.getAttribute('aria-checked') === 'true';
    const nextState = !isYearly;

    billingToggle.setAttribute('aria-checked', nextState ? 'true' : 'false');

    if (nextState) {
      monthlyLabel.classList.remove('active');
      annualLabel.classList.add('active');
    } else {
      monthlyLabel.classList.add('active');
      annualLabel.classList.remove('active');
    }

    priceValues.forEach(elem => {
      const targetPrice = nextState ? elem.dataset.yearly : elem.dataset.monthly;
      elem.textContent = targetPrice;
    });
  });
}

/* --------------------------------------------------
   5. Animated Metrics Counter (IntersectionObserver)
   -------------------------------------------------- */
function initMetricsCounter() {
  const metricNumbers = document.querySelectorAll('.metric-number');
  if (!metricNumbers.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        metricNumbers.forEach(elem => {
          const target = parseFloat(elem.dataset.target);
          const suffix = elem.dataset.suffix || '';
          animateValue(elem, 0, target, 1600, suffix);
        });
        obs.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.getElementById('metrics');
  if (metricsSection) {
    observer.observe(metricsSection);
  }
}

function animateValue(elem, start, end, duration, suffix) {
  const startTime = performance.now();
  const isDecimal = end % 1 !== 0;

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const current = start + (end - start) * easeProgress;

    elem.textContent = (isDecimal ? current.toFixed(2) : Math.floor(current)) + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      elem.textContent = end + suffix;
    }
  }

  requestAnimationFrame(update);
}

/* --------------------------------------------------
   6. Newsletter Subscription Feedback
   -------------------------------------------------- */
function initNewsletterFeedback() {
  const form = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('ctaEmail');

  if (!form || !emailInput) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (email) {
      alert(`🎉 Welcome to NovaFlow! A confirmation link has been sent to: ${email}`);
      emailInput.value = '';
    }
  });
}

