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
        setTimeout(() => {
            bell.classList.remove("bell-animate");
            bell.src = "./Assets/bell-outline.svg";
            bellSwitch = true;
        }, 150);
    }
});

const likeList = document.querySelectorAll(".like");

likeList.forEach(like => like.addEventListener("click", (e) => {
    if (like.classList.contains("like-active")) {
        like.classList.add("like-animate2");
        setTimeout(() => {
            like.classList.remove("like-animate2");
            like.classList.remove("like-active")
            like.src = "./Assets/heart-outline.svg";
        }, 150);
    } else {
        like.classList.add("like-animate");
        setTimeout(() => {
            like.classList.remove("like-animate");
            like.classList.add("like-active");
            like.src = "./Assets/heart.svg";
        }, 150);
    }
}));

const collabList = document.querySelectorAll(".collab");

collabList.forEach(collab => collab.addEventListener("click", (e) => {
    if (collab.classList.contains("collab-active")) {
        collab.classList.add("collab-animate2");
        setTimeout(() => {
            collab.classList.remove("collab-animate2");
            collab.classList.remove("collab-active");
            collab.src = "./Assets/account.svg";
        }, 150);
    }
    else {
        collab.classList.add("collab-animate");
        setTimeout(() => {
            collab.classList.remove("collab-animate");
            collab.classList.add("collab-active");
            collab.src = "./Assets/account-group.svg";
        }, 150);
    }
}));