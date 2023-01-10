function verificar() {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_nasc = document.getElementById('nasc')
    var res = document.getElementById('res')
    var sex = document.getElementsByName('usua_sex')
    var idade = ano_atual - ano_nasc.value
    var gen = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (ano_nasc.value.length == 0 || ano_nasc.value > ano_atual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        if (sex[0].checked) {
            gen = 'Homem'
            if (idade >=0 && idade < 7) {
                // bebe
                img.src = 'imagens/bebe.png'
            } else if (idade < 13) {
                // criança
                img.src = 'imagens/crianca-menino.png'
            } else if (idade < 19) {
                // adolescente
                img.src = 'imagens/garoto-jovem.png'
            } else if (idade < 31) {
                // jovem adulto
                img.src = 'imagens/homem-jovem.png'
            } else if (idade < 60) {
                // adulto
                img.src = 'imagens/homem-adulto.png'
            } else {
                // idoso
                img.src = 'imagens/homem-idoso.png'
            }

        } else {
            gen = 'Mulher'
            if (idade >=0 && idade < 7) {
                // bebe
                img.src = 'imagens/bebe.png'
            } else if (idade < 13) {
                // criança
                img.src = 'imagens/crianca-menina.png'
            } else if (idade < 19) {
                // adolescente
                img.src = 'imagens/garota-jovem.png'
            } else if (idade < 31) {
                // jovem adulto
                img.src = 'imagens/mulher-jovem.png'
            } else if (idade < 60) {
                // adulto
                img.src = 'imagens/mulher-adulta.png'
            } else {
                // idoso
                img.src = 'imagens/mulher-idosa.png'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}