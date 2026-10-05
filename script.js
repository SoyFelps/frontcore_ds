const projects = {
  meurh360: {
    number: '01', title: 'MeuRH360', subtitle: 'A people platform that grew with the teams using it.',
    meta: ['Product design', 'UX lead', 'Jun 2023 — May 2026'],
    image: 'assets/reference/images/meurh360-10.png', imageAlt: 'MeuRH360 time-tracking interface shown on a tablet',
    paragraphs: [
      'MeuRH360 is a human-resources platform built around the day-to-day needs of real client teams. I joined as a Mid-Level UX Designer and grew into Head of UX & UI, working across discovery, ideation, research, wireframes, mockups, high-fidelity prototypes and usability testing.',
      'Through regular conversations with clients and Product Owners, I led workflows including development management, goal setting, digital time tracking, a candidate portal, work schedules and shift settings. The platform also covers job postings, performance reviews, team and position management, and more.',
      'Development Management supports review cycles, competency assessments, calibration and feedback. Results can be read as a radar chart or a configurable 9-box grid; teams can choose what to assess and generate individual or team reports. The Candidate Portal brings external job listings and internal hiring into one Kanban flow. Holiday settings account for the different calendars of each client location.',
      'I also helped introduce a white-label design approach that adapts each environment to the client’s brand. The original case page reports a 125% increase in workflows developed and a 100% increase in research studies conducted; the later résumé reports a 52% increase in delivery rate and a 36% increase in platform satisfaction.'
    ],
    points: ['Discovery, research and continuous client alignment', 'Performance reviews, recruiting and workforce operations', 'White-label UX and a reusable interface system', 'Additional workflows included document signing, SSO, file import and corporate communications'],
    links: []
  },
  xipptech: {
    number: '02', title: 'XippTech', subtitle: 'Benefits, health and HR software for people on both sides of the service.',
    meta: ['Product designer', 'B2B + consumer apps', 'Jun 2026 — now'],
    image: 'assets/reference/crops/xipptech-devices.webp', imageAlt: 'XippTech desktop platform and mobile app',
    paragraphs: [
      'XippTech is XIPP’s technology and development division, supporting a brokerage and solutions integrator specialising in corporate benefits such as health and dental plans and life insurance. The work begins with a practical understanding of client needs, market context and the people who use the products every day.',
      'I work directly with clients and Product Owners on B2B software for HR, employee benefits and telemedicine, as well as apps for end users. Products I have worked on are used by organisations including iFood, Outback, Unimed, Samsung, C6 Bank and Santander.',
      'Examples include RH Protegido, which brings benefits operations and risk management together; Eu Protegido, a benefits app and communication channel for employees and their families; and Avus Saúde, a healthcare platform offering 24/7 telemedicine, appointments, in-person exams and discounts.',
      'The role spans research, usability testing, documentation and planning, with Figma, Jira and Azure DevOps in the workflow. Claude Code has also become a practical way to explore ideas and build interactive prototypes.'
    ],
    points: ['Products used across HR, benefits and telemedicine', 'Close work with clients and Product Owners', 'Design grounded in research, testing and delivery'], links: []
  },
  'ux-analyzer': {
    number: '03', title: 'UX Analyzer', subtitle: 'A second pair of eyes for the details that shape an interface.',
    meta: ['Web app', 'Figma + Figma Make', 'Accessibility'],
    paragraphs: [
      'UX Analyzer is a working web-app concept for examining interface quality. A designer uploads a screen and gets an overall score plus category-level feedback on spacing, contrast, hierarchy, interactive elements and accessibility.',
      'A visual-attention heatmap makes likely points of focus easier to discuss. The flow moves from upload, to review, to a structured analysis. It is intended to help experienced designers check their own work, help beginners learn the principles and give teams a concrete way to explain design decisions to clients.',
      'The product and its interaction model were built with Figma and Figma Make, with usability principles applied to both the landing page and the analysis experience.'
    ],
    points: ['Upload a screen and review an overall score', 'Inspect colour, spacing, hierarchy, CTAs and accessibility', 'Use a simulated attention heatmap to start a better conversation'],
    links: [{ label: 'Open UX Analyzer', url: 'https://dock-curl-32757804.figma.site/' }]
  },
  flory: {
    number: '04', title: 'Flory', subtitle: 'A little social world for people who grow things.',
    meta: ['Mobile app concept', 'Marketplace', 'Community'],
    paragraphs: [
      'Flory is a mobile concept for buying and selling plants and flowers, with a social layer built around the same interest. People can share photos and opinions about their favourite plants, discover other growers and keep in touch through a blog or chat.',
      'The case study explores how a focused marketplace can become more than a transaction: a place where knowledge, recommendations and everyday enthusiasm circulate alongside the products.'
    ],
    points: ['Browse and trade plants and flowers', 'Share photos and practical opinions', 'Connect through posts, a blog and chat'],
    links: [{ label: 'Open Flory prototype', url: 'https://www.figma.com/proto/oINSel2I48gQGN1dYapnH7/Flory?type=design&node-id=164-9685&t=fVbRaaP8MrWE966J-1&scaling=scale-down&page-id=49%3A4&starting-point-node-id=164%3A9660&show-proto-sidebar=1&mode=design' }]
  },
  'design-system': {
    number: '05', title: 'FrontCore Design System', subtitle: 'A living reference, not another document to forget.',
    meta: ['Design system', 'Claude Code + Figma MCP', 'HTML / CSS / JSON'],
    image: 'assets/reference/crops/frontcore-design-system.webp', imageAlt: 'FrontCore Design System displayed on a laptop',
    paragraphs: [
      'A live design system turns product rules into something a team can inspect and reuse. Built from an existing product, this interactive reference brings tokens, components, HTML, CSS and copyable JSON into one place.',
      'Developers can take components and colour data straight into the product; Product Owners and stakeholders can explore specification pages; new teammates can learn the visual language by using it. The same foundation can be applied to future features or related products.',
      'The prototype was built with Claude Code and Figma MCP, combining generated implementation with a deliberately specified design direction. The original repository remains available as a separate page in this repo.'
    ],
    points: ['Live component and token documentation', 'Copyable HTML, CSS and JSON', 'Designed for developers, POs, stakeholders and onboarding'],
    links: [{ label: 'Open the preserved Design System', url: './frontcore-design-system.html' }]
  },
  pathway: {
    number: '06', title: 'Pathway', subtitle: 'Hiring flows that feel like a conversation, not a maze.',
    meta: ['Recruiting', 'Flow builder', 'AI-assisted prototype'],
    paragraphs: [
      'Pathway is a prototype for shaping thoughtful job-application experiences. Hiring teams use a visual builder to create a role, arrange the steps, connect them into journeys and decide how each candidate moves through the process.',
      'The builder supports profile details, short answers, single-choice questions with branching, multiple choice and ending screens. Teams can configure role information, required candidate fields, question text, options and completion outcomes, then preview the candidate experience or share a published application link.',
      'The candidate flow begins with the essentials—name, email and résumé—then presents only the questions configured for that role, with clear progress and completion states. The prototype was developed conversationally with Claude Code, with Figma MCP supplying the intended type, colour and wireframe direction.'
    ],
    points: ['Build roles from reusable steps', 'Branch candidate journeys based on answers', 'Preview and share a focused application experience'],
    links: [{ label: 'Try Pathway', url: 'https://soyfelps.github.io/pathway2/' }]
  },
  variansee: {
    number: '07', title: 'Variansee', subtitle: 'More control over how a page meets your eyes.',
    meta: ['Accessibility', 'Browser extension', 'Contrast + saturation'],
    image: 'assets/reference/crops/variansee-settings.webp', imageAlt: 'Variansee mode, contrast and saturation controls',
    paragraphs: [
      'Variansee is a browser extension concept that lets people adjust the visual contrast of web pages. It is designed to support people with colour-vision differences and visual impairments, while also giving anyone more control in different reading environments.',
      'Presets range from low to ultra-high contrast. A custom mode adds real-time contrast and saturation sliders, so a person can tune the page to their own preferences without leaving the current browsing session.'
    ],
    points: ['Low, medium, high and ultra-high contrast presets', 'Custom contrast and saturation controls', 'An accessibility improvement that stays in the reader’s hands'], links: []
  },
  marcaflow: {
    number: '08', title: 'MarcaFlow', subtitle: 'A clear view of the moving parts in trademark work.',
    meta: ['Live prototype', 'Workflow design', 'Built with Manus'],
    paragraphs: [
      'MarcaFlow brings trademark operations into one workspace. The live prototype centres on a process pipeline, leads, clients, documents and clear transitions between stages.',
      'The product includes table and Kanban views, filters, checklists, Google Drive links, reports, performance indicators and the ability to move a record through its process. Its key areas include Pipeline, Leads, Non-Protocolled Clients, Overview and Reports.',
      'It was built through an AI-assisted coding process with Manus. Work was shaped in short loops: describe the workflow, implement the interface and behaviour, check it in the browser, then refine the details. GitHub served as the project’s code and collaboration layer.'
    ],
    points: ['Pipeline, leads, clients and reports', 'Kanban/table views, filters and checklists', 'Record movement, Drive links and performance indicators'],
    links: [{ label: 'Try MarcaFlow', url: 'https://soyfelps.github.io/marcaflow/index.html' }]
  },
  organogram: {
    number: '09', title: 'Organogram', subtitle: 'A company structure you can actually explore.',
    meta: ['Organisational design', 'Figma prototype'],
    paragraphs: ['An interactive organisational chart for seeing teams, leaders and where each person fits. Profile images, team and employee counts, and expandable branches help HR teams keep an overview without flattening the detail.', 'Users can expand several branches at once or narrow the view to relevant teams, zoom the cards, inspect team details and switch to a full-screen view when the wider structure matters.'],
    points: ['Expandable branches and teams', 'Zoomable cards with team and employee counts', 'Full-screen view for larger structures'],
    links: [{ label: 'Open Organogram prototype', url: 'https://www.figma.com/proto/qFfG3YY0IpXPaI814ecKyr/Untitled?page-id=0%3A1&type=design&node-id=0-762&viewport=300%2C273%2C0.12&t=xNSBf0PWW3mRe2q2-1&scaling=contain&starting-point-node-id=0%3A762' }]
  },
  calendar: {
    number: '10', title: 'Team Calendar', subtitle: 'A calendar for planning around people, not just dates.',
    meta: ['Workforce planning', 'Figma prototype'],
    paragraphs: ['An absence and availability calendar built with elements from the Skote Angular framework and adapted for team planning. Team leads can see who will be away due to holidays, sick leave, absences or other reasons before setting the scope of work.', 'Hover details surface the person, date, time and reason. Day, week and month views suit different planning horizons; the responsive mobile concept keeps the month view legible and lets a tap reveal the details for a day.'],
    points: ['Plan around holidays, sick leave and absences', 'Switch between day, week and month views', 'Reveal absence detail on hover or tap'],
    links: [{ label: 'Open Calendar prototype', url: 'https://www.figma.com/proto/Ros0NBC9pwEjEL0ICml9Ib/Untitled?page-id=0%3A1&type=design&node-id=1-10296&viewport=739%2C145%2C0.08&t=ZLNGGnV6bhjFb63y-1&scaling=scale-down&starting-point-node-id=1%3A10296&mode=design' }]
  },
  'style-guide': {
    number: '11', title: 'Style Guide', subtitle: 'Two visual languages. One consistent set of decisions.',
    meta: ['UI systems', 'Material Design 3', 'Prototyping'],
    paragraphs: ['A pair of style-guide explorations—one with rounded forms and a blue primary colour, another more classic and rectangular with a vivid green accent. Both show how a small set of design rules can give an interface a recognisable and consistent voice.', 'The examples cover button states, selectors and switches, social cards, colour schemes, type scales, labels, menus and popovers, iconography, shadows, tables and alerts. The second system also explores breadcrumbs and additional table and typography patterns.'],
    points: ['Variants with active, hover and disabled states', 'Colour, typography, spacing, shadows and iconography', 'Patterns that translate into reusable components'], links: []
  },
  inclinic: {
    number: '12', title: 'inClinic', subtitle: 'One healthcare experience, considered across three screens.',
    meta: ['Healthcare', 'App · desktop · tablet', 'Figma prototype'],
    paragraphs: ['A case-study prototype for inClinic with three connected surfaces: an app, a desktop experience and a tablet experience. The source portfolio presents these as separate prototype entry points so the interaction can be explored at the appropriate size.'],
    points: ['App prototype', 'Desktop prototype', 'Tablet prototype'],
    links: [
      { label: 'App', url: 'https://www.figma.com/proto/iaafTP4mnNQ4SyVgBwf9Tn/inClinic?type=design&node-id=187-1628&t=5mKeRqz3vrkH1Yb0-1&scaling=scale-down&page-id=149%3A1999&starting-point-node-id=187%3A1623&show-proto-sidebar=1&mode=design' },
      { label: 'Desktop', url: 'https://www.figma.com/proto/iaafTP4mnNQ4SyVgBwf9Tn/inClinic?type=design&node-id=398-7685&t=yIRcWOopTr8POq9L-1&scaling=scale-down&page-id=398%3A7589&starting-point-node-id=398%3A7685&show-proto-sidebar=1&mode=design' },
      { label: 'Tablet', url: 'https://www.figma.com/proto/iaafTP4mnNQ4SyVgBwf9Tn/inClinic?type=design&node-id=499-7981&t=u67wN2JcZTbRgsIm-1&scaling=scale-down&page-id=499%3A7979&starting-point-node-id=499%3A7981&show-proto-sidebar=1&mode=design' }
    ]
  },
  'file-guard': {
    number: '13', title: 'File Guard', subtitle: 'A focused security concept, ready to explore.',
    meta: ['Security', 'Figma prototype'],
    paragraphs: ['A standalone File Guard prototype is included in the portfolio as an interactive Figma project. The original page is a direct entry point to the prototype rather than a written case study.'],
    points: ['Open the interactive Figma prototype'],
    links: [{ label: 'Open File Guard', url: 'https://www.figma.com/proto/kpgGMv6KWRq3ysWvWWRSKm/File-Guard?page-id=0%3A1&type=design&node-id=70-1855&viewport=617%2C367%2C0.08&t=701vBM6aFd8chD4k-1&scaling=scale-down&starting-point-node-id=70%3A1855&show-proto-sidebar=1&mode=design' }]
  },
  castelo: {
    number: '14', title: 'Castelo', subtitle: 'An e-commerce concept in motion.',
    meta: ['E-commerce', 'Figma prototype'],
    paragraphs: ['Castelo is an interactive e-commerce prototype. The source portfolio links directly to the Figma flow so the screens and transitions can be explored in context.'],
    points: ['Interactive screen-to-screen prototype'],
    links: [{ label: 'Open Castelo', url: 'https://www.figma.com/proto/ldsIIsZZSCz3er9CC3VVsk/Castelo-EC?page-id=3%3A74&type=design&node-id=6-100&viewport=616%2C178%2C0.24&t=DSiIBeeBcbHP20B9-1&scaling=scale-down&starting-point-node-id=6%3A100&mode=design' }]
  },
  'wallet-guide': {
    number: '15', title: 'Wallet Guide', subtitle: 'A guided path through a wallet experience.',
    meta: ['Finance', 'Figma prototype'],
    paragraphs: ['A Figma prototype exploring a Wallet Guide flow. The original portfolio presents it as a direct interactive prototype, keeping the focus on navigating the screens and steps.'],
    points: ['Interactive Figma prototype'],
    links: [{ label: 'Open Wallet Guide', url: 'https://www.figma.com/proto/L1JCIrvsumeMK6LxwJ2amt/Wallet-Guide-%28Copy%29?type=design&node-id=3-644&t=YrUU6fOAAUvD4889-1&scaling=scale-down&page-id=3%3A426&starting-point-node-id=3%3A583&show-proto-sidebar=1&mode=design' }]
  },
  verona: {
    number: '16', title: 'Verona Film Festival', subtitle: 'A screen-by-screen concept for a cultural event.',
    meta: ['Culture', 'Figma prototype'],
    paragraphs: ['A prototype for the Verona Film Festival. The original portfolio links directly to the Figma experience to let visitors explore the interactions themselves.'],
    points: ['Interactive Figma prototype'],
    links: [{ label: 'Open Verona prototype', url: 'https://www.figma.com/proto/b6nmHfzlrAe9p4YTCRNQTK/Verona-Film-Festival?type=design&node-id=73-178&t=C3R106qAEjtOxzrS-1&scaling=scale-down&page-id=73%3A74&starting-point-node-id=73%3A178&show-proto-sidebar=1&mode=design' }]
  },
  mixzer: {
    number: '17', title: 'Mixzer', subtitle: 'A music homepage built with HTML and CSS.',
    meta: ['HTML5', 'CSS', 'Independent build'],
    paragraphs: ['Mixzer is a fictional music-streaming homepage inspired by Spotify. The structure is HTML5 and the visual design is CSS; clickable elements have hover and click states.', 'The work includes character-based search, a custom favicon, hover interactions and notifications in overlay panels. The source portfolio describes the experience as desktop-first.'],
    points: ['Character input in the search box', 'CSS hover interactions and custom favicon', 'Notifications and information in overlay panels'],
    links: [
      { label: 'Try Mixzer', url: 'https://fgparreiras.github.io/mixzer/' },
      { label: 'Source repository', url: 'https://github.com/fgparreiras/mixzer', secondary: true }
    ]
  },
  echoux: {
    number: '18', title: 'Echo UX', subtitle: 'An HTML + CSS homepage for a fictional UX studio.',
    meta: ['HTML5', 'CSS', 'Desktop concept'],
    paragraphs: ['Echo UX is a fictional user-experience design studio homepage, inspired by the structure of the SPINX website. The page structure is HTML5, with the visual design and hover or click interactions implemented in CSS.', 'The source portfolio notes that this project was designed for desktop devices.'],
    points: ['Hand-built HTML and CSS', 'Clickable elements with hover and click feedback', 'Desktop-first concept'],
    links: [
      { label: 'Try Echo UX', url: 'https://fgparreiras.github.io/EchoUX/' },
      { label: 'Source repository', url: 'https://github.com/fgparreiras/EchoUX', secondary: true }
    ]
  }
};

