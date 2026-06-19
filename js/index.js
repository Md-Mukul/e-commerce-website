
// Siler Carosel
let slideIndex = 0;
const slideWrapper = document.getElementById('slide-wrapper');
let slides = document.querySelectorAll('.slide');


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





// custommer sayes


const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Button scroll
nextBtn.addEventListener('click', () => {
    sliderContainer.scrollBy({
        left: 350,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    sliderContainer.scrollBy({
        left: -350,
        behavior: 'smooth'
    });
});

// Mouse drag
let isDown = false;
let startX;
let scrollLeft;

sliderContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    sliderContainer.style.cursor = 'grabbing';

    startX = e.pageX - sliderContainer.offsetLeft;
    scrollLeft = sliderContainer.scrollLeft;
});

sliderContainer.addEventListener('mouseleave', () => {
    isDown = false;
    sliderContainer.style.cursor = 'grab';
});

sliderContainer.addEventListener('mouseup', () => {
    isDown = false;
    sliderContainer.style.cursor = 'grab';
});

sliderContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;

    e.preventDefault();

    const x = e.pageX - sliderContainer.offsetLeft;
    const walk = (x - startX) * 2;

    sliderContainer.scrollLeft = scrollLeft - walk;
});

// end custommer sayes



// Accordian

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {

        accordionItems.forEach(acc => {
            if(acc !== item){
                acc.classList.remove('active');
            }
        });

        item.classList.toggle('active');
    });
});

// End Accordian