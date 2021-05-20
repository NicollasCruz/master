<?php

    $db_host = 'localhost';
    $db_user = 'root';
    $db_pass = '';
    $db_name = 'tasklist';

    function reciveData(){
        $meuPost = file_get_contents("php://input");

        $json = json_decode( $meuPost );

        return $json;
    }

    function connectDb($db_host, $db_user, $db_pass, $db_name)
    {
        $link = mysqli_connect($db_host, $db_user, $db_pass);
        if(!$link){
            die("erro".mysqli_connect_error());
        }

        mysqli_select_db($link, $db_name) or die("erro".mysqli_connect_error());
        $filtro = '';
        $resultado = mysqli_query($link, $filtro);

        return $filtro;
    }

>