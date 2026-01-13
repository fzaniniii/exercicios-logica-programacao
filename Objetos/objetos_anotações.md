//INTRODUÇÃO JSON
//UMA ESTRUTURA DE DADOS - UMA FORMA DE TRANSFERIR DADOS DE UM LUGAR PRO OUTRO DE FORMA AGRUPADA.

//JSON = JavaScript Object Notation 
//chave e valor com o objetivo de transferir dados

Exemplo de codigo sem JSON:

"let nome = "Fábio"
let age = 36
let products = ["mouse 2xwm", "Teclado mecânico", "Monitor"]
let productsValues = [29.90, 129.99, 899.99]

generateInvoice(nome, products, age, productsValues)

function generateInvoice(nome, products, age, productsValues){
    console.log("O comprador é " + nome)
    console.log("Idade é " + age)
    console.log("---------------------")
    console.log("O produto é " + products[0])
    console.log("O valor é " + productsValues[0])
}"

//---------------------

Exemplo com JSON:

let invoice = {
    nome: "fabio",
    age: 36,
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["Teclado mecânico", 129.99],
        2: ["Monitor", "899.99"],
    }
}

//USANDO O JSON ACIMA, NÃO É PRECISO UTILIZAR AS VARIÁVEIS ABAIXO

//let nome = "Fábio"
//let age = 36
//let products = ["mouse 2xwm", "Teclado mecânico", "Monitor"]
//let productsValues = [29.90, 129.99, 899.99]

//O QUE ALTERARIA ESTA FUNÇÃO COM VÁRIAS VARIÁVEIS PARA
//generateInvoice(nome, products, age, productsValues)

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.nome}`)
    console.log(`Idade é ${invoice.age}`)
    console.log("---------------------")
    console.log(`O produto é ${invoice.products}`)
}

//OBSERVAÇÃO:

Quando temos uma lista, igual em 
"
products: {
        0: ["mouse 2xwm", 29.90],
        1: ["Teclado mecânico", 129.99],
        2: ["Monitor", "899.99"],
    }
"

Ao pedir um console.log, irá exibir uma mensagem assim:

"O produto é [object Object]"

// PARA CORRIGIR ISTO, FAÇAMOS ASSIM:

let invoice = {
    nome: "fabio",
    age: 36,
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["Teclado mecânico", 129.99],
        2: ["Monitor", "899.99"],
        3: ["Tv 100 polegadas", "10000.90"]
    }
}

//USANDO O JSON ACIMA, NÃO É PRECISO UTILIZAR AS VARIÁVEIS ABAIXO

//let nome = "Fábio"
//let age = 36
//let products = ["mouse 2xwm", "Teclado mecânico", "Monitor"]
//let productsValues = [29.90, 129.99, 899.99]

//O QUE ALTERARIA ESTA FUNÇÃO COM VÁRIAS VARIÁVEIS PARA
//generateInvoice(nome, products, age, productsValues)

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.nome}`)
    console.log(`Idade é ${invoice.age}`)
    console.log("---------------------")
    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
}

//FOR IN PECORRE QUANTOS ITENS TIVER NA LISTA
//A VARIÁVEL INDEX, FOI CRIADA PARA RECEBER A POSIÇÃO DA LISTA
//Logo, quando uso invoice.products (Que significa que quero algo da lista de produtos)
//se eu coloco na frente "[index]" ele entende qual a posição da lista
// quero exibir.
// Como foi criado as variáveis productName, productPrice,
// onde elas vão receber invoice.products[index], ao pedir um
//console.log(`- ${productName}: R$ ${productPrice}`) ele irá
//exibir a lista exatamente assim:

//- mouse 2xwm: R$ 29.9
//- Teclado mecânico: R$ 129.99
//- Monitor: R$ 899.99
//- Tv 100 polegadas: R$ 10000.90


//PARA FIXAR:

