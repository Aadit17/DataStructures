var backspaceCompare = function(S,T) {
    var newS=[]
    var newT=[]
    for(let i=0;i<S.length;i++){
        if(S[i]==="#"&& newS.length !==0){
            newS.pop()
        }
        else{
        newS.push(S[i])
        }
    }
    for(let i=0;i<T.length;i++){
        if(T[i]==="#"&& newT.length !==0){
            newT.pop()
        }
        else{
        newT.push(T[i])
        }
    }
      return newT.join("")===newS.join("");
};

console.log(backspaceCompare("ab#c","ad#c"));