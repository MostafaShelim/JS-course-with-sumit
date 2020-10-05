// "use strict";
// var x = 10;
function myFunc()
{
    x = 10;
    console.log(`${x} from myFunc()`)
    x = 100;// also changed the parent x value
    console.log(`${x} from myFunc()`)
    // var x = 1000;// child er dunia
    // console.log(`${x} from myFunc()`)

}
myFunc()
console.log(x)