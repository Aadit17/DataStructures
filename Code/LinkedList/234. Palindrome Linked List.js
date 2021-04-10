/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    
    var currentnode=head;
   console.log(head);
   var newhead=new ListNode();
   console.log(currentnode)
   while(currentnode){
       newhead.val=currentnode.val;
       if(currentnode.next!==null){
       var nextnode=new ListNode();
       nextnode.next=newhead;
       newhead=nextnode
       }
       currentnode=currentnode.next;
   }
   
   while(head){
       if(newhead.val!==head.val){
           return false;
       }
       head=head.next;
       newhead=newhead.next;
   }
   
   return true;
   
};