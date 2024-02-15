function toggleMenu(button) {
  button.classList.toggle("active");
  var navbarLinks = document.querySelector(".navbar-links");
  navbarLinks.classList.toggle("active");
}

function scrollToSection(sectionId, event) {
  event.preventDefault(); // Prevent the default behavior of the anchor element
  var section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
}
