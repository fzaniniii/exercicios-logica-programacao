torrar(" pão de forma") //fazendo isso, eu faço a variável "pao" receber o que está no parametro dentro de parenteses
torrar(" pão integral")

function torrar(pao){ //inseri uma variável dentro do parenteses sem precisar usar let e isso é parametro
    console.log("torrada feita com" + pao)
}

//acima, a variável 'pao' só é reconhecida pois está dentro da função... se eu usar um console.log fora da função para retornar o 'pao' ele irá retornar um erro pois não será reconhecido.
// O mesmo acontece se eu declarar uma nova variável fora de function e tentar trazer ela dentro da function, exemplo abaixo:

torrarPao(" pão de forma") //fazendo isso, eu faço a variável "pao" receber o que está no parametro dentro de parenteses
torrarPao(" pão integral")
//let nome = "Fabio"

function torrarPao(paoDois){ //inseri uma variável dentro do parenteses sem precisar usar let e isso é parametro
    console.log("torrada feita com" + paoDois)
 //   console.log(nome) //tentei retornar a variável 'nome' aqui dentro da função e ele não reconhece pois está declarada fora.
}

console.log("---PRÓXIMO EXEMPLO---")

torrarPaoDois(" pão de forma") //fazendo isso, eu faço a variável "pao" receber o que está no parametro dentro de parenteses
torrarPaoDois(" pão integral")
var nomeUm

function torrarPaoDois(paoTres){ //inseri uma variável dentro do parenteses sem precisar usar let e isso é parametro
    nomeUm = "Fabio"
    console.log("torrada feita com" + paoTres)
    console.log(nomeUm) //tentei retornar a variável 'nome' aqui dentro da função e ele não reconhece pois está declarada fora.
}

//Usando VAR a variável vira uma variável global e assim é reconhecida em qualquer parte do código, CONTUDO, não é recomendável utilizar.

//Então, ao invés de utilizar um VAR, podemos simplesmente passar a variável, dentro do escopo da function, exemplo: function torrar(pao, nome){}

console.log("---PRÓXIMO EXEMPLO---")

torra("Pão de forma", "Anita")

function torra(pao, name = "Cliente"){
    console.log("torrada feita com " + pao)
    console.log("Pedido do " + name)
}

console.log("---PRÓXIMO EXEMPLO---")

//SE DENTRO DA CHAMADA DA FUNÇÃO, eu declarar a primeira variável, e a terceira, vai dar erro, pois não podemos deixar a variável do meio vazia usando duas vírgulas por exemplo... 
//daria erro. O ideal então seria deixar a variável opcional para o final, alterando a ordem, ficaria mais ou menos assim:
//chapar("Pão de forma", valor,) deixando a vírgula após a segunda variável e vazio após ela.

chapar("Pão de forma", 10.99, ) // aqui não foi atribuído a segunda variável 'name', então o resultado seria: "Pedido da Cliente"

function chapar(paoQuatro, valor = 99.00, nameDois = "Cliente"){ // Foi considerado 'Cliente' pois acima não foi declarado a variável dentro da chamada da função.
    console.log("Torrada feita com " + paoQuatro)
    console.log("Pedido da " + nameDois)
    console.log("Pedido do pedido é de R$" + valor)
}

console.log("---PRÓXIMO EXEMPLO---")

//Agora imagine que eu realmente preciso que a variável opcional, fique no meio (na segunda variável), então iremos utilizar a variável 'undefined', ficaria algo assim:

chaparDois("Pão de forma", undefined, "Fabio") //usando 'undefined' eu consigo deixar o valor opcional, no meio das variáveis, sem precisar ficar no final

function chaparDois(paoCinco, valor2 = 99.90, nameTres = "Cliente"){ // Foi considerado '99.90' pois acima não foi declarado a variável dentro da chamada da função (undefined).
    console.log("Torrada feita com " + paoCinco)
    console.log("Pedido de " + nameTres)
    console.log("Pedido do pedido é de R$" + valor2)
}

//CONTUDO 'undefined' não seria uma boa prática! 
//BOA PRÁTICA Seria deixar a variável opcional para o final mesmo.

console.log("---PRÓXIMO EXEMPLO---")

//OUTRA FORMA DE CONTATENAR - INTERPOLAÇÃO DE STRINGS
//EXEMPLO PADRÃO UTILIZANDO CONCATENAR '+'

imprimirFabio("Fabio", 53.23, "feliz")

function imprimirFabio(name, valor, status){
    console.log("O " + name + " possui " + valor + " e está muito " + status)
}
console.log("---PRÓXIMO EXEMPLO---")
//INTERPOLAÇÃO DE STRINGS
//EXEMPLO UTILIZANDO INTERPOLAÇÃO DE STRINGS: É preciso inserir acrase `` 1 antes e uma no final para funcionar, ficaria algo assim:

imprimirString("Jose", 64.57, "triste")

function imprimirString(name2, valor2, status2){
    console.log(`O ${name2} possui ${valor2} e está muito ${status2}`) //Não sendo necessário utilizar aspas duplas mais... desde que tenha acrase no início e no fim e as variáveis devem estar nesse formato ${variavel}
}