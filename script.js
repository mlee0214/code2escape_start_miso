console.log("Script loaded");

const scene = document.getElementById("scene");
const imageButton = document.getElementById("imageButton");
const textBox = document.getElementById("textBox");

imageButton.addEventListener("click", function () {
  scene.style.backgroundImage = 'url("background2.png")';
  imageButton.style.display = "none";
  textBox.style.display = "none";
});
const secretDoor = document.getElementById("room1-secret-door");

// Inside your existing imageButton click listener, add:
imageButton.addEventListener("click", function () {
  // ... your existing code (scene.style.backgroundImage, etc.) ...
  
  secretDoor.style.display = "block"; // Turn on the invisible button!
});

add:addEventListener
secretDoor.addEventListener("click", function() {
  scene.style.backgroundImage = 'url("background3.png")';
  secretDoor.style.display = "none"; // Hide the secret door so they don't click it again
  console.log("Secret door found!");
});