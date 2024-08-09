/* Created by Tivotal */

let tabs = document.querySelectorAll(".tab");
let tabContents = document.querySelectorAll(".tab-content div");
let indicator = document.querySelector(".indicator");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tabItem) => tabItem.classList.remove("active"));

    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    tab.classList.add("active");
    indicator.style.left = index * 120 + "px";
    tabContents[index].classList.add("active");
  });
});
