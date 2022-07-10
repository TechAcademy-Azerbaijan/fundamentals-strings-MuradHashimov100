const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let str = 'introduction to algorithms';
    let arr = str.split(' ')
     console.log(arr);
    let newArr = [];
    for(let i = 0;i<arr.length;i++){
       console.log(arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1))
    }
   console.log(arr);
   const str2 = arr.join(" ");
   console.log(str2);
  
});
