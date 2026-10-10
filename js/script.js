const typingText = document.querySelector('.typing-text');

if (typingText) {
  const words = [
    'with creativity.',
    'with teamwork.',
    'with technology.'
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    const word = words[wordIndex];

    charIndex += deleting ? -1 : 1;
    typingText.textContent = word.substring(0, charIndex);

    let delay = deleting ? 60 : 110;

    if (!deleting && charIndex === word.length) {
      deleting = true;
      delay = 1000;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 300;
    }

    setTimeout(typeEffect, delay);
  }

  typingText.textContent = '';
  typeEffect();
}


// 2. MOBILE NAVIGATION MENU
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.setAttribute('aria-expanded', 'false');

  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('show');

    menuToggle.setAttribute(
      'aria-expanded',
      String(isOpen)
    );
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}


// 3. DARK-MODE TOGGLE
const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');

    themeToggle.textContent = isDark ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-pressed', String(isDark));
  });
}


// 4. ACTIVE NAVIGATION-LINK HIGHLIGHT
const navLinkElements = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');

function updateActiveLink() {
  let currentSection = 'home';
  const scrollPosition = window.scrollY + 140;

  sections.forEach(section => {
    if (section.offsetTop <= scrollPosition) {
      currentSection = section.id;
    }
  });

  navLinkElements.forEach(link => {
    const active =
      link.getAttribute('href') === `#${currentSection}`;

    link.classList.toggle('active', active);
  });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);


// 5. CONTACT FORM VALIDATION
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      showFormMessage('Please fill in all fields.', false);
      return;
    }

    if (!emailPattern.test(email)) {
      showFormMessage('Please enter a valid email address.', false);
      return;
    }

    showFormMessage(
      'Thank you! Your form has been validated.',
      true
    );

    contactForm.reset();
  });
}

function showFormMessage(message, isSuccess) {
  if (!formMessage) return;

  formMessage.textContent = message;
  formMessage.classList.toggle('success', isSuccess);
  formMessage.classList.toggle('error', !isSuccess);
}


// 6. AUTOMATIC FOOTER YEAR
const currentYear = document.getElementById('currentYear');

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
MBER 3: all JavaScript interactivity
