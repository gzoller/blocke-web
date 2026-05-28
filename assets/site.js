const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#year");
const animatedNodes = document.querySelectorAll(".hero, .page-hero, .feature-panel, .service-card, .info-card, .banner, .timeline-list article");

if (year) {
  year.textContent = new Date().getFullYear();
}

animatedNodes.forEach((node) => {
  node.setAttribute("data-animate", "");
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  animatedNodes.forEach((node) => observer.observe(node));
} else {
  animatedNodes.forEach((node) => node.classList.add("is-visible"));
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}
