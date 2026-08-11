// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// ===============================
// STICKY HEADER + BACK TO TOP
// ===============================

const header = document.querySelector("header");
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    // Sticky Header
    if (header) {
        header.classList.toggle("sticky", window.scrollY > 50);
    }

    // Back To Top Button
    if (topBtn) {
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    }

    // Active Menu
    let current = "";

    document.querySelectorAll("section").forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    document.querySelectorAll("nav ul li a").forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// BACK TO TOP CLICK
// ===============================

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// ===============================
// SCROLL ANIMATION
// ===============================

const cards = document.querySelectorAll(
    ".service-card, .tech-card, .portfolio-card, .why-card, .box"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.7s ease";

    observer.observe(card);

});

// ===============================
// CONTACT FORM
// ===============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank You! Your message has been sent successfully.");

        form.reset();

    });

}

// ===============================
// HERO TEXT ROTATION
// ===============================

const heading = document.querySelector(".hero-content h3");

const words = [
    "Web Development",
    "Software Development",
    "Mobile App Development",
    "IT Solutions"
];

let wordIndex = 0;

if (heading) {

    heading.textContent = words[0];

    setInterval(() => {

        wordIndex = (wordIndex + 1) % words.length;

        heading.textContent = words[wordIndex];

    }, 2500);

}
const themeToggle = document.getElementById("themeToggle");

themeToggle.onclick = () => {

    document.body.classList.toggle("dark");

    const icon = themeToggle.querySelector("i");

    if(document.body.classList.contains("dark")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

};

// ===============================
// HERO CODE TYPING
// ===============================

const typingElement = document.getElementById("typingCode");

if (typingElement) {

    const codeText = `const company = "I.AB Tech Solutions";

function buildWebsite() {
    return "Success";
}`;

    let i = 0;

    function typeCode() {

        if (i < codeText.length) {

            typingElement.textContent += codeText.charAt(i);
            i++;

        } else {

            setTimeout(() => {
                typingElement.textContent = "";
                i = 0;
            }, 2000);

        }

    }

    setInterval(typeCode, 60);

}
// ===========================
// Project Preview Popup
// ===========================

function openPreview(project) {

    const preview = document.getElementById("projectPreview");
    const image = document.getElementById("previewImage");

    if (!preview || !image) return;

    if (project === "hostel") {

        image.src = "Image/Hostel.png";

    }

    preview.style.display = "flex";
}


function closePreview() {

    const preview = document.getElementById("projectPreview");

    if (preview) {
        preview.style.display = "none";
    }

}