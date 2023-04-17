function computeDash(num) {
    let size = num.toString().length;
    let str = '';
    let dash = '-';
    while(size > 0) {
        let n = Math.floor(num % 10);
        let num2 = num/10;
        let n1 = Math.floor(num2 % 10);
        if(n%2 == 0 && n1%2 == 0 && size != 1) {
                str = str + n + dash;
                
        }
        else{
            str = str + n;
        }
        num = num / 10;
        size--;
    }
    str = str.split("").reverse().join("");
    console.log(str);
}

computeDash(25468);