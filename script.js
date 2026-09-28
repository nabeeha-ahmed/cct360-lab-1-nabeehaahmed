const welcomeText = document.getElementById("welcome-text");
const coffeeLayer = document.getElementById("coffee-layer");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function updateParallax() {
  if (reducedMotion.matches) {
    welcomeText.style.transform = "none";
    coffeeLayer.style.transform = "none";
  } else {
    const distance = Math.min(window.scrollY, 400);
    welcomeText.style.transform = "translateY(" + distance * 0.15 + "px)";
    coffeeLayer.style.transform = "translateY(" + distance * 0.6 + "px)";
  }
}

window.addEventListener("scroll", updateParallax);
reducedMotion.addEventListener("change", updateParallax);
updateParallax();
