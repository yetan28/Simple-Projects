const imageContainerE1 = document.querySelector(".image-container");
const prevE1 = document.getElementById("prev");
const nextE1 = document.getElementById("next");

let x = 0; // Keeps track of the current rotation angle
let timer; // For auto-rotation

// Event listener for the "Prev" button
prevE1.addEventListener("click", () => {
    x += 45; // Rotate clockwise
    stopAutoRotate();
    updateGallery();
});

// Event listener for the "Next" button
nextE1.addEventListener("click", () => {
    x -= 45; // Rotate counterclockwise
    stopAutoRotate();
    updateGallery();
});

// Function to update the rotation of the image gallery
function updateGallery() {
    imageContainerE1.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    startAutoRotate(); // Restart auto-rotation
}

// Function to start auto-rotation
function startAutoRotate() {
    timer = setTimeout(() => {
        x -= 45; // Auto-rotate counterclockwise
        updateGallery();
    }, 3000); // 3 seconds interval
}

// Function to stop auto-rotation
function stopAutoRotate() {
    clearTimeout(timer); // Clears the previous timer
}

// Initialize the gallery with auto-rotation
updateGallery();
