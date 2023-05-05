// informaçoes
let info = document.getElementById('info');

let lutador = 'Fedor Vladimirovich Emelianenko';
let nac = 'Russo';
let idade = 44;
let peso = 106;
let altura = 1.83;

info.innerHTML = `Lutador: ${lutador} <br> Nacionalidade: ${nac} <br> Idade: ${idade} anos <br> Peso: ${peso} kg <br> Altura: ${altura} m`;


//frase do dia
const dataHoje = new Date();
const dia = dataHoje.getDate();
const mes = dataHoje.getMonth() + 1;
const ano = dataHoje.getFullYear();
const frase = 'A imaginação é mais importante que o conhecimento.';
const autor = 'Albert Einstein';

let fra = document.getElementById('frase');

fra.innerHTML = `${dia}/${mes}/${ano} <br> ${frase} <br> ${autor}`;


// array do meses
let arr = document.getElementById('mesAno');
let mesAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'];

arr.innerHTML = `${mesAno[0]}, ${mesAno[1]}, ${mesAno[2]}, ${mesAno[3]}, ${mesAno[4]}...`


// objeto jogo
let txtJogo = document.getElementById('jogo');
let jogo = {
    titulo: 'Batman: Arkham Asylum',
    criador: 'Rocksteady Studios',
    anoLanca: 2009
};

txtJogo.innerHTML = `Jogo: ${jogo.titulo} <br> Desenvolvido por: ${jogo.criador} <br> Ano do Lançamento: ${jogo.anoLanca}`;




