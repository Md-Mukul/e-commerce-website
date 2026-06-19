
const Navbar = document.getElementById('navbar');
const sideBar = document.getElementById('side-bar');
const mainContent = document.getElementById('main-content');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const mobileContentBar = document.querySelector('.mobille-list-content');

const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

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

searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('show')
    // alert("j")
});


menuIcon.addEventListener('click', () => {
    mobileContentBar.style.transform = 'translateX(0)'
    // alert("kljfdkgh")
})
closeIcon.addEventListener('click', () => {
    mobileContentBar.style.transform = 'translateX(-100%)'
})

