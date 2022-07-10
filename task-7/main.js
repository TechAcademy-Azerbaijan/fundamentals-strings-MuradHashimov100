   let str = 'kpkkpkkpkkkk';
    let arr = str.split('p');
    console.log(arr);
    let max = 0;
    for(let i = 0;i<arr.length;i++){
        // debugger;
        console.log(arr[i]);
        if(arr[i].length>max){
            max = arr[i].length;
        }
    }
    console.log(max);
