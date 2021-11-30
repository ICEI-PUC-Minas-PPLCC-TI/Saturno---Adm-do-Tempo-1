// Declara uma função para processar o formulário de login
function processaFormLogin (event) {                
    // Cancela a submissão do formulário para tratar sem fazer refresh da tela
    event.preventDefault ();

    // Obtem os dados de login e senha a partir do formulário de login
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Valida login e se estiver ok, redireciona para tela inicial da aplicação
    resultadoLogin = loginUser (username, password);
    if (resultadoLogin) {
        window.location.href = 'template-telaInicial.html';
    }
    else { // Se login falhou, avisa ao usuário
        alert ('Usuário ou senha incorretos');
    }
}

function salvaLogin (event) {
// Cancela a submissão do formulário para tratar sem fazer refresh da tela
event.preventDefault ();

// Obtem os dados do formulário
let login  = document.getElementById('txt_login').value;
let nome   = document.getElementById('txt_nome').value;
let email  = document.getElementById('txt_email').value;
let senha  = document.getElementById('txt_senha').value;
let senha2 = document.getElementById('txt_senha2').value;
if (senha != senha2) {
    alert ('As senhas informadas não conferem.');
    return
}

// Adiciona o usuário no banco de dados
addUser (nome, login, senha, email);
alert ('Usuário salvo com sucesso. Proceda com o login para ');

// Oculta a div modal do login
//document.getElementById ('loginModal').style.display = 'none';
$('#loginModal').modal('hide');
}

// Associa a funçao processaFormLogin  formulário adicionado um manipulador do evento submit
document.getElementById ('login-form').addEventListener ('submit', processaFormLogin);


// Associar salvamento ao botao
document.getElementById ('btn_salvar').addEventListener ('click', salvaLogin);