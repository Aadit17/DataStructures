# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        queue=[]
        arr=[]
        res=[]
        
        if not root:
            return []
           
            
        
        queue.append(root)
        while len(queue)!=0 :
            size=len(queue)
            for i in range(size):
                removed=queue.pop(0)
                arr.append(removed.val)
                if i == size-1 :
                    res.append(arr)
                    arr=[]
                if  removed.left  :
                    queue.append(removed.left)
                if  removed.right :
                    queue.append(removed.right)
        return res
                
        