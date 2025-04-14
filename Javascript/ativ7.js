// uma lista de modelo de carros

const modelos = ["polo", "eclipse", "strada", "up"]
console.log(modelos)

//adicionar um novo modelo

modelos.push("gol")
console.log(modelos)

//contagem de index (elementos da lista)
console.log(modelos.length)

modelos.push("jimmy")


//remover o ultimo modelo
modelos.pop() //jimmy

console.log(modelos.length)

//remover um modelo específico

modelos.splice(1, 1)
console.log(modelos)