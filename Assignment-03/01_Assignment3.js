let b = "";
let count = 1;

for(var i = 0; i < 4; i++) {
    for(var j = 0; j <= i ; j++) {                    
        b+=count;
        count++;
    }
    b+="\n";
}
console.log(b)