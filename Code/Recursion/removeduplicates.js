// var str="aabbbc"

const dupstr=(str)=>{
    if(str.length==0)
        return ""
    var s=str[0]
    var ans=dupstr(str.substr(1))

    if(s==ans[0]){
        return ans
    }
    
        return s+ans
}

console.log(dupstr("aabbcc"))