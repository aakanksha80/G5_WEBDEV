// console.log("START SCRIPT")
// function walkInRes(cb){
//     setTimeout(()=>{
//         console.log("I am going in the restro");
//     },5000)
//     // console.log("I am walking inside the restro");
//     setTimeout(cb,3000)
    
// }
// function checkMenu(cb){
//     console.log("I am checking the menu");
//     setTimeout(cb,2000);
// }
// function orderFood(cb){
//     console.log("I am ordering the food");
//     setTimeout(cb,5000);
    
// }
// function havingLunch(cb){
//     console.log("I am having the lunch");
//     setTimeout(cb,6000);
    
// }
// function payBill(cb){
//     console.log("I am paying the bill");
//     setTimeout(cb,2000);
// }
// function walkOut(){
//     console.log("I am walking out of  the restro");
    
// }
// walkInRes(()=>{
//     checkMenu(()=>{
//         orderFood(()=>{
//             havingLunch(()=>{
//                 payBill(()=>{
//                     walkOut();
//                 });
//             });
//         });
//     });
// });
// // console.log("Something")
// // console.log("Something")
// // console.log("end script")

var cart=["Shoes","Watches","Shirts","Tshirts","Perfumes"];
function createOrder(cart){
    // take the price and total no of order
    let cost=cart.length*100;
    let id=Math.random()*10000;
    setTimeout(cb,)
    return {id,cost};

}
function placeOrder(price,id){
    //generate order id and go to the payment gateway
    console.log(`Ordering is being Placed with order id ${id} and total price is ${price} `);
    return id;
}
function orderPayment(id,price){
    //place order
    console.log(`Payment of order with orderId ${id} and price ${price} is SuccessFull`)
}
function orderStatus(){
    //all details
    console.log(`Order Id: ${id} `)
}
createOrder(()=>{
    placeOrder(()=>{
        orderPayment(()=>{
            orderStatus();
        })
    })
})