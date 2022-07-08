  let str =  'Hello world! I learn to code.';
    let count = 0;
    for(let i = 0;i<str.length;i++){
        // console.log(str[i])
        if(str[i] == '!' ||	 str[i] == '.'){
            count++
        }
    }
    console.log(count);
