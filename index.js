
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle"); // Select the toggle button
    const mobileMenu = document.getElementById("mobile-menu"); // Select the mobile menu
  
    // Add click event listener to the toggle button
    menuToggle.addEventListener("click", () => {
      // Toggle the "hidden" class to show or hide the mobile menu
      mobileMenu.classList.toggle("hidden");
  
      // Optional: Add animation for better user experience
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("animate-fade-in");
      } else {
        mobileMenu.classList.remove("animate-fade-in");
      }
    });
  });