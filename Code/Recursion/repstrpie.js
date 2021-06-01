var str="pipppippi"

const repstrpie=(str)=>{
    if(str.length==0)
        return
    if(str[0]=="p" && str[1]=="i"){
        console.log("3.14")
        repstrpie(str.substr(2))
    }
    else{
        console.log(str[0])
        repstrpie(str.substr(1))
    }
}
repstrpie(str)