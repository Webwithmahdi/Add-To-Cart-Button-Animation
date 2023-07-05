const button = document.querySelector(".add-cart");
const buttonDefault = document.querySelector(".button-default");
const icon = document.querySelector(".button-icon");
const iconInner = document.querySelector(".button-icon span");

button.addEventListener("click", function () {
  buttonDefault.style.width = "95px";
  icon.style.width = "43px";
  setTimeout(function () {
    iconInner.style.transform = "translateX(0) rotate(-40deg)";
  }, 200);
  setTimeout(function () {
    iconInner.style.transform = "translateX(0) rotate(0deg)";
  }, 400);
  setTimeout(function () {
    buttonDefault.style.width = "0";
    icon.style.width = "100%";
  }, 1100);
  setTimeout(function () {
    buttonDefault.style.right = "0";
    buttonDefault.style.left = "unset";
  }, 1400);
  setTimeout(function () {
    icon.style.left = "0";
    icon.style.right = "unset";
  }, 1500);
  setTimeout(function () {
    buttonDefault.style.width = "100%";
    buttonDefault.innerText = "Added";
    icon.style.width = "0";
    icon.style.overflow = "hidden";
  }, 2000);
});
