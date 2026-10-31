
const math = require('mathjs');

// Regner ut kvadratroten av 16
console.log("Kvadratroten av 16:", math.sqrt(16));

// Avrunder tallet pi til to desimaler
console.log("Pi avrundet:", math.round(math.pi, 2));

// Regner ut et matematisk uttrykk
console.log("Resultat:", math.evaluate('2 + 3 * 4'));

// Regner ut 5 opphøyd i 2
console.log("5 opphøyd i 2:", math.pow(5, 2));
