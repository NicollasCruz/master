function sendLogin()
{
        let name = document.querySelector("#name-login").value;
        let password = document.querySelector("#password-login").value;

        let forbidenChar = ['!', '@', '#', '$', '%', '&', '*', '(', ')', ' - ', ' _ ', ' = ', ' + ', ' ´ ', ' ` ', ' [ ', ' ] ', ' { ', ' } ', ' ~ ', ' ^ ', ' , ', ' . ', ' / ', ' ? ', ' ; ', ' : ', ' < ', ' > '];

        for(let x = 0; x < name.length; x++)
        {
            for(let y = 0; y < forbidenChar.length; y++)
            {
                if(name[x] == forbidenChar[y])
                {
                    alert('Requisição não enviada devido ao uso do caracter ' + forbidenChar[y]);
                    document.querySelector("#name-login").value = '';
                    document.querySelector("#password-login").value = '';
                    return;
                }
            }
        }

        let user = {
                name: name,
                password: password
        }
        let json = JSON.stringify(user);
        let url = '../backend/login.php';

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
        document.querySelector("#password-login").value = '';
}

