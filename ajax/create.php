<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the submitted form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    
    // Perform database operations to create the record
    // (Assuming you have a database connection established)
    
    // Display the created record
    echo "Record created successfully!<br>";
    echo "Name: " . $name . "<br>";
    echo "Email: " . $email;
}
?>
