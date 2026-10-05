(() => {
  const catalogue = window.PORTFOLIO_PROJECTS || {};
  const entries = Object.entries(catalogue).sort((a, b) => a[1].number.localeCompare(b[1].number));
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const project = catalogue[id];
  const main = document.querySelector('.case-main');

  const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);

  if (!project) {
    document.title = 'Project not found — Felipe Parreiras';
    document.querySelector('#case-title').textContent = 'Project not found';
    document.querySelector('#case-subtitle').textContent = 'This case study is not available.';
    document.querySelector('#case-kicker').textContent = 'Portfolio';
    document.querySelector('#case-links').innerHTML = '<a class="case-button" href="index.html#highlights">Back to portfolio</a>';
    document.querySelector('#case-gallery').remove();
    document.querySelector('.case-content').remove();
    document.querySelector('#case-switcher').remove();
    return;
  }

  document.title = `${project.title} — Felipe Parreiras, Product Designer`;
  document.querySelector('meta[name="description"]').setAttribute('content', `${project.title}: ${project.subtitle} Product design project by Felipe Parreiras.`);
  document.querySelector('#case-kicker').textContent = `${project.sectionName} / ${project.number}`;
  document.querySelector('#case-title').textContent = project.title;
  document.querySelector('#case-subtitle').textContent = project.subtitle;
  document.querySelector('#case-back').href = `index.html#${project.sectionId}`;
  document.querySelector('#case-back').setAttribute('aria-label', `Back to ${project.sectionName}`);

  const meta = document.querySelector('#case-meta');
  meta.innerHTML = (project.meta || []).map(item => `<span>${escapeHTML(item)}</span>`).join('<span class="meta-separator" aria-hidden="true">·</span>');

  const links = document.querySelector('#case-links');
  links.innerHTML = (project.links || []).map(link => {
    const local = link.url.startsWith('./') || link.url.startsWith('index.html');
    return `<a class="case-button${link.secondary ? ' case-button--secondary' : ''}" href="${escapeHTML(link.url)}"${local ? '' : ' target="_blank" rel="noopener noreferrer"'}>${escapeHTML(link.label)} <span aria-hidden="true">${local ? '→' : '↗'}</span></a>`;
  }).join('');

  const gallery = document.querySelector('#case-gallery');
  gallery.innerHTML = (project.gallery || []).map((image, index) => `
    <figure class="case-figure">
      <a href="${escapeHTML(image.src)}" class="case-image-link" target="_blank" rel="noopener noreferrer" aria-label="Open full-size image ${index + 1}: ${escapeHTML(image.alt)}">
        <img src="${escapeHTML(image.src)}" alt="${escapeHTML(image.alt)}"${index === 0 ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async">
      </a>
    </figure>`).join('');
  if ((project.gallery || []).length === 1) gallery.classList.add('case-gallery--single');

  document.querySelector('#case-paragraphs').innerHTML = (project.paragraphs || []).map(text => `<p>${escapeHTML(text)}</p>`).join('');
  const points = document.querySelector('#case-points');
  points.innerHTML = (project.points || []).map(point => `<li>${escapeHTML(point)}</li>`).join('');
  if (!points.children.length) document.querySelector('#case-aside').remove();

  const currentIndex = entries.findIndex(([key]) => key === id);
  const previous = entries[(currentIndex - 1 + entries.length) % entries.length];
  const next = entries[(currentIndex + 1) % entries.length];
  document.querySelector('#case-switcher').innerHTML = `
    <a class="case-switcher__item case-switcher__item--prev" href="project.html?id=${encodeURIComponent(previous[0])}">
      <span class="eyebrow">Previous project</span><strong><span aria-hidden="true">←</span> ${escapeHTML(previous[1].title)}</strong>
    </a>
    <a class="case-switcher__item case-switcher__item--next" href="project.html?id=${encodeURIComponent(next[0])}">
      <span class="eyebrow">Next project</span><strong>${escapeHTML(next[1].title)} <span aria-hidden="true">→</span></strong>
    </a>`;

  if (main) main.classList.add('is-ready');
})();
