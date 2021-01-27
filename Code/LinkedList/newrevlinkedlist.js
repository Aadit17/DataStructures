class ListNode {
    constructor(value,next){
        this.value=value;
        this.next=null;
    
        
    }
}
var tail=head=new ListNode(0);
const linkedList=(array)=>{
    
    for(let i=0;i<array.length;i++){

        if(head===null){
            head.value=array[i];
            head.next=new ListNode(0);
        
        }
        else{
              tail.value=array[i]
              tail.next=new ListNode(0)
              tail=tail.next;
        }
        
    }
    return head;
}

const printList=(head)=>{
    while(head!==null){
        console.log(head.value);
        head=head.next
    }
}

console.log(linkedList([2,3,4,5,6,7,8]))
// console.log(linkedList);
console.log(printList(head));