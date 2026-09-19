(() => {
  const cfg = window.HOMNARO, form = document.querySelector('#booking-form'), status = document.querySelector('#form-status');
  const selected = new URLSearchParams(location.search).get('service');
  if (selected) form.service.value = selected;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.checkValidity()) return form.reportValidity();
    const data = new FormData(form), service = data.get('service');
    const message = `Hi Homnaro, I would like to book a service.\n\nName: ${data.get('name')}\nMobile: ${data.get('mobile')}\nService: ${service}\nSpecific problem: ${data.get('problem')}\nLocation: ${data.get('location')}\nPincode: ${data.get('pincode')}\nPreferred date: ${data.get('date') || 'Not specified'}\nPreferred time: ${data.get('time') || 'Not specified'}\nDetails: ${data.get('description') || 'Not specified'}`;
    const url = `https://wa.me/${cfg.whatsapp}?text=${encodeURIComponent(message)}`;
    status.hidden = false;
    status.innerHTML = `Your request is ready to send. This website does not store booking data yet. <a href="${url}" target="_blank" rel="noopener">Send it securely on WhatsApp →</a>`;
  });
})();
