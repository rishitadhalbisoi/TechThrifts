<?php
//include('config.php');
if(isset($_POST['upload'])) {
    $image_name= $_FILES['image']['name'];
    $tmp_name= $_FILES['image']['temp_name'];
    $folder= "imgs/" .$image_name;
    move_uploaded_file($tmp_name, $folder);

}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Image Upload</title>
</head>
<body>
    <h1>Upload an Image</h1>
    <form id="upload-form" action="" method="post" enctype="multipart/form-data">
        <input type="file" name="image" id="image">
        <input type="submit" value="Upload Image", name="upload">
    </form>
    <div id="message"></div>
</body>
</html>