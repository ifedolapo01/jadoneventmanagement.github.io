let icon = document.querySelector(".menu-icon");
let close = document.querySelector(".menu-drop");

icon.addEventListener("click", dropDown);

function dropDown() {
    close.classList.toggle("close");
    document.body.classList.toggle("no-scroll");
}