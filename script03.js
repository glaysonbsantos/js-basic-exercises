// Escreva uma função que receba um Array com 5 números e retorne o maior deles

function numberComparison(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

function retornaMaiorDaLista(lista) {
    let maior = lista[0]
    for (let num of lista) {
        maior = numberComparison(num, maior)
    }
    return console.log(maior)
}

retornaMaiorDaLista([5, 4, 3, 2, 1])

retornaMaiorDaLista([3.3, 10, 8, 4.5, 5, 2.7, 1, 9, 9, 10, 11])