document.getElementById('upload-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData();
    const imageInput = document.getElementById('image-input');
    const message = document.getElementById('message');

    if (imageInput.files.length === 0) {
        message.innerText = 'Please select an image to upload.';
        return;
    }

    formData.append('image', imageInput.files[0]);

    // You can use XMLHttpRequest or fetch to send the file to the server.
    // Example using fetch:
    fetch('upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        message.innerText = data.message;
    })
    .catch(error => {
        message.innerText = 'An error occurred: ' + error;
    });
});