// let array
// console.log('a. ', array)
// var criada sem valor

// array = null
// console.log('b. ', array)
//var com valor nulo

//          0  1  2  3  4  5  6  7   8   9   10(11)  
// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
//conta a quantidade de caracteres no array

// let i = 0
// console.log('d. ', array[i])
// let i = 3 dentro do array

// array[i+1] = 19
// console.log('e. ', array)
//

// const valor = array[i+6]
// console.log('f. ', valor)
// var f = 9

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) 
//valor 27

const nomeDeusuario = prompt("qual é o seu Nome?")
const email = prompt("digite o seu email.")
//O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!
const mensagemDeboasVindas = "O e-mail" + email + "foi cadastrado com sucesso. Seja Bem-vinda(O)," + nomeDeusuario 
console.log(mensagemDeboasVindas)
//ou
const mensagemSalva =`O e-mail${email} Foi cadastrado com.sucesso. Seja Bem-venda(O),${nomeDeusuario}` 
console.log(mensagemSalva)
//exercicio numero2
  
//                      0        1           2          3               4 
const top5Comidas= ["lasanha", "pizza", "panqueca", "macarrão", "melancia"]
console.log(top5Comidas)
//Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela 
//inserida pelo usuário. Imprima no console a nova lista

const comidaDousuario= prompt("qual é a sua comida favorita?")

top5Comidas[1] = comidaDousuario


console.log(`essas são as melhores comidas do mundo:${top5Comidas}`);








