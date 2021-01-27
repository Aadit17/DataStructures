// Reverse a linked list from position m to n. Do it in one-pass.

// Note: 1 ≤ m ≤ n ≤ length of list.

// Example:

// Input: 1->2->3->4->5->NULL, m = 2, n = 4
// Output: 1->4->3->2->5->NULL

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  // ---- Generate our linked list ----
  const linkedList = [1].reduce((acc, val) => new ListNode(val, acc), null);
  
  // ---- Generate our linked list ----
  
  const printList = (head) => {
    if(!head) {
      return;
    }
  
    console.log(head.val);
    printList(head.next);
  }

  

var reverseBetween = function(head, m, n) {

    var pos=1;
    var current=head;
    var newhead=null;
    var tail=null;
    var start=head;
    while(pos<=n){
        
        if(pos>=m && pos<=n){
            
            var nextnode=current.next;
            current.next=newhead;
            
            newhead=current;
            if(tail==null){
                tail=newhead
                // console.log("tail is:",tail);
            }
            current=nextnode;
            pos++;
            
            
            // console.log("newhead is:",newhead);
        }else{
        
            if(pos==m-1){
               start=current;
            }

        current=current.next;
        pos++
        }
    }
    // console.log("strat is",start)
    start.next=newhead;
    // console.log("strat is",start)
    // console.log("tail is",tail)
    tail.next=current;
    // console.log("tail is",tail)

   return head;

};

console.log(printList(linkedList)) ;


console.log('after reverse between')
console.log(printList(reverseBetween(linkedList,1,1)));