// creating private varible using clouser

var module = (function(){
      let count =0;
      return {
        add : function(value){
           count = count + value;
           return count;
        }
      }
})();

console.log(module.add(5))
console.log(module.add(5))
console.log(module.add(5))
console.log(module.add(5))

// Module Pattern 

let modulePattern = (function (){
    function privateMethod(){
        // do something
    }
    return {
        publicmethod : function(){
            // can call privateMenod(0)
        }
    }
})()

// function that run only once

function onlyOnce(){
    let  called=0;
    return function(){
        if(called > 0){
            console.log("Already called");
        }else{
            console.log("called function ")
            called++;
        }
    }
}

let oneTimeFunction = onlyOnce();
oneTimeFunction()
oneTimeFunction()

// actual once function

function once (func,context){
    let run;
    return function (){
        if(func){
            run = func.apply(context || this , arguments);
            func = null;
        }
        return run
    }
}

function hello(){
    console.log("One type!");
}

let one = once(hello)
// console.log(one);
one()
one()

// myMemo

function myMemo(func,context){
    res = {};
    return function(...args){
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]){
           return res[argsCache] = func.call(context || this, ...args);
        }else{
            return res[argsCache];
        }
    }
}

const square = (num1,num2)=>{
    for(let i =0; i < 10000000; i++){
        return num1*num2;
    }
}

const memoSquare = myMemo(square);
console.log(memoSquare(234,456));
console.log(memoSquare(234,456));
