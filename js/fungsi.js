// Toggle
const navbarNav = document.querySelector('.navbar-nav');

// Ketika Humberger menu di click
document.querySelector('#humberger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};