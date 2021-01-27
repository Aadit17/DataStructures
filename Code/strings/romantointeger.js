var romanToInt = function(s) {
    var map= new Map([['I',1],['V',5],['X',10],['L',50],['C',100],['D',500],['M',1000]])
      var  sum=0;
    

   for(let i=0; i<s.length;i++){
             var num1=map.get(s[i]);
             var num2=map.get(s[i+1])
       if(s.length>1){
           if(num1 < num2){
               const res=num2 - num1
               sum+=res;
               i++;
           }else{
               sum+=num1;
           }
        }
        else{
            sum=num1;
        }
   }
    

return sum;
}


console.log((romanToInt('VI')))
console.log((romanToInt('IV')))
console.log((romanToInt('LVIII')))
console.log((romanToInt('MCMXCIV')))
console.log((romanToInt('V')))
console.log((romanToInt("CMLII")))