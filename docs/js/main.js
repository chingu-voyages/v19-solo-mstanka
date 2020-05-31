///// Navigation

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

///// Contact form

const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const yourMessage = document.getElementById("message");

form.addEventListener("click", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (firstName.value.trim() === "") {
    showError(firstName, "Please fill in first name");
  } else {
    removeError(firstName);
  }

  if (lastName.value.trim() === "") {
    showError(lastName, "Please fill in last name");
  } else {
    removeError(lastName);
  }

  if (email.value.trim() === "" || !regEx.test(email.value.trim())) {
    showError(email, "Please fill in your email");
  } else {
    removeError(email);
  }

  if (yourMessage.value === "") {
    showError(yourMessage, "Please fill in your message");
  } else {
    removeError(yourMessage);
  }
}

function showError(input, errMessage) {
  let formInput = input.parentElement;
  let msgError = formInput.querySelector(".form__msg-error");
  let iconError = formInput.querySelector(".form__icon-error");
  msgError.style.visibility = "visible";
  msgError.innerText = errMessage;
  iconError.style.visibility = "visible";
}

function removeError(input) {
  let formInput = input.parentElement;
  let msgError = formInput.querySelector(".form__msg-error");
  let iconError = formInput.querySelector(".form__icon-error");
  msgError.style.visibility = "hidden";
  iconError.style.visibility = "hidden";
}
