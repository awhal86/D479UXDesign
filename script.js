document.addEventListener('DOMContentLoaded', function () {

    const prefix = location.pathname.includes ('/pages/') ? '../' : './';
    // Helper function to fetch and inject HTML content
    const loadContent = (url, containerId) => {
        return fetch(url)
            .then(response => response.ok ? response.text() : Promise.reject('Failed to load'))
            .then(data => {
                document.getElementById(containerId).innerHTML = data;
                return true; // Return true to signal that content was loaded
            })
            .catch(error => {
                console.error(`Error fetching ${url}:`, error);
                return false; // Return false if failed
            });
    };

    // Load the nav.html and footer.html content
    Promise.all([
        loadContent('./components/nav.html', 'nav'),
        loadContent('./components/footer.html', 'footer')
    ]).then(([navLoaded, footerLoaded]) => {
        if (navLoaded) {
            // Once nav.html is successfully loaded, set up the hamburger icon
            const hamburgerIcon = document.getElementById("hamburger-icon");
            if (hamburgerIcon) {
                hamburgerIcon.addEventListener("click", function() {
                    const navLinks = document.getElementById("nav-links");
                    navLinks.classList.toggle("active");  // Toggle the 'active' class
                });
            } else {
                console.error("Hamburger icon not found!");
            }
        }
    });
});
