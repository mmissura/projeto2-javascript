console.log(`Trabahando com listas`);

const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listasDeDestinos.push(`Curitiba`);
console.log("Destinos possíveis");
console.log(listasDeDestinos);

listasDeDestinos.splice(1, 1);
console.log(listasDeDestinos);
console.log(listasDeDestinos[1]);
console.log(listasDeDestinos[1], listasDeDestinos[0]);
