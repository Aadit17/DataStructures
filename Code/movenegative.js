const move = (array) =>{
    var left=array.length -1;
    var right=0;
    while(right<left){
        if(array[right]>0 && array[left]<0){
            swap(array[right],array[left])
              right++;
              left--;
        }
    }
}