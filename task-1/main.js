let str = '31,15,40';

let strarr = str.split(',');
let min = strarr[0];
for(let i = 0;i<strarr.length;i++){
    if(strarr[i]<min){
        min = strarr[i];
    }
}
console.log(min);
