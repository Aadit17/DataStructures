const powofn=(n,pow)=>{
    if(pow==0)
        return 1
    return n*powofn(n,pow-1)
}

console.log(powofn(2,0))