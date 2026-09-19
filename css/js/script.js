/**
 * ==============================================================================
 * ANKITA MEGHANATHI — CLIENT RENDER ENGINE & INTERACTION SCRIPT
 * ==============================================================================
 * Renders all portfolio data from portfolioData (data.js) dynamically into index.html
 * Pure Vanilla JavaScript (Zero Frameworks)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render all dynamic data from data.js
  renderPersonalData();
  renderAboutSection();
  renderSkillsSection();
  renderExperienceSection();
  renderFeaturedProject();
  renderProjectsFilterAndGrid();
  renderStrengthsSection();
  renderCertificatesSection();
  renderContactInfo();

  // 2. Initialize interactive UI listeners
  initNavbarScroll();
  initMobileMenu();
  initScrollSpy();
  initScrollReveal();
  initContactFormValidation();
  initBackToTop();
});

/* ==============================================================================
   DATA RENDERING FUNCTIONS (Reads from data.js)
   ============================================================================== */

/** 1. Personal, Hero, Navbar, and Footer details */
function renderPersonalData() {
  const p = portfolioData.personal;

  // Hero Section
  safeSetText('heroAvailability', p.availability);
  safeSetText('heroName', p.name);
  safeSetText('heroTitle', p.title);
  safeSetText('heroTagline', p.tagline);
  
  const heroLoc = document.getElementById('heroLocation');
  if (heroLoc) heroLoc.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${p.location}`;

  // Profile Image (Hero) with graceful SVG fallback
  const heroImg = document.getElementById('heroProfileImg');
  if (heroImg) {
    heroImg.src = p.profileImage;
    heroImg.onerror = () => {
      heroImg.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(p.name)}&background=6C4AFF&color=fff&size=512&font-size=0.33&bold=true`;
    };
  }

  // Resume Links (Nav & Hero)
  const navResume = document.getElementById('navResumeBtn');
  if (navResume) navResume.href = p.resume;

  const heroResume = document.getElementById('heroResumeBtn');
  if (heroResume) heroResume.href = p.resume;

  const aboutResume = document.getElementById('aboutResumeBtn');
  if (aboutResume) aboutResume.href = p.resume;

  // Social Links in Hero & Footer
  const heroSocials = document.getElementById('heroSocials');
  const footerSocials = document.getElementById('footerSocials');

  const socialHTML = `
    <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub Profile">
      <i class="fa-brands fa-github"></i>
    </a>
    <a href="${p.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn Profile">
      <i class="fa-brands fa-linkedin-in"></i>
    </a>
    <a href="mailto:${p.email}" class="social-link" aria-label="Send Email">
      <i class="fa-solid fa-envelope"></i>
    </a>
  `;

  if (heroSocials) heroSocials.innerHTML = socialHTML;

  const footerSocialHTML = `
    <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="GitHub">
      <i class="fa-brands fa-github"></i>
    </a>
    <a href="${p.linkedin}" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="LinkedIn">
      <i class="fa-brands fa-linkedin-in"></i>
    </a>
    <a href="mailto:${p.email}" class="footer-social-btn" aria-label="Email">
      <i class="fa-solid fa-envelope"></i>
    </a>
  `;
  if (footerSocials) footerSocials.innerHTML = footerSocialHTML;

  // Footer Metadata
  safeSetText('footerName', p.name);
  safeSetText('footerTitle', p.title);
  safeSetText('footerCopyName', p.name);
}

