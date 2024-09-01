/* Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
utilizando um loop for.
*/

const prompt = require('prompt-sync')()

let option = 0

do{
    console.log("------------------------------------")
    console.log("MENU DE OPÇÕES")
    console.log("[1] Iniciar contagem regressiva")
    console.log("[2] Sair")
    option = Number(prompt("Digite a opção desejada: "))
    console.log("------------------------------------")

    if(option === 1){
        for(let i = 10; i > 0; i--){
            console.log(i)
        }
    } else{
        console.log("Você escolheu sair. Até mais!")
    }

} while(option !== 2)

    