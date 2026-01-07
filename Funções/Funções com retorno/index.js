//FUNÇÃO COM RETORNO

let resultado = soma(5, 10)

console.log("O resultado dessa função é " + resultado)

function soma(numA, numB){
    let somatorio = numA + numB
    return somatorio //o return é para guardar o produto dessa função
}

console.log("---PRÓXIMO EXERCÍCIO---")

//---próximo exercício---

//Função de pegar somente o Primeiro nome do usuário

let userName = getFirstName("Fábio-José-da-Silva", "-")
console.log("Seja bem vindo " + userName)

userName = getFirstName("Fábio Zanini Pereira", " ")
console.log("Seja bem vindo " + userName)


function getFirstName(name, splitChar){ //aqui usei o splitChar = " " pois caso a pessoa não passe nada, ele considera um espaço automáticamente
    let firstName = name.split(splitChar)[0] //essa função split já existe nas linguagens, o split guarda os espaços em um vetor, ou seja, cada vez que encontrar um espaço, ele quebra
    return firstName
}

console.log("---PRÓXIMO EXERCÍCIO---")

//---próximo exercício---

function somar(a, b){
    return a + b
}

let resultado2 = somar(2, 3)

console.log(resultado2)

console.log("---PRÓXIMO EXERCÍCIO---")

//---próximo exercício---

function dizerOi(){
    return "Oi"
}

let msg = dizerOi()
console.log(msg)

console.log("---PRÓXIMO EXERCÍCIO---")

//---próximo exercício---

function subtrair(c, d){
    return c - d
}

let resultado3 = subtrair(5, 2)
console.log(resultado3)

console.log("---PRÓXIMO EXERCÍCIO---")

//---próximo exercício---

function desconto(preco){
    return preco - 10
}

let valorFinal = desconto(57.9)
console.log(valorFinal)

console.log("---PRÓXIMO EXERCÍCIO---")

//---próximo exercício---

function triplo(n){
    console.log(n * 3)
}

let resultado4 = triplo(3)
console.log(resultado4)

console.log("---PRÓXIMO EXERCÍCIO---")

//---próximo exercício---

function maiorDeIdade(idade){
    if (idade >= 18){
        return "Maior"
    }
    return "Menor"
}

let idade2 = maiorDeIdade(18)
console.log(idade2)

console.log("---PRÓXIMO EXERCÍCIO---")

//---próximo exercício---

function dobrar(x){
    return x * 2
}

let final = dobrar(5) + 1
console.log(final)

console.log("---PRÓXIMO EXERCÍCIO---")

//---próximo exercício---

function teste(){
    return
}

let valor = teste()
console.log(valor)

console.log("---PRÓXIMO EXERCÍCIO---")

//---próximo exercício---

function nomePrimeiro(nume, separador){
    let partes = nume.split(separador)
    let ultimoNume = partes[2]
    return ultimoNume
}

let nime = nomePrimeiro("Fábio Henrique Zanini", " ")
console.log(nime)

