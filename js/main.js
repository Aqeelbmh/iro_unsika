// News data
const news = [
    {
        slug: 'unsika-welcomes-international-students-2024',
        title: 'UNSIKA Welcomes New International Students for 2024 Academic Year',
        desc: 'The International Relation Office (IRO) successfully welcomed 45 new international students from various countries including Japan, South Korea, Thailand, and Malaysia for the 2024 academic year.',
        date: 'January 15, 2024',
        image: 'public/assets/news/news 1/news 01.jpeg'
    },
    {
        slug: 'partnership-agreement-with-mahidol-university',
        title: 'New Partnership Agreement Signed with Mahidol University, Thailand',
        desc: 'UNSIKA has signed a comprehensive partnership agreement with Mahidol University, Thailand, covering student exchange programs, joint research initiatives, and faculty collaboration.',
        date: 'December 20, 2023',
        image: 'public/assets/news/news 2/1.jpeg'
    },
    {
        slug: 'iup-program-expansion-announcement',
        title: 'IUP Program Expansion: New Majors and Enhanced Curriculum',
        desc: 'The International Undergraduate Program (IUP) is expanding with new majors in Engineering and Business Administration, along with enhanced curriculum focusing on global competencies.',
        date: 'November 28, 2023',
        image: 'public/assets/news/news 3/1.jpeg'
    }
];

// DOM elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const heroSlides = document.querySelectorAll('.hero-slide');
const newsGrid = document.getElementById('newsGrid');

// Mobile menu toggle
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('show');
    });
}

// Hero slides rotation
let currentSlide = 0;
const totalSlides = heroSlides.length;

function rotateHeroSlides() {
    heroSlides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
    
    currentSlide = (currentSlide + 1) % totalSlides;
}

// Start hero slides rotation
if (heroSlides.length > 0) {
    setInterval(rotateHeroSlides, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in');
    animatedElements.forEach(el => observer.observe(el));
    
    // Populate news grid
    if (newsGrid) {
        newsGrid.innerHTML = news.map((item, index) => `
            <div class="bg-white rounded-3xl shadow-xl border border-blue-100 p-7 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group transform hover:scale-105">
                <span class="inline-block bg-blue-100 text-blue-700 text-xs font-semibold rounded-full px-3 py-1 mb-3 self-start shadow-sm">${item.date}</span>
                <h2 class="text-2xl font-bold text-gray-800 mb-2 leading-tight line-clamp-2 group-hover:text-blue-700 transition-colors duration-200">${item.title}</h2>
                <p class="text-gray-600 mb-4 line-clamp-3 text-base">${item.desc}</p>
                <a href="news/${item.slug}.html" class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                    Read More
                    <svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        `).join('');
    }
});

// Smooth scrolling for anchor links
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

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('show');
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add scroll-based navbar styling
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}); 