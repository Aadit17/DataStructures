/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var diagonalSort = function(mat) {
    var map=new Map()
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            var d=i-j
            if(!map.has(d)){
                map.set(d,[])
            }
            var v=map.get(d)
            v.push(mat[i][j])
            v.sort((a,b)=>b-a)
        }
    }

    var c=0
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            var d=i-j
            mat[i][j]=map.get(d).pop()
        }
    }
    return mat
};