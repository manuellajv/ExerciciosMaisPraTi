/* Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
*/

let quantityOfNumbes = 10
let result = 0

let a = 0 
let b = 1

for(let i = 0; i <= quantityOfNumbes; i++){z
    if(i === 0){
        console.log(a)
    } else if (i === 1){
        console.log(b)
    } else{
        result = a + b
        a = b
        b = result
        console.log(b)}
}
