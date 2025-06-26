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

// Populate news cards on the homepage
const newsCardsContainer = document.getElementById('news-cards');
if (newsCardsContainer && typeof newsData !== 'undefined') {
    const latestNews = newsData.slice(0, 3);
    let content = '';
    latestNews.forEach(item => {
        content += `
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div class="flex-grow">
                    <p class="text-sm text-teal-600 font-semibold mb-2">${item.category}</p>
                    <h3 class="font-poppins font-bold text-lg text-slate-800 mb-3">${item.title}</h3>
                </div>
                <a href="${item.link}" class="text-teal-600 font-semibold hover:underline mt-4 self-start">Read More &rarr;</a>
            </div>
        `;
    });
    newsCardsContainer.innerHTML = content;
}

// Debounce function to limit the rate at which a function can fire.
function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

document.addEventListener('DOMContentLoaded', () => {

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Mobile programs dropdown accordion
    const mobileProgramsButton = document.getElementById('mobile-programs-button');
    const mobileProgramsDropdown = document.getElementById('mobile-programs-dropdown');
    
    if (mobileProgramsButton && mobileProgramsDropdown) {
        mobileProgramsButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default anchor behavior
            mobileProgramsDropdown.classList.toggle('hidden');
            const icon = mobileProgramsButton.querySelector('svg');
            if (icon) {
                icon.classList.toggle('rotate-180');
            }
        });
    }

    // Animate elements on scroll
    const faders = document.querySelectorAll('.fade-in-up');
    const options = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    faders.forEach(fader => {
        observer.observe(fader);
    });

    // Homepage hero slideshow
    const heroSlides = document.querySelectorAll('.hero-slide');
    if (heroSlides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            heroSlides.forEach(slide => {
                slide.classList.remove('active');
            });
            currentSlide = (currentSlide + 1) % heroSlides.length;
            heroSlides[currentSlide].classList.add('active');
        }, 5000);
    }

    // Homepage "Latest News" section
    const newsCardsContainer = document.getElementById('news-cards');
    if (newsCardsContainer && typeof newsData !== 'undefined') {
        const latestNews = newsData.slice(0, 3);
        newsCardsContainer.innerHTML = latestNews.map(item => `
            <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col transform hover:-translate-y-1">
                <div class="flex-grow">
                    <span class="text-sm font-semibold text-blue-600">${item.category || 'Event'}</span>
                    <h3 class="font-bold text-lg text-gray-800 mt-2 mb-3">${item.title}</h3>
                </div>
                <a href="${item.link}" class="text-blue-600 font-semibold hover:underline mt-4 self-start">Read More &rarr;</a>
            </div>
        `).join('');
    }

    // News page rendering
    const newsContainer = document.getElementById('news-container');
    if (newsContainer && typeof newsData !== 'undefined') {
        newsContainer.innerHTML = newsData.map(news => `
            <article class="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <a href="${news.link}">
                    <img src="${news.image}" alt="${news.title}" class="w-full h-52 object-cover">
                </a>
                <div class="p-6">
                    <div class="flex justify-between items-center text-sm text-gray-500 mb-2">
                        <span>${news.date}</span>
                        <span class="font-semibold text-blue-600">${news.category}</span>
                    </div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3 hover:text-blue-700 transition-colors">
                        <a href="${news.link}">${news.title}</a>
                    </h2>
                    <p class="text-gray-600 line-clamp-3">${news.desc}</p>
                </div>
            </article>
        `).join('');
    }

    // Gallery Page Logic
    if (document.getElementById('gallery-grid')) {
        const galleryImages = [
            { src: 'public/assets/gallery/IMG_5155.jpg', category: 'events' },
            { src: 'public/assets/gallery/IMG_5173.jpg', category: 'campus' },
            { src: 'public/assets/gallery/IMG20231204122013.jpg', category: 'students' },
            { src: 'public/assets/gallery/IMG20241025145140 (1).jpg', category: 'events' },
            { src: 'public/assets/gallery/Jepang.jpg', category: 'partnerships' },
            { src: 'public/assets/gallery/photo_2024-10-15_15-26-36 (1).jpg', category: 'campus' },
            { src: 'public/assets/gallery/WhatsApp Image 2024-04-30 at 14.30.59.jpeg', category: 'students' },
            { src: 'public/assets/gallery/WhatsApp Image 2024-11-22 at 11.51.59.jpeg', category: 'partnerships' },
            { src: 'public/assets/gallery/WhatsApp Image 2024-11-22 at 11.52.00 (1).jpeg', category: 'events' },
            { src: 'public/assets/gallery/WhatsApp Image 2024-11-22 at 11.52.01 (1).jpeg', category: 'campus' },
        ];

        const galleryGrid = document.getElementById('gallery-grid');
        const filterButtons = document.querySelectorAll('.gallery-filter-btn');
        const modal = document.getElementById('gallery-modal');
        const modalImg = document.getElementById('modal-img');
        const closeModalBtn = document.getElementById('close-modal');
        const prevBtn = document.getElementById('prev-modal-btn');
        const nextBtn = document.getElementById('next-modal-btn');
        
        let currentImageIndex = 0;
        let filteredImages = [...galleryImages];

        function renderGallery(filter = 'all') {
            filteredImages = (filter === 'all') 
                ? galleryImages 
                : galleryImages.filter(img => img.category === filter);

            galleryGrid.innerHTML = filteredImages.map((img, index) => `
                <div class="cursor-pointer overflow-hidden rounded-lg shadow-md group" data-index="${index}">
                    <img src="../${img.src}" alt="Gallery image" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300">
                </div>
            `).join('');

            document.querySelectorAll('[data-index]').forEach(item => {
                item.addEventListener('click', () => openModal(parseInt(item.dataset.index)));
            });
        }

        function openModal(index) {
            currentImageIndex = index;
            modalImg.src = `../${filteredImages[currentImageIndex].src}`;
            modal.classList.remove('hidden');
        }

        function closeModal() {
            modal.classList.add('hidden');
        }

        function showNextImage() {
            currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
            modalImg.src = `../${filteredImages[currentImageIndex].src}`;
        }

        function showPrevImage() {
            currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
            modalImg.src = `../${filteredImages[currentImageIndex].src}`;
        }

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('bg-blue-600', 'text-white'));
                button.classList.add('bg-blue-600', 'text-white');
                renderGallery(button.dataset.filter);
            });
        });

        closeModalBtn.addEventListener('click', closeModal);
        nextBtn.addEventListener('click', showNextImage);
        prevBtn.addEventListener('click', showPrevImage);
        
        // Keyboard navigation for modal
        document.addEventListener('keydown', (e) => {
            if (!modal.classList.contains('hidden')) {
                if (e.key === 'ArrowRight') showNextImage();
                if (e.key === 'ArrowLeft') showPrevImage();
                if (e.key === 'Escape') closeModal();
            }
        });

        renderGallery();
    }
}); 