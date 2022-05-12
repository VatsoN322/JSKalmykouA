'use strict'
//Задание 1

function fun1 (count, maxValue)
{
    if(count > 0 && maxValue > 0 && !isNaN(count) && !isNaN(maxValue))
    {
        count = Math.round(count);
        maxValue = Math.round(maxValue);
        const arr = [];
        let min = 0;
        for(let i = 0; i < count; i++)
        {
            arr.push(Math.floor(Math.random() * (maxValue - min)) + min);
        }
        return arr;
    }
    else
    {
        return undefined;
    }
}
console.log(fun1(5, 8));

//Задание 2
function fun2 (arr, str)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] == str)
        {
            arr.splice(i,1);
        }
    }
    return arr;
}
let firstArray = ['sex', 'drugs', 'rock and roll'];
console.log(fun2(firstArray, 'sex'));

//Задание 3

function translate (str)
{
    str = str.trim();
    if(str === 'null')
        return null;
    else if(str === 'undefined')
        return undefined;
    else if(str === 'true')
        return true;
    else if(str === 'false')
        return false;
    else if(!isNaN(str))
        return +str;
    else
        return str;
}
let arr3 = [];
do
{
    let s = prompt("введите значение");
    if(s)
        arr3.push(translate(s));
    else
        break;
}
while(true);
console.log(arr3);

//Задание 4
const arrayOfPersons = [
    {
        name: 'Ferdinant',
        surname: 'Foch',
        age: 54, 
        nationality: 'French', 
        skill: 'Military management', 
        zodiacSign: undefined, 
        height: 173, 
        isAlive: false
    },
    { 
        name: 'Jackson', 
        surname: 'Bricks', 
        age: 20, 
        nationality: 'USA', 
        skill: 'farmer', 
        height: 187, 
        specialTrait: 'mechanical arms', 
        isFictionalCharacter: true 
    },
    { 
        name: 'Hideo', 
        surname: 'Kozima', 
        age: 56, 
        nationality: 'USA', 
        skill: 'game developer', 
        height: 173, 
        specialTrait: 'genius', 
        actualGames: ['Death Stranding','Metal Gear'], 
        isAlive: true, 
    },
    { 
        name: 'Kim', 
        surname: 'Kardashian', 
        age: 39, 
        nationality: 'USA', 
        skill: 'model', 
        height: 159, 
        zodiacSign: 'scorpio' 
    },
    { 
        name: 'Mia', 
        surname: 'Khalifa', 
        age: 27, 
        nationality: 'Lebanon', 
        skill: 'actress', 
        height: 157, 
        zodiacSign: 'saggitarius', 
        specialTrait: 'very exspressionable', 
        isAlive: true, 
        isFictionalCharacter: false 
    },
    { 
        name: 'Herman', 
        surname: 'Hesse', 
        age: 85, 
        nationality: 'Germany', 
        skill: 'writer', 
        zodiacSign: undefined, 
        isAlive: false, 
        isFictionalCharacter: false, 
        bibliography: ['Der Steppen Wolf', 'Das Glasperlenspiel', ] 
    },
    { 
        name: 'Fedor', 
        surname: 'Dostoevsky', 
        age: 60, 
        nationality: 'Russia', 
        skill: 'writer', 
        isAlive: false, 
        isFictionalCharacter: false, 
        bibliography: ['The demons', 'The Crime and Punishment','The Idiot'] 
    },
    { 
        name: 'Doomguy', 
        surname: undefined, 
        age: undefined,
        nationality: undefined, 
        skill: 'demon slayer', 
        zodiacSign: undefined, 
        isFictionalCharacter: true, 
        specialTrait: 'Angry a bit',
    },
    { 
        name: 'Sonic', 
        surname: 'The Hedgehog', 
        age: 13, 
        nationality: undefined, 
        zodiacSign: undefined, 
        isFictionalCharacter: true, 
        specialTrait: 'Fast as f#@k', 
    },
    { 
        name: 'Bruce', 
        surname: 'Wayne', 
        age: 12, 
        isFictionalCharacter: true 
    },
    { 
        name: 'Ella', 
        surname: 'Fitzgerald', 
        age: 79, 
        isFrictionalCharacter: false, 
        isAlive: false, 
        specialTrait: 'Amazing voice', 
        signatureSongs: ['Cry Me a river', 'Hello Dolly', 'Summertime', 'In a sentimental mood'] 
    }
];

//4.1
let task1Array = [];
for (let i = 0; i < arrayOfPersons.length; i++)
{
    let a = {};
    a.name = null;
    a.surname = null;
    a.age = null;
    for (let key in arrayOfPersons[i])
    {
        if(key === 'name' || key === 'surname' || key === 'age')
        {
            if(arrayOfPersons[i][key] != undefined)
            {
                a[key] = arrayOfPersons[i][key];
            }
        }     
    }
    task1Array[i] = a;
}
task1Array.sort((a,b) => a.surname > b.surname ? 1: -1);
console.log(task1Array);

//4.2
let arr42 = arrayOfPersons
    .filter(i => {
        if(Object.keys(i).length >= 8)
        return i;
    })
    .sort((a,b) => Object.keys(a).length < Object.keys(b).length ? 1 : -1);
console.log(arr42);

//4.3
let arr43 = arrayOfPersons.sort((a,b) => {
    if(!a.age)
        return -1;
    else if(!b.age)
        return 1;
    else
    {
        if(a.age > b.age)
            return 1;
        else
            return -1;
    }
});
console.log(arr43);

//4.4
let arr44 = arrayOfPersons.filter(i => {
    if(i.hasOwnProperty('zodiacSign'))
        return i;
})
console.log(arr44);

//4.5
let arr45 = arrayOfPersons.sort((a,b) => {
    if(Object.keys(a).find(item => typeof(a[item]) == 'object'))
    {
        return -1;
    }
    if(Object.keys(b).find(item => typeof(b[item]) == 'object'))
    {
        return 1;
    }
    return -1;
        
})
console.log(arr45);

//4.6
let arr46 = arrayOfPersons;
arr46.forEach(item => item.id = Math.floor(Math.random() * 899) + 100)
console.log(arr46);

//4.7
let arr47 = arrayOfPersons.filter(i => i.isFictionalCharacter === true);
arr47.forEach(item => item.fictionalUniverse = null);
console.log(arr47);

