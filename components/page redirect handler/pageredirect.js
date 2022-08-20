const links = [...document.querySelectorAll("[data-redirect]")];
const loader = document.querySelector("[page-transition-loader]");

const handlePageRedirect = ({ target }) => {
    loader.classList.remove("end");
    loader.classList.remove("hide");
    loader.classList.add("visible");

    loader.addEventListener(
        "animationend",
        () => (window.location = target.dataset.redirect)
    );
};

links.forEach((link) => link.addEventListener("click", handlePageRedirect));
