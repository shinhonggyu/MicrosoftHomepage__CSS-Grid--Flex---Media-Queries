const toggle = document.querySelector(".menu-btn");
const menu = document.querySelector(".main-nav ul.main-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});
