const firstocc=(arr,key,i)=>{
    if(i==arr.length)
        return -1
    if(arr[i]==key)
        return i
    return firstocc(arr,key,i+1)
}
const lastocc=(arr,key,i)=>{
    if(i==arr.length)
        return -1
    var remarr=lastocc(arr,key,i+1)
    if(remarr !== -1)
        return remarr
    if(arr[i]==key)
        return i
    return -1
}

console.log(lastocc([1,2,3,2,5],2,0))