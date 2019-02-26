let tracker = "open";

function toggleMenu () {
  let image = document.querySelector("#menuImg");
  if (tracker=="open") {
    image.src = "img/nav-hamburger-close.png";
    tracker = "close";
  } else {
    image.src = "img/nav-hamburger.png";
    tracker = "open";
  }
};