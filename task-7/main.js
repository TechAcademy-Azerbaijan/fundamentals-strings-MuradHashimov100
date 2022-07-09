const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
  
      let cars = 'kpkkkpzkk';
    let count = 0;
    let arr = cars.split('')
    console.log(arr);
    for(let i = 0;i<arr.length;i++){
        // console.log(arr[i]); 
        // debugger
        if(cars[i] == ['k'] && cars[i+1] == ['k']){
            count++;
        }
    }
    console.log(count);
  
});
