/* ----- TYPES OF ARRAYS ----- */


// Literal Array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors);

let studentProfile = ['James Halbert', 27, 'Pensilvania']
console.log(studentProfile[0])


/* ----- ARRAYS METHODS ----- */


// filter() -> RETORNA UM ARRAY FILTRANDO ELEMENTOS APROVADOS POR UM TESTE
let numbers = [8,4,5,2,9];
let even = numbers.filter(function isEven(num) {
    return num % 2 === 0
});
console.log(even)


// map() -> RETORNA UM ARRAY MAPEANDO TODOS OS ELEMENTOS USANDO UMA FUNÇÃO
const num = [1,2,3,4];
const doubleNumeros = num.map(multiply);

function multiply(n) {
    return n * 2
};
console.log(doubleNumeros)


// find() -> RETORNA O PRIMEIRO ELEMENTO QUE SATISFAZER A CONDIÇÃO
const nomes = ['Florin', 'Ivan', 'Ezio'];
const res = nomes.find(function findIvan(nome) {
    return nome === 'Ivan'
});
console.log(res)


// forEach() -> EXECUTA UMA DETERMINADA FUNÇÃO EM CADA ELEMENTO DO ARRAY
const notas = [5,7,2,2,4,5];
notas.forEach(isArr);

function isArr(item,index) {
    console.log('O valor é ' + item + ' no index [' + index + ']')
};


// some() -> TESTA SE QUALQUE ELEMENTO PASSA O TESTE
const numeros = [1,2,3,4,5];
const test = numeros.some(function menor10(n) {
    return n < 10
});
console.log(test)


// every() -> TESTA SE TODOS OS ELEMENTOS PASSAM O TESTE
const test2 = numeros.every(function menor3(n) {
    return n < 3
});
console.log(test2)


// reduces() -> REDUZ O ARRAY PARA UM ÚNICO VALOR
const test3 = numeros.reduce(function sum(acumulador, valor) {
    return acumulador + valor
});
console.log(test3)


// slice() -> RETORNA UMA CÓPIS DE UMA PORÇÃO DO ARRAY
const test4 = numeros.slice(1,4);
console.log(test4)


// sort() -> ALINHA OS ELEMENTOS NUMA ORDEM ESPECÍFICA
const arr = ['c', 'a', 'e', 'b', 'd'];
arr.sort();
console.log(arr)


// push() -> ADICIONA ELEMENTOS NO FIM DO ARRAY E RETORNA SEU LENGTH
arr.push('f', 'g');
console.log(arr)
