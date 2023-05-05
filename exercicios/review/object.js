/* ----- TYPES OF OBJECTS ----- */

// 1# -> Literal Object
let person = {
    name: 'Giovana',
    age: 20
};

/* ----- HOW TO CHANGE AN OBJECT NAME ----- */

// 1# -> Dot Notation [We can also read the value of an object with Dot Notation]
person.name = 'Maria';

// 2# -> Bracket Notation
person['name'] = 'Mary';
console.log(person.name);


/* ----- PROTOTYPE ----- */

// Toda função em JavaScript tem um propriedade prototype que referencia um objeto.

const arr = [];
arr.filter // <- isso é um método que ele pega no prototype array que é o objeto global.


// Prototype Chain -> é essa cadeia de herança. Se tentar acessar uma propriedade que não existe naquele objeto, ele vai procurar no prototype dele, que é um também um objeto. 
