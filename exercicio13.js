/* Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

const prompt = require('prompt-sync')()

let number = 0
let sum = 0
let counter = 0

do {
    number = Number(prompt("Digite um número decimal ou digite 0 para calcular a média aritmética dos números informados: ")) 
    if(number !== 0){
        sum += number
    } else{
        console.log("Você escolheu fazer a média aritmética!")
    }
    counter++
} while(number !== 0)

let arithmeticMean = sum / counter
console.log(`A média aritmética dos números informados é ${arithmeticMean}`)