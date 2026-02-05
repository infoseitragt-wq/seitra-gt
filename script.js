console.log("Hola, JS funcionando")
const sections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    observer.observe(section);
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  document.getElementById("scroll-progress").style.width = scrollPercent + "%";
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {

    const answer = question.nextElementSibling;
    const icon = question.querySelector("span");

    // Cerrar las demás
    document.querySelectorAll(".faq-answer").forEach((item) => {
      if (item !== answer) {
        item.style.maxHeight = null;
        item.previousElementSibling.querySelector("span").textContent = "+";
      }
    });

    // Toggle actual
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      icon.textContent = "+";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.textContent = "−";
    }

  });
});

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  preloader.style.pointerEvents = "none";

  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});