const dialog = document.querySelector('#case-dialog');
const dialogContent = document.querySelector('#dialog-content');
const dialogKicker = document.querySelector('#dialog-kicker');
let previousTrigger = null;

function escapeHTML(value) {
  const entities = {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'};
  return String(value).replace(/[&<>"']/g, character => entities[character]);
}

function openProject(key, trigger) {
  const project = projects[key];
  if (!project || !dialog) return;
  previousTrigger = trigger || document.activeElement;
  dialogKicker.textContent = `CASE NOTES / ${project.number}`;
  const image = project.image ? `<div class="dialog-image"><img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.imageAlt || '')}"></div>` : '';
  const paragraphs = project.paragraphs.map(text => `<p>${escapeHTML(text)}</p>`).join('');
  const points = project.points?.length ? `<ul class="dialog-points">${project.points.map(point => `<li>${escapeHTML(point)}</li>`).join('')}</ul>` : '';
  const links = project.links?.length ? `<div class="dialog-links">${project.links.map(link => {
    const local = link.url.startsWith('./');
    const attributes = local ? '' : ' target="_blank" rel="noreferrer"';
    return `<a class="dialog-link${link.secondary ? ' secondary' : ''}" href="${escapeHTML(link.url)}"${attributes}>${escapeHTML(link.label)} <span aria-hidden="true">↗</span></a>`;
  }).join('')}</div>` : '';
  dialogContent.innerHTML = `<div class="dialog-content">${image}<div class="dialog-copy"><h2 id="dialog-title">${escapeHTML(project.title)}</h2><p class="dialog-subtitle">${escapeHTML(project.subtitle)}</p><div class="dialog-meta">${project.meta.map(item => `<span>${escapeHTML(item)}</span>`).join('')}</div>${paragraphs}${points}${links}</div></div>`;
  dialog.showModal();
  document.querySelector('#dialog-close').focus();
}

document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.project, button)));
document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => previousTrigger?.focus());

