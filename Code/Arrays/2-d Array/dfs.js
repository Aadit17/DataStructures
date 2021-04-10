var dir=[[-1,0],[0,1],[1,0],[0,-1]]

const matrix=[[1,2,3,4,5],
              [6,7,8,9,10],
              [11,12,13,14,15],
              [16,17,18,19,20]]

var seen=new Array(4).fill(0).map(()=>new Array(5).fill(false))
// console.log(seen)

const dfs=(matrix,row,column,seen,values)=>{
    
    if(row<0 || column<0 || row>=matrix.length || column>=matrix[0].length || seen[row][column])
        return

    values.push(matrix[row][column])

    seen[row][column]=true
    for(let i=0;i<dir.length;i++){
        dfs(matrix,row+dir[i][0],column+dir[i][1],seen,values)
    }
    return values
}
dfs(matrix,0,0,seen,values=[])
console.log(values)
