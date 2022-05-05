//Задание 1
const obj1 = {
    prop1: 123,
    prop2: '123',
    prop3: true,
};
//Задание 2
obj1.prop4 = 'hello world';
obj1.prop5 = false;
//Задание 3
let myname = 'Artyr';
let age = 27;
obj1['who are you'] = function() {return `My name ${myname}, ${age} age`};
obj1.fun1 = function() {return `property 1: ${this.prop1}`};
//Задание 4
function objectProperties()
{
    for(let prop in obj1)
    {
        console.log(`${prop} : ${obj1[prop]}`);
    }
}
objectProperties();
//Задание 5
function multiLevelObject(obj)
{
    let multilevel = false;
    for(let prop in obj)
    {
        if(typeof(obj[prop]) == 'object')
        {
            multilevel = true;
        }
    }
    return multilevel;
}

console.log(multiLevelObject(obj2));

