// fadein 要素を取得
const fadeElems = document.querySelectorAll('.fadein');

// 安全にフェードイン処理を実行する関数
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

// ページ読み込み時
window.addEventListener('load', fadeInCheck);

// スクロール時
window.addEventListener('scroll', fadeInCheck);


// ▼ ハンバーガーメニュー
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-first');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
}