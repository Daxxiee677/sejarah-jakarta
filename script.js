// script.js
document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('modeToggle');
    const menuButton = document.getElementById('menuButton');
    const sidebar = document.getElementById('sidebar');

    modeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    menuButton.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
});
