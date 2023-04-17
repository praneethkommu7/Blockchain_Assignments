const arr1 = [1,2,3,4,5];
const arr2 = [4,6,1,8,2];
let key = 4;

let ans = [false, false];

for(let i=0; i<arr1.length; i++) {
    if(arr1[i] == key) {
        ans[0] = true;
    }
}

for(let i=0; i<arr2.length; i++) {
    if(arr2[i] == key) {
        ans[1] = true;
    }
}

if(ans[0] && ans[1] == true) {
    console.log('4 in both arrays');
}
else if(ans[0] == true && ans[1] == false) {
    console.log('4 in array 1');
}
else if(ans[0] == false && ans[1] == true) {
    console.log('4 in array 2');
}