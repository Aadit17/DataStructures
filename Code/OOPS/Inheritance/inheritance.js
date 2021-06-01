class AddSub {
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    Add(){
        return this.a + this.b
    } 
    Sub(){
        return this.a - this.b
    }
}

class MultDiv extends AddSub {
    Mult(){
        return this.a * this.b
    }
    Div(){
        return this.a / this.b
    }
}


var obj=new AddSub(5,2)
var obj1=new MultDiv(5,2)
console.log(obj.Sub())
console.log(obj1.Div())