const filterButtons = [...document.querySelectorAll('[data-filter]')];
const filterables = [...document.querySelectorAll('[data-category]')];
const noResults = document.querySelector('#no-results');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filterButtons.forEach(item => {
    const active = item === button;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  let visible = 0;
  filterables.forEach(item => {
    const show = filter === 'all' || item.dataset.category === filter;
    item.hidden = !show;
    if (show) visible += 1;
  });
  noResults.hidden = visible !== 0;
}));

const body = document.body;
const themeToggle = document.querySelector('#theme-toggle');
function setTheme(theme) {
  const night = theme === 'night';
  body.dataset.theme = night ? 'night' : 'day';
  themeToggle.setAttribute('aria-label', night ? 'Switch to day theme' : 'Switch to night theme');
  themeToggle.querySelector('.theme-label').textContent = night ? 'Day mode' : 'Night mode';
  themeToggle.querySelector('.theme-glyph').textContent = night ? '☼' : '◐';
  try { localStorage.setItem('felipe-portfolio-theme', night ? 'night' : 'day'); } catch (_) {}
}
let savedTheme = 'day';
try { savedTheme = localStorage.getItem('felipe-portfolio-theme') || 'day'; } catch (_) {}
setTheme(savedTheme);
themeToggle.addEventListener('click', () => setTheme(body.dataset.theme === 'night' ? 'day' : 'night'));

