/*მობილურში ბურგერ მენიუ*/
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

/*ფუტერი ჩამოსაშლელი*/
const footerDropdowns = document.querySelectorAll(
    ".footer-column:not(.footer-contact)",
);

footerDropdowns.forEach((item) => {
    const heading = item.querySelector(".footer-heading");

    heading.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});
