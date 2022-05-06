function leDados ()
{
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) 
    {
        objDados = JSON.parse (strDados);   
    }
    else 
    {
        objDados = { tarefas: [] }  
    }

    return objDados;
} 

function salvaDados (dados)
{
    localStorage.setItem ('db', JSON.stringify (dados));
}

function incluirTarefa ()
{
    let objDados = leDados();
    let strNome = document.getElementById ('nomeTarefa').value;
    let strDescricao = document.getElementById ('descricao').value;
    let strDataLimite = document.getElementById ('datalimite').value;
    let id = JSON.parse(sessionStorage.getItem("usuarioCorrente")).id;

    let novaTarefa = 
    {
        nome: strNome,
        dataLimite: strDataLimite,
        descricao: strDescricao,
        autor: id
    }

    //Código do grafico
    let aConcluir = localStorage.getItem('aConcluir');
    aConcluir++;
    localStorage.setItem('aConcluir', aConcluir);

    objDados.tarefas.push (novaTarefa);
    salvaDados (objDados);
}


document.getElementById('criarTarefa').addEventListener('click', incluirTarefa);
