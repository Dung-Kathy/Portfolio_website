const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navPanel = document.querySelector("[data-nav-panel]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeIcon = document.querySelector(".theme-icon");
const themeLabel = document.querySelector(".theme-label");
const year = document.querySelector("[data-year]");
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
const revealItems = document.querySelectorAll(".reveal");
const heroDecor = document.querySelectorAll(".brush, .code-cloud");
const backToTop = document.querySelector("[data-back-to-top]");
const projectImages = document.querySelectorAll(".project-image");

const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

document.documentElement.dataset.theme = initialTheme;
updateThemeIcon(initialTheme);

if (year) {
  year.textContent = new Date().getFullYear();
}

projectImages.forEach((image) => {
  image.addEventListener("error", () => {
    image.removeAttribute("src");
    image.classList.add("image-missing");
  });
});

function updateThemeIcon(theme) {
  if (!themeIcon) return;
  const isDark = theme === "dark";
  themeIcon.textContent = isDark ? "L" : "D";
  if (themeLabel) {
    themeLabel.textContent = isDark ? "Clair" : "Sombre";
  }
  themeToggle?.setAttribute("aria-label", isDark ? "Activer le mode clair" : "Activer le mode sombre");
}

function closeMobileMenu() {
  navPanel?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
}

function updateHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
  backToTop?.classList.toggle("is-visible", window.scrollY > 680);
}

navToggle?.addEventListener("click", () => {
  const isOpen = navPanel.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

themeToggle?.addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme;
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
  updateThemeIcon(nextTheme);
});

backToTop?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
  });
});

window.addEventListener("scroll", updateHeaderState, { passive: true });
updateHeaderState();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -80px 0px",
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  {
    threshold: 0.42,
  }
);

sections.forEach((section) => sectionObserver.observe(section));

let ticking = false;

function updateHeroParallax() {
  const offset = window.scrollY * 0.08;

  heroDecor.forEach((item, index) => {
    const direction = index === 0 ? 1 : -1;
    item.style.translate = `0 ${offset * direction}px`;
  });

  ticking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!ticking) {
      window.requestAnimationFrame(updateHeroParallax);
      ticking = true;
    }
  },
  { passive: true }
);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileMenu();
  }
});
