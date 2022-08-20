document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const loader = document.querySelector("[page-transition-loader]");

    if (loader === null) {
        return;
    }

    loader.classList.toggle("visible", loader.classList.contains("visible"));

    loader.classList.toggle("end", !loader.classList.contains("visible"));

    const animateIn = () => {
        loader.classList.toggle("hide");
        loader.classList.toggle("end");
    };

    const endAnimation = () => {
        loader.classList.toggle("end", !loader.classList.contains("visible"));
        body.style.overflow = "";
    };

    animateIn();

    loader.addEventListener("animationend", endAnimation);
});
