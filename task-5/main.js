    let str = '+5-2+4-m/n*2:4';
    let arr = ['+','-','*'];
    let count = 0;
    for(let i = 0;i<str.length;i++){
       if(str.includes(arr[i])){
        count++
       }
    }
    console.log(count);
    console.log(str);
