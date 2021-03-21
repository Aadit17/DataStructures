/**
 * @param {number[]} height
 * @return {number}
 */

const maxArea = (array) =>{
    var max=0;
    var p1=0;
    var p2=array.length-1;
  
    while(p1<p2){
        
            if(array[p1]<=array[p2]){
                var area=array[p1]*(p2-p1)
                p1++
                if(area>max)
                 max=area
            }
            else{
                
                area=array[p2]*(p2-p1);
                p2--
                if(area>max)
                max=area;
            }
        }
    
    return max;
}