function check(str) {
    if(str.toLowerCase() === "yes") {
        return "yes";
    }
    return "no";
}

const res = check("YES");
console.log(res);