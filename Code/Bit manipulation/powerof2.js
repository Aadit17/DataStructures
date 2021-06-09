const checkpow2=(n)=>{
 return (n&& !(n & n-1))
}

console.log(checkpow2(16))