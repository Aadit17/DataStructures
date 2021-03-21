/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    
    var head1=list1;
    var currentnode=list1;
    var head2=list2
    var currentnode2=list2;
    var i=0;
    var j=0;
    var startnode=list1;
    var endnode=list1;
    while(currentnode){
        if(i===a-1){
             startnode=currentnode
        }
        if(j===b){
             endnode=currentnode;
        }
        i++;
        j++
        currentnode=currentnode.next;
    }
    // console.log(startnode.val)
    // console.log(endnode.val)
    startnode.next=head2;
    while(currentnode2){
        if(currentnode2.next===null){
            currentnode2.next=endnode.next;
            break
        }
        currentnode2=currentnode2.next
    }
    
    return head1
};