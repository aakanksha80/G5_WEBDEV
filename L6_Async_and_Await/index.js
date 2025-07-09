// console.log("start");
// async function fetchData(){
//     const data=await fetch('https://dummyjson.com/products')
//     const finalData=await data.json()
//     console.log(finalData);
    
// }
// fetchData();

// const promiseBySher=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("I will complete the assignment by 1:00 PM ")

//     },3000)
// })
// async function checkAssignment(){
//     const assignmentData=await promiseBySher;
//     console.log(assignmentData);
    
// }
// checkAssignment();


// const grandParent=document.getElementById('grandParent')
// const parent=document.getElementById('parent')
// const child=document.getElementById('child')

// grandParent.addEventListener('click',()=>{
//     console.log("this is grandparent div");
    
// },true)
// parent.addEventListener('click',()=>{
//     console.log("this is parent div");
    
// },true)
// child.addEventListener('click',()=>{
//     console.log("this is child div");
    
// },true)


/////////////////////////////////
// function admissionProcess(){
//     console.log(`Hi ${this.studentName}, from class: ${this.studentClass}`);
// }
// const student1={
//     studentName:"Piyush",
//     studentClass:"G4"
// }
// const student2={
//     studentName:"Ram",
//     studentClass:"G4"
// }
// admissionProcess("Rahul","G5");
//call()
// admissionProcess.call(student1);
// admissionProcess.call(student2);

function admissionProcess(studentZone,studentCampus){
    console.log(`Hi ${this.studentName}, from class:${this.studentClass}.Your Zone ${studentZone} and campus ${studentCampus}`);
}
const student1={
    studentName:"Piyush",
    studentClass:"G4"
}
const student2={
    studentName:"Ram",
    studentClass:"G4"
}
// admissionProcess.call(student1,"Zeta Cluster","Punjab Campus");
// admissionProcess.call(student2,"Alpha Cluster","Himachal Campus");

// admissionProcess.apply(student1,["Zeta Cluster","Punjab Campus"]);
// admissionProcess.apply(student2,["Alpha Cluster","Himachal Campus"]);


const b1=admissionProcess.bind(student1,"Zeta Cluster","Punjab Campus");
const b2=admissionProcess.bind(student2,"Alpha Cluster","Himachal Campus");
b1();
b2();