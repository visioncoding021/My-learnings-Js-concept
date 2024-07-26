// objects in javaScript 

const fun = (function(a){
    delete a;
    return a;
})(5)

console.log(fun);

// use variable as key;

const property = "FirstName";
const name  = "Rahul";

const user = {
    [property] : name,
}
console.log(user.FirstName);


// create a function multiplyByTwo(obj) that 
// multiplies all numeric proper value  of nums by 2

let nums = {
    a : 100,
    b : 200,
    title : "My nums"
}

function multiplyByTwo(obj){
    for(key in obj){
        if(typeof obj[key] === "number"){
            obj[key]*=2;
        }
    }
}

multiplyByTwo(nums);
console.log(nums);

const a = {
};
const b = {key : "b"};
const c = {key : "b"};
a[b] = 300;
a[c] = 450;
console.log(a[b]);
console.log(a.toString())

// stringfy :
const userInfo = {
 username : "Rahul",
level : 19,
health : 90
}

const data = JSON.stringify(userInfo,["username"]);
console.log(data);

// this in object

const shape = {
    radius : 10,
    daimeter(){
        return this.radius*2;
    },
     fixArrow(){
        return (()=> 2*Math.PI*this.radius)()
    }
}

console.log(shape.daimeter());
console.log(shape.fixArrow());
// note we cant bind,call,apply any context with arrow function

const obj = {
    name : "Rahul",
    class : "MCA",

}

function getInfo(){
    console.log(this.name + " " + this.class + " " + arguments[0])
}

getInfo.call(obj,1,2);
getInfo.apply(obj,[1,2,3,4]);
getInfo.bind(obj,[1],2);
const byArrow = ()=>{
    console.log(this.name + " " + this.class + " ")

}

byArrow.call(obj)


// Destructuring in objects :
let info = {
    name : "Rahul",
    age : 24,
    fullName : {
        first : "Piyush",
        last : "Agarwal"
    }
};

const Name = "Kokkar";
const {name : UserName , fullName : {first}} = info;
console.log(UserName);

function getItems(fruitList,favoriteFruit,...args){
         return [...fruitList,...args,favoriteFruit];
}

console.log(getItems(["banana","apple"],"pear","orange"));

console.log([..."hello"]);

const value = {number : 10};

const multiply = (x = {...value})=>{
    console.log(x.number*=2);
}
multiply()
multiply()
multiply(value);
multiply(value);

function changeAgeAndReference(person){
    person.age = 25;
    person = {
        name : "john",
        age : 50
    }

    return person;
}

const person1 = {
    name : "Alex",
    age : 30
}

const person2 = changeAgeAndReference(person1);
console.log(person1)
console.log(person2)

// how to deepcopy and clone an object

const obj2 = {
    name : "Rahul",
    age : 22,
    other:{
        leetcode : 393,
        other: {
            codinfNinja : 93
        }
    }
}
const cloneObj = Object.assign({},obj2);
cloneObj.other.leetcode = 20
console.log(obj2.other.other);
console.log(cloneObj.other.other);


this.a =5
console.log(this);

const thisUser = {
    name : "Rahul",
    age : 24,
    childObj : {
        newName : "Chikku",
        getDetails(){
            console.log(this.newName + " and " + this.name);
        }
    }
}

thisUser.childObj.getDetails();

const newuser = {
    firstName : "Rahul",
    getName(){
        const firstName = "Chikku";
        return this.firstName;
    }
}

console.log(newuser.getName());

// refernce core

function makeUSer(){
    return {
        name : "John doe",
        ref  : this
    }
}

let obj3 = makeUSer();
console.log(obj3.ref)

// correct version of it 

function correctedMakeUser(){
    return {
        name : "John",
        ref(){
            return this;
        }
    }
}

let userByCorrectedMakeUser = correctedMakeUser();
console.log(userByCorrectedMakeUser.ref().name);


const user3 = {
    name : "RAhul Giri",
    localMessage(){
        console.log(this.name);
    }
}

setTimeout(user3.localMessage,1000);
setTimeout(()=>{
    user3.localMessage();
},2000);

setTimeout(function (){
    user3.localMessage();
},3000)


// create an object calculator

let calculator = {
    read(){
        this.a = prompt("a = ",0);
        this.b = prompt("b = ", 0);
    },
    sum(){
        return Number(this.a) + Number(this.b)
    }
}

// calculator.read();
// console.log(calculator.sum());10

// this concept that make you feel good
// debugger
var len = 4;
console.log("len " ,this.len);
function callback(){
    console.log("length : " + this.len);
}
const object = {
  len : 5,
  method(fn){
    fn()
  }
}

object.method(callback);


// let and cost not attached with global variable;
 const aa = ()=>{
    console.log("a");
 }

 console.log("aa " + this.aa);

const object2 = {
    len : 5,
    method(){
        console.log(this.len)
        console.log(arguments[0]())
        arguments[0].call(object2);
    }
}

console.log(object2.method(callback))

// append an array to another array :

const array = ["a","b"];
const ele = [1,2,3];
array.push(ele);
console.log(array);
array.push.apply(array,ele);
console.log(array);

// using apply to enhance buil-in functons

const numbers = [5,6,2,3,7];
console.log(Math.max.apply(null,numbers));


// bound functions

function f(){
    console.log(this);
}


let u = {
    g : f.bind(user)
}

u.g();


// binding chaning is not possible is only bound with first one

function fff(){
    console.log(this)
}

ff = fff.bind({name : "Rahul"}).bind({name : "Isha"})
ff()



//// polyfills for call bind and apply ....

// call 

Function.prototype.myCall = function(context = {},...args){
    if(typeof this !== "function"){
        throw new Error("Not callable");
    }
    context.fn = this;
    context.fn(...args);
}

Function.prototype.myApply = function(context = {},arr){
    if(typeof this !== "function"){
        throw new Error("not callable");

    }

    context.fn = this;
    context.fn(arr);

}

Function.property.myBind = function(context = {}, ...args){
    if(typeof this !="function"){
        throw new Error("Not callable");
    }
    context.fn = this;
    return function(){
       return context.fn(...args);
    }
}