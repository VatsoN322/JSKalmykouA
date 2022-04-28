'use strict'
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