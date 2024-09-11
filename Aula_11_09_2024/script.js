//N1-AT2

//For
//Ex1 - imprimir números 1 a 10
 document.write("Números: <br>");

 for (let i=1; i<=10;i++){
     document.write(i + "<br>");
 }

// //While
 let contador = 1;
 document.write("Números: <br>");
 while (contador<=10){
     document.write(contador + "<br>");
     contador++;
 }

//Switch-case
 let operacao = prompt("Operação: soma, divisao");

 let num1 = parseFloat(prompt("Número: 1"));
 let num2 = parseFloat(prompt("Número: 2"));

let resultado;

switch (operacao.toLowerCase()) {
     case "soma":
         resultado = num1 + num2;
         break;
     case "divisao":
         if (num2 !== 0){
             resultado = num1/num2;
         } else {
             resultado = "Não é possível dividir por zero";
         }
         break;
     default:
         resultado = "Operação inválida";
         break;

 }

 document.write("Resultado: " + resultado);

//Funções

//Função sem retorno (void)
function somarDoisNumeros(){
     var num1 = parseFloat(prompt("Número: 1"));
     var num2 = parseFloat(prompt("Número: 2"));

     var soma = num1 + num2;

     document.write("Resultado: " + soma);
 }

somarDoisNumeros();

//Funções com parâmetro e retorno
function calcularArea(base, altura){
    var area = base * altura;
    return area;
}

var base = parseFloat(prompt("Base: "));
var altura = parseFloat(prompt("Altura: "));

var areaRetangulo = calcularArea(base, altura);

document.write("Resultado: " + areaRetangulo);
