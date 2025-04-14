const user = {

    email: "rayara@gmail.com",
    senha: "123456"
}

//verificar se os dados estão corretos das propriedades (elementos)

if(user.email == "rayara@gmail.com" && user.senha == "123456"){
    console.log("Login realizado com sucesso")
} else{
    console.log("Email ou senha inválidos")
}