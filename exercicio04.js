/* Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

const prompt = require('prompt-sync')()

let option = 0
do{
    console.log("--------------------------------------------")
    console.log("MENU DE OPÇÕES")
    console.log("[1] Verificar se um número é par ou ímpar")
    console.log("[2] Calcular a diferença entre dois números")
    console.log("[3] Sair")
    console.log("--------------------------------------------")
    option = Number(prompt("Digite a opção desejada: "))
    switch(option){
    case 1: 
        let number = Number(prompt("Digite o número: "))
        if(number % 2 ===0){
            console.log("O número informado é par!")
        } else {
            console.log("O número informado é ímpar!")
        }
        break

    case 2: 
        let numOne = Number(prompt("Digite o primeiro valor: "))
        let numTwo = Number(prompt("Digite o segundo valor: "))
        let total = numOne - numTwo
        console.log(`A diferença entre ${numOne} e ${numTwo} é ${total}`)
        break

    case 3:
        console.log("Você escolheu sair. Até mais!")
        break
}
} while (option !== 3)