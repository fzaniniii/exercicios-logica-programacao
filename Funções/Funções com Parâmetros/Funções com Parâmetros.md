//FUNÇÕES COM PARÂMETROS

torrar(" pão de forma") //fazendo isso, eu faço a variável "pao" receber o que está no parametro dentro de parenteses
torrar(" pão integral")

function torrar(pao){ //inseri uma variável dentro do parenteses sem precisar usar let e isso é parametro
    console.log("torrada feita com" + pao)
}

console.log(pao) // Importante, se eu pedir pra imprimir a variável 'pao' fora da função, ele irá dar erro... pois essa variável, existe apenas dentro da função. Ou seja, se este console estivesse dentro da função, aí sim ele retornaria um valor válido.

//Códigos exemplo:

torrar(" pão de forma") //fazendo isso, eu faço a variável "pao" receber o que está no parametro dentro de parenteses
torrar(" pão integral")

function torrar(pao){ //inseri uma variável dentro do parenteses sem precisar usar let e isso é parametro
    console.log("torrada feita com" + pao)
}

//acima, a variável 'pao' só é reconhecida pois está dentro da função... se eu usar um console.log fora da função para retornar o 'pao' ele irá retornar um erro pois não será reconhecido.
// O mesmo acontece se eu declarar uma nova variável fora de function e tentar trazer ela dentro da function, exemplo abaixo:

torrarPao(" pão de forma") //fazendo isso, eu faço a variável "pao" receber o que está no parametro dentro de parenteses
torrarPao(" pão integral")
let nome = "Fabio"

function torrarPao(paoDois){ //inseri uma variável dentro do parenteses sem precisar usar let e isso é parametro
    console.log("torrada feita com" + paoDois)
    console.log(nome) //tentei retornar a variável 'nome' aqui dentro da função e ele não reconhece pois está declarada fora.
}

//NOVA VARIÁVEL (VAR) O Var é uma variável Global, ou seja, utilizando ela ao invés do LET ou CONST, conseguimos utilizar tanto dentro da function quanto fora.

//Usando VAR a variável vira uma variável global e assim é reconhecida em qualquer parte do código, CONTUDO, não é recomendável utilizar.

//Então, ao invés de utilizar um VAR, podemos simplesmente passar a variável, dentro do escopo da function, exemplo: function torrar(pao, nome){}

console.log("---PRÓXIMO EXEMPLO---")

torra("Pão de forma", "fabio")
torra("Pão integral", "Janaína")


function torra(pao, name){
    
    console.log("torrada feita com " + pao)
    console.log("Quem irá comer é " + name)
}

//IMAGINE QUE DENTRA CHAMADA DA FUNÇÃO torra("pão integral") eu não declarei a segunda variável 'name'... então dentro de function torra (pao, name = "Cliente") podemos declarar uma variável 'default', algo assim:

//function torra(pao, name = "Cliente").

//EXEMPLO DE CÓDIGO mostrando que se eu atribuo o valor da variável dentro do parenteses, ele considera apenas se eu não atribuir nada na chamada da função, em 'torra("Pão de forma")'... agora se dentro da função eu atribuir, então ele irá retornar o que eu atribuí:

torra("Pão de forma", "Anita") // aqui foi atribuído, então o resultado seria: "Pedido da Anita"

function torra(pao, name = "Cliente"){
    console.log("torrada feita com " + pao)
    console.log("Pedido da " + name)
}

//Caso não atribuísse, seria assim:

torra("Pão de forma") // aqui não foi atribuído a segunda variável 'name', então o resultado seria: "Pedido da Cliente"

function torra(pao, name = "Cliente"){ // Foi considerado 'Cliente' pois acima não foi declarado a variável dentro da chamada da função.
    console.log("torrada feita com " + pao)
    console.log("Pedido da " + name)
}

//OUTRA FORMA SERIA UMA TERCEIRA VARIÁVEL CONFORME EXEMPLO ABAIXO

torra("Pão de forma") // aqui não foi atribuído a segunda variável 'name', então o resultado seria: "Pedido da Cliente"

function torra(pao, name = "Cliente"){ // Foi considerado 'Cliente' pois acima não foi declarado a variável dentro da chamada da função.
    console.log("torrada feita com " + pao)
    console.log("Pedido da " + name)
}

EXEMPLO TOTAL:

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

//------------------------------------------------------------------

//COMO SERIA ESTE CÓDIGO ABAIXO NAS LINGUAGENS JAVA, PYTHON, C# E RUBY:

torrar("Pão de forma", "Fabio") 

function torrar(pao, name = "Cliente", valor = 99.90){
    console.log("Torrada feita com " + pao) 
    console.log("Pedido de " + name) 
    console.log("Pedido do pedido é de R$" + valor) 
}

//--------------------------

//JAVA:(sem valores padrão nativos → sobrecarga)

public class Main {

    public static void torrar(String pao, String name, double valor) {
        System.out.println("Torrada feita com " + pao);
        System.out.println("Pedido de " + name);
        System.out.println("Pedido do pedido é de R$" + valor);
    }

    public static void torrar(String pao, String name) {
        torrar(pao, name, 99.90);
    }

    public static void torrar(String pao) {
        torrar(pao, "Cliente", 99.90);
    }

    public static void main(String[] args) {
        torrar("Pão de forma", "Fabio");
    }
}

//Diferença crítica em JAVA:

//- Java não tem parâmetros default
//- Usa sobrecarga de métodos para simular

//--------------------------

//PYTHON: (mais próximo do JS nesse ponto)

def torrar(pao, name="Cliente", valor=99.90):
    print("Torrada feita com " + pao)
    print("Pedido de " + name)
    print("Pedido do pedido é de R$" + str(valor))


torrar("Pão de forma", "Fabio")

//Observações PYTHON:

//- Parâmetros padrão devem vir por último
//Conversão explícita de valor para string

//--------------------------

//C# (suporta parâmetros opcionais, mas com regras)

using System;

class Program
{
    static void Torrar(string pao, string name = "Cliente", double valor = 99.90)
    {
        Console.WriteLine("Torrada feita com " + pao);
        Console.WriteLine("Pedido de " + name);
        Console.WriteLine("Pedido do pedido é de R$" + valor);
    }

    static void Main(string[] args)
    {
        Torrar("Pão de forma", "Fabio");
    }
}

//Diferença importante em C#:

// - Parâmetros opcionais precisam ser constantes em tempo de compilação
// - Ordem obrigatória: obrigatórios → opcionais

//--------------------------

//RUBY: (flexível e elegante)

def torrar(pao, name = "Cliente", valor = 99.90)
  puts "Torrada feita com #{pao}"
  puts "Pedido de #{name}"
  puts "Pedido do pedido é de R$#{valor}"
end

torrar("Pão de forma", "Fabio")

//Observações:

//- Ruby lida muito bem com defaults
//- Interpolação deixa o código mais limpo

//OUTRA FORMA DE CONCATENAR / INTERPOLAÇÃO DE STRINGS

//Contatenar geralmente é assim: console.log(O "+ name2 + " tem "+ valor2 + " e está " + status2)
//interpolação ficaria assim: console.log(`O ${name2} possui ${valor2} e está muito ${status2}`)

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

//Qual é a principal vantagem de usar funções que recebem parâmetros?
//Reutilização da mesma lógica da função com diferentes valores de entrada

//O que são parâmetros de uma função?
//Valores que podem ser passados para a função quando ela é chamada e que permitem que a função realize operações com esses valores