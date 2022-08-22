const spinners = [...document.getElementsByClassName("spinner")];

const handleElementClick = ({ target }) => {
    const siblings = [...document.querySelectorAll(".spinner > div")];
    if (
        siblings.some(
            (element) =>
                !element.isEqualNode(target) &&
                element.classList.contains("selected")
        )
    ) {
        return;
    }

    let parent;

    if (target.classList.contains("spinner-element")) {
        target.classList.toggle("selected");
        parent = target.parentNode;
    } else if (
        target.tagName.toLowerCase() === "p" ||
        target.tagName.toLowerCase() === "h2"
    ) {
        parent = target.parentNode;
        parent.classList.toggle("selected");
        parent = parent.parentNode;
    }

    parent.classList.toggle("no-animation");
};

spinners.forEach((spinner) =>
    [...spinner.children].forEach((element) =>
        element.addEventListener("click", handleElementClick)
    )
);
