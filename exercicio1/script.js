
let nome
let idade

console.log(typeof nome)
console.log(typeof idade)

//o tipo está como undefined pois não foi atribuído nenhum valor para a variável

nome = prompt("qual é o seu nome?")
idade = prompt("qual é a sua idade?")

console.log(typeof nome)
console.log(typeof idade)

//o tipo alterou para String

console.log("Olá", nome, "você tem", idade, "anos.") */

//const respostaA = prompt("Você dormiu bem hoje?")
//const respostaB = prompt("Qual seu filme favorito?")
//const respostaC = prompt("Qual a sua música favorita?")


const perguntaA = "Você dormiu bem hoje?"
const perguntaB = "Qual seu filme favorito?"
const perguntaC = "Qual a sua música favorita?"

const respostaaA = prompt(perguntaA)
const respostaaB = prompt(perguntaB)
const respostaaC = prompt(perguntaC)

console.log(perguntaA, "-", respostaaA)
console.log(perguntaB, "-", respostaaB)
console.log(perguntaC, "-", respostaaC) 