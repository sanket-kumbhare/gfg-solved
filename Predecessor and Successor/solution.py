class Solution:
    def findPreSuc(self, root, pre, suc, key):
        # Your code goes here
        self.pre = pre
        self.suc = suc
        
        if not root:
            return
        
        self.findPreSuc(root.left, self.pre, self.suc , key)
        
        if root.key < key:
            self.pre = root
        elif root.key > key and not self.suc:
            self.suc = root
            return self.pre, self.suc
            
        self.findPreSuc(root.right, self.pre, self.suc, key)   
        
        return self.pre, self.suc