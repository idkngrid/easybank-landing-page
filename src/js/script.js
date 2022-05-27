const btnMobile = document.querySelector('#btnMobile');
const body = document.querySelector('body');

btnMobile.addEventListener('click', () => {
    const header = document.querySelector('#header');
    const overlay = document.querySelector('#overlay');

    header.classList.toggle('open');
    body.classList.toggle('noscroll');
    overlay.classList.toggle('fade-in');
    overlay.classList.toggle('fade-out', !overlay.classList.contains('fade-in'));
});
