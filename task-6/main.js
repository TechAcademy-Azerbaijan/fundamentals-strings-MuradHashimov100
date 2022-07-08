let  str = 'Hello world! Hello,    country!';

let newarr = ['','!',',',', '];
let count = 0;
for(let i = 0;i<str.length;i++){
    if(str.includes(newarr[i])){
        count++
    }
}
console.log(count);
