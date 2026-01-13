//Descrição
//Você é um jovem herói que embarca em uma jornada épica para derrotar o temido dragão que aterroriza o reino. No entanto, 
//você precisa atravessar uma floresta perigosa para chegar à caverna do dragão. Cada passo é crucial, e sua jornada será
//determinada pela lógica afiada que você possuir.

//Tarefa: Escreva um algoritmo que simule a jornada do herói pela floresta. O herói começa em uma posição inicial e deve dar
//uma série de passos para atravessar a floresta até a caverna do dragão.

//Entrada
//A posição inicial do herói na floresta (um número inteiro).

//O número total de passos que o herói deve dar (um número inteiro).

//Saída
//Imprima a posição final do herói após dar a quantidade de passos especificada.

//Exemplos
//A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar 
//seu programa com esses exemplos e com outros casos possíveis.

//Entrada	           Saída
//2
//3	                    Posicao final do heroi: 5
//--------------------------------------------------
//15
//3	                    Posicao final do heroi: 18
//--------------------------------------------------
//10
//6	                    Posicao final do heroi: 16

//-------------------------------------------------------------------------------------

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const posicaoInicial = parseInt(gets());
const totalPassos = parseInt(gets());

//TODO: Calcule a posição final do herói:
const posicaoFinal = totalPassos - posicaoInicial ;

// Imprime a posição final
print("Posicao final do heroi:", posicaoFinal);

///////////////////////////
const totalSalas = 2;
//Aqui temos uma demonstração de array com valores já predefinidos:
const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

//Aqui temos uma forma de loop para percorrer cada sala da masmorra:
for (let sala = 1; sala <= totalSalas; sala++) {
//Utilizamos o .includes() para verificar se um número está presente nos arrays:
    const temTesouro = salasComTesouro.includes(sala);
    //console.log("Tem tesouro =" + temTesouro);
    const temMonstro = salasComMonstro.includes(sala);
    //console.log("Tem monstro =" + temMonstro);

//TODO: Agora implemente uma condição necessária para verificar e exibir se há tesouro na sala e se há montro na sala:
    if (temTesouro) {
        console.log("Tesouro na sala " + sala + "!");
    } else if (temMonstro) {
        console.log("Monstro na sala " + sala + "!");
    }
}

**//MINHA DOR:** Neste desafio eu me confundi feio entre valor da variável e o índice (posição) //de um array 🗄️

//O Gemini me ajudou a entender assim:

//Vamos separar as coisas para ficar claro:1. O Loop forNeste desafio, o sala = 1 representa o 
//"nome" ou o número da sala onde o herói está pisando. Na lógica do problema, as salas são 
//numeradas como 1, 2, 3... por isso o loop começa em 1. 🚶‍♂️2. O Método .includes()O segredo 
//está aqui. O .includes() não quer saber da posição (índice) do array. Ele funciona como uma 
//busca por valor. 🔍Imagine que o array salasComTesouro = [2, 4, 7] é uma lista de "números da 
//sorte".Quando o loop está na sala = 1, o .includes(1) pergunta: "O número 1 está nessa lista?
//". A resposta é Não (false).Quando o loop vai para a sala = 2, o .includes(2) pergunta: "O 
//número 2 está nessa lista?". A resposta é Sim (true).📊 Valor vs. ÍndiceSe estivéssemos 
//acessando pela posição, como salasComTesouro[sala], aí sim o índice 0 seria o número 2. Veja 
//a diferença:Posição (Índice)Valor no Array[0]2[1]4[2]7

//_____________________________________________________________

//Descrição
Você é um mestre construtor em um mundo de blocos e tem a tarefa de gerar biomas em diferentes regiões do mundo. Cada bioma tem características únicas, como tipos de solo, vegetação e clima.

Tarefa: Sua tarefa é coletar minérios enquanto ataca uma rocha com sua picareta. Use loops e lógica de programação para representar cada golpe na rocha e determinar qual minério foi obtido.

Entrada
O programa irá solicitar que você digite um número inteiro positivo representando a quantidade de golpes que você deseja dar com a picareta.

