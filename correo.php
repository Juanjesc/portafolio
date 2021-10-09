<?php 
if(isset($_POST['submit'])){
    
    
    $micorreo = "juan97jesus@hotmail.com";
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];
    $header = "From: " . $email;
    mail($micorreo, $asunto, $mensaje, $header);
    echo "<script>alert('Mensaje enviado correctamente :D')</script>";
    echo "<h2>Correo enviado</h2>";
    echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";
   

}
?>