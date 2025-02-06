document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".red-box");
    const words = [
        "Frontend Developer",
        "Software Developer",
        "Cybersecurity Enthusiast",
        "AI/ML Developer",
        "Java Developer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        if (!text) return;

        const currentWord = words[wordIndex];
        text.innerHTML = `<span class="highlight">${currentWord.slice(0, charIndex)}</span>`; 

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        if (charIndex === currentWord.length + 1) {
            isDeleting = true;
            setTimeout(type, 2000); // Pause before deleting
        } else if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500); // Pause before typing next word
        } else {
            setTimeout(type, isDeleting ? 100 : 75); // typing speed 75
        }
    }

    type();
});
