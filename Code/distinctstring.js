const distinct=(string)=>{
    var object= {}
    for(let i=0;i<string.length;i++){
        object[string[i]] = 0
    }
    for(let i=0;i<string.length;i++){
        object[string[i]]  +=1
    }
    console.log(object[string[0]])
    return object;
}

console.log(distinct("Adityaa"))