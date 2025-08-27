let pesoKg = parseFloat(prompt("Digite o peso do saco de ração (em kg):"));
let racaoGato = parseFloat(prompt("Digite a quantidade de ração fornecida para cada gato por dia (em g):"));

let pesoG = pesoKg * 1000;

let consumoDiario = racaoGato * 2;

let consumoTotal = consumoDiario * 5

let resto = pesoG - consumoTotal;

console.log("Restará " + resto + " gramas de ração no saco após 5 dias.");
console.log("Ou seja, " + (resto / 1000) + " kg.");
