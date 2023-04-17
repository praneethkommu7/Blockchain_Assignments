var num = 145;
var temp = num;
var res = 0;
while(temp > 0) {
    var remain = temp % 10;
    res  += facto(remain);

    temp = parseInt(temp/10);
}

function facto(num) {
    var ans = 1;
    for(var i = 2; i<=num; i++) {
        ans*=i;
    }
    return ans;
}

if(res == num) {
    console.log(`${num} : special number`);
}
else {
    console.log(`${num} : not a special number`);
}