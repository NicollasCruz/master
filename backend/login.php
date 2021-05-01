<?php

    $meuPost = file_get_contents("php://input");

    $json = json_decode( $meuPost );

    $name = $json -> name;
    $password = $json -> password;

    $db_host = 'localhost';
    $db_user = 'root';
    $db_pass = '';
    $db_name = 'tasklist'

    $link = mysql_connect($db_host, $db_user, $db_pass);
    if(!$link){
        die("erro".mysqli_connect_error());
    }
    mysqli_select_db($db_name) or die("erro".mysqli_connect_error());

    $filtro = 'SELECT name, password FROM usuario WHERE name="$name" AND password="$password"';

    $resultado = mysqli_query($link, $filtro);

    $linhas = mysqli_num_rows($resultado);

    if($linhas = 1)
    echo 'ok';
    else
    echo 'Senha incorreta';
    
?>