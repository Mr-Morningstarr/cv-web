const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

// 1. Handle the click on the hamburger button
menuToggle.addEventListener('click', () => {
  if (navList.style.display === 'flex') {
    navList.style.display = 'none';
  } else {
    navList.style.display = 'flex';
  }
});

// 2. Automatically close the menu when a link is clicked
document.querySelectorAll('#nav-list li a').forEach(link => {
  link.addEventListener('click', () => {
    navList.style.display = 'none';
  });
});