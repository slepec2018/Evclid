"use strict"
const buttonSearch = document.querySelector(".header_search");
const buttonClose = document.querySelector(".header_form_close");
const headerForm = document.querySelector(".header_form");

buttonSearch.addEventListener("click", () => {
    headerForm.classList.add("header_form_active");
});

buttonClose.addEventListener("click", (event) => {
    event.preventDefault();
    headerForm.classList.remove("header_form_active");
});


const navButton = document.querySelector(".header_button_menu");
const headerNav = document.querySelector(".header_nav");
const navButtonClose = document.querySelector(".header_nav_close");

navButton.addEventListener("click", () => {
    headerNav.classList.add("header_nav_active");
})
navButtonClose.addEventListener("click", () => {
    headerNav.classList.remove("header_nav_active");
})
