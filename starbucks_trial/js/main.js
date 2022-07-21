//SUBMENU -> SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
    searchInputEl.focus();
})

searchInputEl.addEventListener("focus", function () {
    searchInputEl.setAttribute("placeholder", "통합검색");
})

searchInputEl.addEventListener("blur", function () {
    searchInputEl.setAttribute("placeholder", "");
})

//SWIPER
//SWIPER NOTICE
const swiperNotice = new Swiper(".notice .inner__left .swiper", {
    direction: "vertical",
    loop: true,
    autoplay: true,
});

//SWIPER PROMOTION
const swiperPromotion = new Swiper(".promotion .swiper", {
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false, //클릭으로 슬라이드 멈추게 하는?
    },
    pagination: {
        el: ".promotion .swiper-pagination",
        clickable: true,
    },
    navigation: {
        prevEl: ".promotion .swiper-button-prev",
        nextEl: ".promotion .swiper-button-next",
    }
})

function controlAutoplay() {
    if (swiperPromotion.autoplay.running === true) {
        swiperPromotion.autoplay.stop();
    } else {
        swiperPromotion.autoplay.start();
    }
}

//TOGGLE
const promotionToggleBtn = document.querySelector(".toggle-promotion");
const promotionToggleIcon = document.queryCommandIndeterm(".toggle-promotion span");
const promotionEl = document.querySelector(".promotion");

promotionToggleBtn.addEventListener("click", function () {
    if (promotionEl.classList.contains("hide")) {
        promotionEl.classList.remove("hide");
    } else {
        promotionEl.classList.add("hide");
    }

    if (promotionToggleBtn.style.transform === "") {
        promotionToggleBtn.style.transform = "rotate(180deg)";
    } else {
        promotionToggleBtn.style.transform = "";
    }
})

//SCROLL
let scrollYpos;
// scroll 문제? -> xx : scroll이 발생할 때만 일어나므로 함수 안에 넣어줘야 함!
window.addEventListener("scroll", function () {
    scrollYpos = window.scrollY;
    // console.log(scrollYpos);

    if (scrollYpos > 2800) {
        const storeAnimate = document.querySelector(".store .inner");
        storeAnimate.classList.add("animate");
    } else if (scrollYpos > 2400) {
        const magazineAnimate = document.querySelector(".magazine .inner");
        magazineAnimate.classList.add("animate");
    } else if (scrollYpos > 1600) {
        const favoriteAnimate = document.querySelector(".favorite .inner");
        favoriteAnimate.classList.add("animate");
    } else if (scrollYpos > 1200) {
        const indonesiaAnimate = document.querySelector(".indonesia .inner");
        indonesiaAnimate.classList.add("animate");
    } else if (scrollYpos > 600) {
        const peruAnimate = document.querySelector(".peru .inner");
        peruAnimate.classList.add("animate");
    }
})

window.onload = () => {
    const visualInner = document.querySelector(".visual .inner");
    visualInner.classList.add("animate");
}



