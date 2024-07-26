/*===== MENU SHOW =====*/
const navToggle = document.getElementById("nav-toggle");

const showMenu = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("show");
};
navToggle.addEventListener("click", showMenu);

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
  // remove the show
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Header shadow

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  this.scrollY >= 58
    ? header.classList.add("header__shadow")
    : header.classList.remove("header__shadow");
});

// Active-link

const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*="#' + sectionId + '"]')
        .classList.add("active");
    } else {
      document
        .querySelector('.nav__menu a[href*="#' + sectionId + '"]')
        .classList.remove("active");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// SWIPER
const swiper = new Swiper(".featured__container, .new__container", {
  // Optional parameters
  direction: "horizontal",
  grabCursor: true,
  slidesPerView: 1,
  freeMode: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// REVEAL

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay:700,
    reset: true,
});

sr.reveal('.home__data')
sr.reveal('.home__img,.newsletter__form',{origin:'right',delay:950,distance:'100px'})
sr.reveal('.collection__box,.sponsor__logo',{interval:100,delay:1000})
sr.reveal('.section__title',{origin:'bottom',delay:900})
sr.reveal('.featured__container,.new__container',{delay:1200})
sr.reveal('.new__box',{delay:1400,interval:100,origin:'left'})
sr.reveal('.section__subtitle,.offer__bg,.newsletter__description',{origin:'left',delay:1400,distance:'200px'})
sr.reveal('.footer__box',{origin:'bottom',delay:1600,interval:100})
sr.reveal('.footer__copy',{origin:'right',distance:'20px'})


