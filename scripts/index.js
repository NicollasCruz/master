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

function sendLogin()
{
        let name = document.querySelector("#name-login").value;
        let password = document.querySelector("#password-login").value;

        let user = {
                name: name,
                password: password
        }
}

function sendRegister()
{
        let name = document.querySelector("#name-register").value;
        let email = document.querySelector("#email-register").value;
        let password = document.querySelector("#password-register").value;

        let user = {
                name: name,
                email: email,
                password: password
        }

        console.log(user);
}