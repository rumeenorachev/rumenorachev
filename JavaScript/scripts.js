const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));

    if (!target) {
      return;
    }

    e.preventDefault();
    target.scrollIntoView({
      behavior: 'smooth'
    });

    closeMenu();
  });
});

function closeMenu() {
  navLinks.classList.remove('active');
  navbar.classList.remove('menu-open');
  hamburger.setAttribute('aria-expanded', 'false');
}

function toggleMenu() {
  navLinks.classList.toggle('active');
  navbar.classList.toggle('menu-open');

  const expanded = navLinks.classList.contains('active');
  hamburger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
}

document.addEventListener('click', (event) => {
  if (!navLinks.classList.contains('active')) {
    return;
  }

  if (!navbar.contains(event.target)) {
    closeMenu();
  }
});

window.addEventListener('resize', () => {
  const desktopNavigation = window.matchMedia('(min-width: 1025px) and (hover: hover), (min-width: 1367px)').matches;

  if (desktopNavigation) {
    closeMenu();
  }
});
