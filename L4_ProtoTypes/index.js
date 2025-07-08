// console.log("start script");
// // let arr=[2,4,5,6,7,8];
// // const newArr=arr.map((x)=>x*2);
// // console.log(newArr);

// //prototypes in js
// let arr=[2,4,5,6,7,8];
// let arr2=[5,5,5,6,7,8];
// function doubleData(x){
//     return x*x;
// }
// Array.prototype.mapReplica=function(logic){
//     let outputArr=[];
//     for(let i=0;i<this.length;i++){
//         outputArr.push(logic(this[i]));
//     }
//     return outputArr;
// }
// const myProtoData=arr2.mapReplica(doubleData);
// console.log(myProtoData);

//FILTER
// const words=["spray","elite","exuberant","destruction","present"];
// const result=words.filter((word)=>word.length>6);
// console.log(result);

// function lengthData(n){
//     return function(words){
//         if(words.length>n){
//             return true;
//         }
//     }   
// }
// Array.prototype.filterReplica=function(logic){
//     let outputArr=[];
//     for(let i=0;i<this.length;i++){
//         if(logic(this[i])){
//             outputArr.push(this[i])
//         }
//     }
//     return outputArr;
// }
// const myProtoData=words.filterReplica(lengthData(4));
// console.log(myProtoData);

//REDUCE
// function sumCalculation(a){
//     let sum=0;
//     for(let i=0;i<a.length;i++){
//         sum+=a[i];
//     }
//     return sum;
// }
// const a=[1,2,3,4]
// const initial=0;
// const sumWithInitial=a.reduce(
//     (accumulator,currentValue)=>accumulator
// +currentValue,initial,
// );
// console.log(sumWithInitial);

// Array.prototype.reduceReplica=function(logic){
//     return (logic(this));
// }
// const myProtoData=a.reduceReplica(sumCalculation);
// console.log(myProtoData);

const a=[1,2,3,4]
// function myLogic(acc,curr){
//     return acc+curr;
// }
Array.prototype.reduceReplica=function(logic,initialValue){
    let result=initialValue;
    for(let i=0;i<this.length;i++){
        result=logic(result,this[i]);
    }
    return result;
}
const final=a.reduceReplica((acc,curr)=>acc+curr,0)
console.log(final)