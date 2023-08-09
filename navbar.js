const Menu = document.getElementById('burger');
const closeMenu = document.querySelector('.close-icon');
const openMenu = document.querySelector('#hamlogo');
const listbtn1 = document.querySelector('#list32');
const listbtn2 = document.querySelector('#list33');
const listbtn3 = document.querySelector('#list34');
const listbtn4 = document.querySelector('#list35');
const listbtn5 = document.querySelector('#list36');
const listbtn6 = document.querySelector('#list37');

const showlink = () => {
  Menu.style.display = 'block';
};

const hidelink = () => {
  Menu.style.display = 'none';
};

closeMenu.addEventListener('click', hidelink);
openMenu.addEventListener('click', showlink);
listbtn1.addEventListener('click', hidelink);
listbtn2.addEventListener('click', hidelink);
listbtn3.addEventListener('click', hidelink);
listbtn4.addEventListener('click', hidelink);
listbtn5.addEventListener('click', hidelink);
listbtn6.addEventListener('click', hidelink);