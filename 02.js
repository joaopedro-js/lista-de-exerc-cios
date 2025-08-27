//2) Um dos sócios da empresa XYZ LTDA ficou sabendo que você desenvolveu um
//programa de reajuste salarial para a empresa ABC LTDA e pediu que você desenvolva
//um programa similar. Na verdade ele está pedindo que você acrescente ao programa
//anterior à possibilidade dele informar não somente o salário atual do funcionário, mas
//também o valor percentual que deve ser incrementado para aquele funcionário, pois
//ele irá aplicar valores percentuais diferentes a cada funcionário.

var salary, percentage, new_salary;
salary = prompt("Enter your salary");
percentage = prompt("Enter your salary");
new_salary = salary * (1+percentage/100);

console.log("New salary: ", new_salary);