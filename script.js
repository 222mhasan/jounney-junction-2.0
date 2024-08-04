// for slider area
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('opacity-0', i !== index);
        slide.classList.toggle('opacity-100', i === index);
        dots[i].classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

// Change slide every 4 seconds
setInterval(nextSlide, 4000);




// for subscribe area
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// subscribe area text-input

function hideIcon() {
    document.getElementById('email-icon').classList.add('hidden');
}

function showIcon() {
    if (document.getElementById('email-input').value === '') {
        document.getElementById('email-icon').classList.remove('hidden');
    }
}