// Verifica se o usuário já esta logado e se negativo, redireciona para tela de login        
if (!usuarioCorrente.login) {
    window.location.href = LOGIN_URL; //ATENÇAO! Link talvez não funcione
}
/*
function exibeUsuarios() {
    
    // Popula a tabela com os registros do banco de dados
    let listaUsuarios = '';
    for (i = 0; i < db_usuarios.usuarios.length; i++) {
        let usuario = db_usuarios.usuarios[i];
        listaUsuarios += `<tr><td scope="row">${usuario.nome}</td><td>${usuario.login}</td><td>${usuario.email}</td></tr>`;
    }
    
    // Substitui as linhas do corpo da tabela
    document.getElementById("table-usuarios").innerHTML = listaUsuarios

}

function initPage() {

    // Associa a função de logout ao botão
    document.getElementById('btn_logout').addEventListener('click', logoutUser);

    // Informa o nome do usuário logado
    document.getElementById('nomeUsuario').innerHTML = usuarioCorrente.nome;

    // Lista os usuários 
    exibeUsuarios ();
}

// Associa ao evento de carga da página a função para verificar se o usuário está logado
window.addEventListener('load', initPage);
*/