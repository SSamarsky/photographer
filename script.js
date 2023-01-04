// Burger-menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');

function toggleMenu() {
    body.classList.toggle('open');
    overlay.classList.toggle('open');
    burger.classList.toggle('open');
    nav.classList.toggle('open');  
}

burger.addEventListener('click', toggleMenu);
overlay.addEventListener('click' , toggleMenu);
navLinks.forEach((el) => el.addEventListener('click', toggleMenu));


// Change Images
const buttons = document.querySelectorAll('.buttons__item');
const images = document.querySelectorAll('.portfolio__photo');

function changeImages(event) {
    images.forEach((img, index) => {
        img.src = `./assets/images/${event.target.dataset.season}/${index + 1}.jpg`;
    });
    document.querySelector('.buttons .active').classList.remove('active');
    event.target.classList.add('active');
}

buttons.forEach(el => el.addEventListener('click', changeImages));

