document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById("hamburger-icon");
    if (hamburgerIcon) {
        hamburgerIcon.addEventListener("click", function() {
            const navLinks = document.getElementById("nav-links")
            navLinks.classList.toggle("active");
        });
    } else {
        console.error("Hamburger icon not found!")
    }
})