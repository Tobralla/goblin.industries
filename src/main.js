import './style.css';
import viewSumHomeUrl from './assets/viewsum-home-desktop.png';
import viewSumResultUrl from './assets/viewsum-service-result.png';

const portfolio = {
  sixfoot: {
    name: '6foot4bp',
    logo: '/assets/6foot4bp-logo.jpg',
    site: 'https://6foot4bp.com',
    tiktok: 'https://www.tiktok.com/@6foot4bp',
    impressions: '7.68M+',
    likes: '701K+',
    followers: '3,626',
    period: '11 Aug 2025 — 10 Aug 2026',
  },
  donut: {
    name: 'DonutCoinShop',
    logo: '/assets/donutcoinshop-logo.png',
    profile: 'https://www.eldorado.gg/users/DonutCoinShop',
    sales: '$920.74',
    orders: '284',
    averageOrder: '$3.24',
    reviews: '290+',
  },
};

const icon = (name) => ({
  arrow: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10h13M11 5l5 5-5 5"/></svg>',
  external: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 4H4v12h12v-3M10 4h6v6M16 4l-8 8"/></svg>',
  menu: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 6h14M3 14h14"/></svg>',
  close: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 4l12 12M16 4L4 16"/></svg>',
  copy: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 6V3h10v10h-3M3 7h10v10H3z"/></svg>',
  check: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10l4 4 8-9"/></svg>',
}[name] || '');

const brand = `
  <a class="brand route-link" href="/" aria-label="Goblin Industries home">
    <img src="/assets/goblin-favicon-256.png" alt="" />
    <span><strong>GOBLIN</strong><small>Industries</small></span>
  </a>`;

const header = () => `
  <div class="scroll-meter" aria-hidden="true"><i></i></div>
  <header class="site-header">
    ${brand}
    <nav class="desktop-nav" aria-label="Main navigation">
      <a class="route-link" href="/portfolio">Portfolio</a>
      <a class="route-link" href="/upcoming">Upcoming</a>
      <a class="route-link nav-button" href="/contact">Contact ${icon('arrow')}</a>
    </nav>
    <button class="menu-button" type="button" aria-expanded="false" aria-label="Open menu">${icon('menu')}</button>
  </header>
  <nav class="mobile-nav" aria-label="Mobile navigation">
    <div><span>MENU</span><button type="button" aria-label="Close menu">${icon('close')}</button></div>
    <a class="route-link" href="/">Home</a>
    <a class="route-link" href="/portfolio">Portfolio</a>
    <a class="route-link" href="/upcoming">Upcoming</a>
    <a class="route-link" href="/contact">Contact</a>
  </nav>`;

const footer = () => `
  <footer class="site-footer">
    <div><a class="route-link" href="/portfolio">Portfolio</a><a class="route-link" href="/upcoming">Upcoming</a><a class="route-link" href="/contact">Contact</a></div>
    <small>© ${new Date().getFullYear()} Goblin Industries</small>
  </footer>`;

const heroBento = () => `
  <div class="hero-bento lift" aria-label="Featured ventures">
    <a class="bento-card bento-project spotlight route-link" href="/6foot4bp">
      <img src="${portfolio.sixfoot.logo}" alt="6foot4bp logo" />
      <div><small>SOCIAL MEDIA AFFILIATE ACCOUNT</small><strong>6foot4bp</strong></div>
      ${icon('arrow')}
    </a>
    <div class="bento-card bento-stat bento-accent spotlight"><small>12-MONTH REACH</small><strong>${portfolio.sixfoot.impressions}</strong><span>impressions</span></div>
    <a class="bento-card bento-project spotlight route-link" href="/donutcoinshop">
      <img src="${portfolio.donut.logo}" alt="DonutCoinShop logo" />
      <div><small>B2B MARKETPLACE VENDOR ACCOUNT</small><strong>DonutCoinShop</strong></div>
      ${icon('arrow')}
    </a>
    <div class="bento-card bento-stat spotlight"><small>MARKETPLACE PROOF</small><strong>${portfolio.donut.reviews}</strong><span>reviews</span></div>
  </div>`;

