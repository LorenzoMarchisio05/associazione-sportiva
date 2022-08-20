const sportLink = [...document.querySelectorAll("[data-sport]")];
const imageContainer = document.querySelector(".cosaFacciamo .image");
let sportPrecedente = "calcio";

const handleSportOver = ({ target }) => {
    if (sportPrecedente !== null) {
        imageContainer.classList.remove(sportPrecedente);
    }
    sportPrecedente = target.dataset.sport;
    imageContainer.classList.add(sportPrecedente);
};

sportLink.forEach((sport) =>
    sport.addEventListener("mouseover", handleSportOver)
);
