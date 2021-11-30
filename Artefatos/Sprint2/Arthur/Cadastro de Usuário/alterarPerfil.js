var caracteresInvalidos = '!#$%¨&*()}{><:[];';
let usuarioAtual;
let edicao = false;
let error = false;
let botaoId = document.getElementById('botao');
var nomeId = document.getElementById('nome');
var emailId = document.getElementById('email');
var sobrenomeId = document.getElementById('sobrenome');
var idadeId = document.getElementById('idade');
var nascimentoId = document.getElementById('nascimento');
var generoId = document.getElementById('genero');

//Tirado do stackoverflow: https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
//Uma função que calcula a idade da pessoa recebendo a data do aniversário
function getAge(aniversarioString){
    let hoje = new Date();
    let aniversario = new Date(aniversarioString);
    let idade = hoje.getFullYear() - aniversario.getFullYear();
    var m = hoje.getMonth() - aniversario.getFullYear();
    if(m < 0 || (m === 0 && hoje.getDate() < aniversario.getDate())){
        idade--;
    }
    return idade;
}

//Atualiza os dados da página dependendo das infermações do usuário
function atualizar(usuarioAtual){

    nomeId.innerHTML = "<b>Nome:</b> <em>"+ usuarioAtual.nome +"</em>";
    sobrenomeId.innerHTML = "<b>Sobrenome:</b> <em>" + usuarioAtual.sobrenome + "</em>";
    emailId.innerHTML = "<b>Email:</b> <em>" + usuarioAtual.email + "</em>"
    idadeId.innerHTML = "<b>Idade:</b> <em>" + getAge(usuarioAtual.nascimento) + "</em>";
    nascimentoId.innerHTML = "<b>Nascimento:</b> <em>" + usuarioAtual.nascimento + "</em>";
    generoId.innerHTML = "<b>Genero:</b> <em>" + usuarioAtual.genero + "</em>";
}

//Carrega um usuário caso não tenha nenhum e carrega o usuario salvo caso exista, se não cria um novo usuario e salva ele 
if(usuarioAtual === null){
    if(JSON.parse(localStorage.getItem('usuario') != null)){
        usuarioAtual  = JSON.parse(localStorage.getItem('usuario'));
        atualizar(usuarioAtual);
    }
    else{
        let usuario = {
            id : 1,
            nome : "Fulano",
            sobrenome : "Ciclano",
            email : "fulano@gmail.com",
            nascimento : '10/10/2010',
            genero : "M"
        };
        localStorage.setItem('usuario', JSON.stringify(usuario));
        usuarioAtual = JSON.parse(localStorage.getItem('usuario'));
        atualizar(usuarioAtual);
    }
}
else{
    if(JSON.parse(localStorage.getItem('usuario') != null)){
        if(usuarioAtual == JSON.parse(localStorage.getItem('usuario'))){
            atualizar(usuarioAtual);
        }else{
            usuarioAtual = JSON.parse(localStorage.getItem('usuario'));
            atualizar(usuarioAtual);
        }
    }
    else{
        let usuario = {
            id : 1,
            nome : "Fulano",
            sobrenome : "Ciclano",
            email : "fulano@gmail.com",
            nascimento : '10/10/2010',
            genero : "M"
        };
        localStorage.setItem('usuario', JSON.stringify(usuario));
        usuarioAtual = JSON.parse(localStorage.getItem('usuario'));
        atualizar(usuarioAtual);
    }
}

