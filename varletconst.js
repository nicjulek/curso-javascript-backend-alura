//var = tem uma função especial que permite usá-la antes de ser declarada. não é muito utilizada
// Quando o JavaScript começa a ser executado, ele lê todo o programa, encontra todas 
//as variáveis do tipo var e as carrega primeiro.

//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;
//console.log(area);
//var area;

//let = só permite que a variável seja utilizada após sua declaração. Valor da variavel muda
//let forma = 'retângulo'
//let altura = 5;
//let comprimento = 7;

//if (forma === 'retângulo') {
//    area = altura * comprimento;
//} else {
//    area = (altura * comprimento) / 2;
//}

//console.log(area)
//let area

//const = valor da variavel muda
const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area)

