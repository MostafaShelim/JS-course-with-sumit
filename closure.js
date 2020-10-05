// SIMPLIST CLOSURE EXAMPLE
// var num1 = 5;
// var num2 = 6;
// var sum = function(){
//     return num1 + num2;//globar reference;
// }
// console.dir(sum);

// var num1 = 3;
// var sum = function(){
//     var num2 = 4;//closure reference
//     return function(){//closure
//         return num1 + num2;
//     }
// }
// console.dir(sum);
// var myFunc = sum();
// console.dir(myFunc);

//ANOTHER WAY TO USING CLOSURE CAN ACCESS CLOSURE WITH SECURE WAY
// var myAccount = function(account){
//     var balance = account;
//     return function(){//closure 
//         return balance;
//     }
// }
// var myFunc = myAccount(100000);
// console.dir(myFunc);//return function()
// console.dir(myFunc())//calling function() return it's value

// GLOBAL IT'S ALL IN PARENT BUT CLOSURE IS ALL IN IT'S IF IT HAS
// var num1 = 3;//global
// var num3 = 5;//global
// var sum = function(){//global
//     var num2 = 2;
//     return function(){
//         return num1 + num2;//num2 is closure num1 is global
//     }
// }
// console.dir(sum());//global

// (
//     function(){
//         var num1 = 3;//closure
//         var num3 = 5;
//         var sum = function(){
//             var num2 = 2;//closure
//             return function(){
//                 return num1 + num2;//num2 and num1 both closure
//             }
//         }
//         console.dir(sum());
//     }
// )();

//CLOSURE KEEPS ONLY REFERENCE
// (function(){
//     var num1 = 5;
//     var num2 = 4;
//     var sum = function(){
//         return num1 + num2;
//     }
//     console.log(sum());
//     console.dir(sum);

//     num1 = 10;
//     num2 = 12;
    
//     console.log(sum());
//     console.dir(sum);
// })();

// function stopWatch(){
//     var thisTime = Date.now();
//     function getDelay(){
//         return (Date.now()- thisTime);
//     }
//     return getDelay;
// }
// var timer = stopWatch();
// timer();
// for(let i = 0; i < 1000000; i++){
//     var a = Math.random(i*10);
// }
// console.dir(timer);
// timer = null;
// timer();//time sesh
// var a;
// function async(){
//     a = 20;
//     var myFunc = () =>{
//         console.log(a);
//     }
//     setTimeout(myFunc, 3000);
// }
// async();
// console.log(a);
// a = 30;

for(var i = 0; i<3; i++){// here var changing and it change to i = 3 at last
    setTimeout(()=>{//async function
        console.log(i);
    },3000);//after three seconds it will give three 3s
}
console.log(i);//it will give i = 3

for(let i = 0; i<3; i++){// here i = 0, 1, 2 and all are in closure
    function myFunc(){
        console.log(i);
    }
    console.log("break");
    console.dir(myFunc);
    setTimeout(()=>myFunc, 3000);
}
console.log("after for loop");
for(var i = 0; i<3; i++){// here i = 0, 1, 2 and all are in closure
    function myFunc(){
        console.log(i);
    }
    console.log("break");
    console.dir(myFunc);
    setTimeout(()=>myFunc, 3000);
}
console.log("after for loop");