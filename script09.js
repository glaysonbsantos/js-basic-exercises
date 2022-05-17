// Escreva um programa que receba um array de objetos com as propriedades altura e idade e imprima: A maior e menor altura e a média da idade

function maiorEntreDois(num1,num2) {
    if( num1 > num2) {
        return num1
    } else{
        return num2
    }
}

function menorEntreDois(num1,num2) {
    if (num2 > num1) {
        return num1
    }else{
        return num2
    }
}

function media(lista) {
    var total = 0;
    for (let num of lista) {
        total +=num
    }
    return total / lista.length
}

function pessoas(listaDePessoas){
    var maiorAltura = 0;
    var menorAltura = 999;
    var idades = []
    for(let pessoa of listaDePessoas){
        maiorAltura = maiorEntreDois(maiorAltura,pessoa.altura)
        menorAltura = menorEntreDois(menorAltura, pessoa.altura)
        idades.push(pessoa.idade)
    }
    console.log(maiorAltura)
    console.log(menorAltura)
    console.log(media(idades))

}

    pessoas([{altura:1.8,idade:23},
     {altura:1.9,idade:27},
     {altura:1.65,idade:33},
     {altura:1.83,idade:44},
     {altura:1.91,idade:45},
     {altura:1.54,idade:16}])