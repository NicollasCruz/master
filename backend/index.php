<?php

    require_once 'login.php';

    $meuPost = file_get_contents("php://input");
    $json = json_decode( $meuPost );

    $login = new Login();
    $login -> setName($json -> name);
    $login -> setPassword($json -> password);

    $result = $login -> showLogin();

    var_dump($result);
?>