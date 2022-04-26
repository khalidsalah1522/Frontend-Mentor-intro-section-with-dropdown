const toggleMenu = document.querySelector(".menu-toggle");
const menuContainer = document.querySelector(".menu-container");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close-menu");
const slider = document.querySelectorAll("li");

toggleMenu.addEventListener("click", () => {
  menu.style.transform = "translateX(0)";
  menuContainer.style.transform = "translateX(0)";
});

close.addEventListener("click", () => {
  menu.style.transform = "translateX(100%)";
  menuContainer.style.transform = "translateX(100%)";
});

slider.forEach((h4) => {
  h4.addEventListener("click", (e) => {
    e.currentTarget.querySelector("ul").classList.toggle("show");
  });
});

console.log("SS ");
