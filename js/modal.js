var loginLink = document.querySelector(".button-type");
var loginPopup = document.querySelector(".modal");
var loginClose = loginPopup.querySelector(".botton-close");

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
});