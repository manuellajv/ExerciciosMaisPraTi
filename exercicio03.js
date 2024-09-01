/* Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. 
*/

const prompt = require('prompt-sync')()

let nameStudent = (prompt("Informe o nome do aluno: "))
let grade = Number(prompt("Informe a nota do aluno: "))

if(grade < 0 || grade > 10){
    console.log("ERRO. Valor inválido!")
} else if(grade >= 0 && grade <= 5){
    console.log(`O aluno ${nameStudent} está reprovado!`)
} else if(grade > 5 && grade <= 6){
    console.log(`O aluno ${nameStudent} está em recuperação!`)
} else{
    console.log(`O aluno ${nameStudent} está aprovado!`)
}

