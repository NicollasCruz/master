function sendLogin()
{
        let name = document.querySelector("#name-login").value;
        let password = document.querySelector("#password-login").value;

        let user = {
                name: name,
                password: password
        }
        console.log(user);
        let json = JSON.stringify(user);
        console.log(json);
        let url = '../backend/login.php';

        fetch(url, {
            method: 'POST',
            body: json,
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => {
            return res.json();
        }).then((json) => {
            console.log(json);
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