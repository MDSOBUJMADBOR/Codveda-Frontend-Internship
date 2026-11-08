/**
 * DevPulse — GitHub REST API Explorer
 * Author: Md. Sobuj Madbor
 * Codveda Front-End Development Internship — Level 2 Task 2
 */

// Language color mappings matching GitHub linguist colors
const LANGUAGE_COLORS = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  'C#': '#178600',
  Go: '#00ADD8',
  Rust: '#dea584',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Shell: '#89e051',
  Vue: '#41b883',
  Other: '#94a3b8'
};

// Global state
let currentRepos = [];
let debounceTimer = null;

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initSearch();
  initPopularTags();
  initRepoFilters();

  // Load default user
  fetchGitHubUserData('torvalds');
});

/* --------------------------------------------------
   1. Theme Switcher
   -------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('devpulse-theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);

  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('devpulse-theme', nextTheme);
  });
}

/* --------------------------------------------------
   2. Debounced Search Input
   -------------------------------------------------- */
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  const submitBtn = document.getElementById('submitSearchBtn');
  const debounceSpinner = document.getElementById('debounceSpinner');

  function triggerSearch() {
    const query = searchInput.value.trim();
    if (query) {
      debounceSpinner.classList.remove('active');
      fetchGitHubUserData(query);
    }
  }

  // Live input with 500ms debounce
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    clearBtn.classList.toggle('visible', query.length > 0);

    if (debounceTimer) clearTimeout(debounceTimer);

    if (query.length >= 2) {
      debounceSpinner.classList.add('active');
      debounceTimer = setTimeout(() => {
        debounceSpinner.classList.remove('active');
        fetchGitHubUserData(query);
      }, 500);
    } else {
      debounceSpinner.classList.remove('active');
    }
  });

  // Enter key support
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if (debounceTimer) clearTimeout(debounceTimer);
      triggerSearch();
    }
  });

  submitBtn.addEventListener('click', () => {
    if (debounceTimer) clearTimeout(debounceTimer);
    triggerSearch();
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.classList.remove('visible');
    searchInput.focus();
  });
}

/* --------------------------------------------------
   3. Suggested Profile Tag Buttons
   -------------------------------------------------- */
function initPopularTags() {
  const popularTags = document.getElementById('popularTags');
  const searchInput = document.getElementById('searchInput');

  popularTags.addEventListener('click', (e) => {
    const tag = e.target.closest('.tag-btn');
    if (!tag) return;

    popularTags.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
    tag.classList.add('active');

    const username = tag.dataset.username;
    searchInput.value = username;
    fetchGitHubUserData(username);
  });
}

/* --------------------------------------------------
   4. Core Fetch Logic (GitHub REST API)
   -------------------------------------------------- */
async function fetchGitHubUserData(username) {
  const alertBox = document.getElementById('alertBox');
  const resultsContainer = document.getElementById('resultsContainer');
  const skeletonLoader = document.getElementById('skeletonLoader');
  const rateLimitBadge = document.getElementById('rateLimitBadge');

  // Show skeleton, hide previous results & alerts
  alertBox.classList.add('hidden');
  resultsContainer.style.display = 'none';
  skeletonLoader.classList.remove('hidden');

  try {
    // 1. Fetch User Profile
    const userRes = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);

    // Extract rate limits if headers available
    const remaining = userRes.headers.get('x-ratelimit-remaining');
    if (remaining !== null) {
      rateLimitBadge.textContent = `API Remaining: ${remaining}`;
    }

    if (userRes.status === 404) {
      showError('User Not Found', `No GitHub account found matching "${username}". Check spelling and retry.`);
      return;
    }

    if (userRes.status === 403) {
      showError('Rate Limit Exceeded', 'GitHub API hourly rate limit (60 requests) reached. Please wait a moment.');
      return;
    }

    if (!userRes.ok) {
      showError('API Error', `Received HTTP status: ${userRes.status}. Please try again later.`);
      return;
    }

    const userData = await userRes.json();

    // 2. Fetch User Repositories (Up to 30 sorted by updated)
    const reposRes = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=30`);
    const reposData = reposRes.ok ? await reposRes.json() : [];

    // Render data
    renderUserProfile(userData);
    currentRepos = reposData;
    populateLanguageFilter(reposData);
    renderRepositories(reposData);

    // Reveal UI
    skeletonLoader.classList.add('hidden');
    resultsContainer.style.display = 'block';

  } catch (err) {
    showError('Network Connection Error', 'Failed to connect to GitHub API. Please check your internet connection.');
  } finally {
    skeletonLoader.classList.add('hidden');
  }
}

function showError(title, message) {
  const alertBox = document.getElementById('alertBox');
  const alertTitle = document.getElementById('alertTitle');
  const alertMessage = document.getElementById('alertMessage');
  const resultsContainer = document.getElementById('resultsContainer');
  const skeletonLoader = document.getElementById('skeletonLoader');

  skeletonLoader.classList.add('hidden');
  resultsContainer.style.display = 'none';

  alertTitle.textContent = title;
  alertMessage.textContent = message;
  alertBox.classList.remove('hidden');
}

/* --------------------------------------------------
   5. Render User Profile
   -------------------------------------------------- */
function renderUserProfile(user) {
  document.getElementById('userAvatar').src = user.avatar_url;
  document.getElementById('userName').textContent = user.name || user.login;
  document.getElementById('userLogin').textContent = `@${user.login}`;
  document.getElementById('viewOnGithubBtn').href = user.html_url;

  // Bio
  document.getElementById('userBio').textContent = user.bio || 'This user has not set a public bio yet.';

  // Joined Date
  const joinDate = new Date(user.created_at);
  const formattedDate = joinDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  document.getElementById('joinedDate').textContent = `Joined ${formattedDate}`;

  // Statistics
  document.getElementById('repoCount').textContent = formatNumber(user.public_repos);
  document.getElementById('followersCount').textContent = formatNumber(user.followers);
  document.getElementById('followingCount').textContent = formatNumber(user.following);

  // Meta items
  document.getElementById('locText').textContent = user.location || 'Not Specified';
  document.getElementById('companyText').textContent = user.company || 'Not Specified';

  // Blog / website
  const blogLink = document.getElementById('blogLink');
  if (user.blog) {
    const url = user.blog.startsWith('http') ? user.blog : `https://${user.blog}`;
    blogLink.href = url;
    blogLink.textContent = user.blog.replace(/^https?:\/\//, '');
    blogLink.classList.remove('disabled');
  } else {
    blogLink.href = '#';
    blogLink.textContent = 'Not Available';
    blogLink.classList.add('disabled');
  }

  // Twitter
  const twitterText = document.getElementById('twitterText');
  if (user.twitter_username) {
    twitterText.innerHTML = `<a href="https://twitter.com/${user.twitter_username}" target="_blank" rel="noopener" class="inline-link">@${user.twitter_username}</a>`;
  } else {
    twitterText.textContent = 'Not Available';
  }
}

