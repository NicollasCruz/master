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
        let json = JSON.stringify(user);
        let url = '../backend/register.php';

        fetch(url, {
            method: 'POST',
            body: json,
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => {
            return res.text();
        }).then((res) => {
            console.log(res);
        })

        document.querySelector("#name-login").value = '';
        document.querySelector("#email-register").value = '';
        document.querySelector("#password-login").value = '';
}

