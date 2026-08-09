// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll reveal animation to elements
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    // Initial check for elements in view
    revealElements.forEach(element => {
        if (isElementInView(element)) {
            element.classList.add('active');
        }
    });

    // Check on scroll
    window.addEventListener('scroll', () => {
        revealElements.forEach(element => {
            if (isElementInView(element)) {
                element.classList.add('active');
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
});

// Check if element is in view
function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    
    return (vertInView && horInView);
}

// Add parallax effect to hero section (optional enhancement)
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = (scrolled * 0.5) + 'px';
    }
});