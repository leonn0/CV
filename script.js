document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const formSuccess = document.getElementById("formSuccess");
  const formError = document.getElementById("formError");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const url = contactForm.getAttribute("action");

    fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Show success message
          formSuccess.style.display = "block";
          formError.style.display = "none";
          // Reset form
          contactForm.reset();
          // Hide success message after 5 seconds
          setTimeout(() => {
            formSuccess.style.display = "none";
          }, 5000);
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        // Show error message
        formError.style.display = "block";
        formSuccess.style.display = "none";
        // Hide error message after 5 seconds
        setTimeout(() => {
          formError.style.display = "none";
        }, 5000);
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".project-slider");
  const slides = document.querySelectorAll(".project-card");
  const prevButton = document.querySelector(".slider-prev");
  const nextButton = document.querySelector(".slider-next");
  const indicators = document.querySelectorAll(".slide-indicator");

  let currentIndex = 0;

  function updateSlider() {
    // Hide all slides
    slides.forEach((slide) => slide.classList.remove("active"));
    indicators.forEach((indicator) => indicator.classList.remove("active"));

    // Show current slide
    slides[currentIndex].classList.add("active");
    indicators[currentIndex].classList.add("active");

    // Move the slider
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Next slide
  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
    updateSlider();
  });

  // Previous slide
  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop to the last slide
    updateSlider();
  });

  // Initialize the slider
  updateSlider();
});

// script.js
