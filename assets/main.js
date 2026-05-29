const burger = document.querySelector(".burger");
const menu = document.querySelector(".mobile-menu-overlay");
const closeBtn = document.querySelector(".mobile-menu-close");

burger.addEventListener("click", () => {
    menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});

menu.addEventListener("click", (e) => {
    if (e.target === menu) {
        menu.classList.remove("active");
    }
});
