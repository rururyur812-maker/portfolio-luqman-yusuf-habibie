(() => {
  'use strict';

  const STORAGE_KEY = 'portfolio-dark-admin-static-v3-luqman-real';
  const AUTH_KEY = 'portfolio-dark-admin-static-auth-v3';
  const app = document.getElementById('app');

  const seed = {
    profile: {
      name: 'Luqman Yusuf Habibie',
      role: 'Digital Business Student | Business Analyst Enthusiast',
      heroTitle: 'Transforming insights into practical digital solutions.',
      heroDescription: 'Saya berfokus pada business analysis, digital product thinking, dan strategi bisnis digital untuk mengubah masalah nyata menjadi arah solusi yang lebih jelas, terukur, dan relevan.',
      aboutTitle: 'Luqman Yusuf Habibie',
      aboutDescription: 'Saya adalah mahasiswa S1 Bisnis Digital Universitas Negeri Surabaya yang tertarik pada business analysis, product development, digital strategy, dan pemanfaatan teknologi untuk menyelesaikan masalah secara terstruktur. Saya senang memetakan kebutuhan, merumuskan insight, lalu menerjemahkannya menjadi solusi digital yang dapat dipahami dan dijalankan.',
      email: '24081494147@mhs.unesa.ac.id',
      phone: '082337267620',
      location: 'Mojokerto, Indonesia',
      photo: 'assets/luqman-profile-hd.png',
      github: '',
      linkedin: '',
      stats: { projects: '4', experience: '3', certificates: '2' }
    },
    projects: [
      {
        id: 'p1', slug: 'infuguard-smart-infusion-monitoring', title: 'InfuGuard',
        shortDescription: 'Prototipe sistem monitoring infus berbasis IoT untuk memantau berat cairan, laju tetesan, dan status infus secara real-time.',
        description: 'InfuGuard merupakan prototipe sistem monitoring infus berbasis IoT yang dirancang untuk membantu pemantauan kondisi infus melalui dashboard digital. Sistem ini mengintegrasikan load cell, sensor tetesan, modul pembacaan data, dan antarmuka monitoring agar informasi penting seperti sisa cairan, laju tetesan, serta estimasi waktu penggantian dapat dipantau secara lebih terstruktur.',
        category: 'Product', image: 'assets/infuguard-dashboard.png', year: '2026', role: 'Business Analyst & Product Team', duration: 'Prototype Project',
        tools: ['ESP32', 'Load Cell', 'HX711', 'IR Sensor', 'LCD I2C', 'Dashboard UI'], features: ['Real-time infusion monitoring', 'Dashboard status tracking', 'Drop-rate monitoring', 'Estimated replacement timing'],
        liveUrl: '', repoUrl: '', featured: true
      },
      {
        id: 'p2', slug: 'nexus-gamified-student-collaboration-platform', title: 'NEXUS',
        shortDescription: 'Platform kolaborasi mahasiswa berbasis gamifikasi untuk mendukung pencarian tim, pencatatan prestasi, dan ekosistem kolaborasi kampus.',
        description: 'NEXUS adalah konsep dan prototipe platform kolaborasi mahasiswa yang dikembangkan untuk membangun ekosistem prestasi di lingkungan kampus. Project ini berangkat dari kebutuhan akan sistem yang dapat membantu mahasiswa menemukan rekan tim sesuai kompetensi, mendokumentasikan capaian secara terintegrasi, serta mendorong partisipasi aktif melalui mekanisme gamifikasi seperti poin, badge, dan leaderboard.',
        category: 'Business', image: 'assets/nexus-home.png', year: '2026', role: 'Business Analyst & Research Team', duration: 'Research Proposal & Prototype',
        tools: ['Figma', 'User Flow', 'Research Documentation', 'Gamification Mapping'], features: ['Team matching concept', 'Achievement tracking', 'Gamification system', 'Collaboration ecosystem'],
        liveUrl: '', repoUrl: '', featured: true
      },
      {
        id: 'p3', slug: 'nusanest-digital-hiking-platform', title: 'NusaNest',
        shortDescription: 'Konsep platform digital untuk perjalanan dan pendakian yang menggabungkan booking, komunitas, event, dan konten perjalanan.',
        description: 'NusaNest adalah konsep platform digital yang dirancang untuk membantu pengguna menemukan layanan perjalanan dan pendakian, melihat event, membaca artikel, serta terhubung dengan komunitas. Project ini menunjukkan pendekatan product thinking dalam merancang alur layanan, struktur konten, dan pengalaman pengguna untuk sektor travel dan hiking.',
        category: 'Product', image: 'assets/nusanest-home.png', year: '2026', role: 'Product & Business Analyst', duration: 'Concept Project',
        tools: ['Figma', 'UI Planning', 'Content Structuring', 'User Journey Mapping'], features: ['Trip & hiking booking flow', 'Community discussion', 'Event information', 'Travel content ecosystem'],
        liveUrl: '', repoUrl: '', featured: false
      },
      {
        id: 'p4', slug: 'waveco-hampers-marketplace', title: 'Wave.co',
        shortDescription: 'Project bisnis digital berbasis marketplace yang berfokus pada penjualan hampers, branding toko, dan visual merchandising produk.',
        description: 'Wave.co adalah project e-commerce yang berfokus pada pengelolaan toko hampers di marketplace. Cakupannya meliputi penyusunan identitas toko, pengemasan visual produk, katalog produk, foto produk, dan pengaturan tampilan marketplace agar lebih menarik dan siap digunakan sebagai media penjualan digital.',
        category: 'Marketing', image: 'assets/waveco-store.png', year: '2026', role: 'Digital Marketing & Branding', duration: 'Marketplace Project',
        tools: ['Canva', 'Marketplace Seller Center', 'Product Photography', 'Branding Assets'], features: ['Marketplace storefront setup', 'Product catalog management', 'Visual merchandising', 'Brand presentation'],
        liveUrl: '', repoUrl: '', featured: false
      }
    ],
    experiences: [
      {
        id: 'e1',
        title: 'Ketua Umum',
        organization: 'Pimpinan Cabang Ikatan Pelajar Muhammadiyah Sooko (PC IPM Sooko)',
        period: 'Organizational Leadership',
        type: 'Organization',
        summary: 'Memimpin koordinasi organisasi, mengawal program kerja, dan membangun kolaborasi antaranggota dalam kegiatan pelajar di tingkat cabang.',
        highlights: ['Leadership', 'Program coordination', 'Team collaboration'],
        image: 'assets/exp-ipm.jpg'
      },
      {
        id: 'e2',
        title: 'Staff Sie Kepesertaan',
        organization: 'Digi E-Sport Competition 2025',
        period: '16–17 Juni 2025',
        type: 'Committee',
        summary: 'Berkontribusi dalam kepanitiaan kegiatan Digi E-Sport Competition yang diselenggarakan oleh Himpunan Mahasiswa Program Studi Bisnis Digital Universitas Negeri Surabaya.',
        highlights: ['Participant support', 'Event coordination', 'Teamwork'],
        image: 'assets/certificate-dec.jpg'
      },
      {
        id: 'e3',
        title: 'Staff Sie Perkapman',
        organization: 'Digital Business Art and Sport Competition 2025',
        period: '3–5 Oktober 2025',
        type: 'Committee',
        summary: 'Berpartisipasi dalam kepanitiaan Digital Business Art and Sport Competition FEB Unesa dengan fokus kontribusi pada kesiapan pelaksanaan acara.',
        highlights: ['Committee support', 'Event preparation', 'Collaboration'],
        image: 'assets/certificate-dbasc.jpg'
      }
    ],
    certificates: [
      { id: 'c1', title: 'Digi E-Sport Competition 2025', issuer: 'Himpunan Mahasiswa Prodi Bisnis Digital · Staff Sie Kepesertaan', year: '2025', image: 'assets/certificate-dec.jpg', credentialUrl: '' },
      { id: 'c2', title: 'Digital Business Art and Sport Competition 2025', issuer: 'Himpunan Mahasiswa Prodi Bisnis Digital · Staff Sie Perkapman', year: '2025', image: 'assets/certificate-dbasc.jpg', credentialUrl: '' }
    ],
    techStack: [
  {
    id: 't1',
    name: 'Microsoft Excel',
    category: 'Data Analysis & Reporting',
    icon: 'XL',
    logo: 'assets/tools/microsoft-excel.webp',
    usage: 'Frequently Used',
    level: 90
  },
  {
    id: 't2',
    name: 'Google Sheets',
    category: 'Data Processing & Collaboration',
    icon: 'GS',
    logo: 'assets/tools/google-sheets.webp',
    usage: 'Frequently Used',
    level: 88
  },
  {
    id: 't3',
    name: 'Figma',
    category: 'UI Planning & Product Design',
    icon: 'FG',
    logo: 'assets/tools/figma.webp',
    usage: 'Working Knowledge',
    level: 82
  },
  {
    id: 't4',
    name: 'Canva',
    category: 'Visual Communication',
    icon: 'CV',
    logo: 'assets/tools/canva.webp',
    usage: 'Frequently Used',
    level: 92
  },
  {
    id: 't5',
    name: 'CapCut',
    category: 'Content & Video Editing',
    icon: 'CC',
    logo: 'assets/tools/capcut.webp',
    usage: 'Frequently Used',
    level: 84
  },
  {
    id: 't6',
    name: 'Notion',
    category: 'Documentation & Project Planning',
    icon: 'NT',
    logo: 'assets/tools/notion.webp',
    usage: 'Working Knowledge',
    level: 86
  },
  {
    id: 't7',
    name: 'Looker Studio',
    category: 'Dashboard & Data Visualization',
    icon: 'LS',
    logo: 'assets/tools/looker-studio.webp',
    usage: 'Currently Learning',
    level: 76
  },
  {
    id: 't8',
    name: 'AI Tools',
    category: 'Research & Productivity',
    icon: 'AI',
    logo: 'assets/tools/ai-tools.webp',
    usage: 'Frequently Used',
    level: 89
  }
],
    messages: [
      { id: 'm1', name: 'Demo Visitor', email: 'visitor@example.com', subject: 'Internship opportunity', message: 'Kami tertarik mendiskusikan kesempatan magang dan project analisis bisnis.', createdAt: '2026-07-22T07:00:00.000Z', status: 'new' }
    ]
  };

  let data = loadData();
  let showcaseTab = 'projects';
  let projectCategory = 'All';
  let modalCleanup = null;
  let routeCleanup = [];
  let revealObserver = null;
  let scrollFrame = 0;
  let pointerFrame = 0;

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointerQuery = window.matchMedia('(pointer: fine)');

  function addRouteCleanup(callback) { routeCleanup.push(callback); }
  function cleanupRouteEffects() {
    routeCleanup.splice(0).forEach(callback => { try { callback(); } catch (error) { console.warn('Cleanup interaksi gagal.', error); } });
    if (scrollFrame) cancelAnimationFrame(scrollFrame);
    if (pointerFrame) cancelAnimationFrame(pointerFrame);
    scrollFrame = 0;
    pointerFrame = 0;
    revealObserver?.disconnect();
    revealObserver = null;
  }

  function listen(target, type, handler, options) {
    target?.addEventListener(type, handler, options);
    addRouteCleanup(() => target?.removeEventListener(type, handler, options));
  }

  function animateSwap(stage, renderMarkup, afterSwap) {
    if (!stage) return;
    if (motionQuery.matches || typeof stage.animate !== 'function') {
      stage.innerHTML = renderMarkup();
      afterSwap?.();
      return;
    }
    stage.getAnimations().forEach(animation => animation.cancel());
    const out = stage.animate([
      { opacity: 1, transform: 'translate3d(0,0,0)', filter: 'blur(0px)' },
      { opacity: 0, transform: 'translate3d(0,12px,0)', filter: 'blur(4px)' }
    ], { duration: 180, easing: 'cubic-bezier(.4,0,1,1)', fill: 'forwards' });
    out.finished.catch(() => {}).then(() => {
      stage.innerHTML = renderMarkup();
      afterSwap?.();
      stage.animate([
        { opacity: 0, transform: 'translate3d(0,16px,0)', filter: 'blur(4px)' },
        { opacity: 1, transform: 'translate3d(0,0,0)', filter: 'blur(0px)' }
      ], { duration: 480, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'both' });
    });
  }

  function clone(value) { return JSON.parse(JSON.stringify(value)); }
  function loadData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : clone(seed);
    } catch (error) {
      console.warn('Data localStorage tidak dapat dibaca, memakai data awal.', error);
      return clone(seed);
    }
  }
  function saveData() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (error) { console.warn('Data tidak dapat disimpan pada browser ini.', error); } }
  function resetData() { data = clone(seed); saveData(); }
  function uid(prefix) { return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`; }
  function escapeHtml(value = '') {
    return String(value).replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#003399;', '"':'&quot;' }[char]));
  }
  function attr(value = '') { return escapeHtml(value); }
  function slugify(value = '') { return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function listFrom(value = '') { return value.split(',').map(item => item.trim()).filter(Boolean); }
  function formatDate(value) { return new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value)); }
  function route() { return location.hash.startsWith('#/') ? location.hash.slice(1) : '/'; }
  function sessionGet(key) { try { return sessionStorage.getItem(key); } catch { return null; } }
  function sessionSet(key, value) { try { sessionStorage.setItem(key, value); } catch { /* Browser tanpa sessionStorage tetap dapat membuka halaman publik. */ } }
  function sessionRemove(key) { try { sessionStorage.removeItem(key); } catch { /* no-op */ } }
  function isAuthed() { return sessionGet(AUTH_KEY) === 'yes'; }
  function go(path) { location.hash = `#${path}`; }

  const icons = {
    arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    back: '<svg viewBox="0 0 24 24"><path d="M19 12H5m6 6-6-6 6-6"/></svg>',
    code: '<svg viewBox="0 0 24 24"><path d="m8 9-3 3 3 3m8-6 3 3-3 3m-3-9-2 12"/></svg>',
    award: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="5"/><path d="m8.5 12.5-1 8 4.5-2 4.5 2-1-8"/></svg>',
    layers: '<svg viewBox="0 0 24 24"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/></svg>',
    pin: '<svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.5S18 0 15 2a13.4 13.4 0 0 0-7 0C5 .1 3.8.5 3.8.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4"/></svg>',
    external: '<svg viewBox="0 0 24 24"><path d="M14 4h6v6M10 14 20 4M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5"/></svg>',
    edit: '<svg viewBox="0 0 24 24"><path d="m4 20 4.5-1 10-10-3.5-3.5-10 10L4 20Z"/><path d="m13.5 6.5 3.5 3.5"/></svg>',
    trash: '<svg viewBox="0 0 24 24"><path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6"/></svg>',
    plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
    eye: '<svg viewBox="0 0 24 24"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></svg>',
    logout: '<svg viewBox="0 0 24 24"><path d="M10 17l5-5-5-5M15 12H3M15 3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-5"/></svg>'
  };

  function icon(name, cls = '') { return `<span class="inline-icon ${cls}">${icons[name] || ''}</span>`; }

  function publicNav() {
    return `
      <header class="public-nav">
        <div class="nav-inner">
          <a class="brand" href="#/" aria-label="Kembali ke halaman utama"><span>LYH</span><small>Portfolio</small></a>
          <nav class="nav-links" id="publicNavLinks">
            <a href="#home" data-scroll="home">Home</a>
            <a href="#about" data-scroll="about">About</a>
            <a href="#portfolio" data-scroll="portfolio">Portfolio</a>
            <a href="#experience" data-scroll="experience">Experience</a>
            <a href="#contact" data-scroll="contact">Contact</a>
            <a class="nav-admin" href="#/admin/login">Admin</a>
          </nav>
          <button class="menu-button" id="menuButton" aria-label="Buka menu"><span></span><span></span></button>
        </div>
      </header>`;
  }

  function sectionHeading(eyebrow, title, description) {
    return `<div class="section-heading reveal"><span class="eyebrow">${escapeHtml(eyebrow)}</span><h2>${escapeHtml(title)}</h2>${description ? `<p>${escapeHtml(description)}</p>` : ''}</div>`;
  }

  function projectCard(project, index = 0) {
    return `
      <a class="project-card reveal ${project.featured ? 'featured' : ''}" href="#/project/${encodeURIComponent(project.slug)}" data-project-link data-hover-glow style="--card-index:${index}">
        <div class="project-image-wrap">
          <img src="${attr(project.image)}" alt="Preview ${attr(project.title)}" loading="lazy" />
          <span class="project-category">${escapeHtml(project.category)}</span>
          <span class="project-index">${String(index + 1).padStart(2, '0')}</span>
        </div>
        <div class="project-card-body">
          <div><span class="project-meta">${escapeHtml(project.year)} · ${escapeHtml(project.role)}</span><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.shortDescription)}</p></div>
          <span class="round-arrow">${icon('arrow')}</span>
        </div>
      </a>`;
  }

  function projectsMarkup() {
    const categories = ['All', 'Business', 'Product', 'Marketing'];
    const filtered = projectCategory === 'All' ? data.projects : data.projects.filter(project => project.category === projectCategory);
    return `
      <div class="showcase-content showcase-panel-enter">
        <div class="filter-bar reveal" aria-label="Filter kategori project">
          ${categories.map(category => `<button class="${projectCategory === category ? 'active' : ''}" data-category="${category}"><span>${category}</span></button>`).join('')}
        </div>
        <div class="projects-grid">${filtered.map((project, index) => projectCard(project, index)).join('')}</div>
        ${filtered.length ? '' : '<div class="empty-state">Belum ada project pada kategori ini.</div>'}
      </div>`;
  }

  function certificatesMarkup() {
    return `<div class="certificate-grid showcase-content showcase-panel-enter">${data.certificates.map(item => `
      <article class="certificate-card reveal" data-hover-glow>
        <img src="${attr(item.image)}" alt="${attr(item.title)}" loading="lazy" />
        <div><span>${escapeHtml(item.issuer)} · ${escapeHtml(item.year)}</span><h3>${escapeHtml(item.title)}</h3>${item.credentialUrl ? `<a href="${attr(item.credentialUrl)}" target="_blank" rel="noreferrer">View credential ${icon('external')}</a>` : ''}</div>
      </article>`).join('')}</div>`;
  }

  function techMarkup() {
  return `
    <div class="tech-grid showcase-content showcase-panel-enter">
      ${data.techStack.map((item, index) => `
        <article
          class="tech-card tech-card-logo reveal"
          data-hover-glow
          style="--card-index:${index}"
        >
          <div class="tech-logo-wrap">
            ${
              item.logo
                ? `
                  <img
                    class="tech-logo"
                    src="${attr(item.logo)}"
                    alt="${attr(item.name)} logo"
                    loading="lazy"
                  >
                `
                : `
                  <span class="tech-logo-fallback">
                    ${escapeHtml(item.icon || '')}
                  </span>
                `
            }
          </div>

          <div class="tech-info">
            <h3>${escapeHtml(item.name)}</h3>

            <span class="tech-category">
              ${escapeHtml(item.category)}
            </span>

            <small class="tech-usage">
              ${escapeHtml(item.usage || 'Working Knowledge')}
            </small>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

  function showcaseContent() {
    if (showcaseTab === 'certificates') return certificatesMarkup();
    if (showcaseTab === 'tech') return techMarkup();
    return projectsMarkup();
  }

  function experienceCard(item, index = 0) {
    return `
      <article class="experience-card reveal" data-hover-glow style="--card-index:${index}">
        <div class="experience-top">
          <span class="experience-type">${escapeHtml(item.type)}</span>
          <span class="experience-period">${escapeHtml(item.period)}</span>
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        <strong>${escapeHtml(item.organization)}</strong>
        <p>${escapeHtml(item.summary)}</p>
        <div class="experience-tags">${(item.highlights || []).map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
      </article>`;
  }

  function renderHome() {
    const p = data.profile;
    const hasLinkedIn = Boolean((p.linkedin || '').trim());
    app.innerHTML = `
      <div class="public-site public-v2">
        <div class="scroll-progress" id="scrollProgress"></div>
        <div class="cursor-glow" id="cursorGlow"></div>
        <div class="page-transition" id="pageTransition"><span></span></div>
        <div class="noise-layer" aria-hidden="true"></div>
        ${publicNav()}
        <main>
          <section id="home" class="hero-section public-section">
            <div class="ambient ambient-one"></div><div class="ambient ambient-two"></div><div class="ambient ambient-three"></div>
            <div class="container hero-container">
              <div class="hero-card" data-tilt="soft">
                <div class="hero-copy">
                  <span class="hero-kicker"><i></i> PORTFOLIO · 2026</span>
                  <p class="hero-role">${escapeHtml(p.role)}</p>
                  <h1>${escapeHtml(p.heroTitle)}</h1>
                  <p class="hero-description">${escapeHtml(p.heroDescription)}</p>
                  <div class="hero-actions"><a class="button primary magnetic" href="#portfolio" data-scroll="portfolio">Explore My Work ${icon('arrow')}</a><a class="button ghost magnetic" href="#contact" data-scroll="contact">Let's Connect</a></div>
                  <div class="hero-proof"><span><strong>${escapeHtml(p.stats.projects)}</strong> Real projects</span><span><strong>${escapeHtml(p.stats.experience)}</strong> Experience highlights</span></div>
                </div>
                <div class="hero-portrait-stage" aria-label="Portrait Luqman Yusuf Habibie">
                  <div class="portrait-grid" aria-hidden="true"></div>
                  <div class="portrait-ring ring-one" aria-hidden="true"></div><div class="portrait-ring ring-two" aria-hidden="true"></div>
                  <div class="portrait-backdrop" aria-hidden="true"></div>
                  <img class="hero-portrait" src="${attr(p.photo)}" alt="${attr(p.name)}" />
                  <span class="logo-cover" aria-hidden="true"></span>
                  <div class="hero-insight insight-focus"><small>Focus</small><strong>Business Analysis</strong><span>Research · Insight · Recommendation</span></div>
                  <div class="hero-insight insight-interest"><small>Interest</small><strong>Digital Product Strategy</strong><span>Business-driven problem solving</span></div>
                  <div class="hero-insight insight-availability"><i></i><div><small>Current</small><strong>Open to Internship</strong></div></div>
                  <span class="portrait-caption">Mojokerto · Indonesia</span>
                </div>
              </div>
              <a class="scroll-cue" href="#about" data-scroll="about"><span>Scroll to explore</span><i></i></a>
            </div>
          </section>

          <section class="developer-section public-section"><div class="container developer-grid">
            <div class="reveal analyst-copy"><span class="eyebrow">HOW I CREATE VALUE</span><h2 class="display-title">Business clarity,<br><em>digital direction.</em></h2><p class="lead-copy">Saya berupaya mengubah kebutuhan pengguna, peluang bisnis, dan informasi yang tersebar menjadi insight yang lebih jelas, prioritas yang terarah, serta solusi digital yang dapat ditindaklanjuti.</p><div class="service-list"><div><span class="service-number">01</span><span><strong>Business & Market Analysis</strong><small>Memetakan masalah, kebutuhan, tren, dan peluang secara terstruktur.</small></span></div><div><span class="service-number">02</span><span><strong>Digital Product Thinking</strong><small>Menghubungkan user needs dengan tujuan bisnis dan rancangan solusi.</small></span></div><div><span class="service-number">03</span><span><strong>Strategy & Communication</strong><small>Menyusun rekomendasi yang lebih ringkas, jelas, dan mudah dipahami.</small></span></div></div></div>
            <div class="analysis-board reveal" data-tilt="soft">
              <div class="analysis-board-top"><div><span class="live-dot">Insight Board</span><small>Structured thinking workspace</small></div><b>Portfolio Snapshot</b></div>
              <div class="analysis-chart"><div class="chart-grid"></div><svg viewBox="0 0 520 190" aria-hidden="true"><defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#458fff" stop-opacity=".42"/><stop offset="1" stop-color="#458fff" stop-opacity="0"/></linearGradient></defs><path class="chart-area" d="M0 170 C55 155 64 112 114 124 S189 155 231 96 S303 118 347 65 S431 87 520 20 L520 190 L0 190 Z"/><path class="chart-line" d="M0 170 C55 155 64 112 114 124 S189 155 231 96 S303 118 347 65 S431 87 520 20"/></svg><span class="chart-point point-a"></span><span class="chart-point point-b"></span><span class="chart-point point-c"></span></div>
              <div class="analysis-matrix"><article><span>01</span><small>Observe</small><strong>Need & context</strong></article><article><span>02</span><small>Analyze</small><strong>Pattern & issue</strong></article><article><span>03</span><small>Design</small><strong>Direction & solution</strong></article><article><span>04</span><small>Refine</small><strong>Measure & improve</strong></article></div>
              <div class="analysis-summary"><span>Solution confidence</span><div><i></i></div><strong>84%</strong></div>
            </div>
          </div></section>

          <section id="about" class="about-section public-section"><div class="container">
            ${sectionHeading('ABOUT ME', 'A structured, curious, and collaborative learner.', 'Profil singkat yang menjelaskan fokus, pendekatan kerja, dan konteks akademik saya.')}
            <div class="about-grid about-grid-single">
              <div class="about-panel reveal" data-hover-glow>
                <div class="about-panel-intro">
                  <span class="eyebrow">PROFILE SUMMARY</span>
                  <h3>${escapeHtml(p.aboutTitle)}</h3>
                  <p>${escapeHtml(p.aboutDescription)}</p>
                </div>
                <div class="about-facts compact"><div><small>University</small><strong>Universitas Negeri Surabaya</strong></div><div><small>Study Program</small><strong>S1 Bisnis Digital</strong></div><div><small>Domisili</small><strong>${escapeHtml(p.location)}</strong></div></div>
                <div class="about-focus-grid"><article><span>01</span><h4>Business Analysis</h4><p>Mengidentifikasi masalah, kebutuhan, dan peluang dengan lebih terarah.</p></article><article><span>02</span><h4>Digital Product</h4><p>Menyusun alur solusi digital yang relevan dengan kebutuhan pengguna.</p></article><article><span>03</span><h4>Communication</h4><p>Menyampaikan insight dan rekomendasi secara ringkas dan mudah dipahami.</p></article></div>
                <div class="about-actions"><a class="button primary magnetic" href="#contact" data-scroll="contact">Start a Conversation ${icon('arrow')}</a></div>
              </div>
            </div>
            <div class="stats-row reveal"><div><strong>${escapeHtml(p.stats.projects)}</strong><span>Selected real projects</span></div><div><strong>${escapeHtml(p.stats.experience)}</strong><span>Organization & committee experiences</span></div><div><strong>${escapeHtml(p.stats.certificates)}</strong><span>Certificates showcased</span></div></div>
          </div></section>

          <section id="portfolio" class="portfolio-section public-section"><div class="container">
            ${sectionHeading('SELECTED WORK', 'Portfolio Showcase', 'Project nyata yang merepresentasikan minat saya pada business analysis, digital product, dan digital marketing.')}
            <div class="showcase-tabs reveal" role="tablist" aria-label="Portfolio content"><button class="${showcaseTab === 'projects' ? 'active' : ''}" data-showcase="projects"><span class="tab-dot"></span><span>Projects</span></button><button class="${showcaseTab === 'certificates' ? 'active' : ''}" data-showcase="certificates"><span class="tab-dot"></span><span>Certificates</span></button><button class="${showcaseTab === 'tech' ? 'active' : ''}" data-showcase="tech"><span class="tab-dot"></span><span>Tools & Workflow</span></button></div>
            <div id="showcaseContent" class="showcase-stage">${showcaseContent()}</div>
          </div></section>

          <section id="experience" class="experience-section public-section"><div class="container">
            ${sectionHeading('EXPERIENCE', 'Organization & Committee Experience', 'Pengalaman kepemimpinan, organisasi, dan kepanitiaan yang membentuk cara saya berkolaborasi dan bertanggung jawab.')}
            <div class="experience-grid">${data.experiences.map((item, index) => experienceCard(item, index)).join('')}</div>
          </div></section>

          <section id="contact" class="contact-section public-section">
            <div class="contact-marquee" aria-hidden="true"><div><span>OPEN TO INTERNSHIP</span><i></i><span>BUSINESS ANALYSIS</span><i></i><span>DIGITAL PRODUCT</span><i></i><span>LET'S COLLABORATE</span><i></i><span>OPEN TO INTERNSHIP</span><i></i><span>BUSINESS ANALYSIS</span><i></i></div></div>
            <div class="container contact-wrap">
              <div class="contact-top reveal"><span class="eyebrow">LET'S CONNECT</span><h2>Interested in working together?<br><em>Let's start a conversation.</em></h2><p>Terbuka untuk kesempatan magang, diskusi project, kolaborasi, dan percakapan seputar bisnis digital.</p></div>
              <div class="contact-grid">
                <div class="contact-copy reveal"><span class="contact-label">Direct contact</span><a class="contact-email magnetic" href="mailto:${attr(p.email)}">${escapeHtml(p.email)} ${icon('arrow')}</a><div class="contact-details"><a href="tel:${attr(p.phone)}">${icon('phone')}<span><small>Phone</small>${escapeHtml(p.phone)}</span></a><div>${icon('pin')}<span><small>Domisili</small>${escapeHtml(p.location)}</span></div></div><div class="contact-note"><span>Available for</span><strong>Internship · Project · Collaboration</strong></div></div>
                <form class="contact-form reveal" id="contactForm"><div class="form-intro"><span>Send a message</span><small>I usually respond as soon as possible.</small></div><div class="form-row"><label><span>Your name</span><input required name="name" placeholder="Your full name"></label><label><span>Your email</span><input required type="email" name="email" placeholder="name@email.com"></label></div><label><span>What would you like to discuss?</span><input required name="subject" placeholder="Internship, project, or collaboration"></label><label><span>Tell me a little more</span><textarea required name="message" rows="5" placeholder="Write your message here..."></textarea></label><div class="contact-submit-row"><p class="success-message" id="contactSuccess" hidden>Thank you — pesanmu sudah masuk ke inbox admin.</p><button class="button primary magnetic" type="submit">Send Message ${icon('arrow')}</button></div></form>
              </div>
              <footer class="public-footer"><div class="footer-inner"><div><strong>LUQMAN YUSUF HABIBIE</strong><p>${escapeHtml(p.role)}</p></div><div><a href="#home" data-scroll="home">Back to top</a><a href="#/admin/login">Admin</a></div><small>© 2026 · Built with clarity, curiosity, and purpose.</small></div></footer>
            </div>
          </section>
        </main>
      </div>`;

    bindPublicEvents();
    revealOnScroll();
    const pendingSection = !location.hash.startsWith('#/') ? location.hash.slice(1) : '';
    if (pendingSection) setTimeout(() => document.getElementById(pendingSection)?.scrollIntoView(), 20);
  }


  function bindMicroInteractions(scope = document) {
    if (motionQuery.matches || !finePointerQuery.matches) return;

    scope.querySelectorAll('[data-tilt]').forEach(card => {
      if (card.dataset.tiltBound) return;
      card.dataset.tiltBound = 'yes';
      let frame = 0;
      let nextX = 0;
      let nextY = 0;
      const renderTilt = () => {
        frame = 0;
        card.style.setProperty('--tilt-x', `${nextY.toFixed(2)}deg`);
        card.style.setProperty('--tilt-y', `${nextX.toFixed(2)}deg`);
      };
      card.addEventListener('pointerenter', () => card.classList.add('is-interacting'));
      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        nextX = (((event.clientX - rect.left) / rect.width) - .5) * 3.2;
        nextY = -((((event.clientY - rect.top) / rect.height) - .5) * 2.6);
        if (!frame) frame = requestAnimationFrame(renderTilt);
      }, { passive: true });
      card.addEventListener('pointerleave', () => {
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
        card.classList.remove('is-interacting');
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      });
    });

    scope.querySelectorAll('.magnetic').forEach(item => {
      if (item.dataset.magneticBound) return;
      item.dataset.magneticBound = 'yes';
      let frame = 0;
      let nextX = 0;
      let nextY = 0;
      const renderMagnetic = () => {
        frame = 0;
        item.style.setProperty('--mag-x', `${nextX.toFixed(1)}px`);
        item.style.setProperty('--mag-y', `${nextY.toFixed(1)}px`);
      };
      item.addEventListener('pointerenter', () => item.classList.add('is-interacting'));
      item.addEventListener('pointermove', event => {
        const rect = item.getBoundingClientRect();
        nextX = (event.clientX - rect.left - rect.width / 2) * .1;
        nextY = (event.clientY - rect.top - rect.height / 2) * .1;
        if (!frame) frame = requestAnimationFrame(renderMagnetic);
      }, { passive: true });
      item.addEventListener('pointerleave', () => {
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
        item.classList.remove('is-interacting');
        item.style.setProperty('--mag-x', '0px');
        item.style.setProperty('--mag-y', '0px');
      });
    });

    scope.querySelectorAll('[data-hover-glow]').forEach(item => {
      if (item.dataset.glowBound) return;
      item.dataset.glowBound = 'yes';
      let frame = 0;
      let x = 50;
      let y = 50;
      const paintGlow = () => {
        frame = 0;
        item.style.setProperty('--pointer-x', `${x.toFixed(1)}%`);
        item.style.setProperty('--pointer-y', `${y.toFixed(1)}%`);
      };
      item.addEventListener('pointermove', event => {
        const rect = item.getBoundingClientRect();
        x = ((event.clientX - rect.left) / rect.width) * 100;
        y = ((event.clientY - rect.top) / rect.height) * 100;
        item.classList.add('pointer-active');
        if (!frame) frame = requestAnimationFrame(paintGlow);
      }, { passive: true });
      item.addEventListener('pointerleave', () => {
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
        item.classList.remove('pointer-active');
      });
    });

    scope.querySelectorAll('[data-project-link]').forEach(link => {
      if (link.dataset.transitionBound) return;
      link.dataset.transitionBound = 'yes';
      link.addEventListener('click', event => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        const transition = document.getElementById('pageTransition');
        transition?.classList.add('active');
        window.setTimeout(() => { location.hash = link.getAttribute('href') || '#/'; }, motionQuery.matches ? 0 : 360);
      });
    });
  }

  function setupMotionVisibility() {
    if (motionQuery.matches || !('IntersectionObserver' in window)) return;
    const animatedSections = document.querySelectorAll('.hero-section, .developer-section, .contact-section');
    if (!animatedSections.length) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      entry.target.classList.toggle('motion-paused', !entry.isIntersecting);
    }), { rootMargin: '180px 0px 180px 0px', threshold: 0 });
    animatedSections.forEach(section => observer.observe(section));
    addRouteCleanup(() => observer.disconnect());
  }

  function bindPublicEvents() {
    const nav = document.querySelector('.public-nav');
    const progress = document.getElementById('scrollProgress');
    const glow = document.getElementById('cursorGlow');
    const hero = document.querySelector('.hero-portrait-stage');
    let latestScrollY = window.scrollY;
    let latestPointerX = -999;
    let latestPointerY = -999;

    const paintScroll = () => {
      scrollFrame = 0;
      nav?.classList.toggle('scrolled', latestScrollY > 20);
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const ratio = Math.min(1, latestScrollY / max);
      if (progress) progress.style.transform = `scaleX(${ratio})`;
      if (hero && !motionQuery.matches) hero.style.setProperty('--scroll-shift', `${Math.min(24, latestScrollY * .035)}px`);
    };
    const onScroll = () => {
      latestScrollY = window.scrollY;
      if (!scrollFrame) scrollFrame = requestAnimationFrame(paintScroll);
    };
    paintScroll();
    listen(window, 'scroll', onScroll, { passive: true });

    if (glow && finePointerQuery.matches && !motionQuery.matches) {
      const paintPointer = () => {
        pointerFrame = 0;
        glow.style.transform = `translate3d(${latestPointerX - 210}px, ${latestPointerY - 210}px, 0)`;
      };
      const onPointerMove = event => {
        latestPointerX = event.clientX;
        latestPointerY = event.clientY;
        glow.classList.add('visible');
        if (!pointerFrame) pointerFrame = requestAnimationFrame(paintPointer);
      };
      listen(window, 'pointermove', onPointerMove, { passive: true });
    }

    listen(document.getElementById('menuButton'), 'click', () => document.getElementById('publicNavLinks')?.classList.toggle('open'));
    document.querySelectorAll('[data-scroll]').forEach(link => listen(link, 'click', event => {
      const id = link.getAttribute('data-scroll');
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: motionQuery.matches ? 'auto' : 'smooth', block: 'start' });
      document.getElementById('publicNavLinks')?.classList.remove('open');
    }));
    document.querySelectorAll('[data-showcase]').forEach(button => listen(button, 'click', () => {
      const nextTab = button.getAttribute('data-showcase') || 'projects';
      if (nextTab === showcaseTab) return;
      showcaseTab = nextTab;
      document.querySelectorAll('[data-showcase]').forEach(item => item.classList.toggle('active', item === button));
      const stage = document.getElementById('showcaseContent');
      animateSwap(stage, showcaseContent, () => {
        bindShowcaseEvents();
        bindMicroInteractions(stage);
        revealOnScroll(stage);
      });
    }));
    bindShowcaseEvents();
    bindMicroInteractions();
    setupMotionVisibility();
    listen(document.getElementById('contactForm'), 'submit', event => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      data.messages.unshift({ id: uid('m'), name: String(form.get('name') || ''), email: String(form.get('email') || ''), subject: String(form.get('subject') || ''), message: String(form.get('message') || ''), createdAt: new Date().toISOString(), status: 'new' });
      saveData();
      event.currentTarget.reset();
      const success = document.getElementById('contactSuccess');
      if (success) { success.hidden = false; success.classList.add('show'); setTimeout(() => { success.classList.remove('show'); success.hidden = true; }, 4500); }
    });
  }

  function bindShowcaseEvents() {
    document.querySelectorAll('[data-category]').forEach(button => button.addEventListener('click', () => {
      const nextCategory = button.getAttribute('data-category') || 'All';
      if (nextCategory === projectCategory) return;
      projectCategory = nextCategory;
      const stage = document.getElementById('showcaseContent');
      animateSwap(stage, projectsMarkup, () => {
        bindShowcaseEvents();
        bindMicroInteractions(stage);
        revealOnScroll(stage);
      });
    }));
    bindMicroInteractions(document.getElementById('showcaseContent') || document);
  }

  function revealOnScroll(scope = document) {
    const elements = scope.querySelectorAll('.reveal:not(.visible)');
    if (!elements.length) return;
    if (motionQuery.matches || !('IntersectionObserver' in window)) {
      elements.forEach(item => item.classList.add('visible'));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        revealObserver?.unobserve(entry.target);
      }), { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    }
    elements.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${Math.min(index * 42, 210)}ms`);
      revealObserver.observe(item);
    });
  }

  function renderProjectDetail(slug) {
    const project = data.projects.find(item => item.slug === decodeURIComponent(slug));
    if (!project) { renderNotFound('Project tidak ditemukan', 'Project mungkin telah dipindahkan atau dihapus melalui admin panel.'); return; }
    const current = data.projects.findIndex(item => item.id === project.id);
    const next = data.projects[(current + 1) % data.projects.length];
    app.innerHTML = `
      <div class="public-site public-v2 project-detail-page"><div class="scroll-progress" id="scrollProgress"></div><div class="cursor-glow" id="cursorGlow"></div><div class="page-transition" id="pageTransition"><span></span></div><div class="noise-layer" aria-hidden="true"></div>${publicNav()}<main>
        <section class="detail-hero public-section"><div class="ambient ambient-one"></div><div class="container"><a class="back-link" href="#portfolio" data-home-section="portfolio">${icon('back')} Back to Portfolio</a><div class="detail-header-grid"><div><span class="eyebrow">${escapeHtml(project.category)} · ${escapeHtml(project.year)}</span><h1>${escapeHtml(project.title)}</h1><p>${escapeHtml(project.shortDescription)}</p></div><div class="detail-actions">${project.liveUrl ? `<a class="button primary" href="${attr(project.liveUrl)}" target="_blank" rel="noreferrer">Live Preview ${icon('external')}</a>` : ''}</div></div><div class="detail-meta"><div><span>Role</span><strong>${escapeHtml(project.role)}</strong></div><div><span>Timeline</span><strong>${escapeHtml(project.duration)}</strong></div><div><span>Year</span><strong>${escapeHtml(project.year)}</strong></div><div><span>Tools</span><strong>${escapeHtml(project.tools.join(', '))}</strong></div></div></div></section>
        <section class="detail-image-section"><div class="container"><img class="detail-cover" src="${attr(project.image)}" alt="${attr(project.title)}"></div></section>
        <section class="detail-content public-section"><div class="container detail-copy-grid"><div><span class="eyebrow">OVERVIEW</span><h2>Project<br>Overview</h2></div><div><p>${escapeHtml(project.description)}</p><p>Project ini dikembangkan dengan pendekatan bertahap: memahami kebutuhan, menyusun struktur informasi, merancang pengalaman pengguna, membangun antarmuka, lalu melakukan pengujian dan penyempurnaan.</p></div></div></section>
        <section class="detail-dark public-section"><div class="container"><div class="detail-two-column"><article class="reveal"><span class="number-label">01</span><h3>The Challenge</h3><p>Menyusun pengalaman digital yang tetap sederhana, memiliki karakter visual kuat, dan dapat dipahami oleh pengguna tanpa penjelasan panjang.</p></article><article class="reveal"><span class="number-label">02</span><h3>The Solution</h3><p>Menggunakan hierarki visual yang konsisten, navigasi ringkas, desain responsif, serta komponen reusable agar tampilan mudah dikembangkan.</p></article></div></div></section>
        <section class="features-section public-section"><div class="container">${sectionHeading('KEY FEATURES', 'What was built', '')}<div class="feature-grid">${project.features.map((feature, index) => `<article class="reveal"><span>${String(index + 1).padStart(2, '0')}</span><h3>${escapeHtml(feature)}</h3><p>Dirancang untuk mendukung tujuan project dan menjaga pengalaman pengguna tetap jelas.</p></article>`).join('')}</div></div></section>
        <section class="process-section public-section"><div class="container">${sectionHeading('PROCESS', 'From idea to execution', '')}<div class="process-line">${['Research','Strategy','Design','Development','Testing','Launch'].map((step,index)=>`<div class="reveal"><span>${String(index+1).padStart(2,'0')}</span><h3>${step}</h3><p>${['Memahami kebutuhan dan konteks.','Menentukan arah dan prioritas.','Menyusun UI serta visual system.','Membangun fitur utama.','Menguji alur dan responsivitas.','Menyiapkan hasil akhir.'][index]}</p></div>`).join('')}</div></div></section>
        <section class="next-project-section"><a data-project-link href="#/project/${encodeURIComponent(next.slug)}"><div><span>Next Project</span><h2>${escapeHtml(next.title)}</h2></div>${icon('arrow')}</a></section>
      </main></div>`;
    document.querySelector('[data-home-section]')?.addEventListener('click', event => { event.preventDefault(); sessionSet('portfolio-scroll-target','portfolio'); go('/'); });
    document.getElementById('menuButton')?.addEventListener('click', () => document.getElementById('publicNavLinks')?.classList.toggle('open'));
    bindMicroInteractions();
    const detailProgress = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => { const max = document.documentElement.scrollHeight - window.innerHeight; if (detailProgress) detailProgress.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`; }, { passive: true });
    revealOnScroll();
    window.scrollTo(0, 0);
  }

  function renderNotFound(title = 'Halaman tidak ditemukan', message = 'Alamat yang dibuka tidak tersedia.') {
    app.innerHTML = `<main class="not-found"><div><span>404</span><h1>${escapeHtml(title)}</h1><p>${escapeHtml(message)}</p><a class="button primary" href="#/">${icon('back')} Kembali ke Home</a></div></main>`;
  }

  function renderLogin() {
    app.innerHTML = `<main class="login-page"><div class="login-glow login-glow-one"></div><div class="login-glow login-glow-two"></div><form class="login-card" id="loginForm"><div class="login-icon">👤</div><h1>Admin Login</h1><p>Enter your credentials to access dashboard.</p><label>Email<input name="email" type="email" value="admin@portfolio.local" required></label><label>Password<div class="password-field"><input id="loginPassword" name="password" type="password" value="admin123" required><button type="button" id="togglePassword" aria-label="Tampilkan password">${icon('eye')}</button></div></label><div class="form-error" id="loginError" hidden>Email atau password tidak cocok.</div><button class="button primary full" type="submit">Login</button><div class="demo-credential"><strong>Demo account</strong><span>Email: admin@portfolio.local</span><span>Password: admin123</span></div><a class="back-home" href="#/">← Back to portfolio</a></form></main>`;
    document.getElementById('togglePassword')?.addEventListener('click', () => {
      const input = document.getElementById('loginPassword');
      if (input) input.type = input.type === 'password' ? 'text' : 'password';
    });
    document.getElementById('loginForm')?.addEventListener('submit', event => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const valid = String(form.get('email')).toLowerCase() === 'admin@portfolio.local' && String(form.get('password')) === 'admin123';
      if (!valid) { document.getElementById('loginError').hidden = false; return; }
      sessionSet(AUTH_KEY, 'yes');
      go('/admin');
    });
  }

  const adminLinks = [
    ['/admin','▦','Dashboard'], ['/admin/projects','▱','Projects'], ['/admin/certificates','◇','Certificates'], ['/admin/tech-stack','◫','Digital Toolkit'], ['/admin/messages','✉','Messages'], ['/admin/profile','●','Profile Settings']
  ];

  function adminShell(content, currentPath) {
    const unread = data.messages.filter(item => item.status === 'new').length;
    return `<div class="admin-shell"><aside class="admin-sidebar"><div class="admin-brand"><span>${((data.profile.name.match(/\b\w/g) || []).slice(0,2).join('') || 'LH').toUpperCase()}</span><div><strong>Admin Panel</strong><small>Portfolio Manager</small></div></div><nav>${adminLinks.map(([href,symbol,label])=>`<a href="#${href}" class="${currentPath === href ? 'active' : ''}"><strong>${symbol}</strong><span>${label}</span>${label === 'Messages' && unread ? `<b>${unread}</b>` : ''}</a>`).join('')}</nav><div class="sidebar-footer"><a href="#/"><strong>⌂</strong><span>View Website</span></a><button id="logoutButton">${icon('logout')}<span>Logout</span></button></div></aside><div class="admin-content"><header class="admin-topbar"><div><span>Portfolio administration</span><strong>Welcome, Administrator</strong></div><div class="admin-avatar"><img src="${attr(data.profile.photo)}" alt="Admin"><span>${escapeHtml(data.profile.name)}</span></div></header><main class="admin-main">${content}</main></div></div>`;
  }

  function bindAdminCommon() {
    document.getElementById('logoutButton')?.addEventListener('click', () => { sessionRemove(AUTH_KEY); go('/admin/login'); });
  }

  function dashboardContent() {
    const cards = [
      ['Total Projects', data.projects.length, '▱', '/admin/projects'],
      ['Certificates', data.certificates.length, '◇', '/admin/certificates'],
      ['Digital Toolkit', data.techStack.length, '◫', '/admin/tech-stack'],
      ['New Messages', data.messages.filter(item=>item.status==='new').length, '✉', '/admin/messages']
    ];
    return `<div class="admin-page-header"><div><span class="eyebrow">OVERVIEW</span><h1>Dashboard</h1><p>Ringkasan konten dan aktivitas portfolio.</p></div><button class="button ghost small" id="resetDataButton">↻ Reset demo data</button></div><div class="stats-grid">${cards.map(([label,value,symbol,href])=>`<a class="stat-card" href="#${href}"><span class="stat-icon">${symbol}</span><div><small>${label}</small><strong>${value}</strong></div></a>`).join('')}</div><div class="admin-dashboard-grid"><section class="admin-panel"><div class="panel-header"><div><h2>Recent Projects</h2><p>Project terbaru pada website.</p></div><a class="text-link" href="#/admin/projects">Manage</a></div><div class="recent-projects">${data.projects.slice(0,4).map(project=>`<a href="#/project/${encodeURIComponent(project.slug)}"><img src="${attr(project.image)}" alt=""><div><strong>${escapeHtml(project.title)}</strong><span>${escapeHtml(project.category)} · ${escapeHtml(project.year)}</span></div></a>`).join('')}</div></section><section class="admin-panel"><div class="panel-header"><div><h2>Latest Messages</h2><p>Pesan terbaru dari form kontak.</p></div><a class="text-link" href="#/admin/messages">View all</a></div><div class="message-list compact">${data.messages.slice(0,5).map(message=>`<article><span class="status-dot ${message.status==='new'?'new':''}"></span><div><strong>${escapeHtml(message.name)}</strong><p>${escapeHtml(message.subject)}</p><small>${formatDate(message.createdAt)}</small></div></article>`).join('')}</div></section></div><section class="admin-panel quick-actions"><div class="panel-header"><div><h2>Quick Actions</h2><p>Tambahkan dan kelola konten utama.</p></div></div><div><a class="button primary" href="#/admin/projects">${icon('plus')} Add Project</a><a class="button ghost" href="#/admin/certificates">Manage Certificates</a><a class="button ghost" href="#/admin/profile">Edit Profile</a></div></section>`;
  }

  function renderAdminDashboard() {
    app.innerHTML = adminShell(dashboardContent(), '/admin');
    bindAdminCommon();
    document.getElementById('resetDataButton')?.addEventListener('click', () => { if (confirm('Kembalikan seluruh data ke data awal?')) { resetData(); renderAdminDashboard(); } });
  }

  function openModal(title, body, onReady, wide = false) {
    closeModal();
    const wrapper = document.createElement('div');
    wrapper.className = 'modal-backdrop';
    wrapper.innerHTML = `<section class="modal-card ${wide ? 'modal-wide' : ''}" role="dialog" aria-modal="true"><header class="modal-header"><div><span class="eyebrow">ADMIN FORM</span><h2>${escapeHtml(title)}</h2></div><button class="icon-button" id="modalClose" aria-label="Tutup">×</button></header><div class="modal-body">${body}</div></section>`;
    document.body.appendChild(wrapper);
    document.body.style.overflow = 'hidden';
    const close = () => closeModal();
    wrapper.addEventListener('mousedown', event => { if (event.target === wrapper) close(); });
    wrapper.querySelector('#modalClose')?.addEventListener('click', close);
    const keyHandler = event => { if (event.key === 'Escape') close(); };
    document.addEventListener('keydown', keyHandler);
    modalCleanup = () => document.removeEventListener('keydown', keyHandler);
    onReady?.(wrapper);
  }

  function closeModal() {
    document.querySelector('.modal-backdrop')?.remove();
    document.body.style.overflow = '';
    modalCleanup?.();
    modalCleanup = null;
  }

  function imageFieldMarkup(value, id = 'image') {
    return `<div class="image-field"><label>Image path or URL<input id="${id}" name="image" value="${attr(value)}" placeholder="assets/image.svg atau URL"></label><label class="upload-control">Upload dari komputer<input id="${id}File" type="file" accept="image/*"></label><img class="image-preview" id="${id}Preview" src="${attr(value)}" alt="Preview"></div>`;
  }

  function bindImageUpload(root, id = 'image') {
    const input = root.querySelector(`#${id}`);
    const file = root.querySelector(`#${id}File`);
    const preview = root.querySelector(`#${id}Preview`);
    input?.addEventListener('input', () => { if (preview) preview.src = input.value; });
    file?.addEventListener('change', () => {
      const selected = file.files?.[0];
      if (!selected) return;
      const reader = new FileReader();
      reader.onload = () => { input.value = String(reader.result); if (preview) preview.src = input.value; };
      reader.readAsDataURL(selected);
    });
  }

  function projectFormMarkup(project) {
    return `<form class="admin-form" id="projectForm"><div class="form-grid two"><label>Project title<input name="title" value="${attr(project.title)}" required></label><label>Slug<input name="slug" value="${attr(project.slug)}" required></label></div><div class="form-grid three"><label>Category<select name="category">${['Business','Product','Marketing','UI/UX','Data'].map(category => `<option ${project.category===category?'selected':''}>${category}</option>`).join('')}</select></label><label>Year<input name="year" value="${attr(project.year)}" required></label><label>Duration<input name="duration" value="${attr(project.duration)}" required></label></div><label>Role<input name="role" value="${attr(project.role)}" required></label><label>Short description<textarea name="shortDescription" rows="2" required>${escapeHtml(project.shortDescription)}</textarea></label><label>Full description<textarea name="description" rows="5" required>${escapeHtml(project.description)}</textarea></label>${imageFieldMarkup(project.image,'projectImage')}<div class="form-grid two"><label>Tools (pisahkan dengan koma)<input name="tools" value="${attr(project.tools.join(', '))}"></label><label>Key features (pisahkan dengan koma)<input name="features" value="${attr(project.features.join(', '))}"></label></div><label>Live URL<input name="liveUrl" value="${attr(project.liveUrl || '')}"></label><label class="checkbox-field"><input type="checkbox" name="featured" ${project.featured?'checked':''}><span>Featured project</span></label><div class="modal-actions"><button type="button" class="button ghost" id="projectCancel">Cancel</button><button class="button primary" type="submit">Save Project</button></div></form>`;
  }

  function showProjectForm(existing = null) {
    const project = existing ? clone(existing) : { id: uid('p'), slug: '', title: '', shortDescription: '', description: '', category: 'Business', image: 'assets/project-company.svg', year: String(new Date().getFullYear()), role: '', duration: '', tools: [], features: [], liveUrl: '', repoUrl: '', featured: false };
    openModal(existing ? 'Edit Project' : 'Add New Project', projectFormMarkup(project), root => {
      bindImageUpload(root, 'projectImage');
      root.querySelector('#projectCancel')?.addEventListener('click', closeModal);
      const titleInput = root.querySelector('[name="title"]');
      const slugInput = root.querySelector('[name="slug"]');
      titleInput?.addEventListener('input', () => { if (!existing || !slugInput.dataset.touched) slugInput.value = slugify(titleInput.value); });
      slugInput?.addEventListener('input', () => { slugInput.dataset.touched = 'yes'; slugInput.value = slugify(slugInput.value); });
      root.querySelector('#projectForm')?.addEventListener('submit', event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const saved = {
          id: project.id,
          title: String(form.get('title') || ''),
          slug: slugify(String(form.get('slug') || form.get('title') || 'project')),
          shortDescription: String(form.get('shortDescription') || ''),
          description: String(form.get('description') || ''),
          category: String(form.get('category') || 'Project'),
          image: root.querySelector('#projectImage').value,
          year: String(form.get('year') || ''), role: String(form.get('role') || ''), duration: String(form.get('duration') || ''),
          tools: listFrom(String(form.get('tools') || '')), features: listFrom(String(form.get('features') || '')),
          liveUrl: String(form.get('liveUrl') || ''), repoUrl: '', featured: form.get('featured') === 'on'
        };
        const index = data.projects.findIndex(item => item.id === saved.id);
        if (index >= 0) data.projects[index] = saved; else data.projects.unshift(saved);
        saveData(); closeModal(); renderProjectsAdmin();
      });
    }, true);
  }

  function projectsAdminContent() {
    return `<div class="admin-page-header"><div><span class="eyebrow">CONTENT</span><h1>Projects Management</h1><p>Tambah, ubah, dan hapus project yang tampil pada portfolio.</p></div><button class="button primary" id="addProjectButton">${icon('plus')} Add Project</button></div><div class="admin-toolbar"><input id="projectSearch" placeholder="Search project..."><span>${data.projects.length} project</span></div><div class="admin-project-grid" id="adminProjectGrid">${adminProjectCards(data.projects)}</div>`;
  }

  function adminProjectCards(projects) {
    return projects.map(project => `<article class="admin-project-card"><img src="${attr(project.image)}" alt="${attr(project.title)}"><div class="admin-project-body"><div class="admin-card-labels"><span>${escapeHtml(project.category)}</span>${project.featured?'<b>Featured</b>':''}</div><h2>${escapeHtml(project.title)}</h2><p>${escapeHtml(project.shortDescription)}</p><small>${escapeHtml(project.role)} · ${escapeHtml(project.year)}</small><div class="admin-card-actions"><button data-edit-project="${attr(project.id)}">${icon('edit')} Edit</button><a href="#/project/${encodeURIComponent(project.slug)}">${icon('external')} View</a><button class="danger" data-delete-project="${attr(project.id)}">${icon('trash')} Delete</button></div></div></article>`).join('');
  }

  function bindProjectCardActions() {
    document.querySelectorAll('[data-edit-project]').forEach(button => button.addEventListener('click', () => showProjectForm(data.projects.find(item => item.id === button.dataset.editProject))));
    document.querySelectorAll('[data-delete-project]').forEach(button => button.addEventListener('click', () => {
      const project = data.projects.find(item => item.id === button.dataset.deleteProject);
      if (project && confirm(`Hapus project “${project.title}”?`)) { data.projects = data.projects.filter(item => item.id !== project.id); saveData(); renderProjectsAdmin(); }
    }));
  }

  function bindProjectAdminEvents() {
    document.getElementById('addProjectButton')?.addEventListener('click', () => showProjectForm());
    document.getElementById('projectSearch')?.addEventListener('input', event => {
      const query = event.target.value.toLowerCase();
      const filtered = data.projects.filter(item => `${item.title} ${item.category}`.toLowerCase().includes(query));
      document.getElementById('adminProjectGrid').innerHTML = adminProjectCards(filtered) || '<div class="admin-empty">Tidak ada project yang cocok.</div>';
      bindProjectCardActions();
    });
    bindProjectCardActions();
  }

  function renderProjectsAdmin() {
    app.innerHTML = adminShell(projectsAdminContent(), '/admin/projects');
    bindAdminCommon(); bindProjectAdminEvents();
  }

  function certificateFormMarkup(item) {
    return `<form class="admin-form" id="certificateForm"><label>Certificate title<input name="title" value="${attr(item.title)}" required></label><div class="form-grid two"><label>Issuer<input name="issuer" value="${attr(item.issuer)}" required></label><label>Year<input name="year" value="${attr(item.year)}" required></label></div>${imageFieldMarkup(item.image,'certificateImage')}<label>Credential URL<input name="credentialUrl" value="${attr(item.credentialUrl || '')}"></label><div class="modal-actions"><button type="button" class="button ghost" id="certificateCancel">Cancel</button><button class="button primary" type="submit">Save Certificate</button></div></form>`;
  }

  function showCertificateForm(existing = null) {
    const item = existing ? clone(existing) : { id: uid('c'), title: '', issuer: '', year: String(new Date().getFullYear()), image: 'assets/certificate-1.svg', credentialUrl: '' };
    openModal(existing ? 'Edit Certificate' : 'Add Certificate', certificateFormMarkup(item), root => {
      bindImageUpload(root, 'certificateImage');
      root.querySelector('#certificateCancel')?.addEventListener('click', closeModal);
      root.querySelector('#certificateForm')?.addEventListener('submit', event => {
        event.preventDefault(); const form = new FormData(event.currentTarget);
        const saved = { id: item.id, title: String(form.get('title') || ''), issuer: String(form.get('issuer') || ''), year: String(form.get('year') || ''), image: root.querySelector('#certificateImage').value, credentialUrl: String(form.get('credentialUrl') || '') };
        const index = data.certificates.findIndex(entry => entry.id === saved.id); if (index >= 0) data.certificates[index] = saved; else data.certificates.unshift(saved);
        saveData(); closeModal(); renderCertificatesAdmin();
      });
    });
  }

  function renderCertificatesAdmin() {
    const content = `<div class="admin-page-header"><div><span class="eyebrow">CONTENT</span><h1>Certificates</h1><p>Kelola sertifikat dan credential yang ditampilkan.</p></div><button class="button primary" id="addCertificateButton">${icon('plus')} Add Certificate</button></div><div class="certificate-admin-grid">${data.certificates.map(item=>`<article class="certificate-admin-card"><img src="${attr(item.image)}" alt="${attr(item.title)}"><div><span>${escapeHtml(item.issuer)} · ${escapeHtml(item.year)}</span><h2>${escapeHtml(item.title)}</h2><div class="admin-card-actions"><button data-edit-certificate="${attr(item.id)}">${icon('edit')} Edit</button>${item.credentialUrl?`<a href="${attr(item.credentialUrl)}" target="_blank" rel="noreferrer">${icon('external')} Credential</a>`:''}<button class="danger" data-delete-certificate="${attr(item.id)}">${icon('trash')} Delete</button></div></div></article>`).join('')}</div>`;
    app.innerHTML = adminShell(content, '/admin/certificates'); bindAdminCommon();
    document.getElementById('addCertificateButton')?.addEventListener('click', () => showCertificateForm());
    document.querySelectorAll('[data-edit-certificate]').forEach(button => button.addEventListener('click', () => showCertificateForm(data.certificates.find(item => item.id === button.dataset.editCertificate))));
    document.querySelectorAll('[data-delete-certificate]').forEach(button => button.addEventListener('click', () => { const item = data.certificates.find(entry => entry.id === button.dataset.deleteCertificate); if (item && confirm(`Hapus sertifikat “${item.title}”?`)) { data.certificates = data.certificates.filter(entry => entry.id !== item.id); saveData(); renderCertificatesAdmin(); } }));
  }

  function techFormMarkup(item) {
    return `<form class="admin-form" id="techForm"><div class="form-grid two"><label>Name<input name="name" value="${attr(item.name)}" required></label><label>Icon initials<input name="icon" value="${attr(item.icon)}" maxlength="3" required></label></div><label>Category<input name="category" value="${attr(item.category)}" required></label><label>Proficiency: <strong id="levelOutput">${Number(item.level)}%</strong><input id="techLevel" class="range-input" type="range" name="level" min="1" max="100" value="${Number(item.level)}"></label><div class="modal-actions"><button type="button" class="button ghost" id="techCancel">Cancel</button><button class="button primary" type="submit">Save Technology</button></div></form>`;
  }

  function showTechForm(existing = null) {
    const item = existing ? clone(existing) : { id: uid('t'), name: '', category: '', icon: 'T', level: 70 };
    openModal(existing ? 'Edit Technology' : 'Add Technology', techFormMarkup(item), root => {
      root.querySelector('#techCancel')?.addEventListener('click', closeModal);
      root.querySelector('#techLevel')?.addEventListener('input', event => { root.querySelector('#levelOutput').textContent = `${event.target.value}%`; });
      root.querySelector('#techForm')?.addEventListener('submit', event => {
        event.preventDefault(); const form = new FormData(event.currentTarget);
        const saved = { id: item.id, name: String(form.get('name') || ''), category: String(form.get('category') || ''), icon: String(form.get('icon') || 'T'), level: Number(form.get('level') || 70) };
        const index = data.techStack.findIndex(entry => entry.id === saved.id); if (index >= 0) data.techStack[index] = saved; else data.techStack.unshift(saved);
        saveData(); closeModal(); renderTechAdmin();
      });
    });
  }

  function renderTechAdmin() {
    const content = `<div class="admin-page-header"><div><span class="eyebrow">CONTENT</span><h1>Digital Toolkit</h1><p>Kelola aplikasi, platform, dan alat kerja digital.</p></div><button class="button primary" id="addTechButton">${icon('plus')} Add Technology</button></div><div class="tech-admin-grid">${data.techStack.map(item=>`<article class="tech-admin-card"><div class="tech-icon large">${escapeHtml(item.icon)}</div><div class="tech-admin-copy"><span>${escapeHtml(item.category)}</span><h2>${escapeHtml(item.name)}</h2><div class="progress-track"><i style="width:${Number(item.level)}%"></i></div><small>${Number(item.level)}% proficiency</small></div><div class="vertical-actions"><button data-edit-tech="${attr(item.id)}">${icon('edit')}</button><button class="danger" data-delete-tech="${attr(item.id)}">${icon('trash')}</button></div></article>`).join('')}</div>`;
    app.innerHTML = adminShell(content, '/admin/tech-stack'); bindAdminCommon();
    document.getElementById('addTechButton')?.addEventListener('click', () => showTechForm());
    document.querySelectorAll('[data-edit-tech]').forEach(button => button.addEventListener('click', () => showTechForm(data.techStack.find(item => item.id === button.dataset.editTech))));
    document.querySelectorAll('[data-delete-tech]').forEach(button => button.addEventListener('click', () => { const item = data.techStack.find(entry => entry.id === button.dataset.deleteTech); if (item && confirm(`Hapus ${item.name}?`)) { data.techStack = data.techStack.filter(entry => entry.id !== item.id); saveData(); renderTechAdmin(); } }));
  }

  function messagesMarkup(items) {
    return items.map(item=>`<article class="${item.status==='new'?'unread':''}" data-read-message="${attr(item.id)}"><div class="message-icon">${icon('mail')}</div><div class="message-body"><div class="message-title"><strong>${escapeHtml(item.name)}</strong><span>${formatDate(item.createdAt)}</span></div><a href="mailto:${attr(item.email)}">${escapeHtml(item.email)}</a><h2>${escapeHtml(item.subject)}</h2><p>${escapeHtml(item.message)}</p></div><button class="icon-button danger" data-delete-message="${attr(item.id)}">${icon('trash')}</button></article>`).join('');
  }

  function bindMessageEvents() {
    document.querySelectorAll('[data-read-message]').forEach(article => article.addEventListener('click', () => { const item = data.messages.find(entry => entry.id === article.dataset.readMessage); if (item && item.status === 'new') { item.status = 'read'; saveData(); article.classList.remove('unread'); } }));
    document.querySelectorAll('[data-delete-message]').forEach(button => button.addEventListener('click', event => { event.stopPropagation(); if (confirm('Hapus pesan ini?')) { data.messages = data.messages.filter(item => item.id !== button.dataset.deleteMessage); saveData(); renderMessagesAdmin(); } }));
  }

  function renderMessagesAdmin() {
    const content = `<div class="admin-page-header"><div><span class="eyebrow">INBOX</span><h1>Messages</h1><p>Pesan yang dikirim melalui form kontak website.</p></div></div><div class="admin-toolbar"><input id="messageSearch" placeholder="Search messages..."><span>${data.messages.length} message</span></div><div class="message-list full" id="messageGrid">${messagesMarkup(data.messages)}</div>${data.messages.length?'':'<div class="admin-empty">Belum ada pesan.</div>'}`;
    app.innerHTML = adminShell(content, '/admin/messages'); bindAdminCommon(); bindMessageEvents();
    document.getElementById('messageSearch')?.addEventListener('input', event => { const query = event.target.value.toLowerCase(); const filtered = data.messages.filter(item => `${item.name} ${item.email} ${item.subject} ${item.message}`.toLowerCase().includes(query)); document.getElementById('messageGrid').innerHTML = messagesMarkup(filtered); bindMessageEvents(); });
  }

  function profileFormMarkup(p) {
    return `<form class="admin-panel admin-form profile-form" id="profileForm">
      <section><div class="form-section-title"><span>01</span><div><h2>Identity</h2><p>Nama, peran, dan foto profil.</p></div></div><div class="form-grid two"><label>Full name<input name="name" value="${attr(p.name)}" required></label><label>Professional role<input name="role" value="${attr(p.role)}" required></label></div>${imageFieldMarkup(p.photo,'profileImage')}</section>
      <section><div class="form-section-title"><span>02</span><div><h2>Hero Section</h2><p>Pesan pertama pada halaman utama.</p></div></div><label>Hero title<input name="heroTitle" value="${attr(p.heroTitle)}" required></label><label>Hero description<textarea name="heroDescription" rows="4" required>${escapeHtml(p.heroDescription)}</textarea></label></section>
      <section><div class="form-section-title"><span>03</span><div><h2>About</h2><p>Perkenalan profesional.</p></div></div><label>About title<input name="aboutTitle" value="${attr(p.aboutTitle)}" required></label><label>About description<textarea name="aboutDescription" rows="5" required>${escapeHtml(p.aboutDescription)}</textarea></label></section>
      <section><div class="form-section-title"><span>04</span><div><h2>Contact & Social</h2><p>Informasi yang dapat dihubungi.</p></div></div><div class="form-grid two"><label>Email<input type="email" name="email" value="${attr(p.email)}" required></label><label>Phone<input name="phone" value="${attr(p.phone)}" required></label><label>Location<input name="location" value="${attr(p.location)}" required></label><label>LinkedIn URL<input name="linkedin" value="${attr(p.linkedin)}"></label></div></section>
      <section><div class="form-section-title"><span>05</span><div><h2>Statistics</h2><p>Ringkasan pencapaian.</p></div></div><div class="form-grid three"><label>Projects<input name="statProjects" value="${attr(p.stats.projects)}"></label><label>Experience<input name="statExperience" value="${attr(p.stats.experience)}"></label><label>Certificates<input name="statCertificates" value="${attr(p.stats.certificates)}"></label></div></section>
      <div class="sticky-save"><button class="button primary" type="submit">Save Profile</button><span id="profileSaved" hidden>Perubahan berhasil disimpan.</span></div>
    </form>`;
  }

  function renderProfileAdmin() {
    const content = `<div class="admin-page-header"><div><span class="eyebrow">SETTINGS</span><h1>Profile Settings</h1><p>Ubah informasi yang tampil pada hero, about, contact, dan footer.</p></div></div>${profileFormMarkup(data.profile)}`;
    app.innerHTML = adminShell(content, '/admin/profile'); bindAdminCommon();
    const root = document.getElementById('profileForm'); bindImageUpload(root, 'profileImage');
    root?.addEventListener('submit', event => {
      event.preventDefault(); const form = new FormData(event.currentTarget);
      data.profile = {
        name: String(form.get('name') || ''), role: String(form.get('role') || ''),
        heroTitle: String(form.get('heroTitle') || ''), heroDescription: String(form.get('heroDescription') || ''),
        aboutTitle: String(form.get('aboutTitle') || ''), aboutDescription: String(form.get('aboutDescription') || ''),
        email: String(form.get('email') || ''), phone: String(form.get('phone') || ''), location: String(form.get('location') || ''),
        photo: root.querySelector('#profileImage').value, github: '', linkedin: String(form.get('linkedin') || ''),
        stats: { projects: String(form.get('statProjects') || ''), experience: String(form.get('statExperience') || ''), certificates: String(form.get('statCertificates') || '') }
      };
      saveData();
      const saved = document.getElementById('profileSaved'); if (saved) { saved.hidden = false; setTimeout(() => saved.hidden = true, 2500); }
    });
  }

  function renderRoute() {
    cleanupRouteEffects();
    closeModal();
    const path = route();
    if (path.startsWith('/admin') && path !== '/admin/login' && !isAuthed()) { go('/admin/login'); return; }
    if (path === '/') { renderHome(); const target = sessionGet('portfolio-scroll-target'); if (target) { sessionRemove('portfolio-scroll-target'); setTimeout(() => document.getElementById(target)?.scrollIntoView(), 80); } return; }
    if (path.startsWith('/project/')) { renderProjectDetail(path.slice('/project/'.length)); return; }
    if (path === '/admin/login') { if (isAuthed()) go('/admin'); else renderLogin(); return; }
    if (path === '/admin') { renderAdminDashboard(); return; }
    if (path === '/admin/projects') { renderProjectsAdmin(); return; }
    if (path === '/admin/certificates') { renderCertificatesAdmin(); return; }
    if (path === '/admin/tech-stack') { renderTechAdmin(); return; }
    if (path === '/admin/messages') { renderMessagesAdmin(); return; }
    if (path === '/admin/profile') { renderProfileAdmin(); return; }
    renderNotFound();
  }

  window.addEventListener('hashchange', renderRoute);
  window.addEventListener('DOMContentLoaded', renderRoute);
})();
