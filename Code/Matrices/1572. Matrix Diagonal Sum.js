/**
 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) {
    var sum=0
    for(let i=0,j=mat.length-1;i<mat.length;i++,j--){
              
                sum+=mat[i][i]+mat[i][j]
    }
    if(mat.length%2!==0){
        var mid1=Math.floor(mat.length/2)
        sum=sum-mat[mid1][mid1]
    }
    return sum
};