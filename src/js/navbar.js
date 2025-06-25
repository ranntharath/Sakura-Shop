const menuBtn = document.getElementById("menu-toggle");
const navLinks = document.querySelectorAll(".nav-list");

const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

//active nav
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("text-primary-color");
  } else {
    link.classList.remove("text-primary-color");
  }
});
