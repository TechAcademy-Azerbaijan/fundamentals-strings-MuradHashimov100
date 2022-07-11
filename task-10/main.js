const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
  let str = 'I am programming on Javascript.';
 let newArr = [];
let firstIndex,lastIndex;
 for(let i = 0;i<str.length;i++){
    if(str[i] == ' '){
        newArr.push(i);
    }
 }
 lastIndex = newArr[newArr.length-1];


 console.log(newArr,lastIndex);
 if(newArr.length>0){
    console.log(newArr[0]);
    console.log(lastIndex);
 }
 else{
    console.log('-1');
 }
  
});
