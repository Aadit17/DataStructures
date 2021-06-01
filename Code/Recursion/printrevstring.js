var string="Aditya"
var newstr=""

const revString=(str,i)=>{
    if(str.length==0)
        return
    revString(str.substr(1),i+1)
    newstr+=str[0]
    // console.log(str[0])
}

revString(string,0)
console.log(newstr)