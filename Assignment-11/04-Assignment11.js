const arr = [1, 2, 3, 2, 3, 4, 5];

const dup = arr.filter((num, index) => {
    if(arr.indexOf(num) != index) {
        return num;
    }
})

console.log(dup);

const uniq = [...new Set(arr)];

console.log(uniq);