/*==================== MENU ====================*/
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 50) {
        nav.classList.add("navbar_scroll");
    } else {
        nav.classList.remove("navbar_scroll");
    }
});


/*==================== SCROLL REVEAL ====================*/
ScrollReveal().reveal('.reveal', {delay: 600});

/*==================== swiper====================*/
let swiper = new Swiper('.portafolio_container', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    mousewheel: true,
    keyboard: true,
  });