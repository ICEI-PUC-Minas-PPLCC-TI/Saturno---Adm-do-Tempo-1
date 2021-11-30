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

    let novaTarefa = 
    {
        nome: strNome,
        dataLimite: strDataLimite,
        descricao: strDescricao
    }

    objDados.tarefas.push (novaTarefa);
    salvaDados (objDados);
}


document.getElementById('criarTarefa').addEventListener('click', incluirTarefa);
