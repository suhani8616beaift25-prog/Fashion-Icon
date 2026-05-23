/* ================================
   FASHION ICON — MAIN JS
   Showcase of JavaScript Interactivity
   ================================ */

// -------------------- NAVBAR SCROLL EFFECT --------------------
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// -------------------- FADE REVEAL ON SCROLL --------------------
const fadeElements = document.querySelectorAll(".card, .house-card");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

// -------------------- RANDOM STYLE TIPS --------------------
const styleTips = [
  "Neutral makeup enhances timeless elegance.",
  "Silver jewellery pairs beautifully with couture.",
  "Oversized jackets add modern streetwear flair.",
  "Structured shoulders balance silhouettes.",
  "Layered looks create graceful movement.",
  "Monochrome styling refines luxury aesthetics.",
  "Wide-leg trousers sculpt harmony in outfits."
];

function getRandomTip() {
  const index = Math.floor(Math.random() * styleTips.length);
  return styleTips[index];
}

// -------------------- STYLE GUIDE HOVER OVERLAY --------------------
document.querySelectorAll(".card, .house-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    const guide = document.createElement("div");
    guide.className = "style-guide-overlay";
    guide.innerHTML = `
      <h4>Style Guide ✨</h4>
      <p>${getRandomTip()}</p>
      <button class="style-btn">Explore Look</button>
    `;
    card.appendChild(guide);

    guide.querySelector(".style-btn").addEventListener("click", () => {
      openModal("Explore curated looks with styling tips!");
    });
  });

  card.addEventListener("mouseleave", () => {
    const guide = card.querySelector(".style-guide-overlay");
    if (guide) guide.remove();
  });
});

// -------------------- SMOOTH SCROLL NAVIGATION --------------------
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// -------------------- FILTER BUTTONS --------------------
const filterButtons = document.querySelectorAll(".filter-buttons button");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.textContent.trim();
    document.querySelectorAll(".card").forEach(card => {
      const cardCategory = card.querySelector(".category").textContent.trim();
      if (category === "All" || cardCategory === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// -------------------- MODAL POPUP --------------------
function openModal(message) {
  let modal = document.querySelector(".custom-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "custom-modal";
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-btn">&times;</span>
        <p>${message}</p>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector(".close-btn").addEventListener("click", () => {
      modal.remove();
    });
  }
}

// -------------------- QUOTE SECTION DYNAMIC --------------------
const quotes = [
  "Fashion is the armor to survive everyday life. — Bill Cunningham",
  "Style is a way to say who you are without speaking. — Rachel Zoe",
  "Elegance is not standing out, but being remembered. — Giorgio Armani",
  "Fashion fades, only style remains the same. — Coco Chanel"
];

function cycleQuotes() {
  const quoteBox = document.querySelector(".quote-box");
  if (!quoteBox) return;
  let index = 0;
  setInterval(() => {
    quoteBox.innerHTML = `<div class="quote-line">${quotes[index]}</div>`;
    index = (index + 1) % quotes.length;
  }, 5000);
}
cycleQuotes();

// -------------------- FOOTER YEAR AUTO --------------------
const footerBottom = document.querySelector(".bottom");
if (footerBottom) {
  const year = new Date().getFullYear();
  footerBottom.textContent = `© ${year} Fashion Icon — All Rights Reserved`;
}

// -------------------- INTERACTIVE ATELIER FORM --------------------
const atelierForm = document.querySelector(".atelier-form");
if (atelierForm) {
  atelierForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = atelierForm.querySelector("input[type='email']").value;
    const password = atelierForm.querySelector("input[type='password']").value;

    if (!email || !password) {
      openModal("Please fill in all fields.");
      return;
    }
    openModal("Welcome to the Private Atelier Experience!");
    atelierForm.reset();
  });
}

// -------------------- CONTACT FORM VALIDATION --------------------
const contactForm = document.querySelector(".contact-form-premium");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = contactForm.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
      }
    });

    if (!valid) {
      openModal("Please complete all fields.");
      return;
    }

    openModal("Message sent successfully!");
    contactForm.reset();
  });
}

// -------------------- RANDOM BACKGROUND EFFECT --------------------
function randomBackground() {
  const hero = document.querySelector(".hero-bg img");
  if (!hero) return;
  const images = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1800&q=90",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1800&q=90",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1800&q=90"
  ];
  let index = 0;
  setInterval(() => {
    hero.src = images[index];
    index = (index + 1) % images.length;
  }, 10000);
}
randomBackground();

// -------------------- KEYBOARD SHORTCUTS --------------------
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modal = document.querySelector(".custom-modal");
    if (modal) modal.remove();
  }
  if (e.key === "ArrowDown") {
    window.scrollBy({ top: 200, behavior: "smooth" });
  }
  if (e.key === "ArrowUp") {
    window.scrollBy({ top: -200, behavior: "smooth" });
  }
});

// -------------------- END OF FILE --------------------
// NAVBAR LINKS — Navigate to other pages or sections
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    // If it's an internal section (starts with #), smooth scroll
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Otherwise, let browser navigate normally
      // No preventDefault here
      window.location.href = href;
    }
  });
});
window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  document.querySelectorAll(".hero-bg, .archive-bg, .houses-bg")
  .forEach(bg => {

    bg.style.transform =
      `translateY(${scrollY * 0.25}px) scale(1.08)`;

  });

});
