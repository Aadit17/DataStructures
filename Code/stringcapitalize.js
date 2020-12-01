const capitalize = string =>{
    name=""
    var first=string[0].toUpperCase();
    //    first.toUpperCase();
    for(let i=1;i<string.length;i++){
         name +=  string[i];
    }

    return (first + name)
}


console.log(capitalize("aditya"))