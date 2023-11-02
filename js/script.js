////------2----/////

let res1,res2,res3;
function callback(num1,num2,callback){
	let c=num1*num2;
	callback(c);
}
callback(10,3,divide=>{
	res1=divide;
	console.log("Result of the first callback:"+res1);
})
callback(res1,4,divide=>{
	res2=divide;
	console.log("Result of the second callback:"+res2);
})
callback(res2,6,divide=>{
	res3=divide;
	console.log("Result of the thrid callback:"+res3);
})

////--------------////

////--------3--------///////

let num1,num2,num3;
function operation(red1,red2,callback){
	let c=red1+red2;
	callback(c);
	}
	operation(20,5,sum=>{
		num1=sum;
		console.log("Result of the first callback:"+num1);
	})
	operation(num1,20,sum=>{
		num2=sum;
		console.log("Result of the second callback:"+num2);
	})
	operation(num2,10,sum=>{
		num3=sum;
		console.log("Result of the third callback:"+num3);
	})
	
	
/////---------/////

////------promise------////


/////------2----////


let coin=prompt("Enter Your Choice");
	let coins=new Promise((resolve,reject)=>{
		if(coin=="head"){
			resolve("Success");
		}
		else{
			reject("Fail");		
		}
	})
		coins.then((msg)=>{
			console.log(msg);
		}).catch((err)=>{
			console.log(err);
		})
