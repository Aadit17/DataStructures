var pathSum = function(root, targetSum) {

    var sum=0
  
    
    if(!root)
        return []
     
    
    const traverse=(root,targetSum,arr,res)=>{
        
        if(!root)
            return 
       
        arr.push(root.val)
        sum+=root.val
        console.log(arr)
        
        if(!root.left && !root.right){
            if(sum===targetSum){
                // console.log(arr)
                res.push([...arr])
                console.log(res,"res")
        
            }
        
          }
            
    
            
        if(root.left)
            traverse(root.left,targetSum,arr,res)
        if(root.right)
            traverse(root.right,targetSum,arr,res)
    
        arr.pop()
        sum=sum-root.val
        
        
         return res
            
    }
    return traverse(root,targetSum,arr=[],res=[])
    
};