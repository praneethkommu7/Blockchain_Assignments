function isLower(str) {
    if(str[0].toLowerCase() === str[0]){
        return true;
    }
    return false;
}

let ans =  isLower("blockchain");
console.log(ans);