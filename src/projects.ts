// ===== PROJECT FILTERING FUNCTIONALITY =====
// This handles filtering projects by category

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll<HTMLElement>('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));

    // Add active class to clicked button
    button.classList.add('active');

    // Get the filter category
    const filterCategory = button.getAttribute('data-filter');

    // Filter the projects
    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');

      if (filterCategory === 'all' || cardCategory === filterCategory) {
        // Show the card
        card.style.display = 'block';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      } else {
        // Hide the card
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});

// Initialize card styles
projectCards.forEach(card => {
  card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
});

console.log('Projects page loaded! 🚀');
