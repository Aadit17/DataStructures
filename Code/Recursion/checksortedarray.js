var arr=[6,2,3,4,5]

const checksortedArray=(arr,i)=>{
    if(i==arr.length-1)
        return true
    return (arr[i]<arr[i+1] && checksortedArray(arr,i+1))
}

console.log(checksortedArray(arr,0))