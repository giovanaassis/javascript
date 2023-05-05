/* ----- LOOPS DEFINIDOS ----- */

// 1# -> for [in e of]
for (let i = 1; i <= 5; i++){
    console.log('Hello World ' + i)
}

let num = [10, 20, 30, 40, 50];
for(n in num){ // a posição
    console.log(num[n])
}

for(n of num){ // os elementos
    console.log(n)
}

/* ----- LOOPS INDEFINIDOS ----- */

// 1# -> while
let i = 5;
while (i >= 1){
        console.log(i);
    i--
}

// 2# -> do while
let x = 0;
do {
    console.log('digitando...');
    x++;
} while (x < 10)