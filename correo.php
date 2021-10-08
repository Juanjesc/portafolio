<?php 
    $micorreo = 'juan97jesus@hotmail.com';
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    $header = "Correo enviado desde el portafolio - Juan Jesús Sedano Calderón - ";

    mail($micorreo, $asunto, $mensaje, $header);
    echo "<script>alert('Mensaje enviado correctamente :D')</script>";
    echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";
   

?>