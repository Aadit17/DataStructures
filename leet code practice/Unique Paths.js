/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var dparray= [[],[]]
    for(let i=0;i<m;i++){
        dparray[[i],[0]]=1;
    }
     for(let i=0;i<n;i++){
         dparray[[0],[i]]=1;
    }
    for(let i=1;i<m;i++){
        for(j=1;j<n;j++){
         dparray[[i],[j]]=dparray[[i-1],[j]] + dparray[[i],[j-1]]
        }
    }
    return dparray[[m-1],[n-1]]
};