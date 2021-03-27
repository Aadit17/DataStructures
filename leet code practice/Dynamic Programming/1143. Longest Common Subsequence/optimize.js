/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
    var n=text1.length
     var m=text2.length
     var dparr=[]
     
     for(let i=0;i<n;i++){
         dparr[i]=[]
         for(let j=0;j<m;j++){
             dparr[i][j]=-1
         }
     }
     //console.log(dparr)
     const longseq=(i,j,text1,text2,dparr)=>{
         
         
         if(i>=text1.length || j>=text2.length)
             return 0;
         if(dparr[i][j]!=-1)
             return dparr[i][j]
         
         if(text1[i]===text2[j]){
             return 1 + longseq(i+1,j+1,text1,text2,dparr)
         }
         var left=longseq(i+1,j,text1,text2,dparr)
         var right=longseq(i,j+1,text1,text2,dparr)
         return dparr[i][j]=Math.max(left,right)
         //console.log(dparr)
     }
     return longseq(0,0,text1,text2,dparr)
 };