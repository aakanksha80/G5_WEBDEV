// console.log("HELLO WORLD")
// var a=200;
// console.log(a);
// function abc(){
//     console.log("HELLO CLASS");
// }
// var b=3000;

// console.log(b);
// abc();
// // setTimeout(()=>{
// //     console.log("I am set time out")
// // },2000);
// console.log("End of program")

function grandParent(){
    var a=200;
    console.log(a);
    console.log(c);
    function parent(){
        var b=300;
        console.log(b);

        function child(){
            var c=400;
            var a=9000;
            console.log(c);
            console.log(a);
        }
        child();
    }
    parent();
}
grandParent();
