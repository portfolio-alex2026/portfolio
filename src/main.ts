// ===== HAMBURGER MENU TOGGLE =====
// This handles opening and closing the mobile menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

// Close menu when clicking on a link
const closeMenu = () => {
  if (hamburger && navMenu) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
};

// ===== SMOOTH SCROLL FOR NAVIGATION LINKS =====
// This makes the page scroll smoothly when clicking navigation links
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Close mobile menu when clicking a link
    closeMenu();

    // Only prevent default and smooth scroll for hash links (like #blog)
    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      e.preventDefault();

      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));

      // Add active class to clicked link
      link.classList.add('active');

      // Get the target section
      const targetSection = document.querySelector(targetId);

      // Scroll to the target section
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// ===== LIKE BUTTON FUNCTIONALITY =====
// Makes the like buttons toggle when clicked
const likeButtons = document.querySelectorAll<HTMLButtonElement>('.like-button');

likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Toggle the 'liked' class to change the color
    button.classList.toggle('liked');

    // Optional: Add a small animation
    button.style.transform = 'scale(1.2)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 200);
  });
});

// ===== SCROLL TO TOP ON CTA BUTTON CLICK =====
// The "Découvrir" button scrolls to the blog section
const ctaButton = document.querySelector('.cta-button');

if (ctaButton) {
  ctaButton.addEventListener('click', () => {
    const blogSection = document.querySelector('#blog');
    if (blogSection) {
      blogSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}

// ===== ACTIVE NAVIGATION ON SCROLL =====
// Highlights the navigation item based on the current section in view
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll<HTMLElement>('section[id]');
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

console.log('Portfolio 2026 loaded successfully! 🚀');
