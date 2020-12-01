const mergesortedarray = (array1,array2) =>{
    length=(array1.length + array2.length)
    newarray = []
    let p1=0,p2=0;
    while(p1<array1.length && p2<array2.length){

        if(array1[p1]<array2[p2] ){
        newarray.push(array1[p1])
        p1++;
        }
        else if(array1[p1]==array2[p2]){
            newarray.push(array1[p1])
            p1++;
            p2++
        }
    
        else {
            newarray.push(array2[p2])
            p2++;
        }

    }
    while(p1<array1.length){
        newarray.push(array1[p1]);
        p1++;
    }
    while(p2<array2.length){
        newarray.push(array2[p2]);
        p2++;
    }


       return newarray;
    }
    



console.log(mergesortedarray([2,3,4,5,6],[1,2,3]));