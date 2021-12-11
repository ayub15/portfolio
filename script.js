const menu = document.querySelector('#menu-btn');
const header = document.querySelector('.header');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
});
