var cantidadDeGatos = 5;
var cantidadDePasos = 3;
var gatoEmoji = '🐈';
var pasosEmoji = '🐾';

for (let i = 1; i <= cantidadDeGatos; i++) {
  let pasos = gatoEmoji;
  for (let j = 1; j <= cantidadDePasos; j++) {
    pasos += pasosEmoji;
  }
  console.log(`Gato #${i}: ${pasos}`);
}