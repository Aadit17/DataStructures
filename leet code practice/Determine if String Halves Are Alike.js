var halvesAreAlike = function(s) {
    var map={'a':1,'e':1,'i':1,'o':1,'u':1,'A':1,'E':1,'I':1,'O':1,'U':1}
    var i=0
    var j=s.length/2
    var count1=0
    var count2=0
    for(let i=0;i<s.length/2;i++){
        if(map[s[i]])
            count1+=1
        if(map[s[j]])
            count2+=1
        j++
    }
    console.log(count1,count2)
    return count1==count2?true:false
};