const reverse = string =>{

    var a=0;
   revarray=""
    
    for(let i=string.length - 1; i>=0; i--){
      
        string += string[i];
          
    }
    return string;
}

console.log(reverse("Aditya bansal"));