function toggleMenu(button) {
  button.classList.toggle("active");
  var navbarLinks = document.querySelector(".navbar-links");
  navbarLinks.classList.toggle("active");
}
function scrollToCouncil() {
  document.getElementById("council").scrollIntoView({ behavior: "smooth" });
}

function scrollToEvent() {
  document.getElementById("events").scrollIntoView({ behavior: "smooth" });
}
