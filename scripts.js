document.addEventListener('DOMContentLoaded', function() {

 
  const cardsToAnimate = document.querySelectorAll('.info-card, .value-item, .beneficio-item, .timeline-content'); 

  
  cardsToAnimate.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  });

  const animateOnScroll = () => {
      const triggerBottom = window.innerHeight / 5 * 4;

      cardsToAnimate.forEach(card => {
          const cardTop = card.getBoundingClientRect().top;
          if (cardTop < triggerBottom) {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            
          }
         
      });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); 

 
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href !== '#' && !this.getAttribute('data-bs-toggle')) {
           e.preventDefault();
           const targetId = href;
           try {
               const targetElement = document.querySelector(targetId);
               if (targetElement) {
                  const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 70;
                  const elementPosition = targetElement.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                  window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                  });
              }
          } catch (error) {
              console.error("Error finding element for smooth scroll:", error);
          }
      }
    });
  });

  
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    
    link.classList.remove('active');
    
    if (linkPage === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page'); 
    } else {
      link.removeAttribute('aria-current');
    }
  });

}); 
