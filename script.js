const scene = document.getElementById("scene");
const imageButton = document.getElementById("imageButton");
const textBox = document.getElementById("textBox");
const secretDoor = document.getElementById("room1-secret-door");

imageButton.addEventListener("click", function () {
  // 1. Changes the background
  scene.style.backgroundImage = 'url("background2.png")';
  
  // 2. Hides the start screen items
  imageButton.style.display = "none";
  textBox.style.display = "none";
  
  // 3. Activates the secret click area for the next puzzle
  if (secretDoor) {
    secretDoor.style.display = "block";
  }
  
  console.log("Room 1 complete! Now in Room 2.");
});