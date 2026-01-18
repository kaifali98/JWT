document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded. Initializing interactions...');

    // -- Scroll Animations (Intersection Observer) --
    const observerOptions = {
        root: null, // viewport
        threshold: 0.1, // trigger when 10% valid
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up');
    animatedElements.forEach(el => observer.observe(el));


    // -- Navigation Scroll Effect --
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
            nav.style.background = 'rgba(15, 23, 42, 0.8)';
            nav.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.5)';
        } else {
            nav.classList.remove('scrolled');
            nav.style.background = 'rgba(15, 23, 42, 0.6)';
            nav.style.boxShadow = 'none';
        }
    });

    // -- Active Link Highlighting --
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
