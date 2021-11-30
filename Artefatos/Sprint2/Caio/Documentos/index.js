var strDado = localStorage.getItem('db');
if (strDado)
{
    document.getElementById ('tL').style.display = 'none';
}

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


let tela = document.getElementById('tela');
let strHtml = '';
let objDados = leDados ();

for (i=0; i< objDados.tarefas.length; i++) 
{
    strHtml += `<div class="tarefa"><div class="nome"><b>${objDados.tarefas[i].nome}</b></div> <div class="descricao">${objDados.tarefas[i].descricao}</div> <div class="editar"><a id="editar" href="template-editaTarefa.html"><img src="imagens/editar.png" width="6%"></a></div> <div class="data">${objDados.tarefas[i].dataLimite}</div> <div class="concluido"><a href="index.html" id="concluido"><img src="imagens/concluido.png" width="6%"></a></div></div>`
}
tela.innerHTML = strHtml;

function limpaLs ()
{
    localStorage.clear();
}

document.getElementById('concluido').addEventListener ('click', limpaLs)
document.getElementById('editar').addEventListener ('click', limpaLs)
