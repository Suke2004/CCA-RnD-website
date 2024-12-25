document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
    
    navLinks.forEach(function(link) {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  });
  