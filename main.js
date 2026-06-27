// Nav mobile toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
}

// Google Translate Framework Initializer
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    // Keeps layouts fully un-styled so we use our own custom CSS
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false
  }, 'google_translate_element');
}

// Hook up Custom Premium UI Language Selector
document.addEventListener('DOMContentLoaded', () => {
  const customSelect = document.getElementById('custom_lang_selector');
  if (customSelect) {
    customSelect.addEventListener('change', (e) => {
      const lang = e.target.value;
      const googleCombo = document.querySelector('.goog-te-combo');
      if (googleCombo) {
        googleCombo.value = lang;
        googleCombo.dispatchEvent(new Event('change'));
      }
    });
  }
});

// Newsletter form handling
function handleNewsletter(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button');
  btn.textContent = 'Subscribed!';
  form.querySelector('input').value = '';
  setTimeout(() => { btn.textContent = 'Subscribe'; }, 3000);
}

// Contact Form handling
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
