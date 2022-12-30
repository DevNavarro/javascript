function adicionar() {
    let txtn = window.document.getElementById('txtn')
    let num = [Number(txtn.value)]
    let tab = window.document.getElementById('tab')

    if (num < 1 || num > 100 || txtn.value.length == 0) {
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
}