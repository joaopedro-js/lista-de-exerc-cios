//4)  Pedro comprou um saco de ração com peso em quilos. Ele possui dois gatos, para os quais fornece a quantidade de ração em gramas. A quantidade diária de ração fornecida para cada gato é sempre a mesma. Faça um programa que receba o peso do saco de ração e a quantidade de ração fornecida para cada gato, calcule e mostre quanto restará de ração no saco após cinco dias. 

let pesoKg = parseFloat(prompt("Digite o peso do saco de ração (em kg):"));
let racaoGato = parseFloat(prompt("Digite a quantidade de ração fornecida para cada gato por dia (em g):"));

let pesoG = pesoKg * 1000;

let consumoDiario = racaoGato * 2;

let consumoTotal = consumoDiario * 5

let resto = pesoG - consumoTotal;

console.log("Restará " + resto + " gramas de ração no saco após 5 dias.");
console.log("Ou seja, " + (resto / 1000) + " kg.");
