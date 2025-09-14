// ====== Mobile Navigation Toggle ======
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });
}

// ====== Active Navigation Link based on Scroll Position ======
const sections = ['home', 'skills', 'services', 'projects', 'contact'];
const navLinksArray = [...document.querySelectorAll('.nav-links a')];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinksArray.forEach(link => link.classList.remove('active'));
        const activeLink = navLinksArray.find(link => link.getAttribute('href') === `#${entry.target.id}`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  },
  {
    rootMargin: '-40% 0px -55% 0px',
    threshold: 0.1,
  }
);

sections.forEach(id => {
  const element = document.getElementById(id);
  if (element) observer.observe(element);
});