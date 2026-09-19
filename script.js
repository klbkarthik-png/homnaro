(() => {
  const cfg = window.HOMNARO;
  const message = encodeURIComponent('Hi Homnaro, I would like to book a home service.');
  const waUrl = `https://wa.me/${cfg.whatsapp}?text=${message}`;
  document.querySelectorAll('.whatsapp-link').forEach(link => link.href = waUrl);
  document.querySelectorAll('[data-phone]').forEach(link => link.href = `tel:${cfg.phone}`);
  document.querySelectorAll('[data-phone-display]').forEach(item => item.textContent = cfg.phone.replace('+91', '+91 '));
  document.getElementById('year').textContent = new Date().getFullYear();
  const grid = document.getElementById('service-grid');
  if (grid) grid.innerHTML = cfg.services.map(service => `<article class="service-card"><div class="service-icon">${service.icon}</div><h3>${service.name}</h3><p>${service.summary}</p><a href="/${service.slug}/">View Services <span>→</span></a></article>`).join('');
  const areas = document.getElementById('areas-list');
  if (areas && cfg.serviceAreas.length) { areas.hidden = false; areas.innerHTML = cfg.serviceAreas.map(area => `<span>${area}</span>`).join(''); }
  const menu = document.querySelector('.menu-button'), nav = document.querySelector('.nav-links');
  menu?.addEventListener('click', () => { const opened = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', opened); });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));
})();
