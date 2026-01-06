//FUNÇÕES

//exemplo de função:

function torrar() //a função sempre tem esse parenteses ao lado

//a função pode ou não receber um parâmetro de entrada ou de saída mas ela sempre terá uma ação

Exemplo:

torrar() //Aqui é onde estamos chamando a função abaixo e podemos chamar ela várias vezes
injetarPao() //Chamado a função injetar pão

function torrar(){ // essa função só é executada se ela for chamada antes disso
    console.log("Torrando pão")
}

function injetarPao(){
    console.log("Preparando para injetar o Pão")
    console.log("Finalizado")
}

//também podemos inserir uma função dentro de outra função... no caso acima, poderíamos ter
//inserido dentro da function torrar() {
                    //console.log("Torrando pão")
                    //injetarPao()
//              }
// fazendo isso, não precisaríamos inserir o injetarPao() na linha 4 abaixo de torrar() linha 3...
// assim, toda vez que a gente chamasse a função torrar() ele também chamaria a função (injetarPao)

//CUIDADOS AO TRABALHO COM FUNÇÕES

//Não devemos iniciar o nome de uma função com:
// - Números | Ex: function 5enviar(){}
// - Espaços | Ex: function enviar email(){} | O correto é: function enviarEmail(){} (Usando o padrão Camel Case)

//Nomes mais adequados para as funções:
// Coloque o nome como verbos que seja a ação que ela realizará.
// Ex: function enviarEmail(){}

//Função real passado na aula Mostrando que é melhor contruir várias funções que 
// fazendo uma coisa cada uma, do que uma única função que faça tudo.

//função que pega todos os dados
function getData(){
    //logica implementada aqui
}

function checkValues(){
console.log("validando dados")
}

function sendToDatabase(){
console.log("cadastrando dados")
}

//BOA PRÁTICA: Podemos criar uma function que chame todas as outras, como a function main:



function main(){
    getData()
    checkValues()
    sendToDatabase()
}

function getData(){
    console.log("Pegando dados do usuários")    
}

function checkValues(){
    console.log("validando dados")
}

function sendToDatabase(){
    console.log("cadastrando dados")
}

//CÓDIGO GIGANTE? É importante usar IDENTAÇÃO, que é basicamente o alinhamento das 
//coisas... quando damos o TAB logo abaixo de cada function, fica mais organizado

//COMO SERIA FUNCTION EM OUTRAS LINGUAGENS DE PROGRAMAÇÃO (Código puramente ditático)?

//Ex em JavaScript:

function enviarDados(){
    let nomeDoBanco = "banco-de-dados"
    console.log("salvando dados em: " + nomeDoBanco)

    if( 3 === 3){
        console.log("senha validada")
    }
}

//Ex em JAVA:

public class Main {

    public static void enviarDados() {
        String nomeDoBanco = "banco-de-dados";
        System.out.println("salvando dados em: " + nomeDoBanco);

        if (3 == 3) {
            System.out.println("senha validada");
        }
    }

    public static void main(String[] args) {
        enviarDados();
    }
}

//Ex em PYTHON:

def enviar_dados():
    nome_do_banco = "banco-de-dados"
    print("salvando dados em: " + nome_do_banco)

    if 3 == 3:
        print("senha validada")


enviar_dados()

//Ex em C#

using System;

class Program
{
    static void EnviarDados()
    {
        string nomeDoBanco = "banco-de-dados";
        Console.WriteLine("salvando dados em: " + nomeDoBanco);

        if (3 == 3)
        {
            Console.WriteLine("senha validada");
        }
    }

    static void Main(string[] args)
    {
        EnviarDados();
    }
}


//Ex em RUBY:

def enviar_dados
  nome_do_banco = "banco-de-dados"
  puts "salvando dados em: #{nome_do_banco}"

  if 3 == 3
    puts "senha validada"
  end
end

enviar_dados

//Qual é o principal objetivo de usar funções em programação?
//Promover a reutilização de código e modularizar a lógica em partes gerenciáveis