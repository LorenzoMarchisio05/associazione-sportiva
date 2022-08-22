const spinners = [...document.getElementsByClassName("spinner")];
const mainContainer = document.getElementsByClassName("main-container")[0];

const conditions = (target) =>
    target.tagName.toLowerCase() === "div" ||
    target.tagName.toLowerCase() === "h2" ||
    target.tagName.toLowerCase() === "p" ||
    target.parentNode.classList.contains("image-bg");

const handleClosing = ({ target }) => {
    if (!target.isEqualNode(mainContainer)) return;

    const elements = [...document.getElementsByClassName("selected")];

    elements.forEach((element) => element.classList.toggle("selected"));

    if (elements.length > 0)
        elements[0].parentNode.classList.toggle("no-animation");
};

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
        !target.parentNode?.parentNode.classList.contains("has-image") &&
        conditions(target)
    ) {
        parent = target.parentNode;
        parent.classList.toggle("selected");
        parent = parent.parentNode;
    } else if (conditions(target)) {
        parent = target.parentNode;
        parent = parent.parentNode;
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

mainContainer.addEventListener("click", handleClosing);
