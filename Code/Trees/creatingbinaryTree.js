class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
      
      
    }
    getRoot(){
      return this.root;
    }
    insertRoot(currentnode,value){
        currentnode=new Node(value)
        return currentnode;
    }
    insert(currentnode,value){
      
      // var currentnode=this.root;
      
      //   var newNode = new Node(value)
      // // console.log(this.root)
      // while(true){
        
      // if(this.root===null){
      //      this.root=newNode;
      //      return this
          
      // }
      // else{
          
      //   // console.log(currentnode)
      //   if(value<currentnode.value){
      //     if(!currentnode.left){
      //       currentnode.left=newNode;
      //       return currentnode
      //     }
      //     currentnode=currentnode.left
      //   }
  
      //   if(value>currentnode.value){
      //     if(!currentnode.right){
      //       currentnode.right=newNode;
            
      //       return currentnode
      //     }
      //     currentnode=currentnode.right
      //   }
      // }
      
      // }

      
      


        console.log(currentnode);
        if(currentnode===null){
          currentnode= new Node(value)
          return currentnode;
        }
        console.log(currentnode);
        if(value>currentnode.value){
          currentnode.right=insert(currentnode.right,value)
        }
        else if(value<currentnode.value){
          currentnode.left=insert(currentnode.left,value)
        }
        
        return currentnode;

      }






    }
    // lookup(value){
    //   var currentnode=this.root;
      
    //   while(true){
    //     if(value===currentnode.value)
    //       return currentnode
    //     else if(value>currentnode.value){
    //          currentnode=currentnode.right
    //     }
    //     else{
    //       currentnode=currentnode.left;
    //     }
    //   }
    // }

    // delete(value){


    // }
  
  
  
     
    
  
  const tree = new BinarySearchTree();
     console.log(tree.insertRoot(tree.getRoot(),9))
     console.log(tree.getRoot())
     tree.insert(tree.getRoot(),4)
     tree.insert(tree.getRoot(),3)
     tree.insert(tree.getRoot(),20)
     tree.insert(tree.getRoot(),170)
     tree.insert(tree.getRoot(),15)
     tree.insert(tree.getRoot(),1)
  // tree.insert(4)
  // tree.insert(3)
  // tree.insert(20)
  // tree.insert(170)
  // tree.insert(15)
  // tree.insert(1)
  // console.log(tree);
  // console.log(tree.lookup(170))
  // JSON.stringify(traverse(tree.root))
  
  //     9
  //  4     20
  //1  6  15  170
  
  // function traverse(node) {
  //   const tree = { value: node.value };
  //   tree.left = node.left === null ? null : traverse(node.left);
  //   tree.right = node.right === null ? null : traverse(node.right);
  //   return tree;
  // }
  
  
  
  
  
  