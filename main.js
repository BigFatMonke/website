// Nav mobile toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
}

// Newsletter form
function handleNewsletter(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button');
  btn.textContent = '✓ Subscribed!';
  btn.style.background = '#10b981';
  form.querySelector('input').value = '';
  setTimeout(() => {
    btn.textContent = 'Subscribe';
    btn.style.background = '';
  }, 3000);
}

// Contact form
function handleContact(e) {
  e.preventDefault();
  const success = document.getElementById('form-success');
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    if (success) success.style.display = 'block';
    btn.textContent = 'Send Message';
    btn.disabled = false;
    e.target.reset();
  }, 1000);
}

// Scroll-in animation for cards and sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.style.opacity = '1';
      el.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .value-card, .stat-block, .audience-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
