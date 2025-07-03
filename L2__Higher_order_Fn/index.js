// function calculate(param1){
//     console.log("Calculate the BL");
//         param1();

// }
// var sumOfTwo=()=>{
//     console.log("Sum of Two Working");
// }
// calculate(sumOfTwo);

//Main higher order function 
// function calculate(logicFunction,a,b){
//     return logicFunction(a,b);
// }
// //these are my logical functions
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// console.log(calculate(add,3,5));
// console.log(calculate(sub,8,5));

//Print student name and fees->30k
//Fees=fees/10;
//PRint welcone message with the name and fees and emi returned

// function studentMainDetails(logicFunction,name,fees){
//     return logicFunction(name,fees);
// }
// function StudentDetails(name,fees){
//     return{name,fees};
// }
// var fee=0;
// function emi(fees){
//      fee= fees/10;
//      return fee
// }
// function printWelcome(name,fees,emi){
//     return `Student name is ${name} and the fees is ${fees} with emi ${emi}` 

// }
// console.log(StudentDetails("aakanksha",30000));
// console.log(emi(30000));
// console.log(printWelcome("aakanksha",30000,fee));

setTimeout(()=>{
    console.log("Hello")
},3000)
setInterval(()=>{
    console.log("Set Interval")
},2000)