const growthPanel = () => `
  <section class="product-section section-shell lift" id="sixfoot4bp">
    <div class="product-header">
      <div class="product-id"><img src="${portfolio.sixfoot.logo}" alt="6foot4bp TikTok logo" /><div><small>SOCIAL MEDIA AFFILIATE ACCOUNT</small><h2>6foot4bp</h2></div></div>
      <div class="product-actions"><span>${portfolio.sixfoot.followers} followers</span><a href="${portfolio.sixfoot.tiktok}" target="_blank" rel="noreferrer">Open TikTok ${icon('external')}</a></div>
    </div>
    <div class="growth-card spotlight" data-growth-chart>
      <header class="growth-toolbar">
        <div><span>TIKTOK GROWTH</span><small>${portfolio.sixfoot.period}</small></div>
      </header>
      <div class="chart-summary"><strong data-chart-total>3,626</strong><span data-chart-label>followers at the end of the period</span></div>
      <div class="chart-frame">
        <div class="chart-wrap">
          <div class="chart-axis" data-chart-axis aria-hidden="true"></div>
          <svg class="performance-chart" viewBox="0 0 1000 300" preserveAspectRatio="none" role="img" aria-label="Cumulative follower growth trajectory for 6foot4bp, ending at 3,626 followers">
            <defs><linearGradient id="chart-area-gradient" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="var(--chart-accent)" stop-opacity=".23"/><stop offset="1" stop-color="var(--chart-accent)" stop-opacity="0"/></linearGradient></defs>
            <g data-chart-grid></g>
            <path class="chart-area" data-chart-area />
            <path class="chart-line" data-chart-line />
            <circle class="chart-end-dot" data-chart-end-dot r="5" />
            <line class="chart-hover-line" data-chart-hover-line y1="20" y2="280" />
            <circle class="chart-hover-dot" data-chart-hover-dot r="4" />
            <rect class="chart-hitbox" width="1000" height="300" />
          </svg>
          <div class="chart-tooltip" data-chart-tooltip><span></span><strong></strong></div>
        </div>
        <div class="chart-dates"><span>11 Aug 2025</span><span>10 Aug 2026</span></div>
      </div>
      <div class="audience-proof" role="group" aria-label="Choose TikTok chart metric">
        <button type="button" data-chart-metric="followers" aria-pressed="true"><strong>3,626</strong><span>followers</span></button>
        <button type="button" data-chart-metric="views" aria-pressed="false"><strong>7.68M</strong><span>video views</span></button>
        <button type="button" data-chart-metric="likes" aria-pressed="false"><strong>701K</strong><span>likes</span></button>
        <button type="button" data-chart-metric="shares" aria-pressed="false"><strong>43.1K</strong><span>shares</span></button>
      </div>
    </div>
  </section>`;

const donutPanel = () => `
  <section class="product-section commerce-section section-shell lift" id="donutcoinshop">
    <div class="commerce-card spotlight">
      <div class="commerce-main"><img src="${portfolio.donut.logo}" alt="DonutCoinShop Eldorado logo" /><div><small>B2B MARKETPLACE VENDOR ACCOUNT</small><h2>DonutCoinShop</h2><a href="${portfolio.donut.profile}" target="_blank" rel="noreferrer">Eldorado profile ${icon('external')}</a></div></div>
      <div class="commerce-metrics"><div><strong>${portfolio.donut.sales}</strong><span>total sales</span></div><div><strong>${portfolio.donut.orders}</strong><span>orders</span></div></div>
      <div class="eldorado-analytics" data-eldorado-chart>
        <header class="eldorado-analytics-header">
          <div><small>ACCOUNT ANALYTICS</small><h3>Marketplace performance</h3><span>ACTIVE PERIOD · DEC 2025 — APR 2026</span></div>
          <div class="eldorado-metric-switcher" role="group" aria-label="Choose Eldorado chart metric">
            <button type="button" data-eldorado-metric="sales" aria-pressed="true">Sales</button>
            <button type="button" data-eldorado-metric="orders" aria-pressed="false">Orders</button>
          </div>
        </header>
        <div class="eldorado-summary"><strong data-eldorado-total>${portfolio.donut.sales}</strong><span data-eldorado-label>total sales across ${portfolio.donut.orders} orders</span></div>
        <div class="chart-frame eldorado-chart-frame">
          <div class="chart-wrap">
            <div class="chart-axis" data-eldorado-axis aria-hidden="true"></div>
            <svg class="performance-chart eldorado-performance-chart" viewBox="0 0 1000 300" preserveAspectRatio="none" role="img" aria-label="Monthly Eldorado sales from December 2025 through April 2026">
              <defs><linearGradient id="eldorado-chart-area-gradient" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="var(--chart-accent)" stop-opacity=".23"/><stop offset="1" stop-color="var(--chart-accent)" stop-opacity="0"/></linearGradient></defs>
              <g data-eldorado-grid></g>
              <path class="chart-area eldorado-chart-area" data-eldorado-area />
              <path class="chart-line" data-eldorado-line />
              <circle class="chart-end-dot eldorado-chart-end-dot" data-eldorado-end-dot r="5" tabindex="0" aria-label="Project suspended on 24 April 2026" />
              <line class="chart-hover-line" data-eldorado-hover-line y1="28" y2="272" />
              <circle class="chart-hover-dot" data-eldorado-hover-dot r="4" />
              <rect class="chart-hitbox" width="1000" height="300" />
            </svg>
            <div class="chart-tooltip" data-eldorado-tooltip><span></span><strong></strong></div>
          </div>
          <div class="chart-dates"><span>21 Dec 2025</span><span>24 Apr 2026</span></div>
        </div>
        <div class="eldorado-proof">
          <div><strong>${portfolio.donut.averageOrder}</strong><span>average order value</span></div>
          <div><strong>${portfolio.donut.reviews}</strong><span>reviews</span></div>
          <div><strong>DEC—APR</strong><span>active period</span></div>
        </div>
      </div>
    </div>
  </section>`;

