const fibonacci=(num)=>{
    if(num>0){
      var result= fibonacci(num-2) + fibonacci(num-1)
      console.log(result);
    }
     return 1;
}

console.log(fibonacci(4))