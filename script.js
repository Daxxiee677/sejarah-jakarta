// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const sidebar = document.getElementById('sidebar');
    const modeToggle = document.getElementById('modeToggle');

    menuButton.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    });

    // Check local storage for dark mode preference
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});
