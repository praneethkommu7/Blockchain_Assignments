// Given a String S, achieve following tasks
// a) Convert the String into upper case.

let str = "blockchain";
console.log(str.toUpperCase());

// b) Convert only the first character to uppercase.

let str1 = "bitcoin";
console.log(str1.charAt(0).toUpperCase() + str1.substring(1,str.length));

// c) Convert the String into lower case.

let str2 = "ETHEREUM";
console.log(str2.toLowerCase());

// d) Break the string into two halves and swap them.

let str3 = "blockchain";
let n = str3.length;
console.log(str3.substring(n/2,n)+str3.substring(0, n/2));

// e) Count the repeating characters.

let str4 = "blockchain"; 
for(let i=0; i<str4.length; i++) {
    let count = 1;
    for(let j=i+1; j<str4.length; j++) {
        if(str4.charAt(i) === str4.charAt(j)) {
            count++;
        }
    }
    if(count>1) {
        console.log(str4.charAt(i) + " " + count);
    }
}


// f) Reverse the string

let str5 = "blockchain";
let ans = "";
for(let i=str5.length; i>=0; i--) {
    ans+=str5.charAt(i);
}

console.log(ans);