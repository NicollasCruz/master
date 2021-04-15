<?php

    $name = $_POST['name'];
    $password = $_POST['password'];

    $arr = array(
        'name'=> $name,
        'password' => $password
    );

    $json = json_encode($arr);
    echo ($json);

?>