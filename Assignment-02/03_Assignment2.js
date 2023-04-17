"use strict";
function sumofmulti() {
    var ans = 0;
    for(var i = 0; i<1000; i++) {
        if((i % 3 === 0) || (i % 5 === 0)) {
            ans+=i;
        }
    }
    console.log(`Sum of the multiples of 3 and 5 under 1000 : ${ans}`);
}
sumofmulti();