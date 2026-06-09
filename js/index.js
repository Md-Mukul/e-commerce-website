const Navbar = document.getElementById('navbar');
const sideBar = document.getElementById('side-bar');
const mainContent = document.getElementById('main-content');

const pageTop = 200;

window.addEventListener('scroll', () => {
    const pageYTop = window.pageYOffset || document.documentElement.scrollTop;

    if (pageYTop >= pageTop) {
        Navbar.classList.add('active');
        sideBar.classList.add('active');
        // mainContent.classList.add('active');
    } else {
        Navbar.classList.remove('active');
        sideBar.classList.remove('active');
        // mainContent.classList.remove('active');
    }

    pageYTop = pageTop;

});






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

const testimonialSlider = document.getElementById('testimonial-slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cards = document.querySelectorAll('.testimonial-card');

let currentIndex = 0;
const totalCards = cards.length;

// console.log(totalCards)

// স্ক্রিন সাইজের ওপর ভিত্তি করে কয়টি কার্ড একসাথে স্ক্রিনে থাকবে তা নির্ধারণ করা
function getCardsPerView() {
    if (window.innerWidth <= 650) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3; // ল্যাপটপ বা বড় স্ক্রিনের জন্য ৩টি
}

function updateSliderPosition() {
    const cardsPerView = getCardsPerView();
    console.log("CardPreview",cardsPerView)
    const maxIndex = totalCards - cardsPerView;
        console.log("maxIndex",maxIndex)
    
    // বাউন্ডারি চেক (সীমার বাইরে যেতে দিবে না)
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    if (currentIndex < 0) currentIndex = 0;

    // স্লাইড মুভ করার হিসাব
    const cardWidthWithGap = 100 / cardsPerView; 
    testimonialSlider.style.transform = `translateX(-${currentIndex * cardWidthWithGap}%)`;

    // ---- বাটন অ্যাক্টিভ/ডিসঅ্যাক্টিভ করার লজিক ----
    
    // ১. একদম শুরুতে থাকলে Prev বাটন কাজ করবে না এবং হালকা আবছা (disabled) দেখাবে
    if (currentIndex === 0) {
        prevBtn.style.opacity = "0.2";
        prevBtn.style.pointerEvents = "none"; // ক্লিক ইভেন্ট বন্ধ
        prevBtn.style.cursor = "not-allowed";
    } else {
        prevBtn.style.opacity = "1";
        prevBtn.style.pointerEvents = "auto"; // ক্লিক ইভেন্ট চালু
        prevBtn.style.cursor = "pointer";
    }

    // ২. একদম শেষে পৌছালে Next বাটন কাজ করবে না এবং হালকা আবছা (disabled) দেখাবে
    if (currentIndex === maxIndex) {
        nextBtn.style.opacity = "0.2";
        nextBtn.style.pointerEvents = "none"; // ক্লিক ইভেন্ট বন্ধ
        nextBtn.style.cursor = "not-allowed";
    } else {
        nextBtn.style.opacity = "1";
        nextBtn.style.pointerEvents = "auto"; // ক্লিক ইভেন্ট চালু
        nextBtn.style.cursor = "pointer";
    }
}

// Next বাটনের ক্লিকের কাজ
nextBtn.addEventListener('click', () => {
    const cardsPerView = getCardsPerView();
    // শেষ সীমার আগ পর্যন্ত ১ ঘর করে সামনে যাবে
    if (currentIndex < totalCards - cardsPerView) {
        currentIndex++;
        updateSliderPosition();
    }
});

// Prev বাটনের ক্লিকের কাজ
prevBtn.addEventListener('click', () => {
    // প্রথম সীমার আগ পর্যন্ত ১ ঘর করে পিছনে যাবে
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});

// উইন্ডো রিসাইজ করলে স্লাইডারের পজিশন ঠিক রাখা
window.addEventListener('resize', updateSliderPosition);

// শুরুতে স্লাইডার পজিশন সেট করা
updateSliderPosition();

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