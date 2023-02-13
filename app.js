const bell = document.querySelector(".bell-icon");

let bellSwitch = true;

bell.addEventListener("click", (e) => {
    if (bellSwitch) {
        bell.classList.add("bell-animate");
        setTimeout(() => {
            bell.classList.remove("bell-animate");
            bell.classList.add("bell-active");
            bell.src = "./Assets/bell-remove-outline.svg";
            bellSwitch = false;
        }, 150);
    }
    else {
        bell.classList.add("bell-animate");
        bell.classList.remove("bell-active");
        bell.src = "./Assets/bell-outline.svg";
        setTimeout(() => {
            bell.classList.remove("bell-animate");
            bell.src = "./Assets/bell-outline.svg";
            bellSwitch = true;
        }, 150);
    }
});