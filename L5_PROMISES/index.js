// //console.log("start script");
// const myPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Got Placement");
//     },2000);
// });
// myPromise.then((res)=>console.log(res))
// // .then(()=>setTimeout(()=>{
//     console.log("Pransh Party");
    
// },2000))
// .then(()=>setTimeout(()=>{
//     console.log("Joining");
    
// },4000))
// .then(()=>setTimeout(()=>{
//     console.log("Layoff");
    
// },1000))

// myPromise.then((res)=>console.log(res))

// .catch((err)=>console.log(err));



// function placement(placementStep,delay){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Got Placement"+placementStep);
//         console.log("Got Placement "+placementStep);
        
//     },delay);
// });
// }
// placement("Placement done",5000)
// .then(()=>placement("Party Time",3000))
// .then(()=>placement("Work Time",4000))
// .then(()=>placement("LayOff",1000))
// .catch((err)=>console.log(err));



// const myPromise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Got Placement");
//     },2000);
// });
// const myPromise2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Got Placement");
//     },2000);
// });
// const myPromise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Got Placement");
//     },2000);
// });
// myPromise1.then((res)=>console.log(res))
// .myPromise2.then((res)=>console.log(res))
// .myPromise3.then((res)=>console.log(res))

//---------------------------------------------------




const myPromise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("JetBlue Data")
    },1000)
})
const myPromise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("EasyJet Data")
    },2000)
})
const myPromise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(" Latam Data")
    },3000)
})
const myPromise4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Menzis Data")
    },5000)
})
Promise.all([myPromise1,myPromise2,myPromise3,myPromise4])
.then((res)=>console.log(res))
.catch((rej)=>console.log(rej));
// What it does: Waits for all promises to resolve. If even one fails (rejects), it immediately goes to .catch() with that error.

// Promise.allSettled([myPromise1,myPromise2,myPromise3,myPromise4])
// .then((res)=>console.log(res))
// .catch((rej)=>console.log(rej));
	//•	✅ What it does: Waits for all promises to finish (either resolve or reject).
	//•	Returns an array of objects with {status: "fulfilled" | "rejected", value | reason}.

// Promise.any([myPromise1,myPromise2,myPromise3,myPromise4])
// .then((res)=>console.log(res))
// .catch((rej)=>console.log(rej));
//	•	✅ What it does: Returns the first fulfilled promise.
	//•	Ignores rejections unless all promises reject.
	//•	myPromise1 is rejected at 1s
	//•	myPromise2 is resolved at 2s → first fulfilled

// Promise.race([myPromise1,myPromise2,myPromise3,myPromise4])
// .then((res)=>console.log(res))
// .catch((rej)=>console.log(rej));
// 	•	✅ What it does: Returns the first settled promise (resolved or rejected).
	//•	myPromise1 rejects at 1s — first to settle.