/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var transpose = function(matrix) {
    var trans=new Array(matrix[0].length).fill(0).map(()=>new Array(matrix.length).fill(0))
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            trans[j][i]=matrix[i][j]
        
        }
    }
    return trans
};