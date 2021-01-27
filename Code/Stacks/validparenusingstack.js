var minRemoveToMakeValid = function(s) {
    var stack=[];
    var newstr=[...s];
    

    for(let i=0;i<newstr.length;i++){
        if(newstr[i]==="("){
            stack.push(i);
        }
           
        else if(newstr[i]===")") {
            if(stack.length===0){
                stack.push(i)
            }
        
            else if(newstr[stack[stack.length-1]]==="("){
             stack.pop()
            }
             else
             stack.push(i)
        }
        }
        
    
    console.log(stack)
    while(stack.length!==0){
        delete newstr[stack.pop()]
    }
         if(newstr===[])
           return ""
        else
          return newstr.join("")
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)"))
console.log(minRemoveToMakeValid("a)b(c)d"))
console.log(minRemoveToMakeValid("))(("))