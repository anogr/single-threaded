/* articles.js — shared behaviour for all Single Threaded doc pages
   Handles: mobile nav toggle, active sidebar link.
   Document-specific JS stays in an inline <script> in each HTML file. */

(function () {
  'use strict';

  // ── Mobile nav toggle ──────────────────────────────────────
  var navToggle = document.getElementById('nav-toggle');
  var sidebar   = document.getElementById('sidebar');
  var overlay   = document.getElementById('nav-overlay');

  if (navToggle && sidebar && overlay) {
    var mobileNavigation = window.matchMedia('(max-width: 900px)');

    navToggle.setAttribute('type', 'button');
    navToggle.setAttribute('aria-controls', sidebar.id);
    navToggle.setAttribute('aria-expanded', 'false');

    function setSidebarAvailability(isAvailable) {
      sidebar.querySelectorAll('a').forEach(function (link) {
        if (isAvailable) {
          if (link.dataset.navTabindex === '') {
            link.removeAttribute('tabindex');
          } else if (link.dataset.navTabindex !== undefined) {
            link.setAttribute('tabindex', link.dataset.navTabindex);
          }
          delete link.dataset.navTabindex;
        } else {
          if (link.dataset.navTabindex === undefined) {
            link.dataset.navTabindex = link.getAttribute('tabindex') || '';
          }
          link.setAttribute('tabindex', '-1');
        }
      });

      if (isAvailable) {
        sidebar.removeAttribute('inert');
        sidebar.removeAttribute('aria-hidden');
      } else {
        sidebar.setAttribute('inert', '');
        sidebar.setAttribute('aria-hidden', 'true');
      }
    }

    function syncSidebarAvailability() {
      setSidebarAvailability(!mobileNavigation.matches || sidebar.classList.contains('open'));
    }

    function openNav() {
      sidebar.classList.add('open');
      overlay.classList.add('open');
      setSidebarAvailability(true);
      navToggle.textContent = '✕';
      navToggle.setAttribute('aria-label', 'Close navigation');
      navToggle.setAttribute('aria-expanded', 'true');

      var firstLink = sidebar.querySelector('a');
      if (firstLink) firstLink.focus();
    }

    function closeNav(restoreFocus) {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
      navToggle.innerHTML = '&#9776;';
      navToggle.setAttribute('aria-label', 'Open navigation');
      navToggle.setAttribute('aria-expanded', 'false');
      syncSidebarAvailability();

      if (restoreFocus) navToggle.focus();
    }

    navToggle.addEventListener('click', function () {
      sidebar.classList.contains('open') ? closeNav(true) : openNav();
    });

    overlay.addEventListener('click', function () {
      closeNav(true);
    });

    sidebar.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (mobileNavigation.matches) closeNav(false);
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && sidebar.classList.contains('open')) {
        closeNav(true);
      }
    });

    mobileNavigation.addEventListener('change', function () {
      if (!mobileNavigation.matches) closeNav(false);
      syncSidebarAvailability();
    });

    syncSidebarAvailability();
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
