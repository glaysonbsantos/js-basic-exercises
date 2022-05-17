// Escreva uma função que receba um número e imprima se ele é par ou ímpar

function parImpar(num) {
    if (num % 2 == 0) {
        console.log(`O número ${num} é par.`)
    } else {
        console.log(`O número ${num} é ímpar.`)
    }
}

parImpar(8)
parImpar(5)