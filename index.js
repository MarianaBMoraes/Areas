const {
  calcularAreaDoCirculo,
  calcularAreaDoTriangulo,
  calcularAreaDoRetangulo,
} = require("./modulo");

const raio = 5;
const baseTriangulo = 10;
const alturaTriangulo = 8;
const baseRetangulo = 6;
const alturaRetangulo = 4;

console.log(`Área do circulo com raio ${raio}: ${calcularAreaDoCirculo(raio)}`);
console.log(
  `Área do triângulo com base ${baseTriangulo} e altura ${alturaTriangulo}: ${calcularAreaDoTriangulo(
    baseTriangulo,
    alturaTriangulo
  )}`
);
console.log(
  `Área do retângulo com base ${baseRetangulo} e altura ${alturaRetangulo}: ${calcularAreaDoRetangulo(
    baseRetangulo,
    alturaRetangulo
  )}`
);
