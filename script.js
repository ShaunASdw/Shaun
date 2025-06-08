// Toggle between light and dark mode
function toggleTheme() {
  document.body.classList.toggle('dark');
}

// Sections reveal on scroll
const sections = document.querySelectorAll("section");

function checkVisible(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight - 100 && rect.bottom > 100;
}

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    // Show section when scrolling into view
    if (section.getBoundingClientRect().top < window.innerHeight - 100) {
      section.classList.add("show");
    }

    // Only add 'active' to specific sections
    if (["about", "portfolio"].includes(section.id)) {
      if (checkVisible(section)) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    }
  });
});

// Intro screen fade out on click
const intro = document.getElementById('intro');
if (intro) {
  intro.addEventListener('click', function () {
    this.classList.add('fade-out');
  });

  intro.addEventListener('animationend', function () {
    this.style.display = 'none';
  });
}