//Qual é a estrutura básica dos dados em um objeto JSON?
//R: Pares de chave-valor delimitados por ":" e separados por ","

//Qual é o formato de um valor numérico dentro de um objeto JSON?
//R: Não precisa de aspas, apenas o número

//O que significa a sigla JSON em programação?
//R: JavaScript Object Notation

//Qual é a principal finalidade do JSON em programação?
//R: Armazenar e trocar dados estruturados entre diferentes sistemas

**//CLASSES E OBJETOS:**

CLASSE: É a padronização de uma estrutura de dados (A "Forma"). Agora quando usamos esta Forma para criar de fato uma estruturar de dados, então temos o OBJETO.

OBJETO: Mantém a padronização da forma (classe) e implementa seus valores das propriedades.
- Ter métodos inteligentes (funções próprias)

Toda Classe eu posso declarar o Objeto dela: Chamado de Instanciar um objeto. (É importante pesquisar mais a fundo o que é isso)

**OBJETO:** No mundo real um objeto de fato é um objeto.
Quando passamos para o mundo virtual, a representação é qualquer coisa, diferente do mundo real.

//CLASSES ALÉM DE GUARDAR INFORMAÇÕES, ELA PODE GUARDAR COMPORTAMENTO

EXEMPLO:

class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){ //é uma boa prática toda classe ter um constructor(), uma função.
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
} 

let boloFesta = new formaDeBolo("massa de chocolate","recheio de nutella")

console.log(boloFesta)
//toda vez que declaro class, eu declaro minha estrutura de dados

//AGORA, VAMOS DAR INTELIGÊNCIA PARA NOSSAS CLASSES, VAMOS CONSTRUIR UM MÉTODO:

class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){ //é uma boa prática toda classe ter um constructor(), uma função.
        this.saborDaMassa = saborDaMassa // variáveis dentro da classe não precisa de "let"
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    } //Declarar função dentro da classe não precisa usar "function"
    
    assar(){
        console.log("Assando o Bolo de "+ this.saborDaMassa)
    }
} 

let boloFesta = new formaDeBolo("chocolate","nutella")
let boloPremium = new formaDeBolo("baunilha", "coco")

boloFesta.escrever() //eu consigo chamar a função de dentro da classe ao invés de usar console.log()
boloPremium.escrever() // 
boloFesta.assar()
//toda vez que declaro class, eu declaro minha estrutura de dados
//MÉTODO: Função que trabalha em contexto de uma classe

//A Classe é uma forma de padronizar o código e utilizar em qualquer parte do nosso código, como por exemplos os dados de um
//usuário... isso evita retrabalho. Pois você consegue utilizar este mesmo conjunto várias vezes.
//Isto é a base e caso queira aprender mais, tem que estudar Programação Orientada a Objetos.

//**COMO SERIA ESTE CÓDIGO ABAIXO EM JAVASCRIPT EM OUTRAS LINGUAGENS:**

**JavaScript:**

class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){ 
        this.saborDaMassa = saborDaMassa 
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    } 
    
    assar(){
        console.log("Assando o Bolo de "+ this.saborDaMassa)
    }
} 

let boloFesta = new formaDeBolo("chocolate","nutella")
let boloPremium = new formaDeBolo("baunilha", "coco")

boloFesta.escrever() 
boloPremium.escrever() 
boloFesta.assar()

___________________________________________________

**🟦 Java (POO clássica, verbosa por natureza)**

public class FormaDeBolo {
    String saborDaMassa;
    String saborRecheio;

    public FormaDeBolo(String saborDaMassa, String saborRecheio) {
        this.saborDaMassa = saborDaMassa;
        this.saborRecheio = saborRecheio;
    }

    public void escrever() {
        System.out.println("Um delicioso bolo de " + saborDaMassa + " com recheio de " + saborRecheio);
    }

    public void assar() {
        System.out.println("Assando o Bolo de " + saborDaMassa);
    }

