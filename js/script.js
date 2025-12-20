// RKS Tech & Sports Hub - JavaScript

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // Here you would integrate with your email service (Mailchimp, ConvertKit, etc.)
        alert(`Thank you for subscribing! We'll send updates to ${email}`);
        newsletterForm.reset();
    });
}

// Smooth Scrolling for Anchor Links
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

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Lazy Loading for Videos (Performance Optimization)
document.addEventListener('DOMContentLoaded', () => {
    const videoWrappers = document.querySelectorAll('.video-wrapper');
    
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target.querySelector('iframe');
                if (iframe && !iframe.src) {
                    iframe.src = iframe.dataset.src;
                }
                videoObserver.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    videoWrappers.forEach(wrapper => {
        videoObserver.observe(wrapper);
    });
});

// Analytics Event Tracking (for AdSense optimization)
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Track outbound links
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', function() {
        trackEvent('Outbound Link', 'click', this.href);
    });
});

// Track video plays
document.querySelectorAll('.video-wrapper iframe').forEach(iframe => {
    iframe.addEventListener('load', function() {
        trackEvent('Video', 'loaded', this.title);
    });
});

console.log('RKS Tech & Sports Hub loaded successfully! 🚀');
