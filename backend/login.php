<?php
    class Login
    {
        public string $db_host = 'localhost';
        public string $db_user = 'root';
        public string $db_pass = '';
        public string $db_name = 'tasklist';
        private string $name;
        private string $password;

        public function showLogin():string{
            return $this -> checkUser;
        }

        public function setName(string $name):void{
            $this -> name = $name;
        }

        public function setPassword(string $password):void{
            $this -> password = $password;
        }

        private function connectDb($db_host, $db_user, $db_pass, $db_name):void
        {
            $link = mysqli_connect($db_host, $db_user, $db_pass);
            if(!$link)
                die("erro".mysqli_connect_error());
            mysqli_select_db($link, $db_name) or die("erro".mysqli_connect_error());
        }

        private function queryDb($name, $password):bool
        {
            $conection = connectDb($db_host, $db_user, $db_pass, $db_name);
            $filtro = 'SELECT * FROM usuario WHERE name="'.$name.'" AND password="'.$password.'"';
            $resultado = mysqli_query($conection, $filtro);
            $linhas = mysqli_num_rows($resultado);

            return $linhas;
        }

        private function verify ($result):string
        {
            $result = queryDb($name, $password);

            if($result == 1)
                $this -> checkUser =  'Login successfully';
            else
                $this -> checkUser = 'Login failed';
        }
    }
?>