botaoId.onclick = () => {
    if(edicao == true){
        //Salva os dados novos do usuário no banco de dados e atualiza a página e desabilita a edição
        localStorage.setItem('usuario', JSON.stringify(usuarioAtual));
        botaoId.innerHTML = "Editar Perfil";
        atualizar(usuarioAtual);
        edicao = false;

    }else{
        //Muda todos os dados para uma barra de input onde o valor salvo é colocado como valor padrão
        nomeId.innerHTML = "<label for=\"nome\"><b>Nome:</b></label>\n<input type=\"text\" id=\"nomeInput\" name=\"nnome\" value=\"" + usuarioAtual.nome +"\"/>";
        sobrenomeId.innerHTML = "<label for=\"sobrenome\"><b>Sobrenome:</b></label>\n<input type=\"text\" id=\"sobrenomeInput\" name=\"nsobrenome\" value=\"" + usuarioAtual.sobrenome +"\"/>";
        emailId.innerHTML = "<label for=\"email\"><b>Email:</b></label>\n<input type=\"text\" id=\"emailInput\" name=\"nemail\" value=\"" + usuarioAtual.email +"\"/>";
        nascimentoId.innerHTML = "<label for=\"nome\"><b>Nascimento:</b></label>\n<input type=\"text\" id=\"nascimentoInput\" name=\"nnascimento\" value=\"" + usuarioAtual.nascimento +"\"/>";
        generoId.innerHTML = "<label for=\"nome\"><b>Genero:</b></label>\n<input type=\"text\" id=\"generoInput\" name=\"ngenero\" value=\"" + usuarioAtual.genero +"\"/>";
        botaoId.innerHTML = "Salvar";
        edicao = true;

        //Depois do usuario terminar a edição os novos dados são salvos no usuário
        //Nome
        var nomeInp = document.getElementById('nomeInput');
        nomeInp.onchange = () => {
            //Salva o valor dado, caso esteja em branco dá um alerta e completa com o último valor salvo
            if(nomeInp.value.length != 0){
                usuarioAtual.nome = nomeInp.value;
            }
            else{
                alert("Não deixe nenhum campo em branco");
                nomeId.innerHTML = "<label for=\"nome\"><b>Nome:</b></label>\n<input type=\"text\" id=\"nomeInput\" name=\"nnome\" value=\"" + usuarioAtual.nome +"\"/>";
            }
            
        }

        nomeInp.oninput = () => {
            //Não permite certos simbolos de serem escritos nos inputs
            let ultimochar = nomeInp.value.charAt(nomeInp.value.length-1);
            if(caracteresInvalidos.indexOf(ultimochar) >= 0){
                nomeInp.value = nomeInp.value.slice(0,-1);
            }
            
        }

        //Sobrenome
        var sobrenomeInp = document.getElementById('sobrenomeInput');
            sobrenomeInp.onchange = () => {
            if(sobrenomeInp.value.length != 0){
                usuarioAtual.sobrenome = sobrenomeInp.value;
            }
            else{
                alert("Não deixe nenhum campo em branco");
                sobrenomeId.innerHTML = "<label for=\"sobrenome\"><b>Sobrenome:</b></label>\n<input type=\"text\" id=\"sobrenomeInput\" name=\"nsobrenome\" value=\"" + usuarioAtual.sobrenome +"\"/>";
            }
        }

        sobrenomeInp.oninput = () => {
            let ultimochar = sobrenomeInp.value.charAt(sobrenomeInp.value.length-1);
            if(caracteresInvalidos.indexOf(ultimochar) >= 0){
                sobrenomeInp.value = sobrenomeInp.value.slice(0,-1);
            }
            
        }
        
        //email
        var emailInp = document.getElementById('emailInput');
        emailInp.onchange = () => {
            if(emailInp.value.length != 0){
                usuarioAtual.email = emailInp.value;
            }
            else{
                alert("Não deixe nenhum campo em branco");
                emailId.innerHTML = "<label for=\"email\"><b>Email:</b></label>\n<input type=\"text\" id=\"emailInput\" name=\"nemail\" value=\"" + usuarioAtual.email +"\"/>";
            }
        }

        emailInp.oninput = () => {
            let ultimochar = emailInp.value.charAt(emailInp.value.length-1);
            if(caracteresInvalidos.indexOf(ultimochar) >= 0){
                emailInp.value = emailInp.value.slice(0,-1);
            }
            
        }

        //Data de nascimento
        var nascimentoInp = document.getElementById('nascimentoInput');
        nascimentoInp.onchange = () => {
            if(nascimentoInp.value.length != 0){
                usuarioAtual.nascimento = nascimentoInp.value;
            }
            else{
                alert("Não deixe nenhum campo em branco");
                nascimentoId.innerHTML = "<label for=\"nascimento\"><b>Nascimento:</b></label>\n<input type=\"text\" id=\"nascimentoInput\" name=\"nnascimento\" value=\"" + usuarioAtual.nascimento +"\"/>";
            }
        }

        nascimentoInp.oninput = () => {
            let ultimochar = nascimentoInp.value.charAt(nascimentoInp.value.length-1);
            if(caracteresInvalidos.indexOf(ultimochar) >= 0){
                nascimentoInp.value = nascimentoInp.value.slice(0,-1);
            }
            
        }

        //genero
        var generoInp = document.getElementById('generoInput');
        generoInp.onchange = () => {
            if(generoInp.value.length != 0){
                usuarioAtual.genero = generoInp.value;
            }
            else{
                alert("Não deixe nenhum campo em branco");
                generoId.innerHTML = "<label for=\"genero\"><b>Genero:</b></label>\n<input type=\"text\" id=\"generoInput\" name=\"ngenero\" value=\"" + usuarioAtual.genero +"\"/>";
            }
        }

        generoInp.oninput = () => {
            let ultimochar = generoInp.value.charAt(generoInp.value.length-1);
            if(caracteresInvalidos.indexOf(ultimochar) >= 0){
                generoInp.value = generoInp.value.slice(0,-1);
            }
            
        }
    }    
}