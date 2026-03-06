/* =========================
   PRELOADER
========================= */

window.addEventListener("load", function(){
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";

    setTimeout(()=>{
        preloader.style.display = "none";
    },500);
});


/* =========================
   SCROLL ANIMATION SECTIONS
========================= */

const sections = document.querySelectorAll(".fade-section");

function showSections(){
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section=>{
        const top = section.getBoundingClientRect().top;

        if(top < trigger){
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", showSections);
showSections();


/* =========================
   FAQ ACORDEÓN
========================= */

const questions = document.querySelectorAll(".faq-question");

questions.forEach(btn=>{
    btn.addEventListener("click", ()=>{

        const answer = btn.nextElementSibling;

        if(answer.style.maxHeight){
            answer.style.maxHeight = null;
            btn.querySelector("span").style.transform = "rotate(0deg)";
        }else{
            answer.style.maxHeight = answer.scrollHeight + "px";
            btn.querySelector("span").style.transform = "rotate(45deg)";
        }

    });
});


/* =========================
   BARRA PROGRESO SCROLL
========================= */

window.addEventListener("scroll", ()=>{
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / height) * 100;

    document.getElementById("scroll-progress").style.width = scrolled + "%";
});


/* =========================
   BOTÓN VOLVER ARRIBA
========================= */

const backBtn = document.getElementById("backToTop");

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 400){
        backBtn.style.opacity = "1";
        backBtn.style.pointerEvents = "auto";
    }else{
        backBtn.style.opacity = "0";
        backBtn.style.pointerEvents = "none";
    }
});

backBtn.addEventListener("click", ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});


/* =========================
   SMOOTH SCROLL NAV LINKS
========================= */

document.querySelectorAll("a[href^='#']").forEach(anchor=>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior:"smooth"
        });
    });
});


/* =========================
   GALERÍA EFECTO CLICK
========================= */

const images = document.querySelectorAll(".gallery-grid img");

images.forEach(img=>{
    img.addEventListener("click", ()=>{
        const overlay = document.createElement("div");
        overlay.style.position="fixed";
        overlay.style.top="0";
        overlay.style.left="0";
        overlay.style.width="100%";
        overlay.style.height="100%";
        overlay.style.background="rgba(0,0,0,0.85)";
        overlay.style.display="flex";
        overlay.style.alignItems="center";
        overlay.style.justifyContent="center";
        overlay.style.zIndex="9999";

        const bigImg = document.createElement("img");
        bigImg.src = img.src;
        bigImg.style.maxWidth="90%";
        bigImg.style.maxHeight="90%";
        bigImg.style.borderRadius="12px";
        bigImg.style.boxShadow="0 0 40px rgba(0,0,0,0.5)";

        overlay.appendChild(bigImg);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", ()=>{
            overlay.remove();
        });
    });
});