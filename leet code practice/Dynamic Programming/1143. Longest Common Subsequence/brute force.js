/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
    const longseq=(i,j,text1,text2)=>{
        if(i>=text1.length || j>=text2.length)
            return 0;
        if(text1[i]===text2[j]){
            return 1 + longseq(i+1,j+1,text1,text2)
        }
        var left=longseq(i+1,j,text1,text2)
        var right=longseq(i,j+1,text1,text2)
        return Math.max(left,right)
    }
    return longseq(0,0,text1,text2)
};