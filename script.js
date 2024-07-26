document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll('.toggleButton');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });

    const toggleThemeButton = document.getElementById('toggleTheme');
    toggleThemeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
