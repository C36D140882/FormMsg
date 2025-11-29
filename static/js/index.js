/* whatsapp*/
function openWhatsApp() {
  let phone = "6382790456";
  let msg = "I NEED FINAL YEAR PROJECT.";
  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(msg);
  window.open(url, "_blank");
}

/* project silde */
let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[n].style.display = "block";
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

document.querySelector(".next").onclick = nextSlide;
document.querySelector(".prev").onclick = prevSlide;

setInterval(nextSlide, 3000);

showSlide(index);

/* feedback slide */
let i = 0;
const feedbacks = document.querySelectorAll(".feedback-slide");

function showFeedback() {
  feedbacks.forEach((slide) => slide.classList.remove("active"));
  feedbacks[i].classList.add("active");
  i = (i + 1) % feedbacks.length;
}

setInterval(showFeedback, 3000);
showFeedback();

document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    this.classList.toggle("active");
  });

// JavaScript for slider functionality and other interactions
document.addEventListener("DOMContentLoaded", function () {
  // Image Slider
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentSlide = 0;

  function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove("active"));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
  nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));

  // Auto slide every 5 seconds
  setInterval(() => showSlide(currentSlide + 1), 5000);

  // Feedback Slider
  const feedbackSlides = document.querySelectorAll(".feedback-slide");
  let currentFeedbackSlide = 0;

  function showFeedbackSlide(n) {
    feedbackSlides.forEach((slide) => slide.classList.remove("active"));
    currentFeedbackSlide = (n + feedbackSlides.length) % feedbackSlides.length;
    feedbackSlides[currentFeedbackSlide].classList.add("active");
  }

  // Auto change feedback every 7 seconds
  setInterval(() => showFeedbackSlide(currentFeedbackSlide + 1), 7000);

  // Form submission
  const contactForm = document.querySelector("#contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Add your form submission logic here
      alert("Thank you for your message! We will get back to you soon.");
      this.reset();
    });
  }

  // Loading animation
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });
});
