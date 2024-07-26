console.log("Start")
const promise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve('Operation succeeded!');
    }else{
        reject("Operation failed");
    }
});
// const promise2  = new Promise((resolve,reject)=>{
//     reject("rejected!!!");
// }) 



promise.then((data)=>{
    console.log(data ,"this")
    //  throw new Error("this is error");
    const promise2  = new Promise((resolve,reject)=>{
        reject("rejected!!!");
    }).catch((err)=>{
        console.warn(err);
    })
})
.then((data)=>{
    console.log("Data")

})
.catch((err)=>{
    console.log(err + " Error");
})
.finally(()=>{
    console.log("Call child calls are closed!");
})

console.log("end");


function errorthrow(){
    throw new Error("this error");
}
function api(){
    setTimeout(()=>{
        console.log("Hello")
    },1000);
}
const asyncFunction = async function(){
    try {
        const num = await api()
        console.log("1" + num);
        const num2 = await api()
        console.log("1" + num2);
        // const nume = await errorthrow();
        console.log(1);
        const num3 = await api()
        console.log("1" + num3);
    } catch (error) {
        console.log(error);
    }
 
}

asyncFunction();


const promise3 = new Promise((resolve,reject)=>{
    console.log(1);
    resolve(2);
})
promise3.then((data)=>{
    console.log(data);
});


const promise4 = new Promise((resolve,reject)=>{
    console.log(1);
    console.log(2);
    // reject()
    // resolve()
})

promise4.then((res)=>{
    // never come in this 
    console.log(res);
}).catch((err)=>{
    // never come in this
    console.log(err);
}).finally(()=>{
    console.log(" not come here");
})


const fn = ()=>{
  return   new Promise((resolve,reject)=>{
        console.log(1);
        resolve("resolved");
    })
}

console.log("middle");
fn().then((res)=>{
    console.log(res);
})

function job(){
    return new Promise((resolve,reject)=>{
        reject();
    })
}

let newPromise = job();
newPromise.then(function(){
    console.log(1 + "dddddddddddddddddddd")
})
.then(function(){
    console.log("2")
}).catch((err)=>{
    console.log(err + " errrrrrrrrrrrrrr");
})