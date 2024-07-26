console.log("Start");

// here it run the loop after 1 second

setTimeout(()=>{
for(var i =0; i < 5; i++){
    console.log(i);
}

console.log("end")
},1000)

for(var i =0; i < 5; i++){

   function run(i){
    setTimeout(()=>{
        console.log(i);
    },1000)
   }

   run(i);
}

console.log("End");