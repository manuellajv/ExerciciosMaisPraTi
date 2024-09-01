/* Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
*/

const prompt = require('prompt-sync')()

let name = prompt("Informe o seu nome: ")
let weight = prompt("Informe o seu peso: ")
let height = Number(prompt("Informe sua altura: "))

let imc = weight / (height * height)

if(imc < 18.5){
    console.log(`Tendo ${height} m de altura e pesando ${weight} KG, ${name} está abaixo do peso!`)
} else if(imc >= 18.5 && imc < 25){
    console.log(`Tendo ${height} m de altura e pesando ${weight} KG, ${name} está com um peso normal!`)
} else if(imc >= 25 && imc < 30){
    console.log(`Tendo ${height} m de altura e pesando ${weight} KG, ${name} está com sobrepeso!`)
} else {
    console.log(`Tendo ${height} m de altura e pesando ${weight} KG, ${name} está com obesidade!`)
}