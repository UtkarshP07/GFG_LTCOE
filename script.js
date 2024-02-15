function toggleMenu(button) {
  button.classList.toggle("active");
  var navbarLinks = document.querySelector(".navbar-links");
  navbarLinks.classList.toggle("active");
}

function scrollToSection(sectionId, event) {
  event.preventDefault();
  var section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slide-active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " slide-active";
  setTimeout(showSlides, 2000); // Change slide every 3 seconds
}
document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("scroll-video");
  var videoContainer = document.getElementById("video-container");
  var fraction = 0.8;
  var played = false;

  window.addEventListener("scroll", function () {
    var bounding = videoContainer.getBoundingClientRect();
    if (
      bounding.top >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      !played
    ) {
      video.play();
      played = true;
      setTimeout(function () {
        video.removeAttribute("loop");
      }, 30000); // 30 seconds in milliseconds
      window.removeEventListener("scroll", this);
    }
  });
});

function currentSlide(n) {
  showSlides((slideIndex = n));
}
