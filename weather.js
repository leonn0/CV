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
