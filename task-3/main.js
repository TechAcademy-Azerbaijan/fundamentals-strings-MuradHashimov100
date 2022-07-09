const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
      let str = '255222'; 
    let arr = str.split('');
    console.log(arr);
    let count1=0;
    let count2=0;
    for(let i = 0;i<str.length;i++){
        // console.log(arr[i]);
        if(str[i] == '5'){
            count1++;
        }
        else{
            count2++;
        }
    }
    console.log(count1,count2);
    if(count1>count2){
        console.log('5')
    }
    else{
        console.log('2')
    }
  
});
