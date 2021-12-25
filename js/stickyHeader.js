const header = document.querySelector("header");

window.addEventListener("scroll", function (e) {
    let scroll = this.scrollY;
    if (scroll > 254 && header.clientHeight > 55) {
        header.style.height = `55px`;
        return;
    }
    if (scroll > 254) return;

    const defaultHeight = 81;

    let newHeight = defaultHeight - scroll / 7;
    if (newHeight < 55) newHeight = 55;
    header.style.height = `${newHeight}px`;
});
