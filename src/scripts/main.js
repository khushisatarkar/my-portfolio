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
      setTimeout(type, 2000);
    } else if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 100 : 75);
    }
  }

  type();

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      navLinks.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");

      // scroll smoothly to the target section
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // scroll to top btn
  const scrollToTopButton = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopButton.classList.add("show");
    } else {
      scrollToTopButton.classList.remove("show");
    }
  });

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // scroll to top on refresh
  window.addEventListener("load", function () {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  });
});
