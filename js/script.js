// toggle class active hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

// Ketika Hamburger menu di click
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// toggle class active shopping cart
const shoppingCart = document.querySelector('.shopping-cart');

// Ketika Shopping cart di click
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

// toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}


// click diluar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
})

// modal box

const itemdetailModal = document.querySelector('#item-detail-modal');
const itemdetailButtons = document.querySelectorAll('.item-detail-button');

itemdetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemdetailModal.style.display = 'flex';
        e.preventDefault();
    };
});


// click tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemdetailModal.style.display = 'none';
    e.preventDefault();
};

// click diluar modal
window.onclick = (e) => {
    if (e.target === itemdetailModal) {
        itemdetailModal.style.display = 'none';
    }
}