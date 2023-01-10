function Contagem() {
    let ini = document.getElementById('txtn1')
    let fim = document.getElementById('txtn2')
    let passo = document.getElementById('pas')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        window.alert("[ERRO] Faltam dados!")
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1.')
            p = 1
        }

        if (i < f) { // crescente
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}  `
        }
        } else { // decrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}  `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}