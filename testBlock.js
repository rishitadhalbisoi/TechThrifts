// Define your image data (image URLs and descriptions)
const imageData = [
    { src: 'imgs/img1.jpg', title: 'CDG Converse', text: 'Posted by @risha', price: '$60'},
    { src: 'imgs/img2.jpg', title: 'Grey Jeans', text: 'Posted by @trisha', price: '$60' },
    { src: 'imgs/img3.jpg', title: 'North Face Jacket', text: 'Posted by @shradda', price: '$60' },
    { src: 'imgs/img4.jpg', title: 'Purple Dress', text: 'Posted by @varsha', price: '$60'},
    { src: 'imgs/img5.jpg', title: 'Denim Skirt', text: 'Posted by @m4rky', price: '$60' },
    { src: 'imgs/img6.jpg', title: 'John Galt shirt', text: 'Posted by @lucy', text: '$60'},


    // Add more image data as needed
];



// Function to generate images and attach click event listeners
function generateImages() {
    const imageGrid = document.querySelector('.image-grid');

    imageData.forEach((data) => {
        const image = document.createElement('img');
        image.src = data.src;
        image.alt = data.title;
        image.addEventListener('click', () => openModal(data));
        imageGrid.appendChild(image);
    });
}

// Function to open the modal with text and image
function openModal(data) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const modalImage = document.getElementById('modal-image');
    
    const modalPrice = document.getElementById('modal-price');

    modalText.setAttribute('style', 'white-space: pre;');

    modalTitle.textContent = data.title;
    modalText.textContent = data.text + "\r\n";
    modalText.textContent += data.price;
    modalImage.src = data.src;
    modalImage.alt = data.title;
    
    //modalText.textContent = data.price;
    //modalPrice.textContent = data.price;


    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Attach a click event listener to the modal close button
document.getElementById('closeModal').addEventListener('click', closeModal);

// Generate the images
generateImages();

