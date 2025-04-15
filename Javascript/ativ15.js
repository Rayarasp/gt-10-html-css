const user = {
    nome: "Rayara",
    altura: 1.70,
    peso: 83
}

// acima você tem o objeto, que são os propriedades ali em cima, e para verificar/visualizar: console.log(user.a informação que quer visualizar nome, altura ou peso ou o elemento que tiver) console.log(user.nome) 

//criar uma função que receba o objeto user e calcule o IMC
// IMC = peso / (altura * altura)



    // console.log(imc.toFixed(2))

    function calcularIMC(user){
        const imc = user.peso / (user.altura * user.altura)
        if(imc < 16){
            console.log("Magreza Grave")
        } else if(imc >= 16 && imc < 16.9){
            console.log("Magreza Moderada")
        } else if(imc >= 17 && imc < 18.5){
            console.log("Magreza Leve")
        } else if(imc >= 18.5 && imc < 24.9){
            console.log("Peso Normal")
        } else if(imc >= 25 && imc < 29.9){
            console.log("Sobrepeso")
        } else if(imc >= 30 && imc < 34.9){
            console.log("Obesidade grau I")
        } else if(imc >= 35 && imc < 39.9){
            console.log("Obesidade grau II")
        } else if(imc > 40){
            console.log("Obesidade grau III")
        }
    }
    

calcularIMC(user)