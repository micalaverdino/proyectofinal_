// Variables
const navbarMenu = document.querySelector(".navbar .links");
const menuBtn = document.querySelector(".menu-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");
const marcasDropdown = document.getElementById("marcas-dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

// Mostrar menú móvil
menuBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Mostrar formulario
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Ocultar formulario
hidePopupBtn.addEventListener("click", () => {
    document.body.classList.remove("show-popup");
});

// Alternar entre formularios de login y signup
loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formBoxes.forEach(box => box.classList.remove("show-signup"));
        document.querySelector(link.id === "signup-link" ? ".signup" : ".login").classList.add("show-signup");
    });
});

// // Mostrar/Ocultar el menú desplegable de Marcas
// marcasDropdown.addEventListener("click", (e) => {
//     e.preventDefault(); // Evita que el enlace redirija
//     const parentDropdown = marcasDropdown.parentElement;
//     parentDropdown.classList.toggle("show");
// });

document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.links').classList.toggle('show-menu');
});

document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        item.nextElementSibling.classList.toggle('show-menu');
    });
});

// JavaScript para mostrar/ocultar el menú en mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const links = document.querySelector('.navbar .links');

    menuBtn.addEventListener('click', function() {
        links.classList.toggle('show-menu');
    });
});

// PAGINA LAMBO
// script.js

function toggleImage(button) {
    const image = button.nextElementSibling;
    if (image) {
        image.classList.toggle('hidden');
    }
}

