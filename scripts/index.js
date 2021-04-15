var formLogin = document.querySelector("#form-login");
var formRegister = document.querySelector("#form-register");

function openLogin()
{
        formLogin.style.display = "none";
        formRegister.style.display = "flex";
}

function openRegister()
{
        formLogin.style.display = "flex";
        formRegister.style.display = "none";
}