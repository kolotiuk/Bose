(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        document.body.classList.toggle("modal-open");
        mobileMenuRef.classList.toggle("is-open");
    });
})();

// window.onload = function () {
//     var b1 = document.getElementById("b1"); //блок перед которым ставим
//     var b2 = document.getElementById("b2"); //блок который передвигаем
//     b1.parentNode.insertBefore(b2, b1);
// };
