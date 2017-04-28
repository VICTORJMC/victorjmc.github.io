<?php // SEC 10 299
$para = 'vmartinez@aytoalcobendas.org';
$asunto = 'mensaje desde VJMC';
$mailheader = "From: ".$_POST["email"]. "\r\n"; //\r\n son salto de linea " o ''
$mailheader .= "Reply-To: ".$_POST["email"]. "\r\n";
$mailheader .= "Content-type: text\html; charst=utf-8 "\r\n";
$MESSAGE_BODY = "Nombre: ".$_POST"["name"]. "\n"_;
$MESSAGE_BODY .= "\n<br>Email: ".$_POST"["name"]. "\n"_;
$MESSAGE_BODY .= "\n<br>Mensaje: ".nl2br($_POST"["message"]). "\n"_;

mail($para, $asunto, $MESSAGE_BODY, $mailheader) or die ('error al enviar el mail');
header('location: https://mail.aytoalcobendas.org')
?>