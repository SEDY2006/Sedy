/*
* Research Poster Competition 2025
* Techno International New Town (TINT)
* Main JavaScript
*/

// DOM Elements
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const preloader = document.querySelector('.preloader');
const backToTop = document.querySelector('.back-to-top');
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hide');
    }, 1000);
});

// Custom Cursor
document.addEventListener('mousemove', (e) => {
    if (cursor && cursorFollower) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Add delay to follower cursor
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    }
});

document.addEventListener('mousedown', () => {
    if (cursor && cursorFollower) {
        cursor.classList.add('active');
        cursorFollower.classList.add('active');
    }
});

document.addEventListener('mouseup', () => {
    if (cursor && cursorFollower) {
        cursor.classList.remove('active');
        cursorFollower.classList.remove('active');
    }
});

// Hover effect on buttons, links, etc.
const links = document.querySelectorAll('a, button, .feature-item, .poster-card, .social-link');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        if (cursor && cursorFollower) {
            cursor.classList.add('active');
            cursorFollower.classList.add('active');
        }
    });
    
    link.addEventListener('mouseleave', () => {
        if (cursor && cursorFollower) {
            cursor.classList.remove('active');
            cursorFollower.classList.remove('active');
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button visibility
    if (window.scrollY > 500) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuToggle.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Back to top button
backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Countdown Timer
function updateCountdown() {
    const competitionDate = new Date('September 15, 2025 10:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = competitionDate - now;
    
    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown-days').textContent = '0';
        document.getElementById('countdown-hours').textContent = '0';
        document.getElementById('countdown-minutes').textContent = '0';
        document.getElementById('countdown-seconds').textContent = '0';
        return;
    }
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById('countdown-days').textContent = days.toString().padStart(2, '0');
    document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('countdown-minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('countdown-seconds').textContent = seconds.toString().padStart(2, '0');
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Animate on scroll
const animatedElements = document.querySelectorAll('.fade-up, .fade-down, .fade-left, .fade-right, .fade-in');
const observerConfig = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerConfig);

animatedElements.forEach(element => {
    observer.observe(element);
});

// Stats Counter Animation
const statElements = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const targetNumber = parseInt(target.getAttribute('data-count'));
            animateCounter(target, targetNumber);
            statsObserver.unobserve(target);
        }
    });
}, observerConfig);

statElements.forEach(stat => {
    statsObserver.observe(stat);
});

function animateCounter(element, target) {
    let count = 0;
    const speed = Math.floor(1000 / target);
    const animate = setInterval(() => {
        count++;
        element.textContent = count;
        if (count >= target) {
            clearInterval(animate);
            element.textContent = target;
        }
    }, speed);
}

// Form validation
const forms = document.querySelectorAll('.needs-validation');
forms.forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            showSubmitMessage(form);
        }
        form.classList.add('was-validated');
    });
});

function showSubmitMessage(form) {
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    
    setTimeout(() => {
        form.reset();
        form.classList.remove('was-validated');
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Submitted!';
        
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }, 2000);
    }, 1500);
}

// Particle Background for Hero Section
class Particle {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        
        this.x = options.x || Math.random() * this.canvas.width;
        this.y = options.y || Math.random() * this.canvas.height;
        this.size = options.size || Math.random() * 3 + 1;
        this.speed = options.speed || Math.random() * 1 + 0.2;
        this.directionX = options.directionX || (Math.random() * 1) - 0.5;
        this.directionY = options.directionY || (Math.random() * 1) - 0.5;
        this.color = options.color || `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})`;
    }
    
    update() {
        this.x += this.directionX * this.speed;
        this.y += this.directionY * this.speed;
        
        if (this.x > this.canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        
        if (this.y > this.canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }
    }
    
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
}

// Initialize particles
const particlesCanvas = document.getElementById('particles-canvas');
if (particlesCanvas) {
    const ctx = particlesCanvas.getContext('2d');
    let particles = [];
    
    function resizeCanvas() {
        particlesCanvas.width = particlesCanvas.parentElement.offsetWidth;
        particlesCanvas.height = particlesCanvas.parentElement.offsetHeight;
        initParticles();
    }
    
    function initParticles() {
        particles = [];
        const numberOfParticles = Math.floor(particlesCanvas.width * particlesCanvas.height / 10000);
        
        for (let i = 0; i < numberOfParticles; i++) {
            particles.push(new Particle(particlesCanvas));
        }
    }
    
    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - distance / 1000})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        
        connectParticles();
        requestAnimationFrame(animateParticles);
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animateParticles();
}

// Initialize AOS (if loaded)
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
}

// Initialize Lightbox for poster gallery
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
    <div class="lightbox-content">
        <span class="lightbox-close">&times;</span>
        <img class="lightbox-image" src="" alt="Poster Fullscreen">
        <div class="lightbox-caption"></div>
    </div>
`;
document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector('.lightbox-image');
const lightboxCaption = lightbox.querySelector('.lightbox-caption');
const lightboxClose = lightbox.querySelector('.lightbox-close');

// Open lightbox when clicking on poster zoom button
const posterZoomButtons = document.querySelectorAll('.poster-zoom');
posterZoomButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const posterCard = btn.closest('.poster-card');
        const imgSrc = posterCard.querySelector('img').src;
        const title = posterCard.querySelector('.poster-title').textContent;
        const author = posterCard.querySelector('.poster-author').textContent;
        
        lightboxImage.src = imgSrc;
        lightboxCaption.textContent = `${title} by ${author}`;
        lightbox.classList.add('active');
        document.body.classList.add('no-scroll');
    });
});

// Close lightbox
lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});

// Escape key to close lightbox
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
}); 
// Initialize bubbles for logo section too
document.addEventListener('DOMContentLoaded', function() {
    createBubbles();
});