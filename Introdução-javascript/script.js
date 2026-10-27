//console.log() mostra uma informação no console
console.log("Olá, mundo!");
console.log("8" + "9");

console.log(typeof "ola, mundo") // string
console.log(typeof 20);  // number
console.log(typeof 10.5);    // number
console.log(typeof true);    // boolean
console.log(typeof false);    // boolean

// váriavel
//const não pode ter seu valor alterado durante o programa
const nome = "Rick"
console.log(nome);

// let pode ter seu valor alterado durante o programa
let idade = 20; //cria a variavel


console.log(idade); //exibir no console

console.log("Olá " + nome + ", que tem " + idade + "anos.");

idade = 21;// alterando o valor
console.log(idade);

console.log(`Olá ${nome}, que tem ${idade} anos.`);




let nome3 = "mac";
console.log(nome3);

let peso = 82;
console.log(peso);


console.log("Olá " + nome3 + ", que tem " + peso + " quilos de massa muscular.");

let nome4 = "maverick";


let peso1 = 78;
console.log(peso1);
console.log("Olá " + nome4 + ", que tem " + peso1 + " quilos de massa muscular.");




let nome5 = "optmus prime";
console.log(nome5);

console.log("Olá " + nome5 + ", chamando todos os autobots");

// Métodos de string
const texto = "ROLAND";

// conta quantos caracteres a string tem 
console.log(texto.length);

// altera todas as letras para maisculo

console.log(texto.toUpperCase());

// altera todas as letras para minusculo
console.log(texto.toLowerCase());

const nome_completo = "FÁBIO HENRIQUE BRITO DE SOUSA"


console.log(nome_completo.includes("Sousa")); // true

console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 5); // false
console.log("10" == 10); // true
console.log("10" === 10); // false
console.log(10 !== 5); // true

const idadePessoa = 17

console.log(idadePessoa > 18); // false
console.log(idadePessoa > 16); // true





console.log(nome_completo === "FÁBIO HENRIQUE BRITO DE SOUSA");

// coletamos a idade da pessoa
let pessoaidade = 17;
// verificar se a idade é maior ou igual a 18
if (pessoaidade >= 18) {
    // se maior ou igual a  18 entao é ela maior de idade
    console.log("já pode ser preso hahahahha!");

} else {
    // senão, entao ela é menor de idade
    console.log("não vai pra balada!");
}


// coletamos a idade da pessoa
let idadeVotacao = 16
// verificar se a pessoa é maior que 70
if (idadeVotacao > 70) {
    console.log("Voce não é obrigado a votar!");
} else if (idadeVotacao >= 18) {
    // senão se a idade da pessoa for maior ou igual a 18
    console.log("voce tem que votar obrigatoriamente!");
} else if (idadeVotacao >= 16) {
    // senão se a idade da pessoa for maior ou igual a 16
    console.log("voce não é obrigado a votar mas caso queira pode!");
} else {
    // senão for nenhuma das alternativas anteriores
    console.log("voce NÃO pode votar!");
}






// 1 -aprovado ou reporvado da escola 


let media = 7.5;

if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}



// atividade 2
// Receba dois números e informe qual deles é o maior. Se os dois forem iguais, informe que houve empate.

const segundonumero = 7
let primeironumero = 10

if (segundonumero > primeironumero) {
    console.log("segundo numero maior");

}
else if (primeironumero > segundonumero) {
    console.log("primeiro numero maior");

} else {
    console.log("são iguais");

}

// atividade 3
//Receba uma senha e verifique se ela é igual a senai123. Se for igual, exiba "Acesso autorizado". Caso contrário, exiba "Senha incorreta"


let Senha = "senai123"
if (Senha === "senai123") {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}


// atividade 4

let grausCelsius = 22
if (grausCelsius > 27) {
    console.log("Quente")
}
else if (grausCelsius >= 18) {
    console.log("Agradavel")
}
else {
    console.log("Frio")
}


//atividade5

let classificaçãoDeNotas = 8
if (classificaçãoDeNotas >= 9) {
    console.log("Excelente")
}
else if (classificaçãoDeNotas >= 7) {
    console.log("Bom")
}
else if (classificaçãoDeNotas >= 5) {
    console.log("Regular")
}
else {
    console.log("Insuficiente")
}


//atividade 6


let diaDaSemana = 4
if (diaDaSemana = 1) {
    console.log("Domingo")
} else if (diaDaSemana = 7) {
    console.log("Sabádo")
} else {
    console.log("Dia Inválido")
}

////////---------------------///////////

let idadeDirigir = 19;
let temCNH = true;
let temCarro = false;

if (idadeDirigir >= 18 && temCNH == true && temCarro == true) {
    console.log("Voce pode dirigir!");
} else {
    console.log("Voce nao pode dirigir!");
}

let ehprofessor = false;
let ehaluno = false

if (ehprofessor == true || ehaluno == true) {
    console.log("Voce tem direito a meia-entrada!");
} else {
    console.log("Voce não tem direito a meia entrada!");
}

// && = e
//|| = ou



//////////////////atividade 2---------------





//atividade 1



let numero1 = 28;

if (numero1 > 10 && numero1 < 50) {
    console.log(" o numero esta no intervalo entre 10 e 50");
} else {
    console.log("o numero esta fora do intervalo entrw 10 e 50");
}


//atividade2


let candidato1 = 23

if (candidato1 > 16 && candidato1 < 24) {
    console.log("não atende ao requesito");
} else {
    console.log("atende ao requesito");
}

//atividade3


let valorcompra = 152;
let ehAssinante = true;

if (valorcompra >= 200 || ehAssinante == true) {
    console.log("Voce tem direito a frete gratis!");
} else {
    console.log("Voce não tem direito a frete gratis!");
}


//atividade4

let diaDasemana = "sabado"
if (diaDasemana === "domingo" || diaDaSemana === "sabado") {
    console.log("fim de semana");
} else {
    console.log("dia util");
}


//atividade5

let valorgasto = 300;
let temcupom = true;
let temassinatura = false;

if (temassinatura == true && valorgasto >= 150 || temcupom == true) {
    console.log(`voce tem direito ao deconto!`);
    console.log(`total final: ${valorgasto * 0.85}`);
} else {
    console.log("voce nao tem dirito ao desconto");
    console.log(`total final: ${valorgasto}`);

}