# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def leafSimilar(self, root1: TreeNode, root2: TreeNode) -> bool:
        arr1=[]
        arr2=[]
            
        self.leafvalues(root1,arr1)
        self.leafvalues(root2,arr2)
        
        if len(arr1)!=len(arr2):
            return False
        for i in range(len(arr1)):
            if arr1[i]!=arr2[i]:
                return False
        return True
        
    def leafvalues(self,root,arr):
        if not root:
             return 
        if not root.left and not root.right:
             return arr.append(root.val)
        else:
            self.leafvalues(root.left,arr)
            self.leafvalues(root.right,arr) 


            
        