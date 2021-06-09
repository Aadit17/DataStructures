
const permutation=(str,ans)=>{
    if(str.length==0){
        console.log(ans)
        return
    }
    for(let i=0;i<str.length;i++){
        var ch=str[i]
        var ros=str.substr(0,i)+str.substr(i+1)
        permutation(ros,ans+ch)
    }

}
permutation("abc","")