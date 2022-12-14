let imgs = document.getElementById('img');

window.onscroll = function () {
  let value = scrollY;
  imgs.style.left = value + 'px';
};

function darkMode() {
  var element = document.body;
  var content = document.getElementById("DarkModetext");
  element.className = "dark-mode";
  content.innerText = "Dark Mode is ON";
}
function lightMode() {
  var element = document.body;
  var content = document.getElementById("DarkModetext");
  element.className = "light-mode";
  content.innerText = "Dark Mode is OFF";
}