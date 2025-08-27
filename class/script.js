let fn = "elrohi", ln = "filmon";

// arrow functions 
let evenodd = (num)=>{
    return num%2==0? "even ":"Odd"
}
// console.log(evenodd(2))

let fullname = (FirstName,LastName)=>{
    return FirstName + " "+LastName;
}
// function expression or anonomous functions 
let full = function(fn,ln,fullname){
    return "Here is the full information " + fullname(fn,ln);
}

console.log(fullname(fn,ln))
// console.log(full(fn,ln,fullname))

function add(a=30,b){
    return a - b;
}

function addmax(a=30,b){
return a - b;
}

let addall = (...param)=>{
    let sum = 0;
    param.forEach(element => {
        sum+=element;
    });
    return sum
}
// console.log(addall([2,3,4,5,6,7,2,4,5,2,]))

function add(a,b){
    return a + b;
}
function sub(a,b){
    return a - b;
}
function mul(a,b){
    return a * b;
}
function div(a,b){
    return a/b;
}
``
function calculator(callback,a,b){ 
    return callback(a,b)
    // if(oper="add"){
    //     return add(a,b)
    // }else if(oper="sub"){
    //     return sub(a,b)
    // }else
    // if(oper="add"){
    //     return multi(a,b)
    // }else
    // if(oper="add"){
    //     return div(a,b)
    // }else{
    //     return "invalid"
    // }
}

console.log(calculator(sub,1,2))
// difference between fn declaration and fn definition is the first is hoisted


// Creation of objects
// obj initiation

let obj = {
    firstName:"abebe",
    lastName:"kebede",
    fullname:function(){return this.firstName + " " + this.lastName}
}

// console.log(obj.fullname());

let Person = new Object();
Person.fname="abebe";
Person.lname="kebede";
Person.fullName = ()=>{return this.fname + this.lastName}
// console.log(Person.fullName());

// function Animal(name,sound,height,weight){
//     this.name = name;
//     this.sound = sound;
//     this.height = height;
//     this.weight = weight;
// }

// var bobby = new Animal("bobby","woof",'165','45');
// var wero = new Animal("wero","mewo",'125','20');

function Car(model,color="black",year="1980",distance,time){
    this.model = model;
    this.color = color;
    this.year = year;
    this.distance = distance;
    this.time = time;
    this.speed = ()=>{return this.distance/this.time}
}

var bmw = Car("bmw",undefined,undefined,20,5)
var Merceds = Car("Merceds",undefined,undefined,5220020,120000)
var Toyota = Car("toyota",undefined,undefined,20,5)
var Kia = Car("Kia",undefined,undefined,20,5)
var Aston = Car("Aston Martin",undefined,undefined,20,5)
var lambo = Car("Lamborghini",undefined,undefined,20,5)

console.log(Merceds.speed())
