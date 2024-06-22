// script.js
document.addEventListener('DOMContentLoaded', function() {
    var navToggle = document.querySelector('header nav ul');
    document.querySelector('header .burger-menu').addEventListener('click', function() {
        navToggle.classList.toggle('active');
    });
});
