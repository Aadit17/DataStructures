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
    
    insert(value){
      
        const currentnode=this.root;
    //    console.log(currentnode);
        if(this.root===null){
          this.root= new Node(value)
          return this.root;
        }
        else{
          
            const searchbst=(currentnode)=>{
          
        // console.log(currentnode);
        if(currentnode===null){
            var newNode= new Node(value)
            return newNode ;
          }
        if(value>currentnode.value){
           currentnode.right=searchbst(currentnode.right)
        }
        else if(value<currentnode.value){
           currentnode.left=searchbst(currentnode.left)
        }
        return currentnode;

      }
      return searchbst(currentnode)
    }
   
    }

    // lookup(value){
    //     var currentnode=this.root;
        
    //     while(true){
    //       if(value===currentnode.value)
    //         return currentnode
    //       else if(value>currentnode.value){
    //            currentnode=currentnode.right
    //       }
    //       else{
    //         currentnode=currentnode.left;
    //       }
    //     }
    //   }

}
    


    // delete(value){


    // }
  
  
  
     
    
  
  const tree = new BinarySearchTree();
//   console.log(tree.getRoot());
    tree.insert(9)
     
  tree.insert(4)
  tree.insert(3)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  console.log(tree);
  // console.log(tree.lookup(9))
  // console.log(JSON.stringify(traverse(tree.root)))
  
  //     9
  //  4     20
  //1  6  15  170
  
  // function traverse(node) {
  //   const tree = { value: node.value };
  //   tree.left = node.left === null ? null : traverse(node.left);
  //   tree.right = node.right === null ? null : traverse(node.right);
  //   return tree;
  // }
  