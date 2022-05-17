// Escreva um programa que imprima o seguinte padrão
// * 
// * * 
// * * * 
// * * * * 
// * * * * *

function escada(altura) {
    for (let i = 1; i <= altura; i++) {
        let string = ''
        for (let k = 1; k <= i; k++) {
            string += ' *'
        }
        console.log(string)
    }
}

escada(5)