<?php

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

require_once 'mailer/PHPMailerAutoload.php';

//Create a new PHPMailer instance
$mail = new PHPMailer;

//Tell PHPMailer to use SMTP
$mail->isSMTP();

//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 0;

//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';

//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';
// use
// $mail->Host = gethostbyname('smtp.gmail.com');
// if your network does not support SMTP over IPv6

//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;

//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'tls';

//Whether to use SMTP authentication
$mail->SMTPAuth = true;

//Username to use for SMTP authentication - use full email address for gmail [USE AN ACTUAL GMAIL ACCOUNT]
$mail->Username = "raymwauradev@gmail.com";

//Password to use for SMTP authentication [USE THE ACTUAL GMAIL ACCOUNT'S PASSWORD]
$mail->Password = "6#F$7&J^J^%^y65Y^7&^UUYH";

//Set who the message is to be sent from
$mail->setFrom('raymwauradev@gmail.com', 'Portfolio Website');

//Set an alternative reply-to address
// $mail->addReplyTo('publishing_support@gmail.com', 'Publishing House Support Team');

//Set who the message is to be sent to
$mail->addAddress('raywachaga@hotmail.com', 'The Webmaster');

//Set the subject line
$mail->Subject = "New message posted" ;

//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
//$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));

//Replace the plain text body with one created manually
//$mail->AltBody = 'This is a plain-text message body';

$mail->Body = "<h3>" . $name . "</h3><h4>" . $email . "</h4><p>" . $message . "</p>";

//Attach an image file
// $mail->addAttachment('mailer/examples/images/bookicon.png');

//send the message, check for errors
if (!$mail->send()) {
    print "Mailer Error: " . $mail->ErrorInfo;
}
