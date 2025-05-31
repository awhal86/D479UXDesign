document.addEventListener("DOMContentLoaded", () => {
  // ======== NAVIGATION TOGGLE ========
  const hamburgerIcon = document.getElementById("hamburger-icon");
  if (hamburgerIcon) {
    hamburgerIcon.addEventListener("click", function () {
      const navLinks = document.getElementById("nav-links");
      navLinks.classList.toggle("active");
    });
  } else {
    console.error("Hamburger icon not found!");
  }

  // ======== ACTIVITY SECTION FILTERING ========
  const filterButtons = document.querySelectorAll(".filter-btn");
  const sections = document.querySelectorAll(".activity-section");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Update active state
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Show/hide sections
      sections.forEach(section => {
        const category = section.getAttribute("data-category");
        section.style.display = (filter === "all" || category === filter) ? "" : "none";
      });
    });
  });

  // ======== LODGING CARD FILTERING BY TYPE & PRICE ========
  const typeButtons = document.querySelectorAll(".type-btn");
  const priceButtons = document.querySelectorAll(".price-btn");
  const cards = document.querySelectorAll(".lodging-card");
  const noResults = document.getElementById("no-results");
  const resetBtn = document.getElementById("reset-filters");

  let selectedType = "all";
  let selectedPrice = "all";

  const filterCards = () => {
    let anyVisible = false;

    cards.forEach(card => {
      const cardType = card.getAttribute("data-type");
      const cardPrice = card.getAttribute("data-price");

      const typeMatch = selectedType === "all" || cardType === selectedType;
      const priceMatch = selectedPrice === "all" || cardPrice === selectedPrice;

      if (typeMatch && priceMatch) {
        card.style.display = "";
        anyVisible = true;
      } else {
        card.style.display = "none";
      }
    });

    noResults.style.display = anyVisible ? "none" : "block";
  };

  const updateActiveClass = (buttons, attribute, selectedValue) => {
    buttons.forEach(button => {
      const buttonValue = button.getAttribute(`data-${attribute}`);
      button.classList.toggle("active", buttonValue === selectedValue);
    });
  };

  typeButtons.forEach(button => {
    button.addEventListener("click", () => {
      selectedType = button.getAttribute("data-type");
      updateActiveClass(typeButtons, "type", selectedType);
      filterCards();
    });
  });

  priceButtons.forEach(button => {
    button.addEventListener("click", () => {
      selectedPrice = button.getAttribute("data-price");
      updateActiveClass(priceButtons, "price", selectedPrice);
      filterCards();
    });
  });

  resetBtn.addEventListener("click", () => {
    selectedType = "all";
    selectedPrice = "all";
    updateActiveClass(typeButtons, "type", selectedType);
    updateActiveClass(priceButtons, "price", selectedPrice);
    filterCards();
  });

  // ======== INITIALIZATION ========
  updateActiveClass(typeButtons, "type", selectedType);
  updateActiveClass(priceButtons, "price", selectedPrice);
  filterCards();
});
