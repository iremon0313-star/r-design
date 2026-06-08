const fadeElems = document.querySelectorAll('.fadein');

// ページ読み込み時にも発火
window.addEventListener('load', () => {
    fadeElems.forEach(elem => {
        const rect = elem.getBoundingClientRect().top;
        const trigger = window.innerHeight * 0.9;

        if (rect < trigger) {
            elem.classList.add('show');
        }
    });
});

// スクロール時にも発火
window.addEventListener('scroll', () => {
    fadeElems.forEach(elem => {
        const rect = elem.getBoundingClientRect().top;
        const trigger = window.innerHeight * 0.85;

        if (rect < trigger) {
            elem.classList.add('show');
        }
    });
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-first');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // ← 追加
    nav.classList.toggle('active');
});