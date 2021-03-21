const twoSum= (array,target) =>{
    // var object={'2':3,'7':9,'6':10}
    // console.log(object);
    // console.log(Object.keys(object));
    // console.log(object[2]);
    object={}
    for(let i=0;i<array.length;i++){ 
          if(object==null){
              object[target-array[i]]=i;
          }
          else{
              if(Object.keys(object).find(ele=>ele==array[i])){
            
                   return[object[array[i]],i]
              }
              else{
                  object[target-array[i]]=i;
              }
          }

    } return([]);
}