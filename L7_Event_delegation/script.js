// const listOfProducts=document.getElementById("listOfProducts")
// listOfProducts.addEventListener("click",(event)=>{
//     if(event.target.tagName==="LI"){
//         console.log("CLicked on:",event.target.textContent);
//     }
// })
// const newProduct=document.createElement("li")
// newProduct.textContent="Mobile Phone"
// listOfProducts.appendChild(newProduct);

// const searchBox=document.getElementById("searchHandle");
// searchBox.addEventListener("input",(event)=>{
//     console.log(event.target.value);
    
// })

//no data hiding and encapsulation
const searchBox=document.getElementById("searchHandle");
let timeOutID;
function closure(){
    
}
searchBox.addEventListener("input",(event)=>{
    clearTimeout(timeOutID);
    timeOutID=setTimeout(()=>{
        console.log(event.target.value);
    },2000)
})

// function closure(){
//     var abc=10;
//     function closure2(){
//         var def=20;
//         console.log(abc);
//         console.log(def);
        
        
//     }
//     closure2()
// }
// closure()


// for(var i=0;i<=5;i++){
//     setTimeout(()=>{
//         console.log(i);
        
//     },3000)
// }