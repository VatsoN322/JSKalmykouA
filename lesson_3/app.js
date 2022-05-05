'use strict'
/*
//Задание 1
do
{
	let num1 = +prompt("input first number");
	let num2 = +prompt("input second number");
	if(isNaN(num1) || isNaN(num2))
	{
		alert("Input error");
	}
	else
	{
		if(Math.abs(num1 - num2) < 5)
		{
			alert("Введенный диапазон мал (меньше 5). Введите данные снова");
		}
		else
		{
			if(num1 < num2)
			{
				for(let i=num1; i <= num2; i++)
				{
					console.log(i);
				}
				break;
			}
			else
			{
				for(let i=num1; i>=num2; i--)
				{
					console.log(i);
				}
				break;
			}
		}
	}
}
while(true);
*/
/*
//Задание 2
const pin = "12345";
const puc = "12345";
let pinBlockFlag = false;
let pucBlockFlag = false;
let pinIterator = 0;
let pucIterator = 0;
let inputStr
do
{
	if(pinBlockFlag == false)
	{
		inputStr = prompt("Input PIN-code");
		if(inputStr == pin)
		{
			console.log("Access is allowed");
			break;
		}
		else
		{
			console.log("Incorrect PIN. Try again.");
			pinIterator++;
			if(pinIterator == 3)
			{
				pinBlockFlag = true;
			}
		}
	}
	else if(pucBlockFlag == false)
	{
		inputStr = prompt("Input PUC-code");
		if(inputStr == puc)
		{
			console.log("Access is allowed");
			break;
		}
		else
		{
			console.log("Incorrect PUC. Try again.");
			pucIterator++;
		}
		if(pucIterator == 3)
		{
			pucBlockFlag = true;
		}
	}
	else
	{
		console.log("You are blocked");
		break;
	}
}
while(true);
*/
/*
//Задание 3
const num1 = +prompt("input first number");
const num2 = +prompt("input second number");
if(isNaN(num1) || isNaN(num2))
{
    alert("Input error");
}
else if((num1 - Math.trunc(num1) != 0) || (num2 - Math.trunc(num2) != 0))
{
    alert("Одно из веденных чисел дробное.");
}
else
{
    if(num1 < num2)
    {
        for(let i=num1; i <= num2; i++)
        {
            let message = i + ": ";
            if (i > 100)
                message += "больше ста, ";
            else if (i == 100)
                message += "равно ста, ";
            else
                message += "меньше ста, ";
            if (i % 2 == 0)
                message += "четное, ";
            else
                message += "нечетное, ";
            if (i < 0)
                message += "отрицательное, ";
            else
                message += "положительное, ";
            console.log(message);
        }
    }
    else
    {
        for(let i=num1; i>=num2; i--)
        {
            let message = i + ": ";
            if (i > 100)
                message += "больше ста, ";
            else if (i == 100)
                message += "равно ста, ";
            else
                message += "меньше ста, ";
            if (i % 2 == 0)
                message += "четное, ";
            else
                message += "нечетное, ";
            if (i < 0)
                message += "отрицательное, ";
            else
                message += "положительное, ";
            console.log(message);
        }
    }
}
*/
/*
//Задание 4
const num1 = +prompt("input first number");
const num2 = +prompt("input second number");
let iterator = 0;
if(isNaN(num1) || isNaN(num2))
{
    alert("Input error");
}
else
{
    if(num1 < num2)
    {
        for(let i=num1; i <= num2; i++)
        {
            console.log(i);
            iterator++;
            if(iterator == 7)
                break;
        }
    }
    else
    {
        for(let i=num1; i>=num2; i--)
        {
            console.log(i);
            iterator++;
            if(iterator == 7)
                break;
        }
    }
}
*/
/*
//Задание 5
const a1 = prompt("Введите первое число");
const a2 = prompt("Введите второе число");
const a3 = prompt("Введите третье число");
function summa(a, b, c)
{
    if(!isNaN(a) && !isNaN(b) && !isNaN(c))
        return +a + +b + +c;
    else
        return a + b + c;
}
console.log(summa(a1, a2, a3));
*/
//Задание 6
function sortSumStr (str1, str2, str3)
{
    let strMass = [str1, str2, str3];
    let string;
    for(let i=0; i < 2; i++)
    {
        for(let j=i+1; j < 3; j++)
        {
            if(strMass[i] > strMass[j])
            {
                string = strMass[i];
                strMass[i] = strMass[j];
                strMass[j] = string;
            }
        }
    }
    string = strMass[0] + " " + strMass[1] + " " + strMass[2];
    return string;
}
console.log(sortSumStr('qwerty','asdf','asa'));