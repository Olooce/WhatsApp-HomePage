const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

dropdown.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent bubbling up and closing on second click
  dropdownContent.classList.toggle("show");
});

// To close dropdown menu when clicking outside
document.addEventListener("click", function (event) {
  if (!dropdown.contains(event.target)) {
    // Check if clicked outside dropdown
    dropdownContent.classList.remove("show");
  }
});
