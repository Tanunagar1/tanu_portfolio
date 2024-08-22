var typed = new Typed('#element', {
    strings: ['Web developer ', 'Content Creator', 'a UI designer.'],
    typeSpeed: 50,
});

// <!-- // Light-darkmode script start here -->

document.getElementById('toggleLabel').addEventListener('click', toggleDarkMode);

        function toggleDarkMode() {
            const body = document.body;
            const icon = document.getElementById('icon');
            const toggleCheckbox = document.getElementById('LightModeToggle');

            body.classList.toggle('dark-mode');
            const isDarkMode = body.classList.contains('dark-mode');

            icon.textContent = isDarkMode ? '🌚' : '🌞 ';
            toggleCheckbox.checked = isDarkMode;
        }
        // <!-- Scroll animation script  -->
        AOS.init({
            offset: 300,
            duration: 700
        });