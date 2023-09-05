<?php

$host = "localhost";
$usuario = "kgoripunku";
$clave = "Az=uAZ1lsi5Q";
$bd = "correo";

$conexion = $mysqli = mysqli_connect($host,$usuario,$clave,$bd);
mysqli_set_charset($mysqli, "utf8"); //formato de datos utf8
/*
if($conexion){
    echo "conectado";
}else{
    echo "no se puedo conectar";
}*/


?>