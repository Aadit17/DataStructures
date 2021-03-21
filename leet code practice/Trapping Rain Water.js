

var trap = (array)=>{
    var leftmax=[]
    leftmax.push(array[0])
    var rightmax=[]
    var n=array.length;
    
    var c=0;
    rightmax[n-1]=array[n-1]
    for(let i=1;i<array.length;i++){
        if(array[i]>leftmax[i-1]){
            leftmax.push(array[i])
        }else{
            leftmax.push(leftmax[i-1])
        }
    }
    for(let j=n-2;j>=0;j--){

        if(array[j]>rightmax[j+1]){
            rightmax[j]=array[j]
        }else{
        
            rightmax[j]=rightmax[j+1]
        }
    
    }
    for(let i=0;i<array.length;i++){
          c+=Math.min(leftmax[i],rightmax[i]) - array[i]
    }
    return c 

}


                     