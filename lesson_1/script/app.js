'use strict'
for (;;) {
    let taskNumber = prompt("Введите номер задания (от 1 до 5):")
    if (taskNumber == 1) {
        //Задание 1
        alert(prompt("Введите сюда текст"));
    }
    else if (taskNumber == 2) {
        //Задание 2
        let num1 = +prompt("Введите первое число:");
        let num2 = +prompt("Введите второе число:");
        let num3 = +prompt("Введите третье число:");
        let sum = num1 + num2 + num3;
        alert(sum);
    }
    else if (taskNumber == 3) {
        //Задание 3
        let yourname = prompt("Введите ваше имя");
        let age = prompt("Введите свой возраст");
        if (age >= 18) {
            alert("Добро пожаловать " + yourname + "!");
        } else {
            alert("Уважаемый " + yourname + "! Доступ закрыт.");
        }
    }
    else if (taskNumber == 4) {
        //Задание 4
        let className;
        if (confirm("Хотите ввести имя блока?")) {
            className = prompt("Введите имя блока:");
            if (confirm("Хотите ввести имя элемента?")) {
                className = className + prompt("Введите имя элемента:", "__");
                if (confirm("Хотите ввести имя модификатора?")) {
                    className = className + prompt("Введите имя модификатора:", "_");
                }
            }
        }
        if (className) {
            alert(className);
        } else {
            alert("Элементу не присвоен класс")
        }
    }
    else if (taskNumber == 5) {
        //Задание 5
        let num1 = +prompt("Введите первое число:");
        let num2 = +prompt("Введите второе число:");
        let operation = prompt("Введите операцию (div, plus, mult, minus):");
        if (num1 && num2 && operation) {
            if (operation == "div") {
                alert(num1 / num2);
            } else if (operation == "plus") {
                alert(num1 + num2);
            } else if (operation == "mult") {
                alert(num1 * num2);
            } else if (operation == "minus") {
                alert(num1 - num2);
            } else {
                alert("Нет такой операции");
            }
        } else {
            alert("Допущена ошибка при вводе данных");
        }
    } else {
        alert("Нет такого задания");
    }
} 