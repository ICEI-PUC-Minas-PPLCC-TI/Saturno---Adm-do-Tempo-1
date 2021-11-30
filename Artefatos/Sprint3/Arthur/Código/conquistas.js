let page = window.location.href.includes("conquistas") ? "conquistas" : "tarefas"

let medalha1=document.getElementById("medalha-1")
let medalha2=document.getElementById("medalha-2") 
let medalha3=document.getElementById("medalha-3") 

let conclui=document.getElementById("concluir")

let contador=localStorage.getItem("criados")

if(page=="conquistas")
{
    if(contador>=5)
    {
        medalha1.src="imagens/conquista-tier3.png";
    }

    if(contador>=15)
    {
        medalha2.src="imagens/conquista-tier2.png";
    }

    if(contador>=25)
    {
        medalha3.src="imagens/conquista-tier1.png"; 
    }
}

function concluir()
{
    contador++;
    localStorage.setItem("criados", contador)
    console.log(contador)
 
}

document.getElementById("criarTarefa").addEventListener('click',concluir())  