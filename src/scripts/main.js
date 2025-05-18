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
    text.innerHTML = `<span class="highlight" style="color: rgba(229, 53, 30, 0.832);">${currentWord.slice(
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

    // Scroll-based navbar highlight
    const sections = document.querySelectorAll("section, div[id]");
    let currentSection = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        currentSection = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      navLinks.forEach((nav) => nav.classList.remove("active"));
      document.querySelector('.nav-link[href="#home"]').classList.add("active");
    }, 500);
  });

  // scroll to top on refresh
  window.addEventListener("load", function () {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  });

  // project section: horizontal scroll buttons
  const scrollContainer = document.getElementById("scrollableProjects");
  const scrollLeftBtn = document.getElementById("scrollLeft");
  const scrollRightBtn = document.getElementById("scrollRight");

  if (scrollContainer && scrollLeftBtn && scrollRightBtn) {
    scrollLeftBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: -350, behavior: "smooth" });
    });

    scrollRightBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: 350, behavior: "smooth" });
    });
  }
});
