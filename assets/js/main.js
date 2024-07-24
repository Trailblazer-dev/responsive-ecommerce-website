/*===== MENU SHOW =====*/ 
const   navToggle = document.getElementById('nav-toggle');

const showMenu = ()=>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}
navToggle.addEventListener('click', showMenu);

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction () {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
// remove the show
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction)); 