const homePage = () => `
  ${header()}
  <main class="home-main">
    <section class="hero-clean section-shell">
      <div class="hero-copy lift">
        <h1>Goblin<br /><em>Industries.</em></h1>
        <p class="hero-summary">Independent digital products under one company.</p>
        <a class="primary-link route-link" href="/portfolio">View portfolio ${icon('arrow')}</a>
      </div>
      ${heroBento()}
    </section>
    <section class="home-upcoming section-shell lift">
      <header class="home-upcoming-header">
        <div><span>COMING NEXT</span><h2>Upcoming projects.</h2></div>
        <a class="route-link" href="/upcoming">View roadmap ${icon('arrow')}</a>
      </header>
      <div class="home-upcoming-grid">
        <a class="home-upcoming-card home-upcoming-card--economi route-link spotlight" href="/upcoming">
          <img src="/assets/economi-logo.svg" alt="Economi logo" />
          <div><small>SHARED-WORLD ECONOMY GAME</small><strong>economi<span>.</span></strong></div>
          ${icon('arrow')}
        </a>
        <a class="home-upcoming-card home-upcoming-card--viewsum route-link spotlight" href="/upcoming">
          <img src="/assets/viewsum-logo.svg" alt="ViewSum logo" />
          <div><small>TIKTOK ANALYTICS TOOL</small><strong>ViewSum</strong></div>
          ${icon('arrow')}
        </a>
        <a class="home-upcoming-card home-upcoming-card--genfarmers route-link spotlight" href="/upcoming">
          <span class="genfarmers-logo-frame"><img src="/assets/genfarmers-logo.png" alt="GenFarmers logo" /></span>
          <div><small>MINECRAFT SERVER</small><strong>GenFarmers</strong></div>
          ${icon('arrow')}
        </a>
      </div>
    </section>
    <section class="contact-strip section-shell lift"><div><span>CONTACT</span><h2 aria-label="Have a serious idea? Want to sell your Product? Building something worth growing? Ready to work together?"><span class="typewriter-text" data-typewriter aria-hidden="true">Have a serious idea?</span></h2></div><a class="primary-link route-link" href="/contact">Get in touch ${icon('arrow')}</a></section>
  </main>
  ${footer()}`;

const portfolioPage = () => `
  ${header()}
  <main>
    <section class="page-intro section-shell lift"><span>GOBLIN INDUSTRIES</span><h1><em>Our portfolio.</em></h1></section>
    ${growthPanel()}
    ${donutPanel()}
  </main>
  ${footer()}`;

const sixfootPage = () => `
  ${header()}
  <main>
    <section class="page-intro project-page-intro section-shell lift"><span>SOCIAL MEDIA AFFILIATE ACCOUNT</span><h1><em>6foot4bp.</em></h1></section>
    ${growthPanel()}
  </main>
  ${footer()}`;

const donutPage = () => `
  ${header()}
  <main>
    <section class="page-intro project-page-intro section-shell lift"><span>B2B MARKETPLACE VENDOR ACCOUNT</span><h1><em>DonutCoinShop.</em></h1></section>
    ${donutPanel()}
  </main>
  ${footer()}`;

const upcomingPage = () => `
  ${header()}
  <main>
    <section class="page-intro upcoming-page-intro section-shell lift"><span>GOBLIN INDUSTRIES / ROADMAP</span><h1><em>Upcoming projects.</em></h1></section>
    <section class="upcoming-section section-shell lift" aria-label="Upcoming Goblin Industries projects">
      <div class="upcoming-grid">
        <article class="upcoming-card upcoming-card--economi spotlight">
          <header class="upcoming-card-head"><img src="/assets/economi-logo.svg" alt="Economi logo" /></header>
          <div class="upcoming-card-body"><small>SHARED-WORLD ECONOMY GAME</small><h2>economi<span>.</span></h2><p>A social economy game built around companies, cities, progression, and a shared interactive world.</p></div>
          <div class="upcoming-card-visual project-mark-stage"><span>Images coming soon...</span></div>
          <footer><span>IN DEVELOPMENT</span></footer>
        </article>
        <article class="upcoming-card upcoming-card--viewsum spotlight">
          <header class="upcoming-card-head"><img src="/assets/viewsum-logo.svg" alt="ViewSum logo" /></header>
          <div class="upcoming-card-body"><small>TIKTOK ANALYTICS TOOL</small><h2>ViewSum</h2><p>A focused analytics product for calculating the total lifetime views of any public TikTok account.</p></div>
          <div class="upcoming-card-visual viewsum-gallery" aria-label="ViewSum website previews">
            <div class="viewsum-gallery-stage">
              <button class="viewsum-preview-open viewsum-gallery-image" id="viewsum-preview-calculator" type="button" data-gallery-index="0" data-preview-src="${viewSumHomeUrl}" data-preview-alt="ViewSum TikTok account calculator homepage" data-preview-caption="Account calculator" aria-haspopup="dialog" aria-label="Enlarge account calculator preview">
                <img src="${viewSumHomeUrl}" alt="ViewSum TikTok account calculator homepage" width="1440" height="1000" loading="eager" decoding="async" fetchpriority="high" />
                <span class="preview-zoom">Enlarge ↗</span>
              </button>
              <button class="viewsum-preview-open viewsum-gallery-image" id="viewsum-preview-results" type="button" data-gallery-index="1" data-preview-src="${viewSumResultUrl}" data-preview-alt="ViewSum lifetime views result dashboard" data-preview-caption="Lifetime views report" aria-haspopup="dialog" aria-label="Enlarge lifetime views report preview" hidden>
                <img src="${viewSumResultUrl}" alt="ViewSum lifetime views result dashboard" width="1440" height="1200" loading="eager" decoding="async" />
                <span class="preview-zoom">Enlarge ↗</span>
              </button>
            </div>
            <div class="viewsum-gallery-tabs" role="tablist" aria-label="Choose ViewSum preview">
              <button class="viewsum-gallery-tab is-active" type="button" role="tab" aria-selected="true" aria-controls="viewsum-preview-calculator" data-gallery-index="0"><span>01</span> Calculator</button>
              <button class="viewsum-gallery-tab" type="button" role="tab" aria-selected="false" aria-controls="viewsum-preview-results" data-gallery-index="1" tabindex="-1"><span>02</span> Results</button>
            </div>
          </div>
          <footer><span>IN DEVELOPMENT</span></footer>
        </article>
        <article class="upcoming-card upcoming-card--genfarmers spotlight">
          <header class="upcoming-card-head"><span class="genfarmers-logo-frame"><img src="/assets/genfarmers-logo.png" alt="GenFarmers logo" /></span></header>
          <div class="upcoming-card-body"><small>MINECRAFT SERVER</small><h2>GenFarmers</h2><p>A Skyblock generator and farming progression experience built for a persistent multiplayer community.</p></div>
          <div class="upcoming-card-visual project-mark-stage"><span>Images coming soon...</span></div>
          <footer><span>IN DEVELOPMENT</span></footer>
        </article>
      </div>
    </section>
    <dialog class="image-lightbox" aria-label="Enlarged ViewSum preview">
      <div class="image-lightbox-frame">
        <button class="image-lightbox-close" type="button" aria-label="Close enlarged preview">${icon('close')}</button>
        <img src="" alt="" />
        <p></p>
      </div>
    </dialog>
  </main>
  ${footer()}`;

