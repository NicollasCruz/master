function Salvar(){
    let titulo = document.querySelector("#titulo-tarefa").value;
    let dataini = document.querySelector("#data-inicio").value;
    let datafim = document.querySelector("#data-conclusao").value;
    let descricao = document.querySelector("#descricao-tarefa").value;
    let comentarios = document.querySelector("#comentarios").value;

    let tarefa = {
        titulo: titulo,
        dataini: dataini,
        datafim: datafim,
        descricao: descricao,
        comentarios: comentarios
    }

    let json = JSON.stringify(tarefa);

    let url = '../backend/saveTask.php';

    fetch(url, {
        method: 'POST',
        body: json,
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((res) => {
        return res.text();
    }).then((res) => {
        console.log(res);
    });
}