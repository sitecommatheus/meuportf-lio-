const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");

if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("nav-open");
    });
}