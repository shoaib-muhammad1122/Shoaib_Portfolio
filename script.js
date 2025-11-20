// 1. Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Observer for Fade-in/Reveal Animation
// This adds an 'animate-visible' class to sections when they enter the viewport
const sections = document.querySelectorAll('.content-section, .education-certs-section');

const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: '0px',
    threshold: 0.1 // trigger when 10% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            // Stop observing once it's visible
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    // Set initial hidden state for the animation effect (defined in CSS as .animate-visible)
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    
    observer.observe(section);
});