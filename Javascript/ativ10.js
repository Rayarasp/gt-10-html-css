const user = {
    nome: "Rayara",
    idade: 30
}

const produtos = [
    {nome: "Maçã", preco: 2.50},
    {nome: "Iphone", preco: 5.500}
]

const produtosMaiorDeIdade = [
    {nome: "51", preco: 50},
    {nome: "JackDaniels", preco: 100}
]

if(user.idade >= '18'){ //ou <18 anos
    console.log(produtos, produtosMaiorDeIdade)
} else {
    console.log(produtos)
}
