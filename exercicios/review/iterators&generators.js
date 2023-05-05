/* ----- ITERATORS ----- */

/*
    JavaScript tem um protocolo para iterar sobre as estruturas de dados.
    Esse conceito de protocolo é dividido entre:

    Iteravél -> Estrutura de dados. Ex: arrays, strings, etc

    Iterator -> Objeto que é retornado pelo método Symbol.iterator() para acessar cada elemento do iterável, um de cada vez.
*/


// CHAMANDO O MÉTODO SYMBOL.ITERATOR()
const frutas = ['manga', 'banana', 'uva'];
const frutasIterator = frutas[Symbol.iterator]();
console.log(frutasIterator);


// ITERAR SOBRE ELEMENTOS
const num = [1,2,3];
for (let n of num[Symbol.iterator]()){
    console.log(n)
};


// O MÉTODO NEXT() -> QUE RETORNA O PRÓXIMO ITEM NA SEQUÊNCIA
// TEM 2 PROPRIEDADES: 
// VALUE -> O VALOR DENTRO DO ELEMENTO / DONE: O VALOR BOOLEANO QUE INDICA SE A ITERAÇÃO ESTÁ COMPLETA OU NÃO. QUANDO FALSE NÃO ACABOU, QUANDO TRUE ACABOU. 

const arr = ['h', 'e', 'l', 'l', 'o'];
const arrIterator = arr[Symbol.iterator]();

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());

/* ----- GENERATORS ----- */

/*
    Generators traz um novo jeito de trabalhar com funções e iterators.
    Usando um Generator, você pode:

    -> Parar a execução de uma função de qualquer lugar dentro dela.
    -> E continuar da determinada posição.
*/

// CRIANDO UM GENERATOR
function* generator_function() {

};

const generator_obj = generatorFunc();


// USANDO YIELD PARA PAUSAR A EXECUÇÃO
function* generatorFunc() {
    console.log('O code antes do primeiro yield!');
    yield 100;

    console.log('O code antes do segundo yield!');
    yield 200;
};

const generator = generatorFunc(); // precisa atribuir generators a uma variável

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());