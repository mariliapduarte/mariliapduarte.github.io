/* JS INICIAL PARA CEP/ENDEREÇO */
const formulario = document.querySelector("form");
const inputCep = formulario.querySelector("#cep");
const inputTelefone = formulario.querySelector("#telefone");
const inputEndereco = formulario.querySelector("#endereco");
const inputBairro = formulario.querySelector("#bairro");
const inputCidade = formulario.querySelector("#cidade");
const inputEstado = formulario.querySelector("#estado");
const bStatus = formulario.querySelector("#status");
const botaoLocalizar = formulario.querySelector("#localizar-cep");
const inputCelular = formulario.querySelector("#celular");

botaoLocalizar.addEventListener("click", function (event){
    event.preventDefault();
    //Entrar no site viacep.com.br

    /* Pegar o CEP digitado */
    let cep = inputCep.value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    console.log(url);

    /* Ajax: comunicação assíncrona (os processos ocorrem paralelamente) com o Viacep usando a função chamada fetch */

    // 1) Fazer a conexão com a API (ou acessar)
    fetch(url)

        //2) Então, recupere a resposta de acesso no formato jason
        .then(resposta => resposta.json()) 

            //3) Então, mostre os dados
            .then(dados => {
                if( "erro" in dados ) {
                bStatus.innerHTML = "CEP não encontrado!"
                inputCep.focus();
            } else {
                bStatus.innerHTML = "CEP encontrado!";
                inputEndereco.value = dados.logradouro;
                inputBairro.value = dados.bairro;
                inputCidade.value = dados.localidade;
                inputEstado.value = dados.uf;
            }

                
            });
});


/*  estamos utilizando a LIB VanillaMasker - https://github.com/vanilla-masker/vanilla-masker  - para melhorar nossa resposta a função de busca de CEP*/

VMasker(inputCep).maskPattern("99999-999");
VMasker(inputTelefone).maskPattern("(99) 9999-9999");
VMasker(inputCelular).maskPattern("(99) 9-9999-9999");


//Programação do contador de caracteres do campo mensagem
const spanMaximo = formulario.querySelector("#maximo");
const bCaracteres = formulario.querySelector("#caracteres");
const textMensagem = formulario.querySelector("#mensagem");

/* Objetivo da variavel é determinar a quantidade max de caracteres do campo "mensagem" */
let quantidade = 100;

//Evento para detectar a digitação (entrada) no campo
textMensagem.addEventListener("input", function (){
   
    //capturando o que foi digitado
    let conteudo = textMensagem.value;

    //contagem regressiva
    let contagem = quantidade - conteudo.length;

    //Add a contagem ao elemento HTML
    bCaracteres.textContent = contagem;
    
    if (contagem == 0) {
        bCaracteres.style.color = "red"; 
        textMensagem.style.boxShadow = "red 0 0 10px"
    } else {
        bCaracteres.style.color = "black"; 
        textMensagem.style.boxShadow = "black 0 0 10px"

        
    }
});

