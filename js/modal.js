var linkType = document.querySelector(".button-type");
var typePopup = document.querySelector(".modal");
var typeClose = typePopup.querySelector(".botton-close");

linkType.addEventListener("click", function (evt) {
  evt.preventDefault();
  typePopup.classList.add("modal-show");
});

typeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  typePopup.classList.remove("modal-show");
});