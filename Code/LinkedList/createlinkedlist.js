class Linkedlist  {
      constructor(value){
          this.head={
              value:value,
              next:null
          }
          this.tail = this.head;
          this.length=1
      }
      append(value){
          const newnode={
               value:value,
               next:null
          }
          this.tail.next=newnode
          this.tail=newnode;
          this.length++;
          return this;
      }
      prepend(value){
          const newnode={
              value:value,
              next:this.head  //giving position of head;
          }
          this.head=newnode;  //pointing to newnode
          this.length++;
          
      }
      printlist(){
          var array=[]
          var currentnode=this.head;
          while(currentnode !== null){
              array.push(currentnode.value);
              currentnode=currentnode.next;
          }
          return array;
      }
      insert(index,value){
          var i=0;

          var newnode={
            value:value,
            next:null
        }

          var prevnode=this.head;
          var nextnode=this.head;
          while(i !== index){
              i++
              if(i<=index-1) {           
                prevnode=prevnode.next;
              }
            nextnode=nextnode.next;
             }
             prevnode.next=newnode;
             newnode.next=nextnode;
          this.length++;
     }
}

var mylinkedlist = new Linkedlist(15)
mylinkedlist.append(20)
mylinkedlist.append(30)
mylinkedlist.prepend(40)
mylinkedlist.insert(2,17)
mylinkedlist.insert(3,17)
mylinkedlist.insert(3,18)
console.log(mylinkedlist.printlist());

console.log(mylinkedlist)