/* --------------------------------------------------
   6. Render Repositories & Filtering
   -------------------------------------------------- */
function initRepoFilters() {
  const languageFilter = document.getElementById('languageFilter');
  const sortSelector = document.getElementById('sortSelector');

  languageFilter.addEventListener('change', applyFiltersAndSort);
  sortSelector.addEventListener('change', applyFiltersAndSort);
}

function populateLanguageFilter(repos) {
  const languageFilter = document.getElementById('languageFilter');
  const languages = new Set();

  repos.forEach(repo => {
    if (repo.language) languages.add(repo.language);
  });

  languageFilter.innerHTML = '<option value="ALL">All Languages</option>';
  languages.forEach(lang => {
    const opt = document.createElement('option');
    opt.value = lang;
    opt.textContent = lang;
    languageFilter.appendChild(opt);
  });
}

function applyFiltersAndSort() {
  const selectedLang = document.getElementById('languageFilter').value;
  const selectedSort = document.getElementById('sortSelector').value;

  let filtered = [...currentRepos];

  // Language filter
  if (selectedLang !== 'ALL') {
    filtered = filtered.filter(repo => repo.language === selectedLang);
  }

  // Sort
  if (selectedSort === 'stars') {
    filtered.sort((a, b) => b.stargazers_count - a.stargazers_count);
  } else if (selectedSort === 'forks') {
    filtered.sort((a, b) => b.forks_count - a.forks_count);
  } else if (selectedSort === 'updated') {
    filtered.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  }

  renderRepositories(filtered);
}

function renderRepositories(repos) {
  const reposGrid = document.getElementById('reposGrid');
  const activeRepoCount = document.getElementById('activeRepoCount');

  activeRepoCount.textContent = repos.length;
  reposGrid.innerHTML = '';

  if (repos.length === 0) {
    reposGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        No repositories found matching the selected filter criteria.
      </div>
    `;
    return;
  }

  repos.forEach(repo => {
    const card = document.createElement('article');
    card.className = 'repo-card';

    const langColor = LANGUAGE_COLORS[repo.language] || LANGUAGE_COLORS.Other;
    const desc = repo.description || 'No description provided for this repository.';
    const updated = new Date(repo.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    card.innerHTML = `
      <div class="repo-top">
        <a href="${repo.html_url}" target="_blank" rel="noopener" class="repo-name-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          <span>${escapeHtml(repo.name)}</span>
        </a>
        <p class="repo-desc">${escapeHtml(desc)}</p>
      </div>

      <div class="repo-footer">
        ${repo.language ? `
          <span class="lang-pill">
            <span class="lang-dot" style="background-color: ${langColor};"></span>
            <span>${repo.language}</span>
          </span>
        ` : ''}

        <span class="meta-stat" title="Stars">
          <svg class="star-icon" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          ${formatNumber(repo.stargazers_count)}
        </span>

        <span class="meta-stat" title="Forks">
          <svg class="fork-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
          ${formatNumber(repo.forks_count)}
        </span>

        <span style="margin-left: auto;">Updated ${updated}</span>
      </div>
    `;

    reposGrid.appendChild(card);
  });
}

/* --------------------------------------------------
   Helpers
   -------------------------------------------------- */
function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
  return num;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, match => {
    const escapeMap = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    return escapeMap[match];
  });
}

