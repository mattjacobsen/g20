/**
 * lang-redirect.js
 * On first visit, reads the browser's preferred language and redirects to
 * the appropriate language prefix. The preference is stored in localStorage
 * so it only fires once — the user can then switch manually via the navbar.
 *
 * Supported: sq (Albanian, default / root), de (/de/), en (/en/)
 */
(function () {
  const STORAGE_KEY = 'g20_lang';
  const SUPPORTED   = ['sq', 'de', 'en'];
  const ROOT_LANG   = 'sq'; // served at / with no prefix

  // Don't redirect if the user has already been here or manually switched
  if (sessionStorage.getItem(STORAGE_KEY)) return;
  sessionStorage.setItem(STORAGE_KEY, '1');

  // Already on a non-default language path — respect it
  const path = window.location.pathname;
  if (/^\/(de|en)(\/|$)/.test(path)) return;

  // Determine best match from browser language preferences
  const preferred = (navigator.languages || [navigator.language])
    .map(l => l.toLowerCase().split('-')[0])
    .find(l => SUPPORTED.includes(l));

  if (!preferred || preferred === ROOT_LANG) return;

  // Redirect to /de/ or /en/ root (not page-specific, since we can't easily
  // map arbitrary paths cross-language from the client side).
  window.location.replace('/' + preferred + '/');
})();
