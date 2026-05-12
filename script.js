// ================= SCROLL =================
document.addEventListener("DOMContentLoaded", () => {
  window.scrollToProjects = function () {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
});

// ================= MODAL =================
let sliderImages = [];
let slideIndex = 0;
let autoSlide;

// OPEN MODAL
function openModal(id) {
  document.getElementById(id).style.display = "flex";

  stopAutoSlide(); // reset previous

  if (id === "p1") {
    sliderImages = [
      "img/lib1.png",
      "img/lib2.png",
      "img/lib3.png"
    ];
  } 
  else if (id === "p2") {
    sliderImages = [
      "img/bill1.png",
      "img/bill2.png",
      "img/bill3.png"
    ];
  }

  slideIndex = 0;
  showSlide(slideIndex);
  startAutoSlide();
}
// CLOSE MODAL
function closeModal(id) {
  document.getElementById(id).style.display = "none";
  stopAutoSlide();
}

// ================= SLIDER =================

// Show image
function showSlide(index) {
  // get currently opened modal
  const activeModal = document.querySelector(".modal[style*='flex']");
  if (!activeModal) return;

  // get image INSIDE that modal only
  const img = activeModal.querySelector(".slider-img");

  if (img && sliderImages.length > 0) {
    img.src = sliderImages[index];
  }
}
// Next
function nextSlide() {
  slideIndex = (slideIndex + 1) % sliderImages.length;
  showSlide(slideIndex);
}

// Prev
function prevSlide() {
  slideIndex = (slideIndex - 1 + sliderImages.length) % sliderImages.length;
  showSlide(slideIndex);
}

// AUTO SLIDE START
function startAutoSlide() {
  stopAutoSlide(); // avoid multiple intervals
  autoSlide = setInterval(nextSlide, 3000);
}

// AUTO SLIDE STOP
function stopAutoSlide() {
  clearInterval(autoSlide);
}

// ================= CLOSE MODAL OUTSIDE =================
window.addEventListener("click", function (e) {
  document.querySelectorAll(".modal").forEach(m => {
    if (e.target === m) {
      m.style.display = "none";
      stopAutoSlide();
    }
  });
});

// ================= ACTIVE NAV =================
window.addEventListener("scroll", () => {
  let currentSection = "";

  document.querySelectorAll("section").forEach(sec => {
    if (pageYOffset >= sec.offsetTop - 120) {
      currentSection = sec.id;
    }
  });

  document.querySelectorAll("nav a").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});

// ================= TYPING EFFECT =================
const text = "Java Backend Developer | Spring Boot | REST APIs";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 40);
  }
}

window.onload = typeEffect;
// ================= AOS =================
AOS.init({
  duration: 1000,
  once: true
});
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

function downloadResume() {
  window.open("VetriselvanResume.pdf", "_blank"); // replace with your resume file
}