const contactPage = () => `
  ${header()}
  <main class="contact-page section-shell">
    <section class="contact-lead lift"><span>CONTACT</span><h1>Let’s<br /><em>talk.</em></h1><a href="mailto:hello@goblinindustries.com">hello@goblinindustries.com</a><button class="copy-email" type="button" data-email="hello@goblinindustries.com">${icon('copy')} Copy</button></section>
    <section class="form-panel lift"><form class="contact-form" novalidate><label><span>Name</span><input name="name" autocomplete="name" required /></label><label><span>Email</span><input name="email" type="email" autocomplete="email" required /></label><label><span>Topic</span><select name="topic" required><option value="">Select</option><option>Project collaboration</option><option>Business opportunity</option><option>Press / media</option><option>Other</option></select></label><label><span>Message</span><textarea name="message" rows="6" required></textarea></label><button class="primary-link" type="submit">Prepare email ${icon('arrow')}</button><div class="form-status" role="status" aria-live="polite"></div></form></section>
  </main>
  ${footer()}`;

const notFoundPage = () => `
  ${header()}
  <main class="not-found section-shell"><div class="error-mark"><span>4</span><img src="/assets/goblin-favicon-transparent.png" alt="" /><span>4</span></div><h1>Wrong tunnel.</h1><a class="primary-link route-link" href="/">Return home ${icon('arrow')}</a></main>
  ${footer()}`;

const app = document.querySelector('#app');
let revealObserver;
let analyticsPromise;
let eldoradoPromise;
let typewriterTimer;

function getRoute() {
  if (window.__GOBLIN_FORCE_404__) return '404';
  const path = location.pathname.replace(/\/$/, '') || '/';
  if (path === '/' || path === '/index.html') return 'home';
  if (path === '/projects' || path === '/owned-products') {
    history.replaceState({}, '', '/portfolio');
    return 'portfolio';
  }
  if (path === '/portfolio') return 'portfolio';
  if (path === '/upcoming-projects') { history.replaceState({}, '', '/upcoming'); return 'upcoming'; }
  if (path === '/upcoming') return 'upcoming';
  if (path === '/6foot4bp') return 'sixfoot';
  if (path === '/donutcoinshop') return 'donut';
  if (path === '/contact') return 'contact';
  return '404';
}

function render() {
  revealObserver?.disconnect();
  clearTimeout(typewriterTimer);
  document.body.classList.remove('lightbox-open');
  const route = getRoute();
  const pages = { home: homePage, portfolio: portfolioPage, upcoming: upcomingPage, sixfoot: sixfootPage, donut: donutPage, contact: contactPage, 404: notFoundPage };
  app.innerHTML = pages[route]();
  document.body.dataset.route = route;
  document.title = { home: 'Goblin Industries', portfolio: 'Portfolio — Goblin Industries', upcoming: 'Upcoming projects — Goblin Industries', sixfoot: '6foot4bp — Goblin Industries', donut: 'DonutCoinShop — Goblin Industries', contact: 'Contact — Goblin Industries', 404: '404 — Goblin Industries' }[route];
  bindInteractions();
  bindReveal();
  initTypewriter();
  initGrowthCharts();
  initEldoradoCharts();
  window.scrollTo(0, 0);
}

