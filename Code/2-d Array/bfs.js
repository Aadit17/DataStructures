var dir=[[-1,0],[0,1],[1,0],[0,-1]]

const matrix=[[1,2,3,4,5],
              [6,7,8,9,10],
              [11,12,13,14,15],
              [16,17,18,19,20]]

var seen=new Array(4).fill(0).map(()=>new Array(5).fill(false))
// console.log(seen)
var values=[]

var queue=[[1,1]]

const bfs=(matrix,seen)=>{
    
    

    while(queue.length){
        const currentpos = queue.shift()
        const row = currentpos[0]
        const column = currentpos[1]
    
    if(row<0 || column<0 || row>=matrix.length || column>=matrix[0].length || seen[row][column]) continue
        console.log(seen)
    values.push(matrix[row][column])
    seen[row][column]=true
    for(let i=0;i<dir.length;i++){
      queue.push([row+dir[i][0],column+dir[i][1]])
    }
    }
    return values
}

bfs(matrix,seen)
console.log(values)