Saída
Para cada golpe que você der, o programa exibirá uma mensagem indicando o resultado do golpe. Será mostrado o número do golpe e o minério obtido, que pode ser 1: Carvao, 2: Ferro, 3: Diamante e 4: Pedra.

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
4	1: Carvao
2: Ferro
3: Diamante
4: Pedra
3	1: Carvao
2: Ferro
3: Diamante
2	1: Carvao
2: Ferro

**//MINHA DOR:** Não entendi o por que utilizar a "%". Ao pesquisar, descobri que ele devolve apenas o "resto" da divisão, exemplo: 5/2 = 2.5, já 5 % 2 = 1 (o resto)

//resolução:

const quantidadeGolpes = 4

// TODO: Defina aqui os tipos de minerais Carvao, Ferro, Diamante e Pedra
let minerais = [" Carvão ", " Ferro ", " Diamante ", " Pedra "];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
  // Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
  let minaIndex = (i-1) % minerais.length;
  
  // TODO: Agora exiba o índice i, concatene com o caractere ":", após, concatene com tipo de minerais[minaIndex]:
  console.log(i + ":" + minerais[minaIndex]);
}

//_____________________________________________________________

Descrição
Imagine um universo onde você é um Mestre Pokémon com o poder de criar novas criaturas através da combinação de nomes. Seu algoritmo é a chave para dar vida a esses seres incríveis. Você receberá uma primeira parte do nome de um Pokémon e sua tarefa é completá-la com o sufixo mágico adequado, revelando o nome completo do Pokémon.

Tarefa: Sua missão é criar uma função extraordinária chamada combinarNomePokemon. Essa função possui um toque mágico que transforma uma entrada simples em algo verdadeiramente especial.

Entrada
A entrada consistirá em uma única string representando a primeira parte do nome de um Pokémon.

Saída
A função deve retornar uma nova string que é a combinação da parte inicial(Préfixo) do nome do Pokémon com o sufixo final do nome, formando um nome de Pokémon completo.

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
Bulba	Bulbasaur
Ivy	Ivysaur
Venu	Venusaur

Resolução:

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// TODO: Defina uma função chamada "combinandoNomesPokemons" que recebe um parâmetro chamado (palavra);
// TODO: Dentro da função, crie uma variável chamada "palavraPokemon" que é formada pela concatenação da "palavra" com a string "saur";  
// TODO: Após a váriavel, retorne a palavra pokemon; 

var nomeEntrada = "Bulba";

// Chamando a função "combinandoNomesPokemons" com o nome pokemon informado e armazenando o resultado na variável "palavraGerada":
var palavraGerada = combinandoNomesPokemons(nomeEntrada);

function combinandoNomesPokemons(palavra){
  let palavraPokemon = palavra + "saur"
  return palavraPokemon
}

// Exibindo a palavra gerada:
console.log(palavraGerada);

//-----------------------------------------------------------------------------------

//Descrição
Você é um aventureiro em um mundo mágico cheio de perigos e monstros. Durante suas missões, você coleta diversos itens mágicos, cada um com seus próprios atributos e habilidades especiais. Agora, você está desenvolvendo um sistema aprimorado para gerenciar esses itens. Neste novo sistema, você pode criar diferentes tipos de itens mágicos, como armas, armaduras, poções, entre outros. Cada tipo de item terá atributos específicos e contribuirá de maneiras únicas para suas aventuras.

Tarefa: Crie um objeto que represente um item mágico personalizado. O objeto deve ter atributos como tipo de item, dano e resistência, de acordo com o tipo escolhido. Além disso, crie uma função que calcule o dano causado por um item durante um combate, levando em consideração o tipo de item.

Entrada
Peça ao usuário para digitar o tipo do item mágico que deseja criar, o dano e a resistência

Saída
Imprima o tipo do item, o dano, a resistência e o dano em combate.

Use a função de cálculo de dano para imprimir o dano causado por esse item em um combate simulado. Quando o tipo do item for igual a 'arma' deve-se multiplicar o dano por dois this.dano * 2 e quando não for arma, é retornado no dano this.dano.

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
Espada
200
300	Tipo: Espada
Dano: 200
Resistencia: 300
Dano em combate: 200
Cajado
600
800	Tipo: Cajado
Dano: 600
Resistencia: 800
Dano em combate: 600
Arco
900
500	Tipo: Arco
Dano: 900
Resistencia: 500
Dano em combate: 900