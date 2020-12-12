const firstRecurringCharacter = (string)=>{
    const map = new Map()
    for(let i=0;i<string.length;i++){
        map[string[i]]=0
    }

    for(let i=0;i<string.length;i++){
        map[string[i]]+=1

        if(map[string[i]]>1){
        console.log(map)

          return Object.keys(map).find(ele=>ele==string[i])
    }
    
    

}
return map
}

console.log(firstRecurringCharacter("badityyya"))