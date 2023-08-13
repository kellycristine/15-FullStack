/*8. Faça um algoritmo que leia a idade e peso de um atleta e imprima
a sua categoria, de acordo com a seguinte tabela:

Idade Peso Categoria
Até 12 anos - Infantil
13 a 16 anos Até 40kg Juvenil leve
Acima de 40kg Juvenil pesado
17 a 24 anos Até 45kg Sênior leve
Acima de 45kg até 60kg Sênior médio

Acima de 60kg Sênior pesado
Acima de 24 anos - Veterano */

var idade = Number(prompt("Informe a idade do atleta"));
var peso = Number(prompt("Informe o peso do atleta"));
var categoria;

if (idade <= 12)
{
    categoria = "Infantil";
}
else if (idade <= 16)
{
    if (peso <= 40)
        categoria = "Juvenil leve";
    else 
        categoria = "Juvenil pesado";
}
else if (idade <= 24)
{
    if (peso <= 45)
        categoria = "Sênior leve";
    else if (peso <= 60)
        categoria = "Sênior médio";
    else
        categoria = "Sênior pesado";
}
else // >24
{
    categoria = "Veterano";
}

console.log(categoria);