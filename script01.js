// Escreva uma função que receba dois números e retorne o maior deles

function numberComparison(num1, num2) {
    if (num1 > num2) {
        return console.log(`${num1} é maior que ${num2}.`)
    } else if (num2 > num1) {
        return console.log(`${num2} é maior que ${num1}.`)
    } else {
        return console.log(`Os números ${num1} e ${num2} são iguais.`)
    }
}

numberComparison(5, 4)
numberComparison(3, 10.5)
numberComparison(2.5, 2.5)