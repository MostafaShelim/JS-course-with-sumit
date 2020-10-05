// hoisting hocche ekhane var a = undefined;
// console.log(a);//undefined
// var a = "bangladesh";
//hoisting hocche but define hocche jekhane likha ache sekhane
// console.log(b);//reference error
// let b ="bangladesh";

// let c;//auto defined
// console.log(c);//undefined
// c ="bangladesh";

// var LANGUAGE = "Java";
// var language = "JavaScript";

// const myFucn = function(){
//     if(!language){
//         var language = LANGUAGE;
//     }
//     return language;//return Java
// }
// console.log(myFucn());
let LANGUAGE = "Java";
let language = "JavaScript";

const myFucn = function(){
    if(!language){
        let language = LANGUAGE;
    }
    return language;//return JavaScript
}
console.log(myFucn());

//Hoisting a function()
//Hoisting will be right here as myFunc() called
function myFunc(){//const myFunc = function() likle error khabo
    console.log(`I love JavaScipt`);
}
myFunc();