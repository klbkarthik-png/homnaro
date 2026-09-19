(() => {
  const cfg = window.HOMNARO;
  const slug = document.body.dataset.service;
  const service = cfg.services.find(item => item.slug === slug);
  if (!service) return;
  if (!document.querySelector('.service-hero')) {
    document.body.innerHTML = `<header class="site-header"><a class="brand" href="/"><img src="/homnaro-logo.png" alt="Homnaro — Home care made easy."></a><a class="button primary" data-book href="/book-service/">Book a Service</a></header><main><section class="service-hero"><p class="eyebrow">HOME SERVICES IN BENGALURU</p><h1 data-service-title></h1><p data-service-summary></p><div class="hero-actions"><a class="button primary" data-book href="/book-service/">Book a Service <span>→</span></a><a class="button secondary whatsapp-link" href="#">WhatsApp Us</a></div></section><section class="section service-content"><div><p class="eyebrow">SERVICE OVERVIEW</p><h2>What we can help with</h2><ul data-service-list class="offering-list"></ul></div><aside><h3>Pricing</h3><p>Contact us for pricing. Final price depends on the scope of work.</p><h3>Service areas</h3><p>Available in selected areas of Bengaluru. Contact us to confirm coverage.</p></aside></section><section class="process section"><div class="section-intro"><p class="eyebrow">WHAT TO EXPECT</p><h2>Clear communication, from request to completion.</h2></div><ol><li><span>1</span><h3>Share the issue</h3><p>Tell us what needs attention.</p></li><li><span>2</span><h3>Confirm details</h3><p>We contact you to confirm availability.</p></li><li><span>3</span><h3>Service visit</h3><p>A professional visits at the scheduled time.</p></li><li><span>4</span><h3>Work completed</h3><p>The job is completed based on the requirement.</p></li></ol></section><section class="section faq"><div class="section-intro"><p class="eyebrow">FAQS</p><h2>Helpful answers.</h2></div><div class="faq-list"><details><summary>How can I book this service?</summary><p>Book through our website, WhatsApp or phone.</p></details><details><summary>Can I get an estimate first?</summary><p>The team will review the requirement and provide applicable pricing before proceeding.</p></details><details><summary>Is this service available in my area?</summary><p>Service availability depends on the location and current coverage. Please contact Homnaro to confirm.</p></details></div></section></main><footer><div><a class="brand" href="/"><img src="/homnaro-logo.png" alt="Homnaro"></a><p>Home care made easy.</p></div><div><h3>Need help?</h3><a data-phone href="#">Call Homnaro</a><a class="whatsapp-link" href="#">WhatsApp Us</a></div><p class="copyright">© 2026 Homnaro. All rights reserved.</p></footer>`;
  }
  const title = document.querySelector('[data-service-title]');
  document.querySelectorAll('[data-service-name]').forEach(el => el.textContent = service.name);
  if (title) title.textContent = `${service.name} Services in Bengaluru`;
  document.querySelector('[data-service-summary]').textContent = service.summary;
  document.querySelector('[data-service-list]').innerHTML = service.items.map(item => `<li>${item}</li>`).join('');
  const text = encodeURIComponent(`Hi Homnaro, I would like to book ${service.name} service.`);
  document.querySelectorAll('.whatsapp-link').forEach(link => link.href = `https://wa.me/${cfg.whatsapp}?text=${text}`);
  document.querySelectorAll('[data-phone]').forEach(link => link.href = `tel:${cfg.phone}`);
  document.querySelectorAll('[data-book]').forEach(link => link.href = `/book-service/?service=${encodeURIComponent(service.name)}`);
})();
