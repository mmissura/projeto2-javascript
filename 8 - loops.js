console.log(`\nTrabahando com listas`);

const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis");
console.log(listasDeDestinos);


const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true);

let contador = 0;
let destinoExiste = false;

while (contador < 3) {
    if (listasDeDestinos[contador] == destino) {

        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem");
}
else {
    console.log("Desculpe, houve um erro");
}

for (let i = 0; i < 3; i++) {
    if (listasDeDestinos[i] == destino) {
        destinoExiste = true;

    }

}