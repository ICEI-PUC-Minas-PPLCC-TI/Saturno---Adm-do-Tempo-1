let pagina = window.location.href.includes("conquistas") ? "conquistas" : "tarefas"
let objDados2

if (pagina == "tarefas") {

    var strDado = localStorage.getItem('db');
    if (strDado) {
        document.getElementById('tL').style.display = 'none';
    }

    function leDados() { 
        let strDados = localStorage.getItem('db');
        let objDados = {};

        if (strDados) {
            objDados = JSON.parse(strDados);
        }
        else {
            objDados = { tarefas: [] }
        }

        return objDados;
    }


    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados();


    for (i = 0; i < objDados.tarefas.length; i++) {
        strHtml += `<div class="tarefa"><div class="nome"><b>${objDados.tarefas[i].nome}</b></div> <div class="descricao">${objDados.tarefas[i].descricao}</div> <div class="editar"><a id="editar" href="template-editaTarefa.html"><img src="imagens/editar.png" width="6%"></a></div> <div class="data">${objDados.tarefas[i].dataLimite}</div> <div class="concluido"><a href="Lista-Tarefas.html" id="concluido"><img id="concluir" class="${i}" src="imagens/concluido.png" width="6%"></a></div></div>`

    }
    tela.innerHTML = strHtml;

    objDados2 = objDados
}

//CÓDIGO DO RUBENS AQUI - PARTE DAS CONQUISTAS :D

let conta = localStorage.getItem("quantidade")
let medalha4 = document.getElementById("medalha-4");
let medalha5 = document.getElementById("medalha-5")
let medalha6 = document.getElementById("medalha-6")

if(pagina=="conquistas")
{
    if (conta >= 5) {
        medalha4.src = "imagens/conquista-tier3.png";
    }

    if (conta >= 15) {
        medalha5.src = "imagens/conquista-tier2.png";
    }

    if (conta >= 25) {
        medalha6.src = "imagens/conquista-tier1.png";
    }
}

function limpaLs(mouse) {
    let db = JSON.parse(localStorage.getItem('db'));
    let db2 = { tarefas: [] }
    let id = mouse.target.className
    console.log(mouse)

    db.tarefas.map((i) => {

        if (db.tarefas.indexOf(i) != id) {
            db2.tarefas.push(db.tarefas[db.tarefas.indexOf(i)])
        }
    })
    
    //Código do grafico
    let aConcluir = localStorage.getItem('aConcluir');
    aConcluir--
    localStorage.setItem('aConcluir', aConcluir);

    localStorage.setItem('db', JSON.stringify(db2))

}


if (pagina == "tarefas") {
    for (i = 0; i < objDados2.tarefas.length; i++) {
        document.getElementsByClassName(`${i}`)[0].addEventListener('click', limpaLs)
        document.getElementsByClassName(`${i}`)[0].addEventListener('click', () => {

            conta++;
            localStorage.setItem("quantidade", conta)

        })
    }
    document.getElementById('editar').addEventListener('click', limpaLs)
}

