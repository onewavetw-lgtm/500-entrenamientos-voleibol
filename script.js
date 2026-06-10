document.addEventListener("DOMContentLoaded", () => {
  // 1. Countdown Timer
  let timeLeft = 15 * 60; // 15 minutes
  const minEl = document.getElementById("timer-minutes");
  const secEl = document.getElementById("timer-seconds");

  if (minEl && secEl) {
    const timer = setInterval(() => {
      timeLeft = Math.max(0, timeLeft - 1);
      const m = Math.floor(timeLeft / 60);
      const s = timeLeft % 60;
      minEl.textContent = String(m).padStart(2, "0");
      secEl.textContent = String(s).padStart(2, "0");

      if (timeLeft <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  // 2. FAQ Accordion
  const faqs = document.querySelectorAll(".faq-item");
  faqs.forEach((faq) => {
    const btn = faq.querySelector(".faq-btn");
    const content = faq.querySelector(".accordion-content");
    const icon = faq.querySelector(".faq-icon");

    btn.addEventListener("click", () => {
      const isOpen = content.classList.contains("open");

      // Close all
      document
        .querySelectorAll(".accordion-content")
        .forEach((c) => c.classList.remove("open"));
      document.querySelectorAll(".faq-icon").forEach((i) => {
        i.style.transform = "rotate(0deg)";
        i.classList.remove("bg-blue-100");
      });

      // Open clicked
      if (!isOpen) {
        content.classList.add("open");
        icon.style.transform = "rotate(180deg)";
        icon.classList.add("bg-blue-100");
      }
    });
  });

  // 3. Intersection Observer for Fade-in animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // observer.unobserve(entry.target); // Optional: if you want it to trigger only once
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

  // 5. Initialize Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});
