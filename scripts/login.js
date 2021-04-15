function sendLogin()
{
        let name = document.querySelector("#name-login").value;
        let password = document.querySelector("#password-login").value;

        let user = {
                name: name,
                password: password
        }

        let url = '../backend/login.php';

        fetch(url, {
            method: 'POST',
            body: user
        })
        .then((data) => {
            return data.text();
        }).then((text) => {
            console.log(text);
        })
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