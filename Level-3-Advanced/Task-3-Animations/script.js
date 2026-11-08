/**
 * NovaPulse — Advanced GSAP 3 Animations Engine
 * Author: Md. Sobuj Madbor
 * Codveda Front-End Development Internship — Level 3 Task 3
 */

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

let reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
  initProgressBar();
  initCustomCursor();
  initMagneticElements();
  initHeroTimeline();
  initScrollAnimations();
  init3DTiltCards();
  initA11yMotionToggle();
});

/* --------------------------------------------------
   1. Scroll Progress Indicator Bar
   -------------------------------------------------- */
function initProgressBar() {
  const bar = document.getElementById('progressBar');
  if (!bar) return;

  gsap.to(bar, {
    width: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.2
    }
  });
}

/* --------------------------------------------------
   2. Custom Magnetic Cursor Follower
   -------------------------------------------------- */
function initCustomCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring || window.innerWidth < 768) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  // Smooth lerp loop for outer ring
  function render() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  // Hover states on links and buttons
  const interactiveTargets = document.querySelectorAll('a, button, [data-tilt]');
  interactiveTargets.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* --------------------------------------------------
   3. Magnetic Buttons (Physics attraction)
   -------------------------------------------------- */
function initMagneticElements() {
  if (reducedMotion || window.innerWidth < 768) return;

  const magneticBtns = document.querySelectorAll('.magnetic');
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.25,
        y: y * 0.25,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.4)'
      });
    });
  });
}

/* --------------------------------------------------
   4. Hero Sequence Timeline
   -------------------------------------------------- */
let heroTl;

function initHeroTimeline() {
  if (reducedMotion) return;

  heroTl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.1 } });

  heroTl
    .from('.hero-tag', { opacity: 0, y: -20, scale: 0.9 })
    .from('.hero-title', { opacity: 0, y: 40, stagger: 0.2 }, '-=0.8')
    .from('.hero-desc', { opacity: 0, y: 30 }, '-=0.7')
    .from('.hero-actions .btn', { opacity: 0, y: 20, stagger: 0.15, ease: 'back.out(1.7)' }, '-=0.6')
    .from('.floating-cube', { opacity: 0, scale: 0.6, rotationX: 45, rotationY: -45, duration: 1.4, ease: 'elastic.out(1, 0.6)' }, '-=0.8');

  // Continuous subtle 3D floating animation for cube
  gsap.to('#tiltCube', {
    y: -15,
    rotationZ: 2,
    rotationY: 10,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });

  const replayBtn = document.getElementById('replayHeroBtn');
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      heroTl.restart();
    });
  }
}

/* --------------------------------------------------
   5. Scroll-Triggered Timelines & Stagger
   -------------------------------------------------- */
function initScrollAnimations() {
  if (reducedMotion) return;

  // Staggered timeline steps
  const steps = document.querySelectorAll('.timeline-step');
  gsap.from(steps, {
    opacity: 0,
    x: -60,
    stagger: 0.25,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#timelineTrack',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    }
  });

  // Fade elements
  const fadeElems = document.querySelectorAll('.gsap-fade');
  fadeElems.forEach(elem => {
    gsap.from(elem, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: elem,
        start: 'top 85%'
      }
    });
  });
}

/* --------------------------------------------------
   6. 3D Perspective Tilt Cards with Glare
   -------------------------------------------------- */
function init3DTiltCards() {
  if (reducedMotion) return;

  const tiltCards = document.querySelectorAll('[data-tilt]');
  tiltCards.forEach(card => {
    const glare = card.querySelector('.card-glare');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles (-12 to 12 degrees)
      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.3,
        ease: 'power1.out',
        transformPerspective: 1000
      });

      if (glare) {
        glare.style.opacity = '1';
        glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2), transparent 70%)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.5)'
      });

      if (glare) {
        glare.style.opacity = '0';
      }
    });
  });
}

/* --------------------------------------------------
   7. Accessibility: Simulate Reduced Motion Toggle
   -------------------------------------------------- */
function initA11yMotionToggle() {
  const toggleBtn = document.getElementById('toggleMotionBtn');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    reducedMotion = !reducedMotion;
    if (reducedMotion) {
      ScrollTrigger.getAll().forEach(t => t.kill());
      gsap.globalTimeline.clear();
      toggleBtn.textContent = 'Restore Animations';
      alert('Simulating reduced motion: GSAP timeline and physics tweens disabled for accessibility compliance.');
    } else {
      location.reload();
    }
  });
}

