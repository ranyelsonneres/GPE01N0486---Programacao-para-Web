//impressões na tela
console.log("Olá mundo!");
// document.write("Olá mundo!");
// alert("Olá mundo!");
// window.alert("Olá mundo 2!");

//variáveis
var disciplina = "Programação Web"; //escopo global
console.log(disciplina);
console.log(typeof nome); //lista o formato da variável

let preco1 = 10.23; //escopo local
console.log(typeof preco1); //tipo number
let cor = "Azul";
console.log(typeof cor); //verificar o tipo variavel
console.log(cor); //tipo string

const planeta = "Marte"; //constante - não permite a reatribuição
console.log(typeof planeta);

cor = "Amarelo";
console.log(`A cor escolhida é ${cor} e o seu planeta é ${planeta}`);

console.log(cor);

//planeta = "Terra"; //ela não permite a reatribuição, devido ao formato de "const";

//booleano
let status = true;
let status2 = false;

//array
let frutas = ["uva", "maçã", "laranja"];
console.log(frutas);

//objeto
let pessoa = {nome: "João", idade:20};
console.log(pessoa);