    public static void main(String[] args) {
        FormaDeBolo boloFesta = new FormaDeBolo("chocolate", "nutella");
        FormaDeBolo boloPremium = new FormaDeBolo("baunilha", "coco");

        boloFesta.escrever();
        boloPremium.escrever();
        boloFesta.assar();
    }
}

**OBSERVAÇÕES GPT:** ⚠️ Crítica honesta: Java exige boilerplate excessivo para algo simples — ótimo para entender POO “raiz”, péssimo para produtividade rápida.
___________________________________________________

**🟩 C# (Java melhorado, mesma ideia)**

using System;

class FormaDeBolo
{
    string saborDaMassa;
    string saborRecheio;

    public FormaDeBolo(string saborDaMassa, string saborRecheio)
    {
        this.saborDaMassa = saborDaMassa;
        this.saborRecheio = saborRecheio;
    }

    public void Escrever()
    {
        Console.WriteLine($"Um delicioso bolo de {saborDaMassa} com recheio de {saborRecheio}");
    }

    public void Assar()
    {
        Console.WriteLine($"Assando o Bolo de {saborDaMassa}");
    }

    static void Main()
    {
        FormaDeBolo boloFesta = new FormaDeBolo("chocolate", "nutella");
        FormaDeBolo boloPremium = new FormaDeBolo("baunilha", "coco");

        boloFesta.Escrever();
        boloPremium.Escrever();
        boloFesta.Assar();
    }
}

**OBSERVAÇÕES GPT:**
✔️ Ponto forte: interpolação de string nativa
❌ Falha comum: iniciantes esquecem o Main

___________________________________________________

**🟨 Python (menos código, mesma clareza)**

class FormaDeBolo:
    def __init__(self, sabor_da_massa, sabor_recheio):
        self.sabor_da_massa = sabor_da_massa
        self.sabor_recheio = sabor_recheio

    def escrever(self):
        print(f"Um delicioso bolo de {self.sabor_da_massa} com recheio de {self.sabor_recheio}")

    def assar(self):
        print(f"Assando o Bolo de {self.sabor_da_massa}")


bolo_festa = FormaDeBolo("chocolate", "nutella")
bolo_premium = FormaDeBolo("baunilha", "coco")

bolo_festa.escrever()
bolo_premium.escrever()
bolo_festa.assar()

**OBSERVAÇÕES DO GPT:** 🔥 Brutalmente honesto: Python mostra como JS poderia ser mais simples se não fosse confuso com this
___________________________________________________

**🟥 Ruby (POO limpa e elegante)**

class FormaDeBolo
  def initialize(sabor_da_massa, sabor_recheio)
    @sabor_da_massa = sabor_da_massa
    @sabor_recheio = sabor_recheio
  end

  def escrever
    puts "Um delicioso bolo de #{@sabor_da_massa} com recheio de #{@sabor_recheio}"
  end

  def assar
    puts "Assando o Bolo de #{@sabor_da_massa}"
  end
end

bolo_festa = FormaDeBolo.new("chocolate", "nutella")
bolo_premium = FormaDeBolo.new("baunilha", "coco")

bolo_festa.escrever
bolo_premium.escrever
bolo_festa.assar

**OBSERVAÇÕES GPT:**💎 Ruby é subestimado: extremamente legível para ensinar POO.

**//PARA FIXAR O CONHECIMENTO:**

**//O que são propriedades em um objeto JavaScript?**
//R: Valores associados a um objeto que descrevem suas características.

**//O que é uma classe em JavaScript?**
//R: Um modelo ou plano para criar objetos que compartilham características e comportamentos semelhantes

**//Qual é o objetivo principal de usar classes e objetos em JavaScript?**
//R: Organizar e estruturar o código, permitindo a criação de instâncias com características específicas.

**//Como você cria um objeto a partir de uma classe em JavaScript?**
//R: Usando a palavra-chave new seguida do nome da classe