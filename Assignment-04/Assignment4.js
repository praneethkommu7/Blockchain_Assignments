function matchHouses(num) {
    if(num == 0) {
        return "0 matchticks";
    }
    else if (num < 0) {
        return "invalid entry";
    }
    else {
        return (5*num) + 1;
    }
}

let ans = matchHouses(87);
console.log(ans);