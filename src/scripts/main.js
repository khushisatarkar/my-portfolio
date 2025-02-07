document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector(".red-box");
  const words = [
    "Frontend Developer",
    "Software Developer",
    "Cybersecurity Enthusiast",
    "AI/ML Developer",
    "Java Developer",
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    if (!text) return;

    const currentWord = words[wordIndex];
    text.innerHTML = `<span class="highlight">${currentWord.slice(
      0,
      charIndex
    )}</span>`;

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    if (charIndex === currentWord.length + 1) {
      isDeleting = true;
      setTimeout(type, 2000); // pause before deleting
    } else if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500); // pause before typing next word
    } else {
      setTimeout(type, isDeleting ? 100 : 75); // typing speed 75
    }
  }

  type();
});

const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "flex";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// on refresh, the top page is displayed
window.addEventListener("load", function () {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
});
