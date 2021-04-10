/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
 var isToeplitzMatrix = function(matrix) {
    var map=new Map()
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            var d=i-j
            if(!map.has(d)){
                map.set(d,[])
            }
            var v=map.get(d)
            v.push(matrix[i][j])
        }
    }
    console.log(map)
    for(const [k,v] of map){
        var temp=v[0]
        for(let i=1;i<v.length;i++){
            if(v[i]!==temp)
               return false
        }
    }

    return true
};