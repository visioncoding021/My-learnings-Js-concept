// compose function

function add(a,b){
    return a+b;
}

function square(val){
    return val*val;
}

function composeFunction(fn1,fn2){
    return function(a,b){
        return fn2(fn1(a,b));
    }
}

const task = composeFunction(add,square);
console.log(task(4,5));

// Iterator Pattren , Generator , YIELD



// promifications

