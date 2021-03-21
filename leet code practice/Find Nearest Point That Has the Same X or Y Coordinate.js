var nearestValidPoint = function(x, y, points) {
    var min=Infinity
    distance=0
    var arr=[]
    res=-1
        for(let i=0;i<points.length;i++){
            
            if(points[i][0]==x || points[i][1]==y){
                arr.push(points[i])
          }
            }
    
         if(arr.length===0)
         return -1
    if(arr.length===1){
        return points.indexOf(arr[0])
    }
            
      for(let i=0;i<arr.length;i++){
          distance=Math.abs(x-arr[i][0])+Math.abs(y-arr[i][1])
          console.log(distance,"dis")
          if(distance<min){
              min=distance
              res=i
          }
      }
    
 
    console.log(arr[res])
    
    return points.indexOf(arr[res])
    
}