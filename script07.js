// Escreva uma função que receba um objeto e imprima suas propriedades

function imprimeObj(obj) {
    for (let prop in obj) {
        console.log(prop)
    }
}

imprimeObj({Nome: 'Jess',
            Idade: '26',
            Sexo: 'Feminino'
})