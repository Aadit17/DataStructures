var string="abc"
var res=[]
const substr=(str,ans,i)=>{
    if(i==str.length){
        res.push(ans)
        return
    }
    var ch=str[i]
    substr(str,ans,i+1)   
    substr(str,ans+ch,i+1)
}

substr(string,"",0)
console.log(res)