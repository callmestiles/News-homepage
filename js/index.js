// Navigation functionality
const nav = document.querySelector('#nav');
const navToggle = document.querySelector(".mobile-nav-toggle");
const overlay = document.querySelector('.overlay');

navToggle.addEventListener('click', () =>
{
    const visibility = nav.getAttribute('data-visible');
    if (visibility === "false"){
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('data-expanded', true);
        overlay.setAttribute('data-expanded',true);
    }else{
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('data-expanded', false);
        overlay.setAttribute('data-expanded', false);
    }
})