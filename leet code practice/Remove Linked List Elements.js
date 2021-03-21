/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while(head && head.val===val){
        head=head.next
    }
    
    var prev=head;
    var tail=head;
    console.log(tail)
    while(tail){
        
        if(tail.val===val){
            prev.next=tail.next;
    
            tail=prev.next;
        }
        // console.log(tail.val)
        else{
        prev=tail;
        tail=prev.next;
        }
        
    
    }
    return head;
};