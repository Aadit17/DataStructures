const bubblesort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}
console.log(bubblesort([34,12,50,23,45,87,10,20]))