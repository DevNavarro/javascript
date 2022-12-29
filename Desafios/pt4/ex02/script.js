function tabuada () {
    let num = document.getElementById('txtn') // SELECIONOU O INPUT DE NÚMERO
    let tab = document.getElementById('seltab') // SELECIONOU O SELECT AONDE ESTARÃO OS RESULTADOS
    if (num.value.length == 0) { // Falar que um total de 0 caractéres não pode ser escrito 
        window.alert('Por favor, digite um número!') // Se escrever nada aparece isso
    } else { //se não
        let n = Number(num.value) //VALOR DIGITADO NO INPUT NÚMERO
        let c = 1 // VALOR ONDE COMEÇARÁ A SER CALCULADO A TABUADA
        tab.innerHTML = '' // Para Apagar tudo que está escrito no SELECT (select#seltab) ao clicar no botão 
        while (c <=10) { //Enquando o "c" foi >= (menor igual) à "10" ele não parará o loop
            let item = document.createElement('option') // SEMPRE CRIAR UMA OPTION QUANDO EXECUTAR PARA COLOCAR O RESULTADO
            item.text = `${n} x ${c} = ${n*c}` // Nessa Option criada aparecerá = (Número da pessoa) x (Valor de C) = (Número da pessoa * Valor de C)
            item.value = `tab${c}` // SÓ É IMPORTANTE PARA O PHP NÃO MUDA NADA O FUNCIONAMENTO DE JAVASCRIPT
            tab.appendChild(item) // Adicionar o resultado na Option criada
            c++ // atribuir +1 para a "let c"
        }
    }
    
}