const subStrings=(str,i,ans)=>{
    if(i==str.length){
        console.log(ans)
        return
    }
    subStrings(str,i+1,ans)
    subStrings(str,i+1,ans+str[i])
    subStrings(str,i+1,ans+str.charCodeAt(i))
}
console.log(subStrings("AB",0,""))