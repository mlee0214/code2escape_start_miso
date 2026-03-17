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
gameStartBtn.addEventListener("click", function () {gameStartBtn.addEventListener("click", function () {
  // This is the magic line that sends the player to the next room!
  window.location.href = "https://isladministrator.github.io/escape-room-puzzle-anya-varya/";
});
  // LEAVE BLANK FOR YOU: Add your "something" code here!
  console.log("Player clicked the game_start button!");
});

// 2. This 'listens' for a click on the secret spot in Background 2
secretDoor.addEventListener("click", function () {
  // Changes the background to your third image
  scene.style.backgroundImage = 'url("3.png")';
  
  // Hides the secret hit-box so it can't be clicked again
  secretDoor.style.display = "none"; 
  
  // Shows your 'game_start.png' button for the next step
  gameStartBtn.style.display = "block"; 
  
  console.log("Secret path found! Moving to the final stage.");
});