const mainNav = document.getElementById("js-menu");
const navToggle = document.getElementById("js-navbar-toggle");
const menuIcon = document.getElementById("js-menu-icon");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");

  if (mainNav.classList.contains("active")) {
    menuIcon.removeAttribute("src", "img/menu-open.svg");
    menuIcon.setAttribute("src", "img/menu-close.svg");
  } else {
    menuIcon.removeAttribute("src", "img/menu-close.svg");
    menuIcon.setAttribute("src", "img/menu-open.svg");
  }
});
