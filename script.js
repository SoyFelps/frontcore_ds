(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('#theme-toggle');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const nav = document.querySelector('#site-nav');
  const menuButton = document.querySelector('#menu-toggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const setTheme = theme => {
    const safeTheme = theme === 'night' ? 'night' : 'day';
    root.dataset.theme = safeTheme;
    const next = safeTheme === 'night' ? 'day' : 'night';
    if (themeButton) {
      themeButton.setAttribute('aria-label', `Switch to ${next} theme`);
      themeButton.setAttribute('title', `Switch to ${next} theme`);
      const label = themeButton.querySelector('.theme-label');
      const glyph = themeButton.querySelector('.theme-glyph');
      if (label) label.textContent = safeTheme === 'night' ? 'Day mode' : 'Night mode';
      if (glyph) glyph.textContent = safeTheme === 'night' ? '☼' : '◐';
    }
    if (themeMeta) themeMeta.setAttribute('content', safeTheme === 'night' ? '#21231f' : '#f1efe8');
    try { localStorage.setItem('felipe-portfolio-theme', safeTheme); } catch (_) { /* Storage may be unavailable. */ }
  };

  let savedTheme = 'day';
  try {
    savedTheme = localStorage.getItem('felipe-portfolio-theme') || 'day';
    if (savedTheme === 'dark') savedTheme = 'night';
    if (savedTheme === 'light') savedTheme = 'day';
  } catch (_) { /* Use the editorial day theme. */ }
  setTheme(savedTheme);
  themeButton?.addEventListener('click', () => setTheme(root.dataset.theme === 'night' ? 'day' : 'night'));

  const closeMenu = () => {
    if (!menuButton || !nav) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('is-open');
  };
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav?.classList.toggle('is-open', open);
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

  const progress = document.querySelector('#reading-progress');
  let progressQueued = false;
  const updateProgress = () => {
    if (!progress || progressQueued) return;
    progressQueued = true;
    window.requestAnimationFrame(() => {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      const amount = range > 0 ? Math.min(1, window.scrollY / range) : 0;
      progress.style.transform = `scaleX(${amount})`;
      progressQueued = false;
    });
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();

  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const workCards = [...document.querySelectorAll('.work-card[data-category]')];
  const filterStatus = document.querySelector('#filter-status');
  const filterNames = { all: 'all work', product: 'products', system: 'systems', prototype: 'prototypes', code: 'code projects', consulting: 'consulting work' };
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.filter || 'all';
    filterButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    workCards.forEach(card => {
      const categories = (card.dataset.category || '').split(/\s+/);
      const matches = selected === 'all' || categories.includes(selected);
      card.classList.toggle('is-dimmed', !matches);
      card.classList.toggle('is-spotlit', selected !== 'all' && matches);
    });
    if (filterStatus) {
      filterStatus.textContent = selected === 'all'
        ? 'All work is in focus; project sections stay in place.'
        : `Spotlighting ${filterNames[selected] || selected}; all project sections stay in place.`;
    }
  }));

  const copyButton = document.querySelector('#copy-email');
  const copyStatus = document.querySelector('#copy-status');
  copyButton?.addEventListener('click', async () => {
    const email = copyButton.dataset.email || 'fgparreiras@gmail.com';
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(email);
      else {
        const field = document.createElement('textarea');
        field.value = email;
        field.setAttribute('readonly', '');
        field.style.position = 'fixed';
        field.style.opacity = '0';
        document.body.append(field);
        field.select();
        document.execCommand('copy');
        field.remove();
      }
      copyButton.textContent = 'Copied';
      if (copyStatus) copyStatus.textContent = 'Email address copied to clipboard.';
      window.setTimeout(() => { copyButton.textContent = 'Copy email'; }, 1500);
    } catch (_) {
      if (copyStatus) copyStatus.textContent = 'Copy unavailable here — select the email address above.';
    }
  });

  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  if ('IntersectionObserver' in window && !reducedMotion) {
    const targets = document.querySelectorAll('.work-section, .resume-section, .contact-section, .case-intro, .case-figure, .case-content, .case-switcher');
    if (targets.length) {
      root.classList.add('has-reveal');
      const observer = new IntersectionObserver((entries, instance) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          instance.unobserve(entry.target);
        });
      }, { threshold: .08, rootMargin: '0px 0px -35px 0px' });
      targets.forEach((element, index) => {
        element.classList.add('reveal');
        element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 55}ms`);
        observer.observe(element);
      });
    }
  }

  if (window.matchMedia('(pointer: fine)').matches && !reducedMotion) {
    document.querySelectorAll('.work-card').forEach(card => {
      const art = card.querySelector('.card-art');
      if (!art) return;
      card.addEventListener('pointermove', event => {
        const bounds = art.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - .5;
        const y = (event.clientY - bounds.top) / bounds.height - .5;
        art.style.setProperty('--rx', `${-y * 2.2}deg`);
        art.style.setProperty('--ry', `${x * 2.2}deg`);
      });
      card.addEventListener('pointerleave', () => {
        art.style.setProperty('--rx', '0deg');
        art.style.setProperty('--ry', '0deg');
      });
    });
  }
})();
