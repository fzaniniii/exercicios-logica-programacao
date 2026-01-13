//TESTANDO NA PRÁTICA O JSON

//TENHO UMA LOJA DE PC E ESTES SÃO OS ITENS QUE TENHO
// RTX 4090 - R$12.000
// MEMÓRIA DDR5 16GB - R$1.500
// TECLADO LOGITECH MECÂNICO - R$527.00
// EXIBA O NOME DO COMPRADOR, CPF E A LISTA DO QUE ELE ESTÁ COMPRANDO

//LEMBRANDO QUE JSON SE ESCREVE ENTRE {} e cada linha precisa finalizar com uma ","(vírgula) 
// OUTRO DETALHE, DENTRO DO JSON, EU NÃO PRECISO FICAR SETANDO VARIÁVEL DESSA FORMA "LET PESSOA, LET VALOR"... BASTA DIGITAR A VARIÁVEL SEGUIDA DE : (DOIS PONTOS)
// SOBRE LISTAS NO JSON: Lembre-se de utilizar o número da posição da coluna, exemplo, inicia sempre em 0, 1, 2 ...
//MAIS UM LEMBRETE: Sempre que temos uma lista, precisamos colocar dentro de "[]""

let nf = {
    pessoa: "Ricardo",
    cpf: "000.578.111-99",
    perifericos: {
        0: ["RTX 4090", " 12.000,00 "],
        1: ["MEMÓRIA DDR5 16GB", " 1.500,00 "],
        2: ["TECLADO LOGITECH MECÂNICO", " 527,00 "],
        3: ["MONITOR ASUS STRIX 72", " 7.500,52"] //ADICIONEI MAIS ESTE PRODUTO DE TESTE E ESTÁ FUNCIONANDO 100%, AGORA O FOR IN PECORRE TODA A LISTA E RETORNA OS VALORES ARMAZENADOS EM nomeProduto e priceProduto
    }
}
//agora vamos criar uma função para chamar estes dados

generateNF(nf)

function generateNF(nf){
    console.log(`O Comprador é: ${nf.pessoa}`)
    console.log(`O CPF é: ${nf.cpf}`)
    for (let indox in nf.perifericos){
        let [nomeProduto, priceProduto] = nf.perifericos[indox]
        console.log(`- ${nomeProduto} - R$${priceProduto}`)
    }
}