// Escreva um programa que vá de 0 a 100 e imprima o número na tela caso não seja múltiplo de 4. Para cada número que seja múltiplo de 4 imprima "pi" no lugar

let num = 0

while (num < 101) {
    if (num % 4 == 0) {
        console.log('pi')
    } else {
        console.log(`${num} não é múltiplo de 4`)
    }
    num++
}