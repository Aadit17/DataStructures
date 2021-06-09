class Node {
    constructor(val){
    this.val=val
    this.next=null
    }
}

class Stack {
    constructor(){
        this.top=null
        this.bottom=null
        this.length=0
    }
    
    peek(){
        return this.top
    }
    push(value){
        var node=new Node(value)
        if(this.length==0){
            this.top=node
            this.bottom=node
        }else{
            var temp=this.top
            this.top=node
            this.top.next=temp
        }
        this.length++
        return this
    }
    pop(){
        if(!this.top) return null
        var temp=this.top
        this.top=this.top.next
        this.length--
        if(this.length==0)
            this.bottom=null
        return this
    }
}

var myStack = new Stack()

myStack.push("google")
console.log(myStack.push("microsoft"))
console.log(myStack.pop())
console.log(myStack.pop())