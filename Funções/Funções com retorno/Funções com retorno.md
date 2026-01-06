//FUNÇÕES COM RETORNO

//Este mesmo código também poderia ser escrito:

let resultado = soma(5, 10)

console.log("O resultado dessa função é " + resultado)

function soma(numA, numB){
    let somatorio = numA + numB
    return somatorio //o return é para guardar o produto dessa função
}

//dessa outra forma:

let resultado = soma(5, 10)

console.log("O resultado dessa função é " + resultado)

function soma(numA, numB){
    return somatorio = numA + numB // Ele retorna sempre apenas 1 valor, então use OU uma Expressão ou uma variável que existe dentro do escopo.
}

//**MINHA DOR:**  Está muito difícil gravar na minha mente o que é cada coisa: vetor, matriz etc...

//EM OUTRAS LINGUAGENS, O CÓDIGO ABAIXO FICARIA:

let userName = getFirstName("Fábio-José-da-Silva", "-")
console.log("Seja bem vindo " + userName)

userName = getFirstName("Fábio Zanini Pereira", " ")
console.log("Seja bem vindo " + userName)


function getFirstName(name, splitChar){ //aqui usei o splitChar = " " pois caso a pessoa não passe nada, ele considera um espaço automáticamente
    let firstName = name.split(splitChar)[0] //essa função split já existe nas linguagens, o split guarda os espaços em um vetor, ou seja, cada vez que encontrar um espaço, ele quebra
    return firstName
}

//**JAVA** (tipagem + atenção ao split com regex)

public class Main {

    public static String getFirstName(String name, String splitChar) {
        String firstName = name.split(splitChar)[0];
        return firstName;
    }

    public static void main(String[] args) {
        String userName = getFirstName("Fábio-José-da-Silva", "-");
        System.out.println("Seja bem vindo " + userName);

        userName = getFirstName("Fábio Zanini Pereira", " ");
        System.out.println("Seja bem vindo " + userName);
    }
}

//Ponto crítico (Java):

//split() usa regex
//Espaço " " funciona sem problema
//Para caracteres especiais (|, ., +) → precisa escapar


//-----------

//**PYTHON** (limpo e previsível)

def get_first_name(name, split_char):
    first_name = name.split(split_char)[0]
    return first_name


user_name = get_first_name("Fábio-José-da-Silva", "-")
print("Seja bem vindo " + user_name)

user_name = get_first_name("Fábio Zanini Pereira", " ")
print("Seja bem vindo " + user_name)

//Observações:

//Reatribuição de variável é trivial
//split() é literal
//Snake_case por convenção

//-----------

//**C#** (estrutura forte, comportamento previsível)

using System;

class Program
{
    static string GetFirstName(string name, string splitChar)
    {
        string firstName = name.Split(splitChar)[0];
        return firstName;
    }

    static void Main(string[] args)
    {
        string userName = GetFirstName("Fábio-José-da-Silva", "-");
        Console.WriteLine("Seja bem vindo " + userName);

        userName = GetFirstName("Fábio Zanini Pereira", " ");
        Console.WriteLine("Seja bem vindo " + userName);
    }
}

//Observações:

//Split() retorna array
//Tipagem explícita
//Convenção PascalCase

//-----------

//**Ruby** (expressivo e direto)

def get_first_name(name, split_char)
  first_name = name.split(split_char)[0]
  return first_name
end

user_name = get_first_name("Fábio-José-da-Silva", "-")
puts "Seja bem vindo #{user_name}"

user_name = get_first_name("Fábio Zanini Pereira", " ")
puts "Seja bem vindo #{user_name}"

//Observações:

//split literal
//Interpolação melhora clareza
//Reatribuição simples

//------------------

//Qual é o principal objetivo de usar funções com retorno em JavaScript?
//Obter um resultado específico ou um valor calculado a partir da função

//O que acontece se você não especificar um valor de retorno em uma função em JavaScript?
//Undefined

//O que é o valor de retorno de uma função ?
//Um valor que a função produz como saída após ser executada

//Como você especifica o valor de retorno de uma função em JavaScript?
//Usando a palavra-chave "return" seguida pelo valor que deseja retornar

//**MINHA DOR:** Preciso estudar novamente funções com retorno pois não gravei direito.