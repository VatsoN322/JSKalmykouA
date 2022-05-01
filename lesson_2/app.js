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
/*
//Задание 2
const num = prompt("Write a number:");
if (isNaN(+num)) {
    for(let i=0; i < num.length; i++)
    {
        if((num.charCodeAt(i) >= 97 && num.charCodeAt(i) <= 122) || (num.charCodeAt(i) >= 65 && num.charCodeAt(i) <= 90))
        {
            console.log("Заданное значение нельзя преобразовать в число. Вы ввели сообщение на АНГЛИЙСКОМ ЯЗЫКЕ.");
            break;
        }
        if (num.charCodeAt(i) >= 1040 && num.charCodeAt(i) <= 1103)
        {
            console.log("Заданное значение нельзя преобразовать в число. Вы ввели сообщение на РУССКОМ ЯЗЫКЕ.");
            break;
        }
    }

} else {
    let message = "Введенное вами число ";
    if (num > 100)
        message += "больше ста, ";
    else if (num == 100)
        message += "равно ста, ";
    else
        message += "меньше ста, ";
    if (num % 2 == 0)
        message += "четное, ";
    else
        message += "нечетное, ";
    if (num < 0)
        message += "отрицательное, ";
    else
        message += "положительное, ";
    if (num - Math.trunc(num) != 0)
        message += "дробное";
    else
        message += "недробное";
    console.log(message);
}
*/
/*
//Задание 3
//Задание 3.1
 const num1 = +prompt("Введите первое число:");
 const num2 = +prompt("Введите второе число:");
 const num3 = +prompt("Введите третье число:");
 const sum = num1 + num2 + num3;
 isNaN(sum) ? alert("При вводе данных была допущена ошибка") : alert(sum);

 //Задание 3.2
 const yourname = prompt("Введите ваше имя");
 const age = prompt("Введите свой возраст");
 yourname && !isNaN(age) ? 
 (age >= 18 ? alert("Добро пожаловать " + yourname + "!") : 
 alert("Уважаемый " + yourname + "! Доступ закрыт.")) : 
 alert("При вводе данных была допущена ошибка");
 */

 //Задание 4
 const num = prompt("Введите число от 0 до 9");
 if(isNaN(num))
 {
     console.log("Вы ввели не число");
 }
 else
 {
     switch(+num)
     {
         case 0: console.log(`${num} -> 'Ноль'`); break;
         case 1: console.log(`${num} -> 'Один'`); break;
         case 2: console.log(`${num} -> 'Два'`); break;
         case 3: console.log(`${num} -> 'Три'`); break;
         case 4: console.log(`${num} -> 'Четрые'`); break;
         case 5: console.log(`${num} -> 'Пять'`); break;
         case 6: console.log(`${num} -> 'Шесть'`); break;
         case 7: console.log(`${num} -> 'Семь'`); break;
         case 8: console.log(`${num} -> 'Восемь'`); break;
         case 9: console.log(`${num} -> 'Девять'`); break;
         default: 
         +num < 0 ? console.log("Вы ввели значение меньше 0") : console.log("Вы ввели значение больше 9"); break;
     }
 }