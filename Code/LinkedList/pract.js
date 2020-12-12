
class LinkedList{
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail=this.head;
        this.length=1;
    }
    append(value){
       let newnode={
           value:value,
           next:null
       }
       this.tail.next=newnode;
        this.tail=newnode;
        return this.length++;
    }
    
}

var mylinkedlist = new LinkedList(1);
mylinkedlist.append(2);
mylinkedlist.append(3);
mylinkedlist.append(4);
mylinkedlist.append(5);

console.log(mylinkedlist);