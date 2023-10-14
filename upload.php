<?php
$uploadDirectory = 'C:/Users/tnitt/Desktop/HackGT23/newHackTech/imgs/'; // Specify the target directory for the uploads

if (!file_exists($uploadDirectory)) {
    mkdir($uploadDirectory, 0777, true); // Create the directory if it doesn't exist
}

if ($_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $tempName = $_FILES['image']['tmp_name'];
    $targetName = $uploadDirectory . $_FILES['image']['name'];

    if (move_uploaded_file($tempName, $targetName)) {
        echo json_encode(['message' => 'Image uploaded successfully.']);
    } else {
        echo json_encode(['message' => 'Failed to move the file.']);
    }
} else {
    echo json_encode(['message' => 'File upload error.']);
}
?>
