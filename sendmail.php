<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Form data
$firstName = $_POST['firstName'] ?? '';
$lastName = $_POST['lastName'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

$fullName = "$firstName $lastName";

// Mail setup
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';         // SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = 'yourgmail@gmail.com';     // Your Gmail
    $mail->Password   = 'your-app-password';       // App password (NOT your Gmail login)
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Recipients
    $mail->setFrom('yourgmail@gmail.com', 'Contact Form');
    $mail->addAddress('info@riyadhfashionweek.com');  // Where to send the message

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body    = "
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> $fullName</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Message:</strong><br/>" . nl2br($message) . "</p>
    ";

    $mail->send();
    echo 'Message has been sent successfully!';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
