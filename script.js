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
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const sections = document.querySelectorAll(".activity-section");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Show/hide sections based on filter
      sections.forEach(section => {
        const category = section.getAttribute("data-category");
        if (filter === "all" || filter === category) {
          section.style.display = "";
        } else {
          section.style.display = "none";
        }
      });
    });
  });
});
