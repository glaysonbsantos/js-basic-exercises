// Escreva uma função que receba um Array com 3 números e imprima eles em ordem

function printInOrder(num1, num2, num3) {
    let array = [num1, num2, num3]
    let inOrder = array.sort()
    for (i of inOrder) {
        console.log(i)
    }
    console.log('Fim da função printInOrder.')
}

printInOrder(3, 2, 1)
printInOrder(2, 5, 7.5)