/** 2. About Me, Education & Quick Stats */
function renderAboutSection() {
  const a = portfolioData.about;
  const p = portfolioData.personal;
  const edu = portfolioData.education;

  // Profile Image in About Section
  const aboutImg = document.getElementById('aboutProfileImg');
  if (aboutImg) {
    aboutImg.src = p.profileImage;
    aboutImg.onerror = () => {
      aboutImg.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(p.name)}&background=131B30&color=B9A7FF&size=512&font-size=0.33&bold=true`;
    };
  }

  // Heading & Bio Paragraphs
  safeSetText('aboutHeading', a.heading);
  const bioContainer = document.getElementById('aboutBioContainer');
  if (bioContainer) {
    bioContainer.innerHTML = a.bioParagraphs.map(para => `<p>${para}</p>`).join('');
  }

  // Highlights
  const highlightsContainer = document.getElementById('aboutHighlightsContainer');
  if (highlightsContainer) {
    highlightsContainer.innerHTML = a.highlights.map(item => `
      <li><i class="fa-solid fa-circle-check"></i> <span>${item}</span></li>
    `).join('');
  }

  // Education Box
  const eduContainer = document.getElementById('aboutEducationContainer');
  if (eduContainer && edu.length > 0) {
    eduContainer.innerHTML = edu.map(item => `
      <div class="edu-item">
        <h4 class="edu-degree"><i class="fa-solid fa-graduation-cap"></i> ${item.degree}</h4>
        <p class="edu-institution">${item.institution}</p>
        <p class="edu-duration"><i class="fa-regular fa-calendar"></i> ${item.duration}</p>
        <p class="edu-desc">${item.description}</p>
      </div>
    `).join('');
  }

  // Quick Stats Grid
  const statsContainer = document.getElementById('aboutStatsContainer');
  if (statsContainer) {
    statsContainer.innerHTML = a.stats.map(s => `
      <div class="stat-box">
        <div class="stat-val">${s.value}</div>
        <div class="stat-lbl">${s.label}</div>
      </div>
    `).join('');
  }
}

/** 3. Categorized Skills */
function renderSkillsSection() {
  const container = document.getElementById('skillsContainer');
  if (!container) return;

  container.innerHTML = portfolioData.skills.map(cat => `
    <div class="skill-category-card reveal">
      <h3 class="skill-cat-title">
        <i class="fa-solid fa-layer-group"></i> ${cat.category}
      </h3>
      <div class="skill-chips-wrap">
        ${cat.items.map(item => `
          <div class="skill-item-chip">
            <i class="${item.icon}"></i>
            <span>${item.name}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/** 4. Experience Timeline */
function renderExperienceSection() {
  const container = document.getElementById('experienceContainer');
  if (!container) return;

  container.innerHTML = portfolioData.experience.map(exp => `
    <div class="exp-card glass-card reveal">
      <div class="exp-header">
        <div>
          <h3 class="exp-role-title">${exp.role}</h3>
          <h4 class="exp-company-name"><i class="fa-solid fa-building"></i> ${exp.company}</h4>
        </div>
        <span class="exp-timing-badge"><i class="fa-regular fa-calendar-check"></i> ${exp.duration}</span>
      </div>

      <p class="exp-summary">${exp.description}</p>

      <ul class="exp-tasks-list">
        ${exp.responsibilities.map(task => `
          <li><i class="fa-solid fa-chevron-right"></i> <span>${task}</span></li>
        `).join('')}
      </ul>

      <div class="exp-stack-tags">
        ${exp.technologies.map(t => `<span class="exp-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/** 5. WorkSphere (Featured Project Spotlight) */
function renderFeaturedProject() {
  const container = document.getElementById('worksphereContainer');
  if (!container) return;

  const featured = portfolioData.projects.find(p => p.featured);
  if (!featured) {
    document.getElementById('featured-showcase').style.display = 'none';
    return;
  }

  container.innerHTML = `
    <div class="featured-card glass-card reveal">
      <div class="featured-layout">
        <div class="featured-info-col">
          <div class="featured-badges-row">
            <span class="status-badge">
              <span class="pulse-dot-yellow"></span>
              ${featured.statusBadge}
            </span>
            <span class="cat-badge">${featured.subtitle}</span>
          </div>

          <h3 class="featured-title">${featured.title}</h3>
          <p class="featured-subtitle">${featured.subtitle}</p>
          <p class="featured-desc">${featured.description}</p>

          <ul class="featured-features-list">
            ${featured.features.map(f => `<li><i class="fa-solid fa-check"></i> <span>${f}</span></li>`).join('')}
          </ul>

          <div class="featured-pills">
            ${featured.technologies.map(tech => `<span class="pill">${tech}</span>`).join('')}
          </div>

          <div class="featured-buttons">
            ${featured.github ? `
              <a href="${featured.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                <i class="fa-brands fa-github"></i>
                <span>View Repository</span>
              </a>` : `
              <button class="btn btn-outline toast-trigger" data-msg="WorkSphere repository will be linked once the ongoing build is ready!">
                <i class="fa-brands fa-github"></i>
                <span>Repository (In Development)</span>
              </button>
            `}
          </div>
        </div>

        <div class="featured-visual-col">
          <div class="featured-img-frame">
            <img src="${featured.image}" alt="${featured.title}" class="featured-img" 
                 onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80';" />
          </div>
        </div>
      </div>
    </div>
  `;
}

/** 6. Projects Filter & Dynamic Grid */
let activeFilter = 'All';

function renderProjectsFilterAndGrid() {
  const filterBar = document.getElementById('projectsFilterBar');
  const grid = document.getElementById('projectsGrid');
  if (!filterBar || !grid) return;

  // Extract unique categories dynamically from data.projects
  const rawCategories = portfolioData.projects.map(p => p.category);
  const categories = ['All', ...new Set(rawCategories)];

  // Render Filter Buttons
  filterBar.innerHTML = categories.map(cat => `
    <button class="filter-btn ${cat === activeFilter ? 'active' : ''}" data-filter="${cat}">
      ${cat}
    </button>
  `).join('');

  // Attach filter click listeners
  filterBar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      displayProjectsList(grid, activeFilter);
    });
  });

  // Initial Grid Render
  displayProjectsList(grid, activeFilter);
}

function displayProjectsList(gridElement, category) {
  // Filter projects (optionally excluding the top featured banner if desired, or displaying all catalog items)
  const filtered = category === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === category);

  gridElement.innerHTML = filtered.map((project, idx) => {
    const formattedNum = String(idx + 1).padStart(2, '0');

    // Dynamically render GitHub & Live Demo buttons ONLY if links exist
    const hasGithub = project.github && project.github.trim() !== '';
    const hasLiveDemo = project.liveDemo && project.liveDemo.trim() !== '';

    let actionButtons = '';
    if (hasGithub) {
      actionButtons += `
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-card">
          <i class="fa-brands fa-github"></i>
          <span>GitHub</span>
        </a>`;
    } else {
      actionButtons += `
        <button class="btn btn-card toast-trigger" data-msg="GitHub repository for ${project.title} coming soon!">
          <i class="fa-brands fa-github"></i>
          <span>GitHub</span>
        </button>`;
    }

    if (hasLiveDemo) {
      actionButtons += `
        <a href="${project.liveDemo}" class="btn btn-card btn-card-demo">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
          <span>Live Demo</span>
        </a>`;
    } else {
      actionButtons += `
        <button class="btn btn-card btn-card-demo toast-trigger" data-msg="Live deployment for ${project.title} coming soon!">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
          <span>Live Demo</span>
        </button>`;
    }

    return `
      <div class="project-card reveal">
        <div class="project-thumb-box">
          <div class="project-overlay">
            <span class="project-num">${formattedNum}</span>
            <span class="project-badge-tag">${project.statusBadge || project.category}</span>
          </div>
          <img src="${project.image}" alt="${project.title}" class="project-img" 
               onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';" />
        </div>

        <div class="project-content">
          <span class="project-category">${project.category}</span>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>

          <div class="project-tech-badges">
            ${project.technologies.map(t => `<span class="tech-badge">${t}</span>`).join('')}
          </div>

          <div class="project-buttons-row">
            ${actionButtons}
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Re-observe scroll reveals for newly injected elements
  initScrollReveal();
  attachToastTriggers();
}

/** 7. Core Strengths */
function renderStrengthsSection() {
  const container = document.getElementById('strengthsContainer');
  if (!container) return;

  container.innerHTML = portfolioData.strengths.map(item => `
    <div class="strength-card reveal">
      <div class="strength-icon-box">
        <i class="${item.icon}"></i>
      </div>
      <h3 class="strength-name">${item.title}</h3>
      <p class="strength-text">${item.description}</p>
    </div>
  `).join('');
}

/** 8. Certificates */
function renderCertificatesSection() {
  const container = document.getElementById('certificatesContainer');
  if (!container) return;

  container.innerHTML = portfolioData.certificates.map(cert => `
    <div class="cert-card glass-card reveal">
      <div class="cert-thumb-box">
        <img src="${cert.image}" alt="${cert.title}" class="cert-img" 
             onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80';" />
      </div>
      <h3 class="cert-title">${cert.title}</h3>
      <p class="cert-org"><i class="fa-solid fa-award"></i> ${cert.organization}</p>
      <p class="cert-date"><i class="fa-regular fa-calendar"></i> ${cert.date}</p>

      <div class="cert-action">
        ${cert.link ? `
          <a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            <span>View Certificate</span>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>` : `
          <button class="btn btn-outline btn-sm toast-trigger" data-msg="Certificate verification document available on request.">
            <span>Verified Document</span>
            <i class="fa-solid fa-certificate"></i>
          </button>
        `}
      </div>
    </div>
  `).join('');
}

/** 9. Contact Info Panel */
function renderContactInfo() {
  const panel = document.getElementById('contactInfoPanel');
  if (!panel) return;

  const p = portfolioData.personal;

  panel.innerHTML = `
    <a href="mailto:${p.email}" class="contact-card-item">
      <div class="contact-icon"><i class="fa-solid fa-envelope"></i></div>
      <div class="contact-meta">
        <span class="contact-lbl">Email</span>
        <span class="contact-val">${p.email}</span>
      </div>
    </a>

    <a href="tel:${p.phone.replace(/\s+/g, '')}" class="contact-card-item">
      <div class="contact-icon"><i class="fa-solid fa-phone"></i></div>
      <div class="contact-meta">
        <span class="contact-lbl">Phone</span>
        <span class="contact-val">${p.phone}</span>
      </div>
    </a>

    <div class="contact-card-item">
      <div class="contact-icon"><i class="fa-solid fa-location-dot"></i></div>
      <div class="contact-meta">
        <span class="contact-lbl">Location</span>
        <span class="contact-val">${p.location}</span>
      </div>
    </div>

    <a href="${p.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-card-item">
      <div class="contact-icon"><i class="fa-brands fa-linkedin-in"></i></div>
      <div class="contact-meta">
        <span class="contact-lbl">LinkedIn</span>
        <span class="contact-val">View LinkedIn Profile</span>
      </div>
    </a>

    <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="contact-card-item">
      <div class="contact-icon"><i class="fa-brands fa-github"></i></div>
      <div class="contact-meta">
        <span class="contact-lbl">GitHub</span>
        <span class="contact-val">View GitHub Repositories</span>
      </div>
    </a>
  `;
}

/* ==============================================================================
   UI INTERACTIONS, ANIMATIONS & CLIENT FORM VALIDATION
   ============================================================================== */

/** Sticky Navbar Scroll Effect */
function initNavbarScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/** Mobile Hamburger Menu */
function initMobileMenu() {
  const toggleBtn = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  const toggle = () => {
    const isOpen = navMenu.classList.toggle('open');
    toggleBtn.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  toggleBtn.addEventListener('click', toggle);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) toggle();
    });
  });
}

/** Scroll Spy Indicator */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const onScroll = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

/** IntersectionObserver Scroll Reveal */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/** Contact Form Validation */
function initContactFormValidation() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('formName');
  const emailInput = document.getElementById('formEmail');
  const subjectInput = document.getElementById('formSubject');
  const messageInput = document.getElementById('formMessage');
  const submitBtn = document.getElementById('submitBtn');
  const feedback = document.getElementById('formFeedback');

  const setErr = (input, msg) => {
    input.classList.add('is-invalid');
    const errSpan = document.getElementById(`${input.id.replace('form', '').toLowerCase()}Error`);
    if (errSpan) errSpan.textContent = msg;
  };

  const clearErr = (input) => {
    input.classList.remove('is-invalid');
    const errSpan = document.getElementById(`${input.id.replace('form', '').toLowerCase()}Error`);
    if (errSpan) errSpan.textContent = '';
  };

  [nameInput, emailInput, subjectInput, messageInput].forEach(inp => {
    if (!inp) return;
    inp.addEventListener('input', () => {
      clearErr(inp);
      feedback.style.display = 'none';
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      setErr(nameInput, 'Please provide your name (at least 2 characters).');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      setErr(emailInput, 'Please enter a valid email address.');
      isValid = false;
    }

    if (!subjectInput.value.trim()) {
      setErr(subjectInput, 'Please enter a subject.');
      isValid = false;
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      setErr(messageInput, 'Message should be at least 10 characters.');
      isValid = false;
    }

    if (isValid) {
      submitBtn.disabled = true;
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Sending...</span>';

      setTimeout(() => {
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        feedback.className = 'form-feedback success';
        feedback.textContent = 'Thank you! Your message has been validated successfully. (Connect EmailJS, Formspree, or your backend endpoint to deliver live emails).';
        feedback.style.display = 'block';
        showToast('Form validated successfully!');
      }, 1000);
    }
  });
}

/** Back to Top */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/** Toast Notifications */
function attachToastTriggers() {
  document.querySelectorAll('.toast-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const msg = btn.getAttribute('data-msg') || 'Action updated!';
      showToast(msg);
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/** Safe DOM Helper */
function safeSetText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}