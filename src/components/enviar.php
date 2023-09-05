<?php

    require 'conexion.php';

    if(isset($_POST['nombre'])){

        $nombre = $_POST['nombre'];
        $telefono = $_POST['telefono'];
        $correo = $_POST['correo'];
        $mensaje = $_POST['mensaje'];

        $from = $correo; 
		$to = "contacto@kgoripunkuconsultora.com.ar";
		$subject = "Nuevo mensaje de ". $nombre;
		$message = $mensaje;
		$headers = "From:" . $from;
        
        if(mail($to,$subject,$message, $headers)){
            echo 1;
        }else{
            echo 0;
        }

        $query= "INSERT INTO correo_info(nombre, telefono, correo, mensaje, fecha_hora, correo_destino)
        VALUES ('$nombre','$telefono','$correo','$mensaje',CURRENT_TIMESTAMP,'$to')";
       mysqli_query($mysqli,$query);
       //echo "insertados";
        
    }else{
        echo 0;
    }
?>