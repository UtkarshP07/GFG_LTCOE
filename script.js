document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".content-section-left").style.opacity = "1";
  }, 3200);

  setTimeout(function () {
    document.querySelector(".content-section-right").style.opacity = "1";
  }, 2000);
});

document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelectorAll(".navbar-buttons a").forEach(function (button) {
    button.style.display = button.style.display === "none" ? "block" : "none";
  });
});

function scrollToCouncil() {
  document.getElementById("council").scrollIntoView({ behavior: "smooth" });
}
