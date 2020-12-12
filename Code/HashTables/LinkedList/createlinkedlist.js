class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
  }
  
  let myLinkedLists = new LinkedList(10);
  console.log(myLinkedLists);
