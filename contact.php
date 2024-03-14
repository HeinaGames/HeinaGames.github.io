<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Email settings
    $to = "your-email@example.com"; // Change this to your email address
    $subject = "New Message from FunGames.gg Contact Form";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Send email
    if (mail($to, $subject, $body)) {
        // Email sent successfully
        echo "<p>Thank you for your message! We'll get back to you soon.</p>";
    } else {
        // Error sending email
        echo "<p>Sorry, there was an error sending your message. Please try again later.</p>";
    }
} else {
    // Form not submitted
    echo "<p>Oops! It seems you didn't submit the form.</p>";
}
?>
