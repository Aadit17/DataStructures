const movextoend=(str)=>{
    if(str.length==0)
        return ""
    var s=str[0]
    var ans=movextoend(str.substr(1))

    if(s=="x"){
        return ans+s
    }
        return s+ans
}

console.log(movextoend("absxxdex"))