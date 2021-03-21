const sumupton=(n)=>{
    if(n>=1){
        return n + sumupton(n-1)
    }
    else{
        return 0
    }
}

console.log(sumupton(5));