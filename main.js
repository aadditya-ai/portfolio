// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      
      // Update toggle icon
      if (navLinks.classList.contains('active')) {
        mobileToggle.textContent = '✕';
      } else {
        mobileToggle.textContent = '☰';
      }
    });

    // Close mobile menu when clicking on a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        mobileToggle.textContent = '☰';
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navLinks.contains(event.target) || mobileToggle.contains(event.target);
      if (!isClickInsideNav && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileToggle.textContent = '☰';
      }
    });
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add active class to current page nav link
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (currentPath === linkPath || 
        (currentPath.endsWith('/') && linkPath === '/index.html') ||
        (currentPath === '/' && linkPath === '/index.html')) {
      link.classList.add('active');
    }
  });
});
