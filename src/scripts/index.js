// CSS imports
import '../styles/styles.css';

// Import AOS library
import AOS from 'aos';
import 'aos/dist/aos.css';

// Force reload CSS when page loads to prevent caching issues
const forceCSSReload = () => {
  const links = document.getElementsByTagName('link');
  for (let i = 0; i < links.length; i++) {
    if (links[i].rel === 'stylesheet') {
      const href = links[i].getAttribute('href');
      if (href) {
        links[i].href = href + (href.indexOf('?') === -1 ? '?' : '&') + 'v=' + new Date().getTime();
      }
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Force CSS reload to prevent caching issues
  forceCSSReload();
  
  // Initialize AOS Animation
  AOS.init({
    duration: 1000,
    easing: 'ease',
    once: true,
    mirror: false
  });

  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

  /*===== MENU SHOW =====*/
  /* Validate if constant exists */
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  /*===== MENU HIDDEN =====*/
  /* Validate if constant exists */
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

  /*==================== REMOVE MENU MOBILE ====================*/
  const navLinks = document.querySelectorAll('.nav-link');

  function linkAction() {
    // When we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
  }
  navLinks.forEach(n => n.addEventListener('click', linkAction));

  /*==================== CHANGE BACKGROUND HEADER ====================*/
  function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  }
  window.addEventListener('scroll', scrollHeader);

  /*==================== SHOW SCROLL UP ====================*/
  function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the tag
    if (scrollUp) {
      if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
      } else {
        scrollUp.classList.remove('show-scroll');
      }
    }
  }
  window.addEventListener('scroll', scrollUp);

  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  const sections = document.querySelectorAll('section[id]');

  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  }
  window.addEventListener('scroll', scrollActive);

  /*==================== FORM SUBMISSION ====================*/
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic form validation
      const name = document.getElementById('contact-name');
      const email = document.getElementById('contact-email');
      const message = document.getElementById('contact-message');
      
      if (name.value.trim() === '') {
        alert('Silakan masukkan nama Anda');
        return;
      }
      
      if (email.value.trim() === '') {
        alert('Silakan masukkan email Anda');
        return;
      }
      
      if (message.value.trim() === '') {
        alert('Silakan masukkan pesan Anda');
        return;
      }
      
      // In a real-world scenario, you would send the form data to a server
      alert('Terima kasih! Pesan Anda telah dikirim.');
      
      // Reset form fields
      contactForm.reset();
    });
  }
});
