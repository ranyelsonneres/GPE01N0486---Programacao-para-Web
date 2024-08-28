//Aula 28_08_2024

//Operadores de comparação
//(==) Igual, verfica o valor e ignora o tipo
//(!=) Diferente
//(===) Estritamente igual (verifica tipo e valor)
//(!==) Estritamente desigual
//> >= < <=

//let num1 = "3";
//let num2 = 3;

//document.write("num1 é igual a num2: " + (num1 === num2));

//Estrutura de controle (if e else)
// let interruptor = "off";
// if (interruptor == "on"){
//     //alert("Lampâda ligada!");
//     document.write("Lampâda ligada!");
// }
// else {
//     //alert("Lampâda desligada!");
//     document.write("Lampâda desligada!");
// }

// let idade = 17;
// if (idade === 18){
//     document.write("Você tem exatamente 18 anos");
// } else if (idade > 18){
//     document.write("Você é um adulto");
// } else{
//     document.write("Você é menor de idade");
// }


//Uso do DOM para estruturas de controle (if e else)
var botao = document.getElementById("verificaButton");

botao.onclick = function(){
    var idade = document.getElementById("idadeInput").value;
    //console.log(idade);

    var resultado = document.getElementById("resultado");

    if (idade >=18){
        resultado.textContent = "Maior de idade";
    }else {
        resultado.textContent = "Menor de idade";
    }

};
