// toggle
const navbarNav = document.querySelector('.navbar-nav');

// Ketika Hamburger menu di click
document.querySelector('#humberger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};