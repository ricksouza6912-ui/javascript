const motorista = {
    idade: 18,
    temCNH: true,
    temCarro: false
}

console.log(motorista);

motorista.idade += 1;
motorista.temCNH = false;
motorista.temCarro = true;

console.log(motorista);

//atividade1



const Produto = {
    Nome: "winchester",
    Marca: "verick",
    Preço: "R$150.00",
    Disponivel: false,
}

console.log(Produto.Nome)
console.log(Produto.Preço)





//laço de repetição
for (let contador = 0; contador <= 20000; contador++) {
    console.log(contador);
}



//atividae2
const numero = 2
for (let contador = 1; contador <= 10; contador++) {
    const nomeresultado = contador * numero
    console.log(`${contador} x ${numero}=${nomeresultado}`);
}

//estrutura de desisao

let contador = 1;
let numerowhile = 12;

while (contador <= 10) {
    console.log(contador * numerowhile);
    contador++;
}

//exiba os numeros pares de 20 até 0, orden decresente.

//atividade3

let number = 0

while (number >= 0) {
    console.log(`while: ${number}`)
    number -= 2
}


let number2 = 0

do {
    console.log(`do while: ${number2}`)
    number2 -= 2
} while (number > 0);



// exiba os numeros inteiros de 10 até 1 e, em seguida, a mensagen "fim da contagem" 
//atividade 4

let number3 = 10;

do {
    console.log(` while: ${number3}`)
    number3--;
} while (number3 >= 1) {
    console.log("Fim da contagem");
}

//Listas
const frutas = ["Maçã", "Banana", "Uva", "Laranja"]

frutas[0] = "Pera";

console.log(frutas);


console.log(frutas[0]);
console.log(frutas[2]);

console.log(frutas.length);

frutas.push("Manga", "Melancia");

console.log(frutas);

frutas.pop();

console.log(frutas);

frutas.sort()

console.log(frutas);

//Funçoes
function somar(numero1, numero2) {
    return numero1 + numero2;
}
const soma = somar(1,1);
console.log(soma)

console.log (somar)(7, 6);


function dividir(numero1, numero2) {
    console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
}

dividir(100,2);

//Lista e Funçoes
//atividade 1



const jogos = ["halo", "silent", "god",]

jogos[0] = "Pera";

console.log();


console.log(jogos[0]);
console.log(jogos[2]);

console.log(jogos.length);

jogos.push("Manga", "Melancia");

console.log(frutas);

frutas.pop();

console.log(frutas);

frutas.sort()

console.log(frutas);