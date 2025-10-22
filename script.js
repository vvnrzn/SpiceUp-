document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.getElementById("menu-btn");
  const mobileNav = document.querySelector(".mobile-nav");

  menuBtn.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    menuBtn.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", isOpen);
  });
});
