'use strict'
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