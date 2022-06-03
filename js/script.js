//variaveis de acesso global

const nome = document.querySelector("#selecione_nome")
const valor = document.querySelector("#valor")
//variáveis de acesso aos botões da plataforma
const botaoInserir = document.querySelector("#inserir")
const botaoSortear = document.querySelector("#sortear")
const botaoLimpar = document.querySelector("#limpar_sorteio")
const botaoSalvaValorMinimo = document.querySelector("#salva_valor_minimo")
const botaoSalvaPremioTitulo = document.querySelector("#salva_premio_titulo")
const botaoEditaPremioTitulo = document.querySelector("#edita_premio_titulo")
const botaoSalvaPremioDescricao = document.querySelector("#salva_premio_descricao")
const botaoEditaPremioDescricao = document.querySelector("#edita_premio_descricao")
const botaoExcluirPremioTitulo = document.querySelector("#exclui_premio_titulo")
const botaoExcluirPremioDescricao = document.querySelector("#exclui_premio_descricao")
const botaoSalvaValorPremio = document.querySelector("#salva_premio_valor")
const botaoEditaValorPremio = document.querySelector("#edita_premio_valor")
const botaoExcluiValorPremio = document.querySelector("#exclui_premio_valor")
const valorPremioInput = document.querySelector("#valor_premio")
const corpoRifa = document.querySelector(".rifa_container")
const valorAcumulado = document.querySelector("#valor_acumulado")
const valorMinimo = document.querySelector("#valor_minimo")
const valorMinimoSalvo = document.querySelector("#valor_minimo_salvo")
const premioId = document.querySelector("#premio_id")
const descricaoPremio = document.querySelector("#descricao_premio")
const premioIdSalvo = document.querySelector("#premio_titulo_salvo")
const premioDescricaoSalvo = document.querySelector("#premio_descrito_salvo")
const valorPremioSalvo = document.querySelector("#premio_valor_salvo")
const lucroPrejuizoComparavel = document.querySelector("#lucro_prejuizo_comparavel")
const progressoLucro = document.querySelector("#lucro_prejuizo_progresso")
var total = 0;


//funções atribuidas aos botões

botaoInserir.addEventListener("click",function(){
  
 var nomeInput = nome.value;
 var valorInput = valor.value;
 var valorMinimoInput = valorMinimo.value;
 var nomeInputUppercase = nomeInput.toLocaleUpperCase();
  
  if(nomeInputUppercase == "" || valorInput == ""){
    return alert("todos os campos devem ser preenchidos")
}
  
  if(valorPremioSalvo.innerHTML == ""){
    
    return alert("insira um valor de prêmio")
  }
  
  if(valorMinimo.disabled == false){
    
    return alert("Insira um valor mínimo no campo valor mínimo")
    
    }
  
   
  
  
  for(i =0; i < valor.value ; i++ ){
    
    inserirNome()
  }
  nome.value = ""
  valor.value = ""
  nome.focus()
})
botaoSortear.addEventListener("click",sortear)
botaoLimpar.addEventListener("click",limparSorteio)
botaoSalvaValorMinimo.addEventListener("click",salvaValor)  
botaoEditaPremioTitulo.addEventListener("click",editaValorTitulo)
botaoEditaPremioDescricao.addEventListener("click",editaValorDescricao)
botaoSalvaPremioDescricao.addEventListener("click",salvaPremioDescricao)
botaoSalvaPremioTitulo.addEventListener("click",salvaPremioTitulo)
botaoExcluirPremioTitulo.addEventListener("click",excluiTitulo)
botaoExcluirPremioDescricao.addEventListener("click",excluiDescricao)
botaoSalvaValorPremio.addEventListener("click",salvaValorPremio)
botaoEditaValorPremio.addEventListener("click",editaValorPremio)
botaoExcluiValorPremio.addEventListener("click",excluiValorPremio)


function salvaPremioTitulo(){

  //variaveis de acesso ao DOM
  
  var premioIdValue = premioId.value;
  premioIdSalvo.innerHTML = premioIdValue
  
  //inserção do titulo do premio dentro do HTML
  botaoEditaPremioTitulo.disabled = false;
  premioId.value = ""
  
  
      
}

function editaValorTitulo(){
  
 
  botaoEditaPremioTitulo.disabled = true;
 //variaveis de acesso ao DOM 
  premioId.value = premioIdSalvo.innerText;
  premioIdSalvo.innerHTML = ""
  premioId.focus()
   
}

function excluiTitulo(){
  
  premioIdSalvo.innerHTML = ""
}

function salvaPremioDescricao(){
  
  botaoEditaPremioDescricao.disabled = false;
  var descricaoPremioValue = descricaoPremio.value;
  premioDescricaoSalvo.innerHTML = descricaoPremioValue
  descricaoPremio.value = ""
  
}



function editaValorDescricao(){
  
  
  botaoEditaPremioDescricao.disabled = true;
  //var descricaoPremioSalvo = document.querySelector(".premio_descrito_salvo")
  descricaoPremio.value = premioDescricaoSalvo.textContent;
  premioDescricaoSalvo.innerHTML = ""
  
  
  
  
}

function excluiDescricao(){
  
  premioDescricaoSalvo.innerHTML = ""
}



