var isValid = function(s) {
    var array=[]
    const openitem= new Map([["[","]"],["(",")"],["{","}"]])
    const closeditem= new Map([["]","["],[")","("],["}","{"]])

for(let i=0;i<s.length;i++){
    if(openitem.get(s[i])){
        array.push(s[i]);
    }
        else if(closeditem.get(s[i])==array[array.length-1]){
             array.pop();
        }else{
            return false;
        }
    
}
         return array.length==0;
};

