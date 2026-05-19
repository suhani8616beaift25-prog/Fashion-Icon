// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", () => {

  const nav = document.querySelector(".nav");

  if(window.scrollY > 50){

    nav.style.background = "rgba(0,0,0,0.55)";
    nav.style.backdropFilter = "blur(16px)";

  } else {

    nav.style.background = "rgba(255,255,255,0.08)";
    nav.style.backdropFilter = "blur(14px)";

  }

});

// FADE REVEAL

const fadeElements = document.querySelectorAll(".card, .house-card");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });

}, {
  threshold:0.2
});

fadeElements.forEach((el) => {

  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "1s";

  observer.observe(el);

});