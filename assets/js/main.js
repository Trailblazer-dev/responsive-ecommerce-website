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
