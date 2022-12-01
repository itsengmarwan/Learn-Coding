let imgs = document.getElementById('img');

window.onscroll = function () {
  let value = scrollY;
  imgs.style.left = value + 'px';
};
