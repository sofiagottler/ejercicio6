var cantidadDeGatos = 10;
var cantidadDePasos = 4;
var gatoEmoji1 = '🐈';
var gatoEmoji2 = '🐈‍⬛';
var pasosEmoji = '🐾';

for (let i = 1; i <= cantidadDeGatos; i++) {
  const gatoEmoji = i % 2 === 0 ? gatoEmoji2 : gatoEmoji1;
  let pasos = gatoEmoji + ' ';
  for (let j = 1; j <= cantidadDePasos; j++) {
    pasos += pasosEmoji;
  }
  console.log(`Gato #${i}: ${pasos}`);
}