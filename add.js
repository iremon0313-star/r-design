
const fadeElems = document.querySelectorAll('.fadein');

function fadeInCheck() {
    fadeElems.forEach(elem => {
        if (!elem) return; // ← null 回避

        const rect = elem.getBoundingClientRect().top;
        const trigger = window.innerHeight * 0.9;

        if (rect < trigger) {
            elem.classList.add('show');
        }
    });
}

window.addEventListener('load', fadeInCheck);

window.addEventListener('scroll', fadeInCheck);


const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-first');
const links = document.querySelectorAll('.nav-first a');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
}
links.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});