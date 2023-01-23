public class IntBST{
    private IntBSTNode root;

    public IntBST(){
        this.root = null;
    }

    public IntBSTNode add(Integer val){
        if(root == null){
            root = new IntBSTNode(val);
        }
        return addRecursive(root, val);
    }
    
    /**
     * @param root root of the subtree we are adding val to
     * @param val the Integer we are adding to the BST
     * @return reference to the IntBSTNode we inserted
     */
    private IntBSTNode addRecursive(IntBSTNode root, Integer val) {
        if(val < root.getVal()){
            if(root.hasLeftChild()){
                return addRecursive(root.getLeftVal(), val);
            }else{
                IntBSTNode child = new IntBSTNode(val);
                root.setLeftVal(child);
                return child;
            }
        }else if(val > root.getVal()){
            if(root.hasRightChild()){
                return addRecursive(root.getRightVal(), val);
            }else{
                IntBSTNode child = new IntBSTNode(val);
                root.setRightVal(child);
                return child;
            }
        }else{
            return root;
        }
    }

    public IntBSTNode search(int search, IntBSTNode root){
        if(root.getVal() == search){
            return root;
        }else if(root.hasLeftChild() && root.getVal()> search){
            return search(search, root.getLeftVal());
        }else if(root.hasRightChild() && root.getVal() < search){
            return search(search, root.getRightVal());
        }else{
            return null;
        }
    }

    public IntBSTNode add(int val){
        if(root == null){
            root = new IntBSTNode(val);
        }
        return addRecursive(root, val);
    }

    public IntBSTNode find(int val){
        return search(val, root);
    }

    public void preOrderPrintTraversal(){
        preOrderPrintTraversal(root);
    }

    private void preOrderPrintTraversal(IntBSTNode root){
        System.out.println(root.getVal());
        if(root.hasLeftChild()){
            preOrderPrintTraversal(root.getLeftVal());
        }
        if(root.hasRightChild()){
            preOrderPrintTraversal(root.getRightVal());
        }
    }

    public void postOrderPrintTraversal(){
        postOrderPrintTraversal(root);
    }
    
    private void postOrderPrintTraversal(IntBSTNode root) {
        if(root.hasLeftChild()){
            postOrderPrintTraversal(root.getLeftVal());
        }
        if(root.hasRightChild()){
            postOrderPrintTraversal(root.getRightVal());
        }
        System.out.println(root.getVal());
    }

    public void inOrderPrintTraversal(){
        inOrderPrintTraversal(root);
    }

    private void inOrderPrintTraversal(IntBSTNode root) {
        if(root.hasLeftChild()){
            inOrderPrintTraversal(root.getLeftVal());
        }
        System.out.println(root.getVal());
        if(root.hasRightChild()){
            inOrderPrintTraversal(root.getRightVal());
        }
    }
}