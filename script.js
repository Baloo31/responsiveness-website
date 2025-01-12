function toggleNavbar() {
    // Toggle the "active" class on the menu
    const navbarMenu = document.getElementById("navbar-menu");
    navbarMenu.classList.toggle("active");

    // Change the button content based on the menu state
    const navbarToggle = document.getElementById("navbar-toggle");
    if (navbarMenu.classList.contains("active")) {
        navbarToggle.textContent = "X"; // Set to 'X' when active
    } else {
        navbarToggle.textContent = "\u2630"; // Set back to the hamburger icon
    }
}

// Get the button
const toTopButton = document.getElementById("toTopButton");

// Show the button when the user scrolls down 100px
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
};

// Scroll smoothly to the top when the button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