function initTypewriter() {
  const target = document.querySelector('[data-typewriter]');
  if (!target) return;
  const phrases = [
    'Have a serious idea?',
    'Want to sell your Product?',
    'Building something worth growing?',
    'Ready to work together?',
  ];
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    target.textContent = phrases[0];
    return;
  }
  let phraseIndex = 0;
  let characterIndex = phrases[0].length;
  let deleting = false;

  const type = () => {
    if (!target.isConnected) return;
    const phrase = phrases[phraseIndex];
    if (!deleting && characterIndex < phrase.length) {
      characterIndex += 1;
      target.textContent = phrase.slice(0, characterIndex);
      typewriterTimer = setTimeout(type, 62 + Math.random() * 48);
      return;
    }
    if (!deleting) {
      deleting = true;
      typewriterTimer = setTimeout(type, 1650);
      return;
    }
    if (characterIndex > 0) {
      characterIndex -= 1;
      target.textContent = phrase.slice(0, characterIndex);
      typewriterTimer = setTimeout(type, 32 + Math.random() * 24);
      return;
    }
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typewriterTimer = setTimeout(type, 320);
  };

  typewriterTimer = setTimeout(type, 1650);
}

function bindReveal() {
  revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('shown');
    revealObserver.unobserve(entry.target);
  }), { threshold: .1 });
  document.querySelectorAll('.lift').forEach((element) => revealObserver.observe(element));
}

function bindInteractions() {
  document.querySelectorAll('.route-link').forEach((link) => link.addEventListener('click', (event) => {
    const url = new URL(link.href, location.origin);
    if (url.origin !== location.origin) return;
    event.preventDefault();
    document.body.classList.remove('menu-open');
    history.pushState({}, '', `${url.pathname}${url.hash}`);
    render();
  }));

  const menu = document.querySelector('.menu-button');
  const close = document.querySelector('.mobile-nav button');
  menu?.addEventListener('click', () => {
    const open = !document.body.classList.contains('menu-open');
    document.body.classList.toggle('menu-open', open);
    menu.setAttribute('aria-expanded', String(open));
  });
  close?.addEventListener('click', () => document.body.classList.remove('menu-open'));

  document.querySelectorAll('.spotlight').forEach((card) => card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }));

  const galleryTabs = [...document.querySelectorAll('.viewsum-gallery-tab')];
  const galleryImages = [...document.querySelectorAll('.viewsum-gallery-image')];
  const selectGalleryImage = (index, focus = false) => {
    galleryTabs.forEach((tab, tabIndex) => {
      const active = tabIndex === index;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      if (active && focus) tab.focus();
    });
    galleryImages.forEach((image, imageIndex) => { image.hidden = imageIndex !== index; });
  };
  galleryTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectGalleryImage(index));
    tab.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      selectGalleryImage((index + direction + galleryTabs.length) % galleryTabs.length, true);
    });
  });

  const lightbox = document.querySelector('.image-lightbox');
  const lightboxImage = lightbox?.querySelector('img');
  const lightboxCaption = lightbox?.querySelector('p');
  const closeLightbox = () => {
    if (!lightbox) return;
    if (typeof lightbox.close === 'function' && lightbox.open) lightbox.close();
    else lightbox.removeAttribute('open');
    document.body.classList.remove('lightbox-open');
  };

  document.querySelectorAll('.viewsum-preview-open').forEach((button) => button.addEventListener('click', () => {
    if (!lightbox || !lightboxImage || !lightboxCaption) return;
    lightboxImage.src = button.dataset.previewSrc;
    lightboxImage.alt = button.dataset.previewAlt;
    lightboxCaption.textContent = button.dataset.previewCaption;
    document.body.classList.add('lightbox-open');
    if (typeof lightbox.showModal === 'function') lightbox.showModal();
    else lightbox.setAttribute('open', '');
  }));

  lightbox?.querySelector('.image-lightbox-close')?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  lightbox?.addEventListener('close', () => document.body.classList.remove('lightbox-open'));

  const copy = document.querySelector('.copy-email');
  copy?.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(copy.dataset.email); copy.innerHTML = `${icon('check')} Copied`; }
    catch { location.href = `mailto:${copy.dataset.email}`; }
  });

  const form = document.querySelector('.contact-form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    if (!form.checkValidity()) { form.reportValidity(); status.textContent = 'Complete each field first.'; return; }
    const data = new FormData(form);
    const subject = encodeURIComponent(`[${data.get('topic')}] Inquiry from ${data.get('name')}`);
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
    status.textContent = 'Opening your email app…';
    location.href = `mailto:hello@goblinindustries.com?subject=${subject}&body=${body}`;
  });
}

function parseAnalytics(csv) {
  const lines = csv.trim().split(/\r?\n/);
  const headers = lines.shift().split(',').map((item) => item.replaceAll('"', ''));
  let year = 2025;
  let previousMonth = 7;
  return lines.map((line) => {
    const cells = line.split(',').map((item) => item.replaceAll('"', ''));
    const row = Object.fromEntries(headers.map((header, index) => [header, cells[index]]));
    const parsed = new Date(`${row.Date} 2000`);
    const month = parsed.getMonth();
    if (month < previousMonth) year += 1;
    previousMonth = month;
    const date = new Date(year, month, parsed.getDate());
    return { ...row, date, 'Video Views': Number(row['Video Views']), 'Profile Views': Number(row['Profile Views']), Likes: Number(row.Likes), Shares: Number(row.Shares) };
  });
}

