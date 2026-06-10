


// Siler Carosel
let slideIndex = 0;
const slideWrapper = document.getElementById('slide-wrapper');
let slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Asol slide koita ache seta save kore rakhi (Clone korar aage)
const totalOriginalSlides = slides.length;
let autoPlayInterval;

// 1. Prothom slide er ekta Clone (copy) toiri kore ekebare sese add kora
const firstClone = slides[0].cloneNode(true);
firstClone.id = 'first-clone';
slideWrapper.appendChild(firstClone);

// Slide Update function
function updateSlider() {
    // Animation (transition) on kore deya
    slideWrapper.style.transition = 'transform 0.4s ease-in-out';
    slideWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Indicator active kora (Jodi clone slide e thake, tobe 1st dot active hobe)
    let dotIndex = slideIndex === totalOriginalSlides ? 0 : slideIndex;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[dotIndex].classList.add('active');
}

// Samner dike slide korar function
function nextSlide() {
    // Jodi clone e chole jay tobe ar samne jabe na (bug thekanor jonno)
    if (slideIndex >= totalOriginalSlides) return;
    slideIndex++;
    updateSlider();
}

// 2. MAGIC HACK: Jokhon animation sesh hobe, tokhon check korbo
slideWrapper.addEventListener('transitionend', () => {
    // Jodi amra clone (shesher fake) slide e thaki
    if (slideIndex === totalOriginalSlides) {
        // Instantly animation off kore dibo jeno keu bujhte na pare
        slideWrapper.style.transition = 'none';

        // Real prothom slide e index niye asbo
        slideIndex = 0;
        slideWrapper.style.transform = `translateX(0)`;
    }
});

// Indicator e click korle
function currentSlide(index) {
    slideIndex = index;
    updateSlider();
    resetAutoPlay();
}

// Auto Play function (1 Second por por)
function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 3000);
}

// Timer reset
function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

// Start everything
startAutoPlay();



// Grid column and row functionalities

const grid = document.getElementById('grid');
const cartGridFlex = document.querySelectorAll('.cart-grid-flex');
const productCart = document.querySelectorAll('.product-cart');
const productActiveDes = document.querySelectorAll('.product-active-description');
const gridRow = document.getElementById('grid-row');
const gridColumn = document.getElementById('grid-column');

gridRow.addEventListener('click', () => {

    cartGridFlex.forEach((item) => {
        item.classList.add('active');
    });

    productCart.forEach((product) => {
        product.classList.add('active');
    });

    gridColumn.classList.remove('active');
    gridRow.classList.add('active');
    grid.classList.add('active');
});

gridColumn.addEventListener('click', () => {

    cartGridFlex.forEach((item) => {
        item.classList.remove('active');
    });

    productCart.forEach((product) => {
        product.classList.remove('active');
    });

    gridColumn.classList.add('active');
    gridRow.classList.remove('active');
    grid.classList.remove('active');
});





