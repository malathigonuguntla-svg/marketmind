// Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Demo Button
document.getElementById("demoBtn").addEventListener("click", () => {
  alert("Launching AI Dashboard Demo...");
});

// Contact Form
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name.length < 3) {
    message.textContent = "Please enter a valid name.";
    return;
  }

  message.textContent = "Thank you! Our team will contact you shortly.";
  form.reset();
});
