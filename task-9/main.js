// Use these variables in your code

let s = "This is a cat sitting on a table"
let c = "t"

// Write code here. 
let str = "This is a cat sitting on a table";
    let count = 0;
    for(let i = 0;i<str.length;i++){
        if(str[i] =='T' || str[i] == 't'){
            count++;
        }
    }
    console.log(count);
