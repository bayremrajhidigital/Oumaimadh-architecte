/* ===============================
   LOADER HIDE AFTER LOAD
================================ */

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "0.5s ease";
    }, 800);
});


/* ===============================
   SMOOTH SCROLL NAVIGATION
================================ */

document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});


/* ===============================
   HEADER SCROLL EFFECT
================================ */

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
        header.style.background = "rgba(245,241,234,0.98)";
    } else {
        header.style.boxShadow = "none";
        header.style.background = "rgba(245,241,234,0.95)";
    }
});


/* ===============================
   SCROLL REVEAL ANIMATION
================================ */

const revealElements = document.querySelectorAll(".section, .project-card, .stat-card");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "all 0.8s ease";
        }
    });
}

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
});

window.addEventListener("scroll", revealOnScroll);


/* ===============================
   CONTACT FORM FEEDBACK
================================ */

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {

    const name = form.querySelector("input[name='name']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const message = form.querySelector("textarea[name='message']").value.trim();

    if (name === "" || email === "" || message === "") {
        e.preventDefault();
        alert("Veuillez remplir tous les champs.");
        return;
    }

    successMessage.style.display = "block";
    successMessage.style.opacity = "1";
    successMessage.style.transition = "0.5s";

    setTimeout(() => {
        successMessage.style.opacity = "0";
        successMessage.style.display = "none";
    }, 4000);
});


/* ===============================
   PROJECT CARD HOVER EFFECT
================================ */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0 15px 30px rgba(0,0,0,0.07)";
    });
});


/* ===============================
   BACK TO TOP BUTTON
================================ */

const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.style.position = "fixed";
backToTop.style.bottom = "30px";
backToTop.style.left = "30px";
backToTop.style.padding = "10px 15px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.background = "#b08968";
backToTop.style.color = "white";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "999";
backToTop.style.transition = "0.3s";

document.body.appendChild(backToTop);

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* ===============================
   FLOATING PROFILE EFFECT
================================ */

const profile = document.querySelector(".profile-floating");

window.addEventListener("scroll", function () {
    profile.style.transform = `translateY(${window.scrollY * 0.05}px)`;
});


/* ===============================
   SIMPLE EMAIL VALIDATION
================================ */

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", function (e) {
    const emailField = form.querySelector("input[name='email']").value;

    if (!validateEmail(emailField)) {
        e.preventDefault();
        alert("Email invalide.");
    }
});


/* ===============================
   SMALL FADE IN HERO TEXT
================================ */

window.addEventListener("load", () => {
    const heroContent = document.querySelector(".hero-content");
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(30px)";

    setTimeout(() => {
        heroContent.style.transition = "all 1s ease";
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
    }, 600);
});