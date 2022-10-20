'use strict';
const btn = document.querySelector('.main__button');
const icons = document.querySelector('.icons');
const overlay = document.querySelector('.overlay');
console.log(icons);

btn.addEventListener('click', function () {
  icons.classList.toggle('hidden');
  overlay.classList.toggle('overlay-none');
});

overlay.addEventListener('click', function () {
  overlay.classList.toggle('overlay-none');
  icons.classList.toggle('hidden');
});
