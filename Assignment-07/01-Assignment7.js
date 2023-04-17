function trunc(str) {
    if(str.length > 4) {
        return str.substring(0,4)+"...";
    }
    return str;
}

const ans = trunc("Icecream");
console.log(ans);