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