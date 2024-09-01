/* Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.

Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

*/

const prompt = require('prompt-sync')()

let sideA = Number(prompt("Informe o valor do primeiro lado do triângulo: "))
let sideB = Number(prompt("Informe o valor do segundo lado do triângulo: "))
let sideC = Number(prompt("Informe o valor do terceiro lado do triângulo: "))

if(sideA < (sideB + sideC) && sideB < (sideA + sideC) && sideC < (sideA + sideB)){
    if(sideA === sideB && sideB === sideC){
        console.log("O triângulo é do tipo equilátero!")
    } else if(sideA !== sideB && sideB !== sideC){
        console.log("O triângulo é do tipo escaleno!")
    } else (
        console.log("O triângulo é do tipo isósceles!")
    )
} else(
    console.log("ERRO. Os valores informados não foram um triângulo.")
)

