// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Dark mode toggle
const colorToggle = document.getElementById('colorToggle');

colorToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    colorToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.content-section, .sidebar, .service-card').forEach(el => {
    observer.observe(el);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
    });
});