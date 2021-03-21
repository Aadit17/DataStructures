var swapNodes = function(head, k) {
    var i=1;
    var head1=head
    while(head1){
        i++
        head1=head1.next
    }
    var j=1
    var head2=head
    while(head2){
        
        if(j==k){
            var head1=head2
            var val1=head2.val
        }
            
        if(j==i-k){
            var temphead=head2
        }
        j++
        head2=head2.next
    }
     head1.val=temphead.val
    temphead.val=val1
    return head
};