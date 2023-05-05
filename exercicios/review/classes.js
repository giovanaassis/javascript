/* 
    Basicamente, as classes são como 'fábricas' para criar objetos.
    Pode se dizer que são 'funções especiais' para criação de objetos.

    Assim como uma fábrica da vida real precisa das máquinas para construir os objetos, as Classes no JavaScript usam um método chamado constructor() para fabricar os objetos.
*/

class Jogador { // nomeia as classes com letra maiúscula
    constructor(valor1, valor2, valor3) {
        this.nome = valor1;
        this.time = valor2;
        this.pos = valor3;
    }
    comemoracao() { // métodos
        return this.nome + ' gritou: GOOOOLLLLL'
    }
}

const jog1 = new Jogador('Neymar', 'PSG', 'MAT');
console.log(jog1);
const jog2 = new Jogador('De Bruyne', 'City', 'CA');
console.log(jog2.pos)
console.log(jog2.comemoracao());

jog1.time = 'Chelsea'
console.log(jog1)