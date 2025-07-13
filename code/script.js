// Theme toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
  const body = document.body;
  const theme = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
  body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);
  typeText();
  ScrollReveal().reveal('.section-title, .card, .skills-list li', { 
    delay: 100,
    distance: '30px',
    duration: 800,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 100
  });
});

// Typing effect
const textArray = ["Vyshnavi", "Cloud Engineer", "DevOps Enthusiast"];
let textIndex = 0, charIndex = 0;

function typeText() {
  const typedTextSpan = document.querySelector(".typed-text");
  if (charIndex < textArray[textIndex].length) {
    typedTextSpan.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(() => {
      charIndex = 0;
      typedTextSpan.textContent = "";
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(typeText, 500);
    }, 1500);
  }
}
