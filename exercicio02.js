/* Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
*/

const prompt = require('prompt-sync')()

let name = prompt("Informe o nome: ")
let age = Number(prompt("Informe a idade: "))

if(age < 0){
    console.log("Erro. Valor inválido!")
} else if(age >= 0 && age <= 11){
    console.log(`${name} possui ${age} anos e é criança!`)
} else if(age > 11 && age <= 17){
    console.log(`${name} possui ${age} anos e é adolescente!`)
}else if(age > 17 && age <= 64){
    console.log(`${name} possui ${age} anos e é adulto!`)
} else{
    console.log(`${name} possui ${age} anos e é idoso!`)
}
