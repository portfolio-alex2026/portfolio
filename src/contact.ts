// ===== CONTACT FORM HANDLING =====
// This handles the contact form submission

const contactForm = document.getElementById('contactForm') as HTMLFormElement;

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Here you would normally send the data to a server
    // For this demo, we'll just show a success message

    console.log('Form submitted with:', {
      name,
      email,
      phone,
      subject,
      message
    });

    // Show success message
    showSuccessMessage();

    // Reset the form
    contactForm.reset();
  });
}

// Function to show success message
function showSuccessMessage() {
  // Create success message element
  const successMessage = document.createElement('div');
  successMessage.className = 'success-message';
  successMessage.innerHTML = `
    <div class="success-content">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <h3>Message Envoyé !</h3>
      <p>Merci de nous avoir contactés. Nous vous répondrons bientôt.</p>
    </div>
  `;

  // Add styles
  successMessage.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(9, 10, 16, 0.95);
    backdrop-filter: blur(10px);
    border: 2px solid #8b7fd6;
    border-radius: 16px;
    padding: 3rem;
    text-align: center;
    color: #e3e8f0;
    z-index: 10000;
    min-width: 350px;
    box-shadow: 0 20px 60px rgba(139, 127, 214, 0.4);
    animation: fadeInScale 0.3s ease;
  `;

  // Add to page
  document.body.appendChild(successMessage);

  // Add animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInScale {
      from {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.9);
      }
      to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }
    .success-content svg {
      color: #8b7fd6;
      margin: 0 auto 1rem;
    }
    .success-content h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: #ffffff;
    }
    .success-content p {
      color: #d0d0d0;
      font-size: 1rem;
    }
  `;
  document.head.appendChild(style);

  // Remove after 3 seconds
  setTimeout(() => {
    successMessage.style.animation = 'fadeInScale 0.3s ease reverse';
    setTimeout(() => {
      successMessage.remove();
    }, 300);
  }, 3000);
}

// Form validation feedback
const formInputs = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
  '.contact-form input, .contact-form textarea, .contact-form select'
);

formInputs.forEach(input => {
  input.addEventListener('blur', () => {
    validateField(input);
  });

  input.addEventListener('input', () => {
    // Remove error state when user starts typing
    if (input.classList.contains('error')) {
      input.classList.remove('error');
    }
  });
});

function validateField(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) {
  if (field.hasAttribute('required') && !field.value.trim()) {
    field.classList.add('error');
    return false;
  }

  // Email validation
  if (field.type === 'email' && field.value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
      field.classList.add('error');
      return false;
    }
  }

  field.classList.remove('error');
  return true;
}

// Add error state styles
const errorStyles = document.createElement('style');
errorStyles.textContent = `
  .form-group input.error,
  .form-group textarea.error,
  .form-group select.error {
    border-color: #ff6b9d !important;
    background: rgba(255, 107, 157, 0.05) !important;
  }
`;
document.head.appendChild(errorStyles);

console.log('Contact page loaded! 📧');
