// Para declarar uma váriavel em javascript utiliza-se o comando let seguido do nome da váriavel

// O valor da variável pode ser atribuído na sua criação como no exemplo abaixo:
let nome = "Alfredo";
// Como javascript não é uma linguagem tipada não é necessário indicar o tipo de valor que será atruído à variável

console.log ("O valor contido na variável nome é = " + nome);
// Durante a execução da função acima foi realizado a concatenação de uma string (texto) com uma váriavel do tipo string (texto).


// O valor da variável também pode ser atribuído posteriormente à sua criação como no exemplo abaixo:
let idade;
idade = 25;

console.log ("O valor contido na variável idade é = " + idade + " anos");

// As variáveis em Javascript podem armazenar valores dos seguintes tipos: string, number, boolean

// As variáveis do tipo string armazenam dados do seguinte tipo:

// string - Armazena uma sequência de caracteres, como "Olá, mundo!"
let saudacao = "Olá, mundo!";
console.log (saudacao);

// string - Armazena um único caractere ou caracter especial, como 'a', 'X', '@'.
let simbolo = "#";
console.log ("O caracter especial escolhido foi = " + simbolo);

// As variáveis do tipo number armazenam dados do seguinte tipo:

// number - Armazena números inteiros, como 1, 10, -5.
let numCandidato = 155;
console.log ("O candidato que alcançou a maior pontuação na prova do concurso foi o candidato de numero = " + numCandidato);

// number - Armazena números com casas decimais, como 3.14, -0.5.
let pi = 3.14;
console.log ("O valor aproximado de PI é " + pi)

// As variáveis do tipo boolean armazenam dados do seguinte tipo:

// boolean - Armazena os valores lógicos True ou False.
let escolha1 = true;
let escolha2 =  false;

// Todos os conceitos acima também se aplicam as constantes em javascript

// Para declarar uma constante em javascript utiliza-se a sintaxe exemplificada abaixo:

const nomeJogo = "Dungeons of Hell";

console.log ("O lançamento do jogo " + nomeJogo + " está previsto para dezembro de 2024");
