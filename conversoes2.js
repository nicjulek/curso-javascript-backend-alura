let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); 
// o .toString() é uma outra forma para  fazer essa conversão, que é mais
// parecida com outras linguagens de programação.

let largura = "10";
let altura = "5";
console.log( + largura * + altura); 
// teremos a conversão de String para números realizado usando o
// + antes das variáveis

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN