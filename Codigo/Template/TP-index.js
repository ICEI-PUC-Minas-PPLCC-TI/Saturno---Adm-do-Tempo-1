// Verifica se o usuário já esta logado e se negativo, redireciona para tela de login        
if (!usuarioCorrente.login) {
    window.location.href = LOGIN_URL;
}
