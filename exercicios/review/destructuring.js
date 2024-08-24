/* 

let a, b, rest;

[a,b] = [1,2];

[a,b, ...rest] = [1,2,3,4,5];

({a,b} = {a:1, b:2});

console.log(a);
console.log(b);
console.log(rest);


//-----------------//------------------//


const foods = ['ramen', 'ham', 'pasta', 'pizza'];

let [food1, food2] = foods;

console.log(food1, food2);


//------------------//---------------------//


let car = {
    brand: 'ferrari',
    speed: 300
};

let {brand: marca, speed: vel} = car;

console.log(marca);
console.log(vel);

*/