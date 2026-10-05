(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('#theme-toggle');
  const nav = document.querySelector('#site-nav');
  const menuButton = document.querySelector('#menu-toggle');

  const setTheme = theme => {
    root.dataset.theme = theme;
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    if (themeButton) {
      themeButton.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
      themeButton.setAttribute('title', `Switch to ${nextTheme} theme`);
      themeButton.dataset.currentTheme = theme;
    }
    try { localStorage.setItem('felipe-portfolio-theme', theme); } catch (_) { /* Storage may be unavailable. */ }
  };

  try {
    const savedTheme = localStorage.getItem('felipe-portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') setTheme(savedTheme);
    else setTheme('dark');
  } catch (_) { setTheme('dark'); }

  themeButton?.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

  const closeMenu = () => {
    if (!menuButton || !nav) return;
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  };
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    nav?.classList.toggle('is-open', open);
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

  const progress = document.querySelector('#reading-progress');
  let frameRequested = false;
  const updateProgress = () => {
    if (!progress) return;
    if (frameRequested) return;
    frameRequested = true;
    window.requestAnimationFrame(() => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = maxScroll > 0 ? Math.min(1, window.scrollY / maxScroll) : 0;
      progress.style.transform = `scaleX(${ratio})`;
      frameRequested = false;
    });
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealTargets = document.querySelectorAll('.about-lead, .work-section, .resume-section, .contact-section, .case-intro, .case-figure, .case-content, .case-switcher');
    if (revealTargets.length) {
      root.classList.add('has-reveal');
      const observer = new IntersectionObserver((entries, instance) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          instance.unobserve(entry.target);
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
      revealTargets.forEach((element, index) => {
        element.classList.add('reveal');
        element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 65}ms`);
        observer.observe(element);
      });
    }
  }

  const copyButton = document.querySelector('#copy-email');
  const copyStatus = document.querySelector('#copy-status');
  copyButton?.addEventListener('click', async () => {
    const email = copyButton.dataset.email || 'fgparreiras@gmail.com';
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
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
})();
