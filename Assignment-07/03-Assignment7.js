function rpWords(str) {
    const strArr = str.split(" ");
    let ans = strArr[1]+strArr[0];
    return ans;
}

const ans = rpWords("Hii Boy");
console.log(ans);