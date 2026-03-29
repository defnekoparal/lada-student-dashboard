// Smooth header shrink
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");

  if (window.scrollY > 80) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => {
  observer.observe(el);
});

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  header.style.transform = `translateY(${window.scrollY * 0.2}px)`;
});
