'use strict'
/*
//Задание 1
const fName = prompt("Write your first name:");
const sName = prompt("Write your surname:");
const nName = prompt("Write your nickname:");
if(fName && sName)
{
    console.log(`Здравствуйте, ${fName} ${sName}`);
}
else if(sName && nName)
{
    console.log(`Здравствуйте, ${nName}`);
}
else if(fName)
{
    console.log(`Здравствуйте, ${fName}`);
}
else
{
    console.log(`Здравствуйте, Noname`);
}
*/
//Задание 2
const num = +prompt("Write a number:");
let message = "Введенное вами число ";
if(num > 100)
    message += "больше ста, ";
else if(num == 100)
    message += "равно ста, ";
else
    message += "меньше ста, ";
if(num%2 == 0)
    message += "четное, ";
else
    message += "нечетное, ";
if(num < 0)
    message += "отрицательное, ";
else
    message += "положительное, ";
if(num - Math.trunc(num) != 0)
    message += "дробное";
else
    message += "недробное";
console.log(message);