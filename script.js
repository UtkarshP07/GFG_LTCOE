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

function currentSlide(n) {
  showSlides((slideIndex = n));
}
