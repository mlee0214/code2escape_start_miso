console.log("Script loaded");

const scene = document.getElementById("scene");
const imageButton = document.getElementById("imageButton");
const textBox = document.getElementById("textBox");

imageButton.addEventListener("click", function () {
  scene.style.backgroundImage = 'url("background2.png")';
  imageButton.style.display = "none";
  textBox.style.display = "none";
});