//FUNÇÃO

torrar() //Aqui é onde estamos chamando a função abaixo e podemos chamar ela várias vezes
//injetarPao() //Chamado a função injetar pão

function torrar(){ // essa função só é executada se ela for chamada antes disso
    console.log("Torrando pão")
    injetarPao()
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

console.log("------")

main() // Aqui é onde chamamos a função e o resto abaixo é onde criamos as funções

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