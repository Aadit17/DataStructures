class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Queue{
    constructor(){
        this.front=null
        this.end=null
        this.length=0
    }
    enqueue(val){
        var node=new Node(val)
        if(this.length==0){
            this.front=node
            this.end=node
        }else{
            this.end.next=node
            this.end=node
        }
        this.length++
        return this
    }
    dequeue(){
        if(!this.front) return null
        this.front=this.front.next
        this.length--
        if(this.length==0) this.end=null
        return this
    }
}

var myQueue=new Queue()

myQueue.enqueue(12)
myQueue.enqueue(15)
myQueue.enqueue(17)
console.log(myQueue.enqueue(18))
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())