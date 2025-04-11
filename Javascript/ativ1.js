const nome = "Rayara" //texto - string
console.log(nome)
const idade = 30 //número - number
const altura = 1.69 //número - number
const maiorDeIdade = true //booleano - boolean - verdadeiro ou falso

console.log("Olá, seu nome é " + nome)  //concatenação

console.log("Olá seu nome é " + nome + ", você tem " + idade + " anos e sua altura é " + altura)
console.log("você é maior de idade? "  + maiorDeIdade)

//template string ou string dinamica
const frase = `Olá seu nome é ${nome} você tem ${idade} anos`
console.log(frase) 

console.log(1 + "10")
console.log(1 + 10)