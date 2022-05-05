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