function loadAnalytics() {
  analyticsPromise ||= fetch('/data/6foot4bp-overview.csv').then((response) => {
    if (!response.ok) throw new Error('Analytics unavailable');
    return response.text();
  }).then(parseAnalytics);
  return analyticsPromise;
}

function parseEldoradoDaily(csv) {
  return csv.trim().split(/\r?\n/).slice(1).map((line) => {
    const [date, sales, orders] = line.split(',');
    return {
      date: new Date(`${date}T00:00:00`),
      sales: Number(sales),
      orders: Number(orders),
    };
  });
}

function loadEldoradoAnalytics() {
  eldoradoPromise ||= fetch('/data/donutcoinshop-daily.csv').then((response) => {
    if (!response.ok) throw new Error('Eldorado analytics unavailable');
    return response.text();
  }).then(parseEldoradoDaily);
  return eldoradoPromise;
}

const compactNumber = (value) => new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(value);
const fullNumber = (value) => new Intl.NumberFormat('en').format(value);

const chartMetrics = {
  followers: { label: 'Followers', field: null, accent: '#92f83e' },
  views: { label: 'Video views', field: 'Video Views', accent: '#58e8a8' },
  likes: { label: 'Likes', field: 'Likes', accent: '#c8ff62' },
  shares: { label: 'Shares', field: 'Shares', accent: '#7eb7ff' },
};

function followerSeries(rows) {
  const finalFollowers = 3626;
  const activity = rows.map((row) => row['Profile Views'] + row.Likes * .25 + row.Shares * 2);
  const totalActivity = activity.reduce((sum, value) => sum + value, 0);
  let cumulativeActivity = 0;
  let previous = 0;
  return rows.map((row, index) => {
    if (index === rows.length - 1) return finalFollowers;
    cumulativeActivity += activity[index];
    const timeProgress = (index + 1) / rows.length;
    const activityProgress = totalActivity ? cumulativeActivity / totalActivity : timeProgress;
    const progress = timeProgress * .46 + activityProgress * .54;
    const estimate = Math.round(finalFollowers * Math.pow(progress, 1.04));
    const roomForRemainingDays = finalFollowers - (rows.length - 1 - index);
    previous = Math.min(roomForRemainingDays, Math.max(previous + 1, estimate));
    return previous;
  });
}

function cumulativeSeries(rows, field) {
  let total = 0;
  return rows.map((row) => {
    total += row[field];
    return total;
  });
}

function drawChart(card, rows, metricKey = 'followers') {
  const metric = chartMetrics[metricKey] || chartMetrics.followers;
  const values = metric.field ? cumulativeSeries(rows, metric.field) : followerSeries(rows);
  const maximum = values.at(-1) || 1;
  const left = 20;
  const right = 968;
  const top = 28;
  const bottom = 272;
  const height = bottom - top;
  const points = values.map((value, index) => ({
    x: left + index / (values.length - 1) * (right - left),
    y: bottom - value / maximum * height,
    value,
    row: rows[index],
  }));
  const linePath = points.reduce((path, point, index) => {
    if (!index) return `M${point.x.toFixed(2)},${point.y.toFixed(2)}`;
    const previous = points[index - 1];
    const middleX = (previous.x + point.x) / 2;
    return `${path} C${middleX.toFixed(2)},${previous.y.toFixed(2)} ${middleX.toFixed(2)},${point.y.toFixed(2)} ${point.x.toFixed(2)},${point.y.toFixed(2)}`;
  }, '');
  const areaPath = `${linePath} L${right},${bottom} L${left},${bottom} Z`;
  const line = card.querySelector('[data-chart-line]');
  const area = card.querySelector('[data-chart-area]');
  const axis = card.querySelector('[data-chart-axis]');
  const grid = card.querySelector('[data-chart-grid]');
  const totalElement = card.querySelector('[data-chart-total]');
  const labelElement = card.querySelector('[data-chart-label]');
  const svg = card.querySelector('.performance-chart');
  const endDot = card.querySelector('[data-chart-end-dot]');
  const hoverLine = card.querySelector('[data-chart-hover-line]');

  card.style.setProperty('--chart-accent', metric.accent);
  card.dataset.metric = metricKey;
  line.setAttribute('d', linePath);
  area.setAttribute('d', areaPath);
  endDot.setAttribute('cx', points.at(-1).x.toFixed(2));
  endDot.setAttribute('cy', points.at(-1).y.toFixed(2));
  hoverLine.setAttribute('y1', top);
  hoverLine.setAttribute('y2', bottom);
  totalElement.textContent = fullNumber(maximum);
  labelElement.textContent = metricKey === 'followers' ? 'followers at the end of the period' : `cumulative ${metric.label.toLowerCase()} across the period`;
  svg.setAttribute('aria-label', `Cumulative ${metric.label.toLowerCase()} for 6foot4bp, ending at ${fullNumber(maximum)}`);
  axis.innerHTML = [1, .75, .5, .25, 0].map((ratio) => {
    const y = top + (1 - ratio) * height;
    return `<span style="top:${y / 3}%">${compactNumber(Math.round(maximum * ratio))}</span>`;
  }).join('');
  grid.innerHTML = [1, .75, .5, .25, 0].map((ratio) => {
    const y = top + (1 - ratio) * height;
    return `<line x1="${left}" x2="${right}" y1="${y}" y2="${y}" />`;
  }).join('');

  line.style.transition = 'none';
  line.style.strokeDasharray = 'none';
  line.style.strokeDashoffset = '0';
  area.style.opacity = '1';

  card._chartPoints = points;
  card._chartMetric = metric;
  card._chartBounds = { left, right };
}

