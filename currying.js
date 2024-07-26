// strat curring

function a(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}

let multiplyWith5 = a(5);
console.log(multiplyWith5(5)(3));
let multupyWith5and3 =multiplyWith5(3);
console.log(multupyWith5and3(10));

// curring with awesom way

function evaluate(operation){
    return function (a){
        return function(b){
            if(operation=='Addtion'){
            console.log(a+b)
            }else if(operation == "Subtrsction"){
                console.log(a -b);
            }else if(operation == "Multiply"){
                console.log(a*b);
            }else if(operation == "Devide"){
                console.log(a/b);
            }
        }
    }
}

let mul = evaluate("Multiply");
let add = evaluate("Addtion");
let sub = evaluate("Subtrsction");
let div = evaluate("Devide");
mul(4)(5);
add(4)(5);
sub(4)(5);
div(4)(5);


// infinity currying fun(3)(4)();

function ad(a) {
    return function(b) {
        if (b) {
            return ad(a + b);
        }
        return a;
    }
}

console.log(ad(10)(10)()); 


// currying vs partial Application


function sum(a){
    return function(b,c){
        return a+b+c;
    }
}

const x = sum(10);
// console.log(x(5,6));
// console.log(x(3,4));


function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

// real life example of currying is DOM manipulation
function updateElementText(id){
    return function(content){
        document.querySelector("#"+id).textContent = content;
    }
}


// curring implementation in js 
// converts f(a,b,c) into f(a)(b)(c)
// debugger
function curry(func) {
    // Return a curried function
    // console.log(func)
    return function curriedFunc(...args) {
        // console.log(args)
        if (args.length >= func.length) {
            console.log(func.length);
            console.log(args.length);
            // console.log(args)
            return func(...args);
        } else {
            return function(...next) {
                console.log("next -> ",next);
                return curriedFunc(...args, ...next);
            };
        }
    };
}

function addd(a, b, c,d) {
    return a + b + c;
}


const curriedAdd = curry(addd);
console.log(curriedAdd);

console.log(curriedAdd(1)(2)(3)(6)); // Outputs: 6
// console.log(curriedAdd(1, 2)(3)); // Outputs: 6
// console.log(curriedAdd(1)(2, 3)); // Outputs: 6
// console.log(curriedAdd(1, 2, 3)); // Outputs: 6

// console.log(addd.length)

