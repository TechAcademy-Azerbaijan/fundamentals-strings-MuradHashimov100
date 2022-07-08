const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
       let num = '328';
    let arr = num.split('');
    // console.log(arr);

    let max =arr[0];
    for(let i = 0;i<arr.length;i++){
        // console.log(arr[i]);
        if(arr[i]>max){
            max = arr[i];
        }

    }
    console.log(max);
  
});
