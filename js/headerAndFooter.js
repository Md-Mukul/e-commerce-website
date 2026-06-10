
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

