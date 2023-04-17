function largest(arr,nth) {
    let large;
    let count = 1;
    let ans;
    for(let i=0; i<nth; i++) {
        large = 0;
        let largeIndex;
        for(let j=0; j<arr.length; j++) {
            if(arr[j] > large) {
                large = arr[j];
                largeIndex = j;
            }
        }
        if(count === nth) {
            ans = large;
        }
        else{ 
            for(let k=0; k<arr.length; k++) {
                if(arr[k] == large) {
                    arr[k] = 0;
                }
            }
            count++;
        }
    }
    console.log(ans);
}

const arr = [3, 45, 6, 7, 23, 5, 7, 8];

const ans = largest(arr,3);