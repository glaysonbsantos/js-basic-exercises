// Escreva uma função que receba uma data e retorne um objeto com as propriedades dia, mês e ano Referentes a essa data.

function data(d){
    let meses = ['Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro']
    return {
        dia: d.getDate(),
        mes: meses[d.getMonth()],
        ano: d.getFullYear()
    }
}

console.log(data(new Date(Date.now())))