dict = {
    "Key1" : "1",
    "Key2" : {
        "a" : "2",
        "b" : "3",
        "c" : {
            "d" : "3",
            "e" : {
                "" : "1"
            }
        }
    }
}
var flatdictionary={}
const flattenDict=(initialkey,dict)=>{
    for(const key in dict){
        console.log(typeof(dict[key]))
        var val=dict[key]
        if(typeof(dict[key])=="string"){
            if(initialkey==null || initialkey==""){
                flatdictionary[key]=val
            }
            else{
                flatdictionary[initialkey + "." + key]= val
            }
        }
        else{
            if(initialkey==null || initialkey==""){
                flattenDict(key,val)
            }
            else{
                flattenDict(initialkey + "." + key,val)
            }
        }
    }
}

flattenDict("",dict)
console.log(flatdictionary)