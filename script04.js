// Escreva uma funçao que receba um array de 5 números e retorne a média

function media(lista) {
    let soma = 0
    let media = 0
    for (let num of lista) {
        soma += num
        media = soma / lista.length
    }
    return console.log(media)
}

media([10, 9, 8])