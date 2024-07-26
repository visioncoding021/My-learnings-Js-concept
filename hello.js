// here closer saves time of excusionf
function find(){
	let arr = []
	for(let i =0; i < 1000000; i++){
         arr[i] = i*i;
	}
	return (index)=>{
        return arr[index]
	}
}

clouser = find();
console.time("6")
console.log(clouser(6))
console.timeEnd("6")

