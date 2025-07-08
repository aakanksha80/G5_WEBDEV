Promise.all([myPromise1,myPromise2,myPromise3,myPromise4])
.then((res)=>console.log(res))
.catch((rej)=>console.log(rej));