var searchMatrix = function(matrix, target) {
    var row=0
    var col=matrix[0].length-1
    while(row<matrix.length && col>=0 ){
        if(target===matrix[row][col])
            return true
        if(target>matrix[row][col])
            row++
        else
            col--
        
    }
    return false
    
}
