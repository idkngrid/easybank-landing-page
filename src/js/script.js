const btnMobile = document.querySelector('#btnMobile');

btnMobile.addEventListener('click', () => {
    const header = document.querySelector('#header');
    const overlay = document.querySelector('#overlay');
    header.classList.toggle('open');
    overlay.classList.toggle('fade-in');
});