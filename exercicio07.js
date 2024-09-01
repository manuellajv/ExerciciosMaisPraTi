/* As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e 
escreva o valor total da compra.
*/

const prompt = require('prompt-sync')()

let quantityOfApples = Number(prompt("Digite a quantidade de maçãs compradas: "))
let sumOfApples = 0

if(quantityOfApples <= 0){
    console.log("ERRO. Nenhuma maçã foi comprada!")
} else if(quantityOfApples < 12){
    sumOfApples = quantityOfApples * 0.30
    console.log(`Comprando ${quantityOfApples} maçãs, o valor total da compra é R$${sumOfApples}`)
} else{
    sumOfApples = quantityOfApples * 0.25
    console.log(`Comprando ${quantityOfApples} maçãs, o valor total da compra é R$${sumOfApples}`)
}