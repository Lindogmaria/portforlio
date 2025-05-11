// Animate elements on page load and scroll
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Functionality
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  let isMenuOpen = false;

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      
      // Toggle menu visibility
      navLinks.classList.toggle('hidden');
      
      // Animate burger icon
      const spans = menuBtn.querySelectorAll('span');
      if (isMenuOpen) {
        spans[0].style.transform = 'rotate(45deg) translateY(-2px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(2px)';
      } else {
        spans[0].style.transform = 'rotate(0) translateY(0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0) translateY(0)';
      }

      // Animate menu items
      if (isMenuOpen) {
        anime({
          targets: '#navLinks a, #navLinks button',
          translateY: [20, 0],
          opacity: [0, 1],
          delay: anime.stagger(100),
          duration: 800,
          easing: 'easeOutCubic'
        });
      }
    });

    // Close menu on window resize if in desktop view
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        navLinks.classList.remove('hidden');
        isMenuOpen = false;
        const spans = menuBtn.querySelectorAll('span');
        spans.forEach(span => {
          span.style.transform = 'rotate(0) translateY(0)';
          span.style.opacity = '1';
        });
      }
    });
  }

  // Animate hero section on home page
  if (document.querySelector('.hero-section')) {
    anime({
      targets: '.hero-content > *',
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(200),
      duration: 1000,
      easing: 'easeOutCubic'
    });
  }

  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.8;
      
      if (elementTop < triggerPoint) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Initial animation setup
  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  });

  // Listen for scroll events
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial check

  // Contact button functionality
  const contactBtn = document.getElementById('contactBtn');
  if (contactBtn) {
    contactBtn.addEventListener('click', function() {
      Swal.fire({
        title: 'Let\'s Connect!',
        html: `
          <div class="space-y-4 text-left">
            <p class="flex items-center gap-2">
              <span class="text-lg">💼</span>
              <span>linkedin.com/in/marialindog</span>
            </p>
            <p class="flex items-center gap-2">
              <span class="text-lg">🐙</span>
              <span>github.com/marialindog</span>
            </p>
          </div>
        `,
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
          popup: 'font-sans',
          title: 'gradient-text'
        }
      });
    });
  }
});