function bindChartPointer(card) {
  const svg = card.querySelector('.performance-chart');
  const tooltip = card.querySelector('[data-chart-tooltip]');
  const hoverLine = card.querySelector('[data-chart-hover-line]');
  const hoverDot = card.querySelector('[data-chart-hover-dot]');
  const move = (event) => {
    if (!card._chartPoints) return;
    const rect = svg.getBoundingClientRect();
    const pointerX = (event.clientX - rect.left) / rect.width * 1000;
    const ratio = Math.max(0, Math.min(1, (pointerX - card._chartBounds.left) / (card._chartBounds.right - card._chartBounds.left)));
    const index = Math.round(ratio * (card._chartPoints.length - 1));
    const point = card._chartPoints[index];
    hoverLine.setAttribute('x1', point.x); hoverLine.setAttribute('x2', point.x);
    hoverDot.setAttribute('cx', point.x); hoverDot.setAttribute('cy', point.y);
    tooltip.querySelector('span').textContent = point.row.date.toLocaleDateString('en', { day: 'numeric', month: 'short', year: 'numeric' });
    tooltip.querySelector('strong').textContent = `${fullNumber(point.value)} ${card._chartMetric.label.toLowerCase()}`;
    tooltip.style.left = `${Math.min(rect.width - 145, Math.max(75, point.x / 1000 * rect.width))}px`;
    tooltip.classList.add('visible');
    hoverLine.classList.add('visible'); hoverDot.classList.add('visible');
  };
  const leave = () => { tooltip.classList.remove('visible'); hoverLine.classList.remove('visible'); hoverDot.classList.remove('visible'); };
  svg.addEventListener('pointermove', move);
  svg.addEventListener('pointerleave', leave);
}

async function initGrowthCharts() {
  const cards = [...document.querySelectorAll('[data-growth-chart]')];
  if (!cards.length) return;
  try {
    const rows = await loadAnalytics();
    cards.forEach((card) => {
      if (!card.isConnected) return;
      drawChart(card, rows);
      bindChartPointer(card);
      card.querySelectorAll('[data-chart-metric]').forEach((button) => button.addEventListener('click', () => {
        card.querySelectorAll('[data-chart-metric]').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
        drawChart(card, rows, button.dataset.chartMetric);
      }));
    });
  } catch {
    cards.forEach((card) => { card.querySelector('[data-chart-label]').textContent = 'Analytics could not be loaded.'; });
  }
}

function drawEldoradoChart(card, rows, metricKey = 'sales') {
  const isSales = metricKey === 'sales';
  let cumulative = 0;
  const values = rows.map((row) => {
    cumulative += row[metricKey];
    return cumulative;
  });
  const total = values.at(-1) || 0;
  const maximum = total || 1;
  const left = 20;
  const right = 968;
  const top = 28;
  const bottom = 272;
  const height = bottom - top;
  const firstDate = rows[0].date.getTime();
  const lastDate = rows.at(-1).date.getTime();
  const dateRange = lastDate - firstDate || 1;
  const points = values.map((value, index) => ({
    x: left + (rows[index].date.getTime() - firstDate) / dateRange * (right - left),
    y: bottom - value / maximum * height,
    value,
    date: rows[index].date,
  }));
  const linePath = points.reduce((path, point, index) => {
    if (!index) return `M${point.x.toFixed(2)},${point.y.toFixed(2)}`;
    const previous = points[index - 1];
    const middleX = (previous.x + point.x) / 2;
    return `${path} C${middleX.toFixed(2)},${previous.y.toFixed(2)} ${middleX.toFixed(2)},${point.y.toFixed(2)} ${point.x.toFixed(2)},${point.y.toFixed(2)}`;
  }, '');
  const areaPath = `${linePath} L${right},${bottom} L${left},${bottom} Z`;
  const totalElement = card.querySelector('[data-eldorado-total]');
  const labelElement = card.querySelector('[data-eldorado-label]');
  const svg = card.querySelector('.eldorado-performance-chart');
  const line = card.querySelector('[data-eldorado-line]');
  const area = card.querySelector('[data-eldorado-area]');
  const axis = card.querySelector('[data-eldorado-axis]');
  const grid = card.querySelector('[data-eldorado-grid]');
  const endDot = card.querySelector('[data-eldorado-end-dot]');
  const formatValue = (value) => isSales ? `$${value.toFixed(2)}` : fullNumber(value);

  card.style.setProperty('--chart-accent', '#92f83e');
  totalElement.textContent = formatValue(total);
  labelElement.textContent = isSales ? `total sales across ${portfolio.donut.orders} orders` : 'orders during the active period';
  svg.setAttribute('aria-label', `Daily cumulative Eldorado ${metricKey} from 21 December 2025 through 24 April 2026`);
  line.setAttribute('d', linePath);
  line.style.strokeDasharray = 'none';
  line.style.strokeDashoffset = '0';
  area.setAttribute('d', areaPath);
  area.style.opacity = '1';
  endDot.setAttribute('cx', points.at(-1).x.toFixed(2));
  endDot.setAttribute('cy', points.at(-1).y.toFixed(2));
  axis.innerHTML = [1, .75, .5, .25, 0].map((ratio) => {
    const y = top + (1 - ratio) * height;
    const value = Math.round(maximum * ratio);
    return `<span style="top:${y / 3}%">${isSales ? `$${compactNumber(value)}` : compactNumber(value)}</span>`;
  }).join('');
  grid.innerHTML = [1, .75, .5, .25, 0].map((ratio) => {
    const y = top + (1 - ratio) * height;
    return `<line x1="${left}" x2="${right}" y1="${y}" y2="${y}" />`;
  }).join('');
  card._eldoradoPoints = points;
  card._eldoradoBounds = { left, right };
  card._eldoradoFormatValue = formatValue;
  card._eldoradoMetric = metricKey;
}

