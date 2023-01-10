let num = [6,8,4,2,9]

num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O índice não for encontrado.')
} else {
    console.log(`O valor 8 está na posição ${pos}.`)
}