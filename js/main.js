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
  
  // Remove all active classes first
  navLinks.forEach(link => link.classList.remove('active'));
  
  // Add active to the matching page
  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    const linkFile = linkPath.split('/').pop() || 'index.html';
    const currentFile = currentPath.split('/').pop() || 'index.html';
    
    // Match current file to link
    if (linkFile === currentFile) {
      link.classList.add('active');
    }
    // Special case for blog posts - highlight Blog
    else if (currentPath.includes('/blog/') && linkFile === 'blog.html') {
      link.classList.add('active');
    }
    // Home page variations
    else if ((currentPath === '/' || currentPath.endsWith('/portfolio/') || currentPath.endsWith('/portfolio')) && linkFile === 'index.html') {
      link.classList.add('active');
    }
  });
});

// Theme Toggle
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.querySelector('.theme-toggle');
  const themeIcon = document.querySelector('.theme-icon');
  
  if (!themeToggle || !themeIcon) {
    console.log('Theme button not found');
    return;
  }
  
  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.textContent = '☀️';
  } else {
    themeIcon.textContent = '🌙';
  }
  
  // Toggle theme on click
  themeToggle.addEventListener('click', function(e) {
    e.preventDefault();
    
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
      themeIcon.textContent = '☀️';
      localStorage.setItem('theme', 'light');
    } else {
      themeIcon.textContent = '🌙';
      localStorage.setItem('theme', 'dark');
    }
  });
  
  // Mobile touch support
  themeToggle.addEventListener('touchend', function(e) {
    e.preventDefault();
    themeToggle.click();
  });
});
