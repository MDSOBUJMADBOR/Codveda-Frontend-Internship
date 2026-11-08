/**
 * Interactive Form Validation — Real-Time UX
 * Author: Md. Sobuj Madbor
 * Codveda Front-End Development Internship — Level 1 Task 2
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const fullName = document.getElementById('fullName');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  const terms = document.getElementById('terms');
  const resetBtn = document.getElementById('resetBtn');
  const togglePasswordBtn = document.getElementById('togglePassword');

  const meterFill = document.getElementById('meterFill');
  const meterText = document.getElementById('meterText');
  const successModal = document.getElementById('successModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  // Input elements mapping
  const inputs = [
    { el: fullName, validator: validateFullName },
    { el: email, validator: validateEmail },
    { el: phone, validator: validatePhone },
    { el: password, validator: validatePassword },
    { el: confirmPassword, validator: validateConfirmPassword },
    { el: terms, validator: validateTerms }
  ];

  /* --------------------------------------------------
     1. Focus & Blur Event Listeners for Better UX
     -------------------------------------------------- */
  inputs.forEach(({ el, validator }) => {
    const parentGroup = el.closest('.form-group');

    el.addEventListener('focus', () => {
      parentGroup.classList.add('focused');
    });

    el.addEventListener('blur', () => {
      parentGroup.classList.remove('focused');
      // Validate on blur
      validator();
    });

    // Real-time validation on typing
    el.addEventListener('input', () => {
      validator();
      if (el === password && confirmPassword.value.length > 0) {
        validateConfirmPassword();
      }
    });

    if (el.type === 'checkbox') {
      el.addEventListener('change', validator);
    }
  });

  /* --------------------------------------------------
     2. Password Visibility Toggle
     -------------------------------------------------- */
  if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', () => {
      const isPassword = password.type === 'password';
      password.type = isPassword ? 'text' : 'password';
      togglePasswordBtn.classList.toggle('active', isPassword);
      togglePasswordBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    });
  }

  /* --------------------------------------------------
     3. Validation Functions
     -------------------------------------------------- */
  function setFieldState(groupElement, errorElement, isValid, message = '') {
    if (isValid) {
      groupElement.classList.remove('error');
      groupElement.classList.add('success');
      if (errorElement) errorElement.style.display = 'none';
    } else {
      groupElement.classList.remove('success');
      groupElement.classList.add('error');
      if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
      }
    }
    return isValid;
  }

  function validateFullName() {
    const val = fullName.value.trim();
    const group = document.getElementById('group-fullname');
    const err = document.getElementById('error-fullname');

    if (val.length === 0) {
      return setFieldState(group, err, false, 'Full name is required.');
    }
    if (val.length < 3) {
      return setFieldState(group, err, false, 'Name must be at least 3 characters.');
    }
    const nameRegex = /^[a-zA-Z\s.'-]+$/;
    if (!nameRegex.test(val)) {
      return setFieldState(group, err, false, 'Only alphabetic letters and spaces are allowed.');
    }

    return setFieldState(group, err, true);
  }

  function validateEmail() {
    const val = email.value.trim();
    const group = document.getElementById('group-email');
    const err = document.getElementById('error-email');

    if (val.length === 0) {
      return setFieldState(group, err, false, 'Email address is required.');
    }
    // RFC 5322 standard regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(val) || !val.includes('.')) {
      return setFieldState(group, err, false, 'Please enter a valid email format (e.g. name@domain.com).');
    }

    return setFieldState(group, err, true);
  }

  function validatePhone() {
    const val = phone.value.trim().replace(/[\s\-()]/g, '');
    const group = document.getElementById('group-phone');
    const err = document.getElementById('error-phone');

    if (val.length === 0) {
      return setFieldState(group, err, false, 'Phone number is required.');
    }
    const phoneRegex = /^\+?[0-9]{10,14}$/;
    if (!phoneRegex.test(val)) {
      return setFieldState(group, err, false, 'Must be a valid phone number (10 to 14 digits).');
    }

    return setFieldState(group, err, true);
  }

  function validatePassword() {
    const val = password.value;
    const group = document.getElementById('group-password');
    const err = document.getElementById('error-password');

    // Calculate strength score
    const score = getPasswordStrength(val);
    updateStrengthMeter(score, val.length);

    if (val.length === 0) {
      return setFieldState(group, err, false, 'Password is required.');
    }
    if (val.length < 8) {
      return setFieldState(group, err, false, 'Password must be at least 8 characters long.');
    }
    if (score < 2) {
      return setFieldState(group, err, false, 'Password is too weak. Combine letters, numbers, and symbols.');
    }

    return setFieldState(group, err, true);
  }

  function getPasswordStrength(pwd) {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    return score;
  }

  function updateStrengthMeter(score, length) {
    if (length === 0) {
      meterFill.style.width = '0%';
      meterFill.style.backgroundColor = 'transparent';
      meterText.textContent = 'None';
      meterText.style.color = 'var(--text-muted)';
      return;
    }

    const tiers = [
      { text: 'Weak', width: '25%', color: '#ef4444' },
      { text: 'Fair', width: '50%', color: '#f59e0b' },
      { text: 'Good', width: '75%', color: '#38bdf8' },
      { text: 'Strong', width: '100%', color: '#10b981' }
    ];

    const currentTier = tiers[Math.min(score, 3)];
    meterFill.style.width = currentTier.width;
    meterFill.style.backgroundColor = currentTier.color;
    meterText.textContent = currentTier.text;
    meterText.style.color = currentTier.color;
  }

  function validateConfirmPassword() {
    const pwdVal = password.value;
    const confirmVal = confirmPassword.value;
    const group = document.getElementById('group-confirm');
    const err = document.getElementById('error-confirm');

    if (confirmVal.length === 0) {
      return setFieldState(group, err, false, 'Please confirm your password.');
    }
    if (confirmVal !== pwdVal) {
      return setFieldState(group, err, false, 'Passwords do not match.');
    }

    return setFieldState(group, err, true);
  }

  function validateTerms() {
    const group = document.getElementById('group-terms');
    const err = document.getElementById('error-terms');

    if (!terms.checked) {
      return setFieldState(group, err, false, 'You must accept the terms to continue.');
    }

    return setFieldState(group, err, true);
  }

  /* --------------------------------------------------
     4. Form Submission Handling
     -------------------------------------------------- */
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isConfirmValid = validateConfirmPassword();
    const isTermsValid = validateTerms();

    const isFormValid = isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmValid && isTermsValid;

    if (isFormValid) {
      // Populate success modal
      document.getElementById('summaryName').textContent = fullName.value.trim();
      document.getElementById('summaryEmail').textContent = email.value.trim();
      document.getElementById('summaryPhone').textContent = phone.value.trim();

      // Show confirmation modal
      successModal.classList.add('active');
    } else {
      // Focus first erroneous input
      const firstError = form.querySelector('.form-group.error input');
      if (firstError) firstError.focus();
    }
  });

  /* --------------------------------------------------
     5. Reset Action
     -------------------------------------------------- */
  resetBtn.addEventListener('click', () => {
    form.reset();
    document.querySelectorAll('.form-group').forEach(group => {
      group.classList.remove('error', 'success', 'focused');
    });
    document.querySelectorAll('.error-message').forEach(err => {
      err.style.display = 'none';
    });
    updateStrengthMeter(0, 0);
  });

  /* --------------------------------------------------
     6. Close Modal
     -------------------------------------------------- */
  closeModalBtn.addEventListener('click', () => {
    successModal.classList.remove('active');
    resetBtn.click();
  });

  // Close modal when clicking outside
  successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
      successModal.classList.remove('active');
    }
  });
});

