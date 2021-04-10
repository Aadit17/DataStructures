/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    const bs=(arr,low,high,x)=>{
      if(low>high)
          return false
      var mid=Math.floor((low+high)/2)
      if(arr[mid]===x)
          return true
      if(arr[mid]>x)
          return bs(arr,0,mid-1,x)
      if(arr[mid]<x)
          return bs(arr,mid+1,high,x)
  }
  
  var low=0
  var high=matrix[0].length-1
  for(i=0;i<matrix.length;i++){
      if(target>=matrix[i][low] && target<=matrix[i][high]){
         var res=bs(matrix[i],0,matrix[i].length-1,target)
              if(res===true)
                  return true
      }
  }
  return false

};