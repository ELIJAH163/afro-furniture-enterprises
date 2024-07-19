// script.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Load the saved theme preference, if any
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Save the theme preference to local storage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.setItem('theme', '');
        }
    });
});
