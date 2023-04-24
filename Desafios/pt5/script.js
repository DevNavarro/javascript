let num = window.document.querySelector('input#fnum')
let lista = window.document.querySelector('select#tab')
let res = window.document.querySelector('div#res')
let valores = []


function isNumero(n) {
    if(Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function isLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}
    


















/*
function adicionar() {
    let fnum = window.document.getElementById('txtn')
    let num = [Number(fnum.value)]
    let tab = window.document.getElementById('tab')

    if (num < 1 || num > 100 || fnum.value.length == 0) {
        window.alert('Verifique o valor Digitado')
    } else {
        let item = window.document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        tab.appendChild(item)
    }
}
function finalizar () {
    window.createElement('div')
    let numcad = window.document.createElement('p')
    numcad.text = `Ao todo, temos ${num.length} números cadastrados`
} */