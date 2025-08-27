let A = parseFloat(prompt("Digite o valor de A:"));
let B = parseFloat(prompt("Digite o valor de B:"));

let temp = A;

A = B;
B = temp;

console.log("Após a troca:");
console.log("A = " + A);
console.log("B = " + B);
