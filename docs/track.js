// Google Ads tag and lead conversion ("BelaBloom Lead Form" in the Ads account).
// Loaded on every page through the head block that tools/seo.mjs generates.
// A lead = a tap on a phone link, a tap on a WhatsApp link, or a contact form that was emailed
// (contact.html calls bbLead() itself for that last one).
(function () {
  var ID = 'AW-11017215209';
  var LEAD = ID + '/2R9ZCL-hroEYEOm5tYUp';

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', ID);

  var tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
  document.head.appendChild(tag);

  window.bbLead = function () { window.gtag('event', 'conversion', { send_to: LEAD }); };

  document.addEventListener('click', function (e) {
    var link = e.target.closest && e.target.closest('a[href^="tel:"], a[href*="wa.me/"]');
    if (link) window.bbLead();
  });
})();
