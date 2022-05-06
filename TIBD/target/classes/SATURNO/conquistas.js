let page = window.location.href.includes("conquistas") ? "conquistas" : "tarefas"

let medalha1=document.getElementById("medalha-1")
let medalha2=document.getElementById("medalha-2") 
let medalha3=document.getElementById("medalha-3") 

let conclui=document.getElementById("concluir")

let contador=JSON.parse(sessionStorage.getItem("usuarioCorrente")).tarefasCriadas;

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
    let usuarioCorrente = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
    let usuarios = JSON.parse(localStorage.getItem("db_usuarios"));
    let index = usuarios.usuarios.map((usuario) => {

        if(usuario.id===usuarioCorrente.id)
        {
            return usuarios.usuarios.indexOf(usuario)
        }

    }).filter(index => index!=undefined)[0]

    

    contador++;

    usuarioCorrente.tarefasCriadas = contador;
    usuarios.usuarios[index].tarefasCriadas = contador;


    localStorage.setItem("db_usuarios", JSON.stringify(usuarios))
    sessionStorage.setItem("usuarioCorrente", JSON.stringify(usuarioCorrente))
    
 
}

document.getElementById("criarTarefa").addEventListener('click',concluir)  