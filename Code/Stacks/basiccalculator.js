
var calculate = function(s) {
    var map=new Map([["-",1],["+",2],["*",3],["/",4]])
    var stack=[]
     var array=[...s]
     console.log(eval(array[0] + array[1] + array[2]))
     
     console.log(typeof(array[1]));
}


console.log(calculate("3+2*2"))