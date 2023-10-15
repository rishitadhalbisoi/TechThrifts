

// Get a reference to the image grid container
const imageGrid = document.getElementById('image-grid');

// Define the path to your image folder
const imageFolderPath = 'imgs/';

// List of image file names in the folder (you can fetch this dynamically from your server if needed)
const imageFileNames = ['img1.jpg','img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg','img6.jpg'];

// Function to create and append image elements to the grid
function displayImages() {
    imageFileNames.forEach((imageName) => {
        const img = document.createElement('img');
        img.src = imageFolderPath + imageName;
        img.alt = imageName;
        img.className = 'modal-image';
        imageGrid.appendChild(img);
    });
}

// Call the function to display the images
displayImages();

// Get all image elements (both existing and dynamically generated)
var images = document.querySelectorAll('.modal-image');

images.forEach(function(image, index) {
    // Create a modal for each image
    var modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'modal' + (index + 1);

    // Create modal content
    var modalContent = document.createElement('img');
    modalContent.className = 'modal-content';
    modalContent.id = 'modalImage' + (index + 1);

    var textContainer = document.createElement('div');
    textContainer.className = 'text-container';
    textContainer.innerHTML = `<p>This is some text about Image ${index}.</p>`;


    // Create a close button
    var closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.id = 'closeModal' + (index + 1);
    closeButton.innerHTML = '&times;';

    /*
    // Create a container for the image and text
    var image2Container = document.createElement('div');
    image2Container.className = 'image2-container';
    image2Container.appendChild(image);
    
    var textContainer = document.createElement('div');
    textContainer.className = 'text-container';
    textContainer.innerHTML = `
        <p>This is some text about Image ${index}.</p>
        <!-- You can add more text or customize as needed -->`;
    */

    // Append modal content and close button to the modal
    modal.appendChild(closeButton);
    //modalContent.appendChild(image2Container);
    modalContent.appendChild(textContainer);
    modal.appendChild(modalContent);

    // Append the modal to the body
    document.body.appendChild(modal);

    // Add click event listener to open the modal
    image.addEventListener('click', function() {
        openModal(index + 1);
    });
});

// Function to open the modal with the given index
function openModal(index) {
    var modal = document.getElementById('modal' + index);
    var modalImage = document.getElementById('modalImage' + index);

    modal.style.display = 'block';
    modalImage.src = images[index - 1].src;

    // Close the modal when the close button is clicked
    var closeButton = document.getElementById('closeModal' + index);
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
}