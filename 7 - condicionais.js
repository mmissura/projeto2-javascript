console.log(`Trabahando com listas`);

const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;
console.log("Destinos possíveis");
console.log(listasDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!!");
    listasDeDestinos.splice(2, 1);
}
else {
    console.log("Não é maior de idade e não posso vender");
}
console.log("Embarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
}
else {
    console.log("Você não pode embarcar");
}

console.log(listasDeDestinos);
