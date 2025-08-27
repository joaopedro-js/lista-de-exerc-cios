//3) Crie um programa que lê o ano de nascimento de uma pessoa e o ano atual. Calcule e mostre qual é: a idade da pessoa em anos, a idade da pessoa em meses, a idade da pessoa em dias e a idade da pessoa em semanas. 

var birth_year = prompt("Enter the year");
var current_year = prompt("Enter current year");
var age_years = current_year - birth_year
var age_months = (current_year - birth_year) * 12
var age_days = (current_year - birth_year) * 365
var age_weeks = (current_year - birth_year) * 48

console.log("Age in years: ", age_years);
console.log("Age in months: ", age_months);
console.log("Age in weeks: ", age_weeks);
console.log("Age in days: ", age_days);