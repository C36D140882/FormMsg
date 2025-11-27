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
