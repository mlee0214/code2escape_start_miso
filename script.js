const scene = document.getElementById("scene");
const imageButton = document.getElementById("imageButton");
const textBox = document.getElementById("textBox");
const secretDoor = document.getElementById("room1-secret-door");

// STEP 1: Click "Continue" on Page 1 to go to Page 2
imageButton.addEventListener("click", function () {
  scene.style.backgroundImage = 'url("background2.png")';
  imageButton.style.display = "none";
  textBox.style.display = "none";
  secretDoor.style.display = "block"; // Enables the secret corner
  console.log("Moved to Page 2");
});

// STEP 2: Click Secret Corner on Page 2 to go to Page 3
secretDoor.addEventListener("click", function (event) {
  // This stops the click from triggering the redirection immediately
  event.stopPropagation(); 
  
  scene.style.backgroundImage = 'url("3.png")';
  secretDoor.style.display = "none"; // Hide the corner
  
  console.log("Moved to Page 3. Now click anywhere to exit!");

  // STEP 3: Click anywhere on the scene on Page 3 to Redirect
  scene.addEventListener("click", function() {
    window.location.href = "https://isladministrator.github.io/escape-room-puzzle-anya-varya/";
  });
});