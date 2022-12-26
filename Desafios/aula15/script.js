function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.getElementById('foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'images/bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'images/jovem-m.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'images/adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'images/idoso-m.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'images/bebe-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'images/jovem-f.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'images/adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'images/idoso-f.png')
            }
        }
        img.style.textAlign = 'center'
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}