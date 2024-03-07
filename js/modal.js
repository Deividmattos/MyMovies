const overlay = document.getElementById("modal_overlay");
const background = document.getElementById("modal_background");

overlay.classList.add("open");

function backgroundClickHandle() {
  console.log("test");
  overlay.classList.remove("open");
}

background.addEventListener("click", backgroundClickHandle);
