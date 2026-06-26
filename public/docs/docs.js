/* docs.js — shared behaviour for all Single Threaded doc pages
   Handles: mobile nav toggle, reading progress bar, active sidebar link.
   Document-specific JS stays in an inline <script> in each HTML file. */

(function () {
  'use strict';

  // ── Mobile nav toggle ──────────────────────────────────────
  var navToggle = document.getElementById('nav-toggle');
  var sidebar   = document.getElementById('sidebar');
  var overlay   = document.getElementById('nav-overlay');

  if (navToggle && sidebar && overlay) {
    function openNav() {
      sidebar.classList.add('open');
      overlay.classList.add('open');
      navToggle.textContent = '✕';
      navToggle.setAttribute('aria-label', 'Close navigation');
    }
    function closeNav() {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
      navToggle.innerHTML = '&#9776;';
      navToggle.setAttribute('aria-label', 'Open navigation');
    }
    navToggle.addEventListener('click', function () {
      sidebar.classList.contains('open') ? closeNav() : openNav();
    });
    overlay.addEventListener('click', closeNav);
    sidebar.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (window.innerWidth <= 900) closeNav();
      });
    });
  }

  // ── Reading progress bar ───────────────────────────────────
  var bar = document.getElementById('progress');
  if (bar) {
    window.addEventListener('scroll', function () {
      var el  = document.documentElement;
      var pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      bar.style.width = pct + '%';
    }, { passive: true });
  }

  // ── Active sidebar link on scroll ─────────────────────────
  var links    = document.querySelectorAll('.sidebar a');
  var headings = document.querySelectorAll('h2[id], h3[id], section[id]');

  if (links.length && headings.length) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (l) { l.classList.remove('active'); });
          var a = document.querySelector('.sidebar a[href="#' + e.target.id + '"]');
          if (a) a.classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    headings.forEach(function (h) { obs.observe(h); });
  }
})();
