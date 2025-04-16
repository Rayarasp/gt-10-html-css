//armazenar valor dos inputs altura e peso
var altura = document.getElementById("altura")
var peso = document.getElementById("peso")
//armazenar valor do botão calcular
var btn = document.getElementById("btn")
//armazenar o valor da div fim
var fim = document.getElementById("fim")

//função para calcular o IMC
function calcularIMC(){
    //armazenar valor do input altura e peso
    const valorAltura = altura.value
    const valorPeso = peso.value
    
    //calcular o IMC
    const imc =valorPeso / (valorAltura * valorAltura)

    return imc 
}

//função de click
function calcular(){
    //chama a funçõa de calcularIMC e armazenar o valor
    const imc = calcularIMC()

    console.log(imc)
}

//adicionar evento de click no botão 
btn.addEventListener("click", calcular)