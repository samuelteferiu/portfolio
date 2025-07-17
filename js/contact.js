document.getElementById('contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const response = await fetch('https://formspree.io/f/xyzpyozz', {
    method: 'POST',
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });
  if (response.ok) {
    document.getElementById('form-message').textContent = 'Thank you for your message!';
    form.reset();
  } else {
    document.getElementById('form-message').textContent = 'Oops! There was a problem submitting your form.';
  }
});
document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const scrollPosition = window.scrollY + 108; // Accounting for fixed header height

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
          link.classList.add('active');
        }
      });
    }
  });
});
