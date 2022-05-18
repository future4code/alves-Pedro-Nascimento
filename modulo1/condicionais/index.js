// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// SE o numero for par pasou no teste, se nao nao passou 
// B) Para que tipos de números ele imprime no console "Passou no teste"? 
// NUMEROS PARES
// c) Para que tipos de números a mensagem é "Não passou no teste"?
// NUMEROS IMPARES



// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
//a) Para que serve o código acima?
// o codigo a cima vai pegar a fruta escolhida pelo usuario e fonecer o valor dela com base na escolha do usuario

// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
//case "Maçã":
// preco = 2.25

// "O PREÇO DA FRUTA MAÇA É 2.25"
// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos
//  o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
//acredito que nao seria expresso no console, pois o comando break serve parafinalizar um loop(é importante).


// const numero = Number(prompt("Digite o primeiro número.")

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo? 
// const numero = Number(prompt("Digite o primeiro número."))
// criando a constante numero (vai aparecer um prompt)e a variavel vai ter o valor que for escrito no prompt e ela é Number 

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// if(numero > 0) {
//     console.log("Esse número passou no teste")
//       let mensagem = "Essa mensagem é secreta!!!"
// }
// se o numero for =10 vai aparecer esta msg "Essa mensagem é secreta!!!"
// se for -10 acredito que nao vai aparecer msg nenhuma pois nao foi codado para aparecer quando o numero for negativo 
// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// falta o break para finalizar o looping do cod

///1
 


// const idadeDousuario = Number (prompt("quantos anos você tem?")) 

// function maiorDeidade (podeDirigir,naoPode){
//   if( podeDirigir >= 18) 
//   {
//     console.log("Você pode dirigir");
// } else( naoPode <= 18) 
// {
//     console.log("Você não pode dirigir.");
// }
// }
// idadeDousuario=(maiorDeidade)

// Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) 
// ou V (Vespertino) ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else


// const turnoDoaluno =(prompt("qual o seu turno?(responda com _M ou V ou N.")).toLowerCase
// function turno(_m,n,v){
// if(n){
//   console.log("boa noite")
// }else if(v){
//   console.log("boatarde")
// }else {
//     console.log("bomdia")
//   }
// }

// turno (turnoDoaluno)


// const turnoDoaluno =(prompt("qual o seu turno?(responda com M ou V ou N.")).toLowerCase
// const horarioDeensino = ( turno) =>{
//   switch (turno){
//     case("m"):
//         console.log("Bom dia!")
//         break
//         case("v"):
//         console.log("boa tarde!")
//         break
//         case("n"):
//         console.log("Boa noite!")
//         break
//         default:
//         console.log("Você não respondeu corretamente!!!")
//     } 

//   }
   
// turno=(turnoDoaluno)

// Considere a situação: você vai ao cinema 
// com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele 
// for do gênero fantasia e se o ingresso está abaixo de 15 reais. 
// Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
// Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("



// const genero =prompt("qual o genero do filme?").toLowerCase
// const preço = Number (prompt("valor do ingresso"))

// function irparaocinema( fadinha, ingresso){
// if((genero==="fantasia") && (preço<=15){
//   console.log("bomfilme")
  
// }

// )

// }

// irparaocinema(genero,preço)



