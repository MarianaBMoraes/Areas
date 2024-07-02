function calcularAreaDoCirculo(raio) {
  return Math.PI * raio * raio;
}

function calcularAreaDoTriangulo(base, altura) {
  return (base * altura) / 2;
}

function calcularAreaDoRetangulo(base, altura) {
  return base * altura;
}

module.exports = {
  calcularAreaDoCirculo,
  calcularAreaDoTriangulo,
  calcularAreaDoRetangulo,
};


