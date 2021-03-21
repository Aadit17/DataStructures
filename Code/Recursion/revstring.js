


const rev=(string)=>{
    // console.log(string.substr(2))
    if(string.length === 0){
        return "";
    }
    return rev(string.substr(1)) + string[0] 
}

console.log(rev("Aditya"))