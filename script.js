let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});