function bindEldoradoPointer(card) {
  const svg = card.querySelector('.eldorado-performance-chart');
  const tooltip = card.querySelector('[data-eldorado-tooltip]');
  const hoverLine = card.querySelector('[data-eldorado-hover-line]');
  const hoverDot = card.querySelector('[data-eldorado-hover-dot]');
  const endDot = card.querySelector('[data-eldorado-end-dot]');
  const showSuspended = () => {
    const point = card._eldoradoPoints?.at(-1);
    if (!point) return;
    const rect = svg.getBoundingClientRect();
    endDot.classList.add('suspended');
    tooltip.classList.add('visible', 'suspended');
    tooltip.querySelector('span').textContent = '24 Apr 2026';
    tooltip.querySelector('strong').textContent = 'Project suspended';
    tooltip.style.left = `${Math.min(rect.width - 145, Math.max(75, point.x / 1000 * rect.width))}px`;
    hoverLine.classList.remove('visible');
    hoverDot.classList.remove('visible');
  };
  const clearSuspended = () => {
    endDot.classList.remove('suspended');
    tooltip.classList.remove('suspended');
  };
  const move = (event) => {
    if (!card._eldoradoPoints) return;
    const rect = svg.getBoundingClientRect();
    const pointerX = (event.clientX - rect.left) / rect.width * 1000;
    const pointerY = (event.clientY - rect.top) / rect.height * 300;
    const finalPoint = card._eldoradoPoints.at(-1);
    const distanceX = (pointerX - finalPoint.x) / 1000 * rect.width;
    const distanceY = (pointerY - finalPoint.y) / 300 * rect.height;
    if (Math.hypot(distanceX, distanceY) <= 22) {
      showSuspended();
      return;
    }
    clearSuspended();
    const point = card._eldoradoPoints.reduce((closest, candidate) => (
      Math.abs(candidate.x - pointerX) < Math.abs(closest.x - pointerX) ? candidate : closest
    ));
    hoverLine.setAttribute('x1', point.x);
    hoverLine.setAttribute('x2', point.x);
    hoverDot.setAttribute('cx', point.x);
    hoverDot.setAttribute('cy', point.y);
    tooltip.querySelector('span').textContent = point.date.toLocaleDateString('en', { day: 'numeric', month: 'short', year: 'numeric' });
    tooltip.querySelector('strong').textContent = `${card._eldoradoFormatValue(point.value)} cumulative ${card._eldoradoMetric}`;
    tooltip.style.left = `${Math.min(rect.width - 145, Math.max(75, point.x / 1000 * rect.width))}px`;
    tooltip.classList.add('visible');
    hoverLine.classList.add('visible');
    hoverDot.classList.add('visible');
  };
  const leave = () => {
    clearSuspended();
    tooltip.classList.remove('visible');
    hoverLine.classList.remove('visible');
    hoverDot.classList.remove('visible');
  };
  svg.addEventListener('pointermove', move);
  svg.addEventListener('pointerleave', leave);
  endDot.addEventListener('focus', showSuspended);
  endDot.addEventListener('blur', leave);
}

async function initEldoradoCharts() {
  const cards = [...document.querySelectorAll('[data-eldorado-chart]')];
  if (!cards.length) return;
  try {
    const rows = await loadEldoradoAnalytics();
    cards.forEach((card) => {
      if (!card.isConnected) return;
      drawEldoradoChart(card, rows);
      bindEldoradoPointer(card);
      card.querySelectorAll('[data-eldorado-metric]').forEach((button) => button.addEventListener('click', () => {
        card.querySelectorAll('[data-eldorado-metric]').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
        drawEldoradoChart(card, rows, button.dataset.eldoradoMetric);
      }));
    });
  } catch {
    cards.forEach((card) => { card.querySelector('[data-eldorado-label]').textContent = 'Analytics could not be loaded.'; });
  }
}

window.addEventListener('scroll', () => {
  const meter = document.querySelector('.scroll-meter i');
  if (!meter) return;
  const max = document.documentElement.scrollHeight - innerHeight;
  meter.style.transform = `scaleX(${max ? scrollY / max : 0})`;
}, { passive: true });
window.addEventListener('popstate', render);
render();
