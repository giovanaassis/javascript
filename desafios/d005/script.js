let num = document.getElementById('txtnum')
let valores = []
let res = document.getElementById('res')
let lista = document.getElementById('lista')

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n,l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value,valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar')
    } else {
    let soma = 0
    let media = 1
    let maior  = 0
    let menor = valores[0]
    for (let pos in valores) {
        if (valores[pos] > maior) {
            maior = valores[pos]
        }
        if (valores[pos] <= menor) {
            menor = valores[pos]
        }
        soma += valores[pos]
        media = soma / valores.length
    }

    res.innerHTML = `Ao todo, temos ${valores.length} números cadastrados. <br>`
    res.innerHTML += `O maior valor informado foi ${maior}. <br>`
    res.innerHTML += `O menor valor informado foi ${menor}. <br>`
    res.innerHTML += `Somando todos os valores, temos ${soma}. <br>`
    res.innerHTML += `A média dos valores digitados é ${media}.`
    }
}




/*
let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus() // novo comando
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot

        // res.innerHTML = ''
        res.innerHTML = `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}
*/