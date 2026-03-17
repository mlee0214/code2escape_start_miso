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
});

// STEP 2: Click Secret Corner on Page 2 to go to Page 3
secretDoor.addEventListener("click", function (event) {
  // Stops the click from triggering the redirection immediately
  event.stopPropagation(); 
  
  scene.style.backgroundImage = 'url("3.png")';
  secretDoor.style.display = "none"; // Hide the corner hitbox
  
  // STEP 3: Now that we are on Page 3, any click on the scene redirects
  scene.addEventListener("click", function() {
    window.location.href = "https://isladministrator.github.io/escape-room-puzzle-anya-varya/";
  });
});