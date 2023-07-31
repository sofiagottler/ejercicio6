var cantidadDeGatos = 10;
var emojis = ['😺', '😸', '😹'];

for (let i = 1; i <= cantidadDeGatos; i++) {
  const emoji = emojis[(i - 1) % emojis.length];
  console.log(`Gato #${i}: ${emoji}`);
}

