const arr = [1, 2, [3, 4, [5]]];

const flatten = function(arr, res = []) {
    for(let i=0; i<arr.length; i++) {
        const val = arr[i];
        if(Array.isArray(val)) {
            flatten(val, res);  
        }
        else {
            res.push(arr[i]);
        }
    }
    return res;
}

const ans = flatten(arr);
console.log(ans);