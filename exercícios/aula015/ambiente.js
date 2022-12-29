let num = [7, 8, 3, 2, 0, 7]
num[6] = 9
num.push(7) //a ultima variável sempre será essa
num.length // length é um atributo então não precisa de "()"
num.sort() // ordem crescente dos elementos OBRIGATÓRIO O USO DO "()"
    console.log(`Nosso vetor é o ${num}, e tem ${num.length} posições`)
    console.log(`A primeira posição do vetor é ${num[0]}.`)
    let pos = num.indexOf(1) // achar o valor 8 e dar a posição
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 1 está na posição ${pos}`)
}
