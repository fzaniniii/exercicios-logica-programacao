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