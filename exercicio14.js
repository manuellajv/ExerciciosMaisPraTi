/* Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
*/

const prompt = require('prompt-sync')()

let number = Number(prompt("Informe um número para verificar o fatorial: "))
let factorial = 1

for(let i = number; i > 0; i--){
    factorial *= i;
}

console.log(`O fatorial de ${number} é ${factorial}`)