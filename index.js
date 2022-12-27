const mobile_nav=document.querySelector('.mobile-navbar-btn');

const nav_header=document.querySelector('.header');
const home=document.getElementById('gohome');

home.addEventListener('click',gohome);

function gohome(){
    nav_header.classList.remove('active');
}


mobile_nav.addEventListener('click',toggleNavbar);

function toggleNavbar(){
    // alert('hi');
    nav_header.classList.toggle('active');
}