function salvaValorPremio(){
  botaoEditaValorPremio.disabled = false
  valorPremioInputValue = parseInt(valorPremioInput.value)     
  valorPremioSalvo.innerHTML =  valorPremioInputValue
  valorPremioInput.value = ""
  
   
  
        
}

function comparaValor(){
  
  var valorPremioSalvoCompara = valorPremioSalvo.innerText
  console.log(valorPremioSalvoCompara)
  
}



function editaValorPremio(){
  
  botaoEditaValorPremio.disabled = true;
  valorPremioInput.value = valorPremioSalvo;
  valorPremioSalvo.innerHTML = ""
  valorPremioInput.focus()
  
  
}

function excluiValorPremio(){
  
  valorPremioSalvo.innerHTML = ""
}

function salvaValor(){
  
  
  var valorMinimoInput = valorMinimo.value;
  valorMinimoSalvo.innerHTML += ` R$ <span id="valor_Minimo_Validacao">${valorMinimoInput}</span>,00` ;
  botaoSalvaValorMinimo.disabled = true;
  valorMinimo.value = ""
  valorMinimo.disabled = true;
    
}


function inserirNome(){
 
 const rifaJogada = document.querySelectorAll(".corpo_rifa")
 const paletaCores = document.querySelector("#paleta_cores")
  
 var nomeInput = nome.value;
 var valorInput = valor.value;
 var valorMinimoInput = valorMinimo.value;
 var nomeInputUppercase = nomeInput.toLocaleUpperCase();
 var paletaCoresValue = paletaCores.value;

  //converte o valor mínimo salvo dentro do HTML em um número a ser selecionado através da tag span
 var valorMinimoValidacao = parseInt(document.querySelector("#valor_Minimo_Validacao").innerText);
 console.log(valorMinimoValidacao)

 
      
//cria o objeto de uma novo ticket da rifa
  const corpoJogador = document.createElement("div")
  const botaoRemover = document.createElement("button")
  botaoRemover.classList.add("botao_remover")
  botaoRemover.innerHTML = "remover"
  corpoJogador.innerHTML = `<p class="texto_sorteio">${nomeInputUppercase}</p> <p class="texto_sorteio">R$ <span id="span_remover">${valorMinimoValidacao}</span></p>`
  corpoJogador.classList.add("corpo_rifa")
  corpoJogador.style.background = paletaCoresValue
  corpoRifa.appendChild(corpoJogador)
  corpoJogador.appendChild(botaoRemover)
  
//função interna para remover um ticket do corpo da rifa
  
  botaoRemover.addEventListener("click", function(){
      var valorRemover = botaoRemover.previousElementSibling.firstElementChild.innerText
      total -= parseInt(valorRemover)
      lucroPrejuizoComparavel.innerHTML = parseInt(total) - parseInt(valorPremioSalvo.innerText);
      valorAcumulado.innerHTML = "Valor acumulado: R$ " + total +",00";
      progressoLucro.setAttribute("value",total)
      
      botaoRemover.parentElement.remove()
    
      
    console.log(valorRemover)
    
       
    
    
    })
  
  //Declara a variável que acumula o total de dinheiro com a rifa
  total += valorMinimoValidacao
  
  valorAcumulado.innerHTML = "Valor acumulado: R$ " + total +",00";
  lucroPrejuizoComparavel.innerHTML = parseInt(total) - parseInt(valorPremioSalvo.innerText);
  progressoLucro.setAttribute("value",total)
  progressoLucro.setAttribute("max",parseInt(valorPremioSalvo.innerText))
  //progressoLucro.max(parseInt(valorPremioSalvo.innerText))
  
  
  
  
   
}



 
function sortear(){
  const rifaJogada = document.querySelectorAll(".corpo_rifa")
  
 
  console.log(rifaJogada)

  var min = Math.ceil(0)
  var max = Math.floor(rifaJogada.length)
  var sorteio = Math.floor(Math.random() * (max - min)) + min;
  var numeroSorteado = rifaJogada[sorteio]
  
  numeroSorteado.classList.add("sorteado")
  
  botaoSortear.disabled = true;
  botaoInserir.disabled = true;
  
  
  
  
}

function limparSorteio(){
   
   corpoRifa.innerHTML = ""
   valorAcumulado.innerHTML = "Valor acumulado:"
   total = 0;
   valorMinimoSalvo.innerHTML = "Valor mínimo:"
   botaoSortear.disabled = false;
   botaoSalvaValorMinimo.disabled = false;
   botaoInserir.disabled = false;
   valorMinimo.disabled = false;
  lucroPrejuizoComparavel.innerHTML = ""
  progressoLucro.setAttribute("value",0)
  progressoLucro.setAttribute("max",0)
   
   
}



 
//if(valorInput < valorMinimoValidacao){
    
    
    //return alert("o valor mínimo deve ser maior do que " + "R$ " + valorMinimoValidacao)
  //}


//validação dos formulários
 
  
//for(i = 0 ; i < rifaJogada.length ; i++){
      //if(rifaJogada[i].firstChild.innerText == nomeInputUppercase){
      //return alert("já existe uma rifa com esse nome, por favor , escolha outro nome")
     //break
//}
//}


