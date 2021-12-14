var caracteresInvalidos = '!#$%¨&*()}{><:[];';
let usuarioAtual;
let imgData = null;
let edicao = false;
let error = false;
let botaoId = document.getElementById('botao');
var nomeId = document.getElementById('nome');
var emailId = document.getElementById('email');
var usuarioId = document.getElementById('login');
var nascimentoId = document.getElementById('nascimento');
var generoId = document.getElementById('genero');
var imgId = document.getElementById('imgPerfil');
var src = "imagens\\logo-saturno.png";

//Atualiza os dados da página dependendo das infermações do usuário
function atualizar(usuario){

    nomeId.innerHTML = "<b>Nome:</b> <em>"+ usuario.nome +"</em>";
    usuarioId.innerHTML = "<b>Login:</b> <em>" + usuario.login + "</em>";
    emailId.innerHTML = "<b>Email:</b> <em>" + usuario.email + "</em>"
    nascimentoId.innerHTML = "<b>Nascimento:</b> <em>" + usuario.niver + "</em>";
    generoId.innerHTML = "<b>Genero:</b> <em>" + usuario.genero + "</em>";

    if(usuario.img != null){
        imgData = usuario.img;
        atualizarImg(imgData)
    }
}

function atualizarImg(img){
    imgId.innerHTML =  `<img id class="img-perfil" alt="img-perfil" src="${img}" width="20%"></img>`
}

//Carrega o usuario logado
usuarioAtual = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
atualizar(usuarioAtual);
console.log(usuarioAtual);

botaoId.onclick = () => {
    if(edicao == true){
        //Salva os dados novos do usuário no banco de dados e atualiza a página e desabilita a edição
        sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioAtual));
        botaoId.innerHTML = "Editar Perfil";
        atualizar(usuarioAtual);
        edicao = false;
        let db_usuarios = JSON.parse(localStorage.getItem('db_usuarios'));
        var usuario2 = { usuarios: [] };

        for (var i = 0; i < db_usuarios.usuarios.length; i++) {
            var usuario = db_usuarios.usuarios[i];
            
            if (usuario.id === usuarioAtual.id) {
                usuario.email = usuarioAtual.email;
                usuario.nome = usuarioAtual.nome;
                usuario.niver = usuarioAtual.niver;
                usuario.genero = usuarioAtual.genero;

                if(imgData != null){
                    usuario.img = imgData;
                    usuarioAtual.img = imgData;
                }
            }

            usuario2.usuarios.push(usuario);
        }
        console.log(usuario2);
        localStorage.setItem('db_usuarios', JSON.stringify(usuario2));
        sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioAtual));

        if(imgData != null){
            atualizarImg(imgData);
        }else{
            atualizarImg(src);
        }
        

    }else{
        //Muda todos os dados para uma barra de input onde o valor salvo é colocado como valor padrão
        nomeId.innerHTML = "<label for=\"nome\"><b>Nome:</b></label>\n<input type=\"text\" id=\"nomeInput\" name=\"nnome\" value=\"" + usuarioAtual.nome +"\"/>";
        emailId.innerHTML = "<label for=\"email\"><b>Email:</b></label>\n<input type=\"text\" id=\"emailInput\" name=\"nemail\" value=\"" + usuarioAtual.email +"\"/>";
        nascimentoId.innerHTML = "<label for=\"nome\"><b>Nascimento:</b></label>\n<input type=\"date\" id=\"nascimentoInput\" name=\"nnascimento\" value=\"" + usuarioAtual.niver +"\"/>";
        generoId.innerHTML = "<label for=\"nome\"><b>Genero:</b></label>\n<input type=\"text\" id=\"generoInput\" name=\"ngenero\" value=\"" + usuarioAtual.genero +"\"/>";
        botaoId.innerHTML = "Salvar";
        imgId.innerHTML += `<label for=\"nome\"><b>Imagem de Perfil:</b></label>\n<input type=\"file\" id=\"imgInput\" name=\"ngenero\" value=\"" + usuarioAtual.genero +"\"/>`;
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
                usuarioAtual.niver = nascimentoInp.value;
            }
            else{
                alert("Não deixe nenhum campo em branco");
                nascimentoId.innerHTML = "<label for=\"nascimento\"><b>Nascimento:</b></label>\n<input type=\"text\" id=\"nascimentoInput\" name=\"nnascimento\" value=\"" + usuarioAtual.niver +"\"/>";
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

        //Img
        document.getElementById('imgInput').addEventListener("change", function(){
            console.log(this.files);
            const leitor = new FileReader();

            leitor.addEventListener("load", () => {
                console.log(leitor.result);
                imgData = leitor.result;
            });

            leitor.readAsDataURL(this.files[0]);
        })
    }    
}
