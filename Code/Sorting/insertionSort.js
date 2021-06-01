const insertionSort=(arr)=>{
    for(let i=1;i<arr.length;i++){
            var j=i-1
            var current=arr[i]
            while(arr[j]>current && j>=0){
                   arr[j+1]=arr[j]
                   j--
            }
            arr[j+1]=current
        }
    return arr
}

console.log(insertionSort([5,4,3,2,1]))