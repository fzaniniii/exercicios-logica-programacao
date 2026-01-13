//CLASSES E OBJETOS

//CLASSES ALÉM DE GUARDAR INFORMAÇÕES, ELA PODE GUARDAR COMPORTAMENTO

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