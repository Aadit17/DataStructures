const reverse = string =>{
    let rev=[];
    for(let i=string.length - 1; i>=0; i--){
        var a=0
        rev[a++]=string[i];
    }
    return rev;
}

console.log(reverse("Aditya"));