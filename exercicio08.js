/* Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
*/

const prompt = require('prompt-sync')()

let valueOne = Number(prompt("Digite o primeiro valor: "))
let valueTwo = Number(prompt("Digite o segundo valor: "))

if(valueOne === valueTwo){
    console.log("ERRO. Os valores são iguais!")
} else if(valueOne < valueTwo){
    console.log(`Valores em ordem crescente: ${valueOne}, ${valueTwo}`)
} else{
    console.log(`Valores em ordem crescente: ${valueTwo}, ${valueOne}`)
}