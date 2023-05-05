/* ----- MANIPULAR DATAS EM JAVASCRIPT ----- */

// COMANDO BASE
let data = new Date();

// PEGAR O ANO ATUAL COM 4 DIGITOS
let ano = data.getFullYear();

// PEGAR O MÊS ATUAL -> DE 0 A 11 (SENDO 0 JANEIRO E 11 DEZEMBRO)
let mes = data.getMonth();

// MOSTRAR O MÊS NO FORMATO ESCRITO
const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let mesEscrito = mesesDoAno[data.getMonth()];

// PEGAR DIA DO MÊS - 1 ATÉ 31
let diaMes = data.getDate();

// PEGAR DIA DA SEMANA - 0 ATÉ 6
const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
let diasEscrito = diasDaSemana[data.getDay()];

// PEGAR A HORA - DE 0 ATÉ 23
let hora = data.getHours();

// PEGAR MINUTOS - DE 0 ATÉ 59
let minutos = data.getMinutes();

// PEGAR SEGUNDOS - DE 0 ATÉ 59
let segundos = data.getSeconds();

// PEGAR MILISEGUNDOS - DE 0 ATÉ 999
let miliSegundos = data.getMilliseconds();

// PEGAR A DATA NO PADRÃO BRASILEIRO
let dataBR = data.toLocaleString('pt-BR', { dateStyle: 'short' });

// COMPARAR DATAS - MAIOR OU MENOR. EX: VENCIMENTOS
var hoje = new Date();
var vencimento = new Date(2022,0,15);

if (hoje > vencimento){
    // console.log('Sua conta está vencida!');
} else {
    // console.log('Ainda não venceu, tudo certo!');
}

// DIFERENÇA ENTRE DUAS DATAS EM DIAS
var dataInicial = new Date();
var dataFinal = new Date(2024, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));