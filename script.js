const scene = document.getElementById("scene");
const imageButton = document.getElementById("imageButton");
const textBox = document.getElementById("textBox");
const secretDoor = document.getElementById("room1-secret-door");
const gameStartBtn = document.getElementById("room1-game-start");

// 1. Move from Background 1 to Background 2
imageButton.addEventListener("click", function () {
  scene.style.backgroundImage = 'url("background2.png")';
  imageButton.style.display = "none";
  textBox.style.display = "none";
  secretDoor.style.display = "block"; // Turn on the secret area
});

// 2. Move from Background 2 to 3.png
secretDoor.addEventListener("click", function () {
  scene.style.backgroundImage = 'url("3.png")';
  secretDoor.style.display = "none"; // Hide the secret area
  gameStartBtn.style.display = "block"; // Show the game_start image
});

// 3. Move from 3.png to "Something"
gameStartBtn.addEventListener("click", function () {
  // LEAVE BLANK FOR YOU: Add your "something" code here!
  console.log("Player clicked the game_start button!");
});