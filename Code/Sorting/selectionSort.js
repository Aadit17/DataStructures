const selectionSort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        var small=arr[i]
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<small){
                small=arr[j]
                var temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }    
        }
    }
    return arr
}


console.log(selectionSort([1,5,]))