const menuToggle = document.querySelector('#menu-toggle');
const nav = document.querySelector('#primary-nav');
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('is-open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  nav.classList.remove('is-open');
}));

const progressBar = document.querySelector('#reading-progress-bar');
function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? Math.min(100, Math.max(0, window.scrollY / max * 100)) : 0;
  progressBar.style.width = `${progress}%`;
}
window.addEventListener('scroll', updateProgress, {passive:true});
window.addEventListener('resize', updateProgress);
updateProgress();

const emailButton = document.querySelector('#copy-email');
const toast = document.querySelector('#toast');
let toastTimeout;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('is-visible'), 2200);
}
emailButton.addEventListener('click', async () => {
  const email = 'fgparreiras@gmail.com';
  try {
    await navigator.clipboard.writeText(email);
    emailButton.textContent = 'COPIED';
    showToast('Email copied to clipboard.');
  } catch (_) {
    window.location.href = `mailto:${email}`;
    showToast('Opening your email app.');
  }
  setTimeout(() => { emailButton.textContent = 'COPY EMAIL'; }, 2200);
});

document.querySelector('#year').textContent = String(new Date().getFullYear());

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealTargets = document.querySelectorAll('.section-heading,.work-card,.archive-item,.approach-step,.about-grid,.skills-band,.experience-row');
  revealTargets.forEach(element => element.classList.add('reveal'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.08, rootMargin:'0px 0px -25px 0px'});
  revealTargets.forEach(element => observer.observe(element));
}
