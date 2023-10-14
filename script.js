

// Get a reference to the image grid container
const imageGrid = document.getElementById('image-grid');

// Define the path to your image folder
const imageFolderPath = 'imgs/';

// List of image file names in the folder (you can fetch this dynamically from your server if needed)
const imageFileNames = ['cdgshoes.jpg','jeans.jpg', 'northface.jpg', 'purpledress.jpg', 'skirt.jpg','whitetee.jpg'];

// Function to create and append image elements to the grid
function displayImages() {
    imageFileNames.forEach((imageName) => {
        const img = document.createElement('img');
        img.src = imageFolderPath + imageName;
        img.alt = imageName;
        imageGrid.appendChild(img);
    });
}

// Call the function to display the